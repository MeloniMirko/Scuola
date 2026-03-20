"use strict";

const QUESTION_BANK = [
    { key: "female", text: "Il tuo personaggio è una donna?" },
    { key: "alive", text: "Il tuo personaggio è ancora in vita?" },
    { key: "european", text: "Il tuo personaggio è nato in Europa?" },
    { key: "from_italy", text: "Il tuo personaggio è nato in Italia?" },
    { key: "from_usa", text: "Il tuo personaggio è nato negli Stati Uniti?" },
    { key: "from_uk", text: "Il tuo personaggio è nato nel Regno Unito?" },
    { key: "from_france", text: "Il tuo personaggio è nato in Francia?" },
    { key: "from_germany", text: "Il tuo personaggio è nato in Germania?" },
    { key: "from_poland", text: "Il tuo personaggio è nato in Polonia?" },
    { key: "from_netherlands", text: "Il tuo personaggio è nato nei Paesi Bassi?" },
    { key: "from_switzerland", text: "Il tuo personaggio è nato in Svizzera?" },
    { key: "from_sweden", text: "Il tuo personaggio è nato in Svezia?" },
    { key: "physicist", text: "È un fisico o una fisica?" },
    { key: "chemist", text: "È un chimico o una chimica?" },
    { key: "mathematician", text: "È un matematico o una matematica?" },
    { key: "biologist", text: "È un biologo o una biologa?" },
    { key: "inventor", text: "È conosciuto come inventore o inventrice?" },
    { key: "engineer", text: "È un ingegnere o un'ingegnere?" },
    { key: "tech_founder", text: "Ha fondato o guidato una grande azienda tech?" },
    { key: "astronomer", text: "È un astronomo o un'astronoma?" },
    { key: "nobel", text: "Ha vinto un Premio Nobel?" },
    { key: "billionaire", text: "È miliardario o miliardaria?" },
    { key: "born_before_1950", text: "È nato prima del 1950?" },
    { key: "born_1950_1980", text: "È nato tra il 1950 e il 1980?" }
];

const TRAIT_KEYS = QUESTION_BANK.map((q) => q.key);
const MAX_QUESTIONS = 20;
const MAX_GUESS_ATTEMPTS = 3;
const CANDIDATE_PREVIEW = 5;
const GUESS_CONFIDENCE_THRESHOLD = 0.78;
const MIN_QUESTIONS_BEFORE_GUESS = 5;
const MID_GAME_GUESS_THRESHOLD = 0.66;
const MID_GAME_MARGIN_THRESHOLD = 0.2;

const GUIDE_NAME = "ZORINA";
const GUIDE_IMAGE = "assets/zorina.png";
const GUIDE_IMAGE_FALLBACK = "https://cdnjs.cloudflare.com/ajax/libs/twemoji/14.0.2/svg/1f9de-200d-2640-fe0f.svg";
const PERSON_IMAGE_FALLBACK = "https://cdnjs.cloudflare.com/ajax/libs/twemoji/14.0.2/svg/1f9d1.svg";
const TAB_ICON_SOURCE = "assets/loghetto.png";
const IMAGE_CACHE_KEY = "genio_indovino_image_cache_v4";
const IMAGE_CACHE_TTL_MS = 1000 * 60 * 60 * 24 * 30;
const IMAGE_FETCH_TIMEOUT_MS = 6000;
const WIKIDATA_TIMEOUT_MS = 12000;
const SPARQL_ENDPOINT = "https://query.wikidata.org/sparql";
const CATALOG_CACHE_KEY = "genio_indovino_catalog_v4";
const TUTORIAL_DISABLED_KEY = "genio_indovino_tutorial_disabled_v2";

const TUTORIAL_STEPS = [
    { title: "Pensa al personaggio", text: "Scegli in testa un personaggio famoso reale. Non dirlo al gioco." },
    { title: "Rispondi alle domande", text: "Usa solo SI o NO. Ogni risposta aiuta il motore a stringere il campo." },
    { title: "Il genio calcola", text: "L'algoritmo seleziona la domanda più utile in base alle probabilità." },
    { title: "Tentativo finale", text: "Quando la confidenza è alta, il genio propone un nome con foto. Conferma o continua." }
];

const INTRO_NO_LINES = [
    { instruction: "Nessun problema, ci prendiamo un respiro...", question: "VUOI PARTIRE TRA QUALCHE SECONDO?" },
    { instruction: "Zorina resta qui ad aspettarti.", question: "CAMBI IDEA E GIOCHIAMO INSIEME?" },
    { instruction: "Promesso: domande rapide e niente stress.", question: "FACCIAMO UNA PARTITA VELOCE?" }
];

const TRAIT_KEYWORD_RULES = {
    physicist: ["physicist", "fisico", "fisica"],
    chemist: ["chemist", "chimico", "chimica"],
    mathematician: ["mathematician", "matematico", "matematica"],
    biologist: ["biologist", "biologo", "biologa"],
    inventor: ["inventor", "inventore", "inventrice"],
    engineer: ["engineer", "ingegnere"],
    tech_founder: ["entrepreneur", "imprenditore", "businessperson", "businessman", "businesswoman", "software engineer", "computer scientist"],
    astronomer: ["astronomer", "astronomo", "astronoma"],
    billionaire: ["billionaire", "miliardario", "miliardaria"]
};

const AWARD_KEYWORDS = { nobel: ["nobel"], oscar: ["academy award", "oscar"], grammy: ["grammy"] };

const COUNTRY_TRAIT_RULES = [
    { trait: "from_italy", match: ["italy", "italia"] },
    { trait: "from_usa", match: ["united states", "stati uniti", "usa"] },
    { trait: "from_uk", match: ["united kingdom", "regno unito", "uk", "england", "scotland", "wales"] },
    { trait: "from_france", match: ["france", "francia"] },
    { trait: "from_germany", match: ["germany", "germania"] },
    { trait: "from_poland", match: ["poland", "polonia"] },
    { trait: "from_netherlands", match: ["netherlands", "paesi bassi", "olanda"] },
    { trait: "from_switzerland", match: ["switzerland", "svizzera"] },
    { trait: "from_sweden", match: ["sweden", "svezia"] }
];

const EUROPE_KEYWORDS = ["italy", "italia", "france", "francia", "united kingdom", "regno unito", "uk", "england", "scotland", "wales", "portugal", "portogallo", "spain", "spagna", "germany", "germania", "serbia", "switzerland", "svizzera", "netherlands", "belgium", "belgio", "austria", "poland", "polonia", "greece", "grecia", "sweden", "svezia", "norway", "norvegia", "finland", "finlandia", "denmark", "danimarca", "ireland", "irlanda"];

function createTraits(trueKeys = [], falseKeys = []) {
    const traits = {};
    for (const key of TRAIT_KEYS) traits[key] = null;
    for (const key of trueKeys) traits[key] = true;
    for (const key of falseKeys) traits[key] = false;
    return traits;
}

function seedCharacter(id, name, image, trueKeys, falseKeys = []) {
    return { id, name, image: sanitizeHttpUrl(image), traits: createTraits(trueKeys, falseKeys) };
}

const LOCAL_SEED = typeof SHARED_CHARACTERS_DATA !== 'undefined' ? SHARED_CHARACTERS_DATA.map(d => seedCharacter(...d.args)) : [];

function cloneCharacter(character) {
    return { id: character.id, name: character.name, image: character.image || "", traits: { ...character.traits } };
}

function knownTraitCount(character) {
    return Object.values(character.traits || {}).filter((value) => value === true || value === false).length;
}

function mergeCharacterSets(baseList, incomingList) {
    const map = new Map();
    const put = (character) => {
        if (!character || !character.name) return;
        const key = String(character.name).trim().toLowerCase();
        if (!key) return;
        const current = map.get(key);
        if (!current) { map.set(key, cloneCharacter(character)); return; }
        const currentScore = knownTraitCount(current);
        const nextScore = knownTraitCount(character);
        const nextImage = character.image;
        if (nextScore > currentScore) { map.set(key, cloneCharacter(character)); return; }
        if (!current.image && nextImage) { current.image = nextImage; }
    };
    baseList.forEach(put);
    incomingList.forEach(put);
    return Array.from(map.values());
}

function parseYear(rawDate) {
    const text = String(rawDate || "");
    const match = text.match(/^-?\d{1,4}/);
    if (!match) return null;
    return Number.isFinite(Number(match[0])) ? Number(match[0]) : null;
}

function hasAnyKeyword(text, keywords) {
    const haystack = String(text || "").toLowerCase();
    return keywords.some((keyword) => haystack.includes(keyword));
}

function inferTraitsFromWikidata(binding) {
    const sex = binding?.sexLabel?.value || "";
    const country = binding?.countryLabel?.value || "";
    const occupations = binding?.occupations?.value || "";
    const awards = binding?.awards?.value || "";
    const label = binding?.itemLabel?.value || "";
    const birthYear = parseYear(binding?.birth?.value);
    const deathYear = parseYear(binding?.death?.value);
    const searchableText = `${occupations}|${awards}|${label}`.toLowerCase();
    const trueSet = new Set();
    const falseSet = new Set();

    if (hasAnyKeyword(sex, ["female", "femmina", "donna"])) trueSet.add("female");
    if (hasAnyKeyword(sex, ["male", "maschio", "uomo"])) falseSet.add("female");
    if (deathYear) falseSet.add("alive"); else if (birthYear) trueSet.add("alive");

    if (birthYear !== null) {
        if (birthYear < 1950) { trueSet.add("born_before_1950"); falseSet.add("born_1950_1980"); }
        else if (birthYear <= 1980) { trueSet.add("born_1950_1980"); falseSet.add("born_before_1950"); }
        else { trueSet.add("born_after_1980"); falseSet.add("born_before_1950"); falseSet.add("born_1950_1980"); }
    }

    let matchedCountryTrait = "";
    for (const rule of COUNTRY_TRAIT_RULES) {
        if (hasAnyKeyword(country, rule.match)) { matchedCountryTrait = rule.trait; trueSet.add(rule.trait); break; }
    }
    if (matchedCountryTrait) {
        for (const rule of COUNTRY_TRAIT_RULES) {
            if (rule.trait !== matchedCountryTrait) falseSet.add(rule.trait);
        }
    }

    if (hasAnyKeyword(country, EUROPE_KEYWORDS)) trueSet.add("european");
    else if (country) falseSet.add("european");

    for (const [trait, words] of Object.entries(TRAIT_KEYWORD_RULES)) {
        if (hasAnyKeyword(searchableText, words)) trueSet.add(trait);
    }
    for (const [trait, words] of Object.entries(AWARD_KEYWORDS)) {
        if (hasAnyKeyword(awards, words)) trueSet.add(trait);
    }

    if (trueSet.has("footballer") || trueSet.has("basketball") || trueSet.has("tennis")) trueSet.add("athlete");
    if (trueSet.has("singer")) falseSet.add("actor");
    if (trueSet.has("actor")) falseSet.add("singer");

    for (const trait of trueSet) falseSet.delete(trait);
    return createTraits(Array.from(trueSet), Array.from(falseSet));
}

function buildCharacterFromWikidata(binding) {
    const name = String(binding?.itemLabel?.value || "").trim();
    const itemUri = String(binding?.item?.value || "");
    if (!name || !itemUri) return null;
    const idMatch = itemUri.match(/Q\d+/i);
    const id = idMatch ? `wd-${idMatch[0].toLowerCase()}` : `wd-${name.toLowerCase().replace(/\s+/g, "-")}`;
    const image = binding?.image?.value || "";
    return { id, name, image, traits: inferTraitsFromWikidata(binding) };
}

function buildWikidataSparqlQuery(limit = 80) {
    const safeLimit = Math.max(30, Math.min(150, Math.floor(limit || 80)));
    return `
SELECT ?item ?itemLabel ?sexLabel ?countryLabel ?birth ?death ?image ?sitelinks
       (GROUP_CONCAT(DISTINCT LCASE(?occLabel); separator="|") AS ?occupations)
       (GROUP_CONCAT(DISTINCT LCASE(?awardLabel); separator="|") AS ?awards)
WHERE {
  ?item wdt:P31 wd:Q5; wdt:P18 ?image.
  ?item wikibase:sitelinks ?sitelinks.
  FILTER(?sitelinks > 30)
  {
    ?item wdt:P106 wd:Q901.
  } UNION {
    ?item wdt:P106 wd:Q169470.
  } UNION {
    ?item wdt:P106 wd:Q593074.
  } UNION {
    ?item wdt:P106 wd:Q1067611.
  } UNION {
    ?item wdt:P106 wd:Q131954.
  } UNION {
    ?item wdt:P106 wd:Q79808.
  } UNION {
    ?item wdt:P106 wd:Q205398.
  }
  OPTIONAL { ?item wdt:P21 ?sex. }
  OPTIONAL { ?item wdt:P27 ?country. }
  OPTIONAL { ?item wdt:P569 ?birth. }
  OPTIONAL { ?item wdt:P570 ?death. }
  OPTIONAL { ?item wdt:P106 ?occupation. }
  OPTIONAL { ?item wdt:P166 ?award. }
  SERVICE wikibase:label { bd:serviceParam wikibase:language "it,en". ?item rdfs:label ?itemLabel. OPTIONAL { ?sex rdfs:label ?sexLabel. } OPTIONAL { ?country rdfs:label ?countryLabel. } OPTIONAL { ?occupation rdfs:label ?occLabel. } OPTIONAL { ?award rdfs:label ?awardLabel. } }
}
GROUP BY ?item ?itemLabel ?sexLabel ?countryLabel ?birth ?death ?image ?sitelinks
ORDER BY DESC(?sitelinks)
LIMIT ${safeLimit}
`;
}

async function fetchWikidataCharacters(limit = 240) {
    const query = buildWikidataSparqlQuery(limit);
    const url = `${SPARQL_ENDPOINT}?format=json&query=${encodeURIComponent(query)}`;
    const payload = await fetchJsonWithTimeout(url, WIKIDATA_TIMEOUT_MS);
    const rows = Array.isArray(payload?.results?.bindings) ? payload.results.bindings : [];
    return mergeCharacterSets([], rows.map((row) => buildCharacterFromWikidata(row)).filter(Boolean));
}

function activatePendingDataset(force = false) {
    const pending = state.pendingCharacters;
    if (!pending || !pending.length) return false;
    if (!force && (state.mode === "asking" || state.mode === "guessing")) return false;
    state.characters = pending.map((character) => cloneCharacter(character));
    state.pendingCharacters = null;
    state.posteriors = initPosteriors();
    updateStaticStats();
    updateCandidateList();
    saveCharacterCatalog();
    return true;
}

async function loadCharactersFromWikidata() {
    setStatus("Carico personaggi online da Wikidata...", "");
    try {
        const onlineCharacters = await fetchWikidataCharacters();
        if (onlineCharacters.length < 40) throw new Error("Dataset online troppo piccolo");
        const merged = mergeCharacterSets(LOCAL_SEED, onlineCharacters);
        state.pendingCharacters = merged;
        state.source = "wikidata + locale";
        const activated = activatePendingDataset(false);
        if (activated) setStatus(`Wikidata attivo: ${merged.length} personaggi pronti.`, "ok");
        else { setStatus(`Wikidata pronto (${merged.length}): si attiva al prossimo round.`, "ok"); updateStaticStats(); }
    } catch {
        state.source = "locale";
        updateStaticStats();
        setStatus("Wikidata non disponibile ora: uso dataset locale.", "bad");
    }
}

const state = {
    mode: "intro", introNoCount: 0, characters: [], posteriors: [],
    askedCount: 0, askedKeys: new Set(), answers: {}, currentQuestionKey: null,
    guessOrder: [], guessIndex: 0, guessAttempts: 0,
    source: "locale", pendingCharacters: null, imageCache: {}, characterViewToken: 0, tutorialIndex: 0
};

const el = {
    questionBox: document.getElementById("questionBox"), characterFrame: document.querySelector(".character-frame"),
    progressBlock: document.getElementById("progressBlock"), progressLabel: document.getElementById("progressLabel"),
    progressFill: document.getElementById("progressFill"), characterImage: document.getElementById("characterImage"),
    characterName: document.getElementById("characterName"), instruction: document.getElementById("instruction"),
    questionText: document.getElementById("questionText"), btnYes: document.getElementById("btnYes"),
    btnNo: document.getElementById("btnNo"), attemptsStat: document.getElementById("attemptsStat"),
    answersStat: document.getElementById("answersStat"), attemptsValue: document.getElementById("attemptsValue"),
    answersValue: document.getElementById("answersValue"), datasetStat: document.getElementById("datasetStat"),
    sourceStat: document.getElementById("sourceStat"), statusLine: document.getElementById("statusLine"),
    candidateList: document.getElementById("candidateList"),
    tutorialOverlay: document.getElementById("tutorialOverlay"), tutorialTitle: document.getElementById("tutorialTitle"),
    tutorialBody: document.getElementById("tutorialBody"), tutorialDots: document.getElementById("tutorialDots"),
    tutorialNext: document.getElementById("tutorialNext"), tutorialSkip: document.getElementById("tutorialSkip"),
    tutorialClose: document.getElementById("tutorialClose"), tutorialNever: document.getElementById("tutorialNever")
};

function setDynamicFavicon(href) {
    const defs = [{ rel: "icon", sizes: "32x32" }, { rel: "icon", sizes: "16x16" }, { rel: "shortcut icon", sizes: "" }, { rel: "apple-touch-icon", sizes: "180x180" }];
    for (const def of defs) {
        const selector = def.sizes ? `link[rel="${def.rel}"][sizes="${def.sizes}"]` : `link[rel="${def.rel}"]:not([sizes])`;
        let link = document.head.querySelector(selector);
        if (!link) { link = document.createElement("link"); link.rel = def.rel; if (def.sizes) link.sizes = def.sizes; document.head.appendChild(link); }
        link.type = "image/png"; link.href = href;
    }
}

function optimizeTabIconFromSource(sourcePath = TAB_ICON_SOURCE) {
    const image = new Image();
    image.onload = () => {
        try {
            const sw = image.naturalWidth || image.width, sh = image.naturalHeight || image.height;
            if (!sw || !sh) { setDynamicFavicon(sourcePath); return; }
            const scanCanvas = document.createElement("canvas"); scanCanvas.width = sw; scanCanvas.height = sh;
            const sctx = scanCanvas.getContext("2d", { willReadFrequently: true });
            if (!sctx) { setDynamicFavicon(sourcePath); return; }
            sctx.drawImage(image, 0, 0, sw, sh);
            const data = sctx.getImageData(0, 0, sw, sh).data;
            let minX = sw, minY = sh, maxX = -1, maxY = -1;
            for (let y = 0; y < sh; y += 1) { for (let x = 0; x < sw; x += 1) { const alpha = data[(y * sw + x) * 4 + 3]; if (alpha > 18) { if (x < minX) minX = x; if (y < minY) minY = y; if (x > maxX) maxX = x; if (y > maxY) maxY = y; } } }
            if (maxX < minX || maxY < minY) { setDynamicFavicon(sourcePath); return; }
            const bw = maxX - minX + 1, bh = maxY - minY + 1, pad = Math.round(Math.max(bw, bh) * 0.12);
            minX = Math.max(0, minX - pad); minY = Math.max(0, minY - pad);
            maxX = Math.min(sw - 1, maxX + pad); maxY = Math.min(sh - 1, maxY + pad);
            const cw = maxX - minX + 1, ch = maxY - minY + 1, outSize = 128, outCanvas = document.createElement("canvas");
            outCanvas.width = outSize; outCanvas.height = outSize;
            const octx = outCanvas.getContext("2d");
            if (!octx) { setDynamicFavicon(sourcePath); return; }
            const scale = Math.min((outSize * 0.9) / cw, (outSize * 0.9) / ch), dw = cw * scale, dh = ch * scale, dx = (outSize - dw) / 2, dy = (outSize - dh) / 2;
            octx.clearRect(0, 0, outSize, outSize);
            octx.drawImage(scanCanvas, minX, minY, cw, ch, dx, dy, dw, dh);
            setDynamicFavicon(outCanvas.toDataURL("image/png"));
        } catch { setDynamicFavicon(sourcePath); }
    };
    image.onerror = () => setDynamicFavicon(sourcePath);
    image.src = `${sourcePath}?v=${Date.now()}`;
}

function setStatus(text, tone = "") { el.statusLine.textContent = text; el.statusLine.className = "status-line"; if (tone) el.statusLine.classList.add(tone); }
function setProgressVisible(visible) { if (el.progressBlock) el.progressBlock.hidden = !visible; }
function setQuestionBoxIntroMode(active) { if (!el.questionBox) return; el.questionBox.classList.toggle("intro-mode", Boolean(active)); }
function setAnswerLayout(mode = "asking") { /* Solo SI e NO */ }
function setButtons(enabled) { el.btnYes.disabled = !enabled; el.btnNo.disabled = !enabled; }
function updateStaticStats() { el.datasetStat.textContent = `Personaggi: ${state.characters.length}`; el.sourceStat.textContent = `Sorgente: ${state.source}`; }

function updateProgress() {
    const progress = Math.round((state.askedCount / MAX_QUESTIONS) * 100);
    el.progressLabel.textContent = `DOMANDA ${state.askedCount} / ${MAX_QUESTIONS}`;
    el.progressFill.style.width = `${Math.max(0, Math.min(100, progress))}%`;
    el.answersStat.textContent = `Risposte: ${state.askedCount}/${MAX_QUESTIONS}`;
    if (el.answersValue) el.answersValue.textContent = `${state.askedCount}/${MAX_QUESTIONS}`;
}

function updateAttemptsStat() { el.attemptsStat.textContent = `Tentativi: ${state.guessAttempts}/${MAX_GUESS_ATTEMPTS}`; if (el.attemptsValue) el.attemptsValue.textContent = `${state.guessAttempts}/${MAX_GUESS_ATTEMPTS}`; }
function setQuestionText(text, instruction = "") { if (instruction) el.instruction.textContent = instruction; el.questionText.textContent = text; }
function sanitizeHttpUrl(value) {
    if (typeof value !== "string" || !value) return "";
    try {
        return value.trim().replace(/^http:\/\//i, "https://");
    } catch { }
    return value;
}
function normalizeCacheKey(name) { return String(name || "").trim().toLowerCase(); }

function loadImageCache() { try { const raw = localStorage.getItem(IMAGE_CACHE_KEY); if (raw) { const parsed = JSON.parse(raw); if (parsed && typeof parsed === "object") state.imageCache = parsed; } } catch { state.imageCache = {}; } }
function saveImageCache() { try { localStorage.setItem(IMAGE_CACHE_KEY, JSON.stringify(state.imageCache)); } catch { } }
function readCachedImage(name) { const key = normalizeCacheKey(name); if (!key) return ""; const row = state.imageCache[key]; if (!row || typeof row !== "object") return ""; const age = Date.now() - Number(row.ts || 0); if (!row.url || age > IMAGE_CACHE_TTL_MS) { delete state.imageCache[key]; return ""; } return sanitizeHttpUrl(row.url); }
function writeCachedImage(name, url) { const key = normalizeCacheKey(name); const normalized = sanitizeHttpUrl(url); if (!key || !normalized) return; state.imageCache[key] = { url: normalized, ts: Date.now() }; saveImageCache(); }

function fetchJsonWithTimeout(url, timeoutMs = IMAGE_FETCH_TIMEOUT_MS) {
    const controller = new AbortController();
    const timeout = window.setTimeout(() => controller.abort(), timeoutMs);
    return fetch(url, { method: "GET", signal: controller.signal, headers: { Accept: "application/json" } })
        .then((response) => { if (!response.ok) throw new Error(`HTTP ${response.status}`); return response.json(); })
        .finally(() => { window.clearTimeout(timeout); });
}

function applyCharacterImage(src, fallback = PERSON_IMAGE_FALLBACK) {
    const finalSrc = src || fallback;
    el.characterImage.onerror = () => { el.characterImage.onerror = null; el.characterImage.src = fallback; };
    el.characterImage.src = finalSrc;
}

async function setCandidateCharacter(character) {
    if (!character) { setGuideCharacter(); return; }
    const viewToken = ++state.characterViewToken;
    if (el.characterName) el.characterName.textContent = character.name;
    if (el.characterFrame) el.characterFrame.classList.add("person-mode");
    const imageUrl = sanitizeHttpUrl(character.image) || readCachedImage(character.name);
    applyCharacterImage(imageUrl, PERSON_IMAGE_FALLBACK);
    if (character.image && !readCachedImage(character.name)) writeCachedImage(character.name, character.image);
}

function setGuideCharacter() { state.characterViewToken += 1; if (el.characterName) el.characterName.textContent = GUIDE_NAME; if (el.characterFrame) el.characterFrame.classList.remove("person-mode"); applyCharacterImage(GUIDE_IMAGE, GUIDE_IMAGE_FALLBACK); }

function saveCharacterCatalog() { try { const payload = { ts: Date.now(), source: state.source, count: state.characters.length, characters: state.characters.map((character) => ({ id: character.id, name: character.name, image: sanitizeHttpUrl(character.image || "") })) }; localStorage.setItem(CATALOG_CACHE_KEY, JSON.stringify(payload)); } catch { } }

function tutorialIsAvailable() { return Boolean(el.tutorialOverlay && el.tutorialTitle && el.tutorialBody && el.tutorialNext && el.tutorialSkip); }
function shouldAutoOpenTutorial() { if (!tutorialIsAvailable()) return false; try { return localStorage.getItem(TUTORIAL_DISABLED_KEY) !== "1"; } catch { return true; } }

function renderTutorialDots() { if (!el.tutorialDots) return; el.tutorialDots.innerHTML = TUTORIAL_STEPS.map((_, index) => `<span class="${index === state.tutorialIndex ? "dot active" : "dot"}" aria-hidden="true"></span>`).join(""); }
function renderTutorialStep() { const step = TUTORIAL_STEPS[state.tutorialIndex] || TUTORIAL_STEPS[0]; if (!step) return; el.tutorialTitle.textContent = step.title; el.tutorialBody.textContent = step.text; el.tutorialNext.textContent = state.tutorialIndex >= TUTORIAL_STEPS.length - 1 ? "INIZIA A GIOCARE" : "AVANTI"; renderTutorialDots(); }
function closeTutorial() { if (!tutorialIsAvailable()) return; if (el.tutorialNever?.checked) { try { localStorage.setItem(TUTORIAL_DISABLED_KEY, "1"); } catch { } } el.tutorialOverlay.hidden = true; document.body.classList.remove("tutorial-open"); }
function openTutorial() { if (!tutorialIsAvailable()) return; state.tutorialIndex = 0; if (el.tutorialNever) el.tutorialNever.checked = false; renderTutorialStep(); el.tutorialOverlay.hidden = false; document.body.classList.add("tutorial-open"); }
function nextTutorialStep() { if (state.tutorialIndex >= TUTORIAL_STEPS.length - 1) { closeTutorial(); return; } state.tutorialIndex += 1; renderTutorialStep(); }

function bindTutorialEvents() { if (!tutorialIsAvailable()) return; el.tutorialNext.addEventListener("click", () => nextTutorialStep()); el.tutorialSkip.addEventListener("click", () => closeTutorial()); el.tutorialClose?.addEventListener("click", () => closeTutorial()); el.tutorialOverlay.addEventListener("click", (event) => { if (event.target === el.tutorialOverlay) closeTutorial(); }); document.addEventListener("keydown", (event) => { if (event.key === "Escape" && !el.tutorialOverlay.hidden) closeTutorial(); }); }

function normalizeProbabilities(values) { const sum = values.reduce((acc, v) => acc + v, 0); if (sum <= 0) { const base = 1 / Math.max(1, values.length); return values.map(() => base); } return values.map((v) => v / sum); }
function initPosteriors() { const base = 1 / Math.max(1, state.characters.length); return state.characters.map(() => base); }
function traitYesProbability(trait) { if (trait === true) return 0.85; if (trait === false) return 0.15; return 0.5; }
function traitLikelihood(trait, strength) { if (trait === null || trait === undefined) return 0.5; if (trait === true) return 0.12 + 0.76 * strength; return 0.12 + 0.76 * (1 - strength); }

function applyEvidence(questionKey, answerType) {
    const strength = answerType === "yes" ? 1 : 0;
    const next = state.characters.map((character, index) => { const prior = state.posteriors[index] || 0; const trait = character.traits[questionKey]; return prior * traitLikelihood(trait, strength); });
    state.posteriors = normalizeProbabilities(next);
}

function shannonEntropy(probs) { let h = 0; for (const p of probs) { if (p > 0) h -= p * Math.log2(p); } return h; }

function expectedEntropyForQuestion(questionKey) {
    const yesWeights = [], noWeights = []; let pYes = 0, pNo = 0, knownMass = 0;
    for (let i = 0; i < state.characters.length; i += 1) {
        const p = state.posteriors[i] || 0, trait = state.characters[i].traits[questionKey];
        if (trait === true || trait === false) knownMass += p;
        const py = traitYesProbability(trait), pn = 1 - py, wy = p * py, wn = p * pn;
        yesWeights.push(wy); noWeights.push(wn); pYes += wy; pNo += wn;
    }
    const yesPosterior = normalizeProbabilities(yesWeights), noPosterior = normalizeProbabilities(noWeights);
    const expected = pYes * shannonEntropy(yesPosterior) + pNo * shannonEntropy(noPosterior);
    return { expectedEntropy: expected, knownMass };
}

function chooseBestQuestion() {
    const unanswered = QUESTION_BANK.filter((q) => !state.askedKeys.has(q.key));
    if (!unanswered.length) return null;
    const currentEntropy = shannonEntropy(state.posteriors);
    let best = null, bestScore = -Infinity;
    for (const question of unanswered) {
        const { expectedEntropy, knownMass } = expectedEntropyForQuestion(question.key);
        if (knownMass < 0.15) continue;
        const gain = currentEntropy - expectedEntropy;
        const score = gain + knownMass * 0.08;
        if (score > bestScore) { bestScore = score; best = question; }
    }
    if (!best) { best = unanswered.map((q) => ({ q, knownMass: expectedEntropyForQuestion(q.key).knownMass })).sort((a, b) => b.knownMass - a.knownMass)[0].q; }
    return best;
}

function rankCandidates() { const rows = state.characters.map((character, index) => ({ character, probability: state.posteriors[index] || 0 })); rows.sort((a, b) => b.probability - a.probability || a.character.name.localeCompare(b.character.name, "it")); return rows; }
function updateCandidateList() { const top = rankCandidates().slice(0, CANDIDATE_PREVIEW); if (!top.length) { el.candidateList.innerHTML = "<li>Nessun candidato</li>"; return; } el.candidateList.innerHTML = top.map((row) => `<li>${row.character.name} - ${Math.round(row.probability * 100)}%</li>`).join(""); }

function shouldPrepareGuessing() {
    if (state.askedCount >= MAX_QUESTIONS) return true;
    const left = QUESTION_BANK.length - state.askedKeys.size;
    if (left <= 0) return true;
    const ranked = rankCandidates(), top = ranked[0];
    if (!top) return true;
    const second = ranked[1], margin = top.probability - (second ? second.probability : 0);
    if (state.askedCount >= MIN_QUESTIONS_BEFORE_GUESS && top.probability >= GUESS_CONFIDENCE_THRESHOLD) return true;
    if (state.askedCount >= 8 && top.probability >= MID_GAME_GUESS_THRESHOLD && margin >= MID_GAME_MARGIN_THRESHOLD) return true;
    return false;
}

function askNextQuestion() { const next = chooseBestQuestion(); if (!next) { prepareGuessing(); return; } state.currentQuestionKey = next.key; setQuestionText(next.text, "Rispondi con SI o NO"); }

function showIntroPrompt() { state.mode = "intro"; state.askedCount = 0; state.guessAttempts = 0; updateProgress(); updateAttemptsStat(); setProgressVisible(false); setQuestionBoxIntroMode(true); setButtons(true); setGuideCharacter(); setQuestionText("SEI PRONTO PER GIOCARE?", "Il Genio Indovino è pronto a sfidarti..."); }
function showNotReadyPrompt() { state.mode = "intro_no"; state.askedCount = 0; state.guessAttempts = 0; updateProgress(); updateAttemptsStat(); setProgressVisible(false); setQuestionBoxIntroMode(true); setButtons(true); setGuideCharacter(); const index = Math.max(0, state.introNoCount - 1) % INTRO_NO_LINES.length; const line = INTRO_NO_LINES[index]; setQuestionText(line.question, line.instruction); }
function showCurrentGuessQuestion(isRetry = false) { const row = state.guessOrder[state.guessIndex]; if (!row) return; const guess = row.character; setQuestionText(isRetry ? `Allora provo: è ${guess.name}?` : `Il tuo personaggio è ${guess.name}?`, "Conferma con SI o NO"); void setCandidateCharacter(guess); }

function prepareGuessing() {
    state.mode = "guessing"; state.guessOrder = rankCandidates(); state.guessIndex = 0; state.guessAttempts = 1;
    updateAttemptsStat(); setProgressVisible(true); setQuestionBoxIntroMode(false); setButtons(true);
    if (!state.guessOrder.length) { state.mode = "finished"; setQuestionText("NON CI SONO. VUOI RIPROVARE?", "Tentativi esauriti."); return; }
    showCurrentGuessQuestion(false);
}

function startRound() {
    activatePendingDataset(true);
    state.mode = "asking"; state.askedCount = 0; state.askedKeys = new Set(); state.answers = {}; state.currentQuestionKey = null;
    state.guessOrder = []; state.guessIndex = 0; state.guessAttempts = 0; state.posteriors = initPosteriors();
    updateAttemptsStat(); setProgressVisible(true); setQuestionBoxIntroMode(false); setGuideCharacter(); updateProgress(); updateCandidateList(); setButtons(true); askNextQuestion();
}

function saveToLeaderboard(character) {
    if (!character || !character.name) return;
    try {
        const raw = localStorage.getItem("genio_indovino_leaderboard") || "[]";
        let list = JSON.parse(raw);
        if (!Array.isArray(list)) list = [];
        const existing = list.find(item => item.name === character.name);
        if (existing) {
            existing.count += 1;
        } else {
            list.push({ name: character.name, image: character.image, count: 1 });
        }
        localStorage.setItem("genio_indovino_leaderboard", JSON.stringify(list));
    } catch (e) { console.error("Leaderboard error", e); }
}

function handleGuessingAnswer(answerType) {
    const row = state.guessOrder[state.guessIndex], currentGuess = row ? row.character : null;
    if (answerType === "yes") {
        state.mode = "finished";
        if (currentGuess) {
            void setCandidateCharacter(currentGuess);
            setQuestionText(`L'HO INDOVINATO: ${currentGuess.name}!`, "Partita conclusa. Vuoi farne un'altra?");
            saveToLeaderboard(currentGuess);
        } else {
            setQuestionText("PARTITA CONCLUSA. VUOI FARNE UN'ALTRA?", "Perfetto, ho indovinato.");
        }
        return;
    }
    if (answerType === "no") { if (state.guessAttempts >= MAX_GUESS_ATTEMPTS || state.guessIndex + 1 >= state.guessOrder.length) { state.mode = "finished"; setQuestionText("NON CI SONO. VUOI RIPROVARE?", "Tentativi esauriti."); return; } state.guessIndex += 1; state.guessAttempts += 1; updateAttemptsStat(); showCurrentGuessQuestion(true); }
}

function applyAnswer(answerType) {
    if (state.mode === "intro" || state.mode === "intro_no") { if (answerType === "yes") { state.introNoCount = 0; startRound(); return; } state.introNoCount += 1; showNotReadyPrompt(); return; }
    if (state.mode === "finished") { if (answerType === "yes") { startRound(); return; } state.introNoCount += 1; showNotReadyPrompt(); return; }
    if (state.mode === "guessing") { handleGuessingAnswer(answerType); return; }
    if (state.mode !== "asking" || !state.currentQuestionKey) return;
    state.askedKeys.add(state.currentQuestionKey); state.answers[state.currentQuestionKey] = answerType; state.askedCount += 1;
    applyEvidence(state.currentQuestionKey, answerType);
    updateProgress(); updateCandidateList();
    if (shouldPrepareGuessing()) { prepareGuessing(); return; }
    askNextQuestion();
}

function bindEvents() { el.btnYes.addEventListener("click", () => applyAnswer("yes")); el.btnNo.addEventListener("click", () => applyAnswer("no")); }

function bootstrap() {
    state.source = "locale"; state.characters = LOCAL_SEED.map((character) => cloneCharacter(character)); state.posteriors = initPosteriors(); loadImageCache();
    optimizeTabIconFromSource(); updateStaticStats(); setGuideCharacter(); setStatus("Algoritmo attivo. Caricamento personaggi...", ""); updateCandidateList(); saveCharacterCatalog(); bindEvents(); bindTutorialEvents(); showIntroPrompt();
    void loadCharactersFromWikidata();
    if (shouldAutoOpenTutorial()) { window.setTimeout(() => openTutorial(), 320); }
}

bootstrap();
