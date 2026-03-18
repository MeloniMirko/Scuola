"use strict";

const QUESTION_BANK = [
    { key: "female", text: "Il tuo personaggio e una donna?" },
    { key: "alive", text: "Il tuo personaggio e ancora in vita?" },
    { key: "european", text: "Il tuo personaggio e nato in Europa?" },
    { key: "from_italy", text: "Il tuo personaggio e nato in Italia?" },
    { key: "from_usa", text: "Il tuo personaggio e nato negli Stati Uniti?" },
    { key: "from_uk", text: "Il tuo personaggio e nato nel Regno Unito?" },
    { key: "from_france", text: "Il tuo personaggio e nato in Francia?" },
    { key: "from_argentina", text: "Il tuo personaggio e nato in Argentina?" },
    { key: "from_portugal", text: "Il tuo personaggio e nato in Portogallo?" },
    { key: "from_brazil", text: "Il tuo personaggio e nato in Brasile?" },
    { key: "from_serbia", text: "Il tuo personaggio e nato in Serbia?" },
    { key: "from_switzerland", text: "Il tuo personaggio e nato in Svizzera?" },
    { key: "scientist", text: "E famoso soprattutto per la scienza?" },
    { key: "inventor", text: "E conosciuto come inventore o inventrice?" },
    { key: "tech_founder", text: "Ha fondato o guidato una grande azienda tech?" },
    { key: "politician", text: "E un politico o una politica?" },
    { key: "athlete", text: "E uno sportivo o una sportiva professionista?" },
    { key: "footballer", text: "E legato al calcio?" },
    { key: "basketball", text: "E legato al basket?" },
    { key: "tennis", text: "E legato al tennis?" },
    { key: "singer", text: "E un cantante o una cantante?" },
    { key: "actor", text: "E un attore o un'attrice?" },
    { key: "nobel", text: "Ha vinto un Premio Nobel?" },
    { key: "oscar", text: "Ha vinto un Oscar?" },
    { key: "grammy", text: "Ha vinto un Grammy?" },
    { key: "billionaire", text: "E miliardario o miliardaria?" },
    { key: "born_before_1950", text: "E nato prima del 1950?" },
    { key: "born_1950_1980", text: "E nato tra il 1950 e il 1980?" },
    { key: "painter", text: "E noto anche come pittore o pittrice?" }
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
const IMAGE_CACHE_KEY = "genio_indovino_image_cache_v1";
const IMAGE_CACHE_TTL_MS = 1000 * 60 * 60 * 24 * 30;
const IMAGE_FETCH_TIMEOUT_MS = 6000;
const IMAGE_LANGS = ["it", "en"];
const WIKIDATA_CHARACTER_LIMIT = 240;
const WIKIDATA_MIN_ACCEPTED = 40;
const WIKIDATA_TIMEOUT_MS = 12000;
const SPARQL_ENDPOINT = "https://query.wikidata.org/sparql";
const CATALOG_CACHE_KEY = "genio_indovino_catalog_v1";
const TUTORIAL_DISABLED_KEY = "genio_indovino_tutorial_disabled_v1";

const TUTORIAL_STEPS = [
    {
        title: "Pensa al personaggio",
        text: "Scegli in testa un personaggio famoso reale. Non dirlo al gioco."
    },
    {
        title: "Rispondi alle domande",
        text: "Usa solo SI, NO o risposte incerte. Ogni risposta aiuta il motore a stringere il campo."
    },
    {
        title: "Il genio calcola",
        text: "L'algoritmo seleziona la domanda piu utile in base alle probabilita aggiornate in tempo reale."
    },
    {
        title: "Tentativo finale",
        text: "Quando la confidenza e alta, il genio propone un nome con foto. Conferma o fai continuare."
    }
];

const INTRO_NO_LINES = [
    {
        instruction: "Nessun problema, ci prendiamo un respiro...",
        question: "VUOI PARTIRE TRA QUALCHE SECONDO?"
    },
    {
        instruction: "Zorina resta qui ad aspettarti.",
        question: "CAMBI IDEA E GIOCHIAMO INSIEME?"
    },
    {
        instruction: "Promesso: domande rapide e niente stress.",
        question: "FACCIAMO UNA PARTITA VELOCE?"
    }
];

const TRAIT_KEYWORD_RULES = {
    scientist: ["scientist", "scienziato", "physicist", "mathematician", "chemist", "biologist", "astronomer", "ricercatore"],
    inventor: ["inventor", "inventore", "inventrice"],
    tech_founder: ["entrepreneur", "imprenditore", "businessperson", "businessman", "businesswoman", "software engineer", "computer scientist"],
    politician: ["politician", "politico", "politica", "statesman", "president", "prime minister", "senator", "ministro", "chancellor"],
    athlete: ["athlete", "sportsperson", "sportsman", "sportswoman", "sportivo", "sportiva", "player"],
    footballer: ["footballer", "soccer player", "calciatore", "calciatrice"],
    basketball: ["basketball player", "cestista", "nba"],
    tennis: ["tennis player", "tennista"],
    singer: ["singer", "cantante", "vocalist", "rapper", "musician", "musicista"],
    actor: ["actor", "actress", "attore", "attrice", "performer"],
    painter: ["painter", "pittrice", "pittore"],
    billionaire: ["billionaire", "miliardario", "miliardaria"]
};

const AWARD_KEYWORDS = {
    nobel: ["nobel"],
    oscar: ["academy award", "oscar"],
    grammy: ["grammy"]
};

const COUNTRY_TRAIT_RULES = [
    { trait: "from_italy", match: ["italy", "italia"] },
    { trait: "from_usa", match: ["united states", "stati uniti", "usa"] },
    { trait: "from_uk", match: ["united kingdom", "regno unito", "uk", "england", "scotland", "wales"] },
    { trait: "from_france", match: ["france", "francia"] },
    { trait: "from_argentina", match: ["argentina"] },
    { trait: "from_portugal", match: ["portugal", "portogallo"] },
    { trait: "from_brazil", match: ["brazil", "brasile"] },
    { trait: "from_serbia", match: ["serbia"] },
    { trait: "from_switzerland", match: ["switzerland", "svizzera"] }
];

const EUROPE_KEYWORDS = [
    "italy", "italia", "france", "francia", "united kingdom", "regno unito", "uk", "england", "scotland",
    "wales", "portugal", "portogallo", "spain", "spagna", "germany", "germania", "serbia", "switzerland",
    "svizzera", "netherlands", "belgium", "belgio", "austria", "poland", "polonia", "greece", "grecia",
    "sweden", "svezia", "norway", "norvegia", "finland", "finlandia", "denmark", "danimarca", "ireland", "irlanda"
];

function createTraits(trueKeys = [], falseKeys = []) {
    const traits = {};
    for (const key of TRAIT_KEYS) traits[key] = null;
    for (const key of trueKeys) traits[key] = true;
    for (const key of falseKeys) traits[key] = false;
    return traits;
}

function seedCharacter(id, name, image, trueKeys, falseKeys = []) {
    return { id, name, image, traits: createTraits(trueKeys, falseKeys) };
}

const LOCAL_SEED = [
    seedCharacter("einstein", "Albert Einstein", "https://upload.wikimedia.org/wikipedia/commons/3/3e/Einstein_1921_by_F_Schmutzer_-_restoration.jpg", ["scientist", "inventor", "nobel", "born_before_1950", "european"], ["alive", "female"]),
    seedCharacter("marie-curie", "Marie Curie", "https://upload.wikimedia.org/wikipedia/commons/7/7e/Marie_Curie_c1920.jpg", ["female", "scientist", "nobel", "born_before_1950", "european", "from_france"], ["alive"]),
    seedCharacter("ada-lovelace", "Ada Lovelace", "https://upload.wikimedia.org/wikipedia/commons/a/a4/Ada_Lovelace_portrait.jpg", ["female", "scientist", "born_before_1950", "european", "from_uk"], ["alive"]),
    seedCharacter("alan-turing", "Alan Turing", "https://upload.wikimedia.org/wikipedia/commons/7/79/Alan_Turing_az_1930-as_%C3%A9vekben.jpg", ["scientist", "inventor", "born_before_1950", "european", "from_uk"], ["alive"]),
    seedCharacter("steve-jobs", "Steve Jobs", "https://upload.wikimedia.org/wikipedia/commons/8/85/Steve_Jobs_Headshot_2010-CROP2.jpg", ["tech_founder", "billionaire", "born_1950_1980", "from_usa"], ["alive"]),
    seedCharacter("elon-musk", "Elon Musk", "https://upload.wikimedia.org/wikipedia/commons/8/8f/Elon_Musk_Royal_Society_%28crop1%29.jpg", ["alive", "tech_founder", "billionaire", "born_1950_1980"]),
    seedCharacter("bill-gates", "Bill Gates", "https://upload.wikimedia.org/wikipedia/commons/a/a0/Bill_Gates_2018.jpg", ["alive", "tech_founder", "billionaire", "from_usa", "born_1950_1980"]),
    seedCharacter("lionel-messi", "Lionel Messi", "https://upload.wikimedia.org/wikipedia/commons/c/c1/Lionel_Messi_20180626.jpg", ["alive", "athlete", "footballer", "from_argentina"]),
    seedCharacter("cristiano-ronaldo", "Cristiano Ronaldo", "https://upload.wikimedia.org/wikipedia/commons/8/8c/Cristiano_Ronaldo_2018.jpg", ["alive", "athlete", "footballer", "from_portugal", "european"]),
    seedCharacter("serena-williams", "Serena Williams", "https://upload.wikimedia.org/wikipedia/commons/4/4a/Serena_Williams_at_2013_US_Open.jpg", ["female", "alive", "athlete", "tennis", "from_usa"]),
    seedCharacter("novak-djokovic", "Novak Djokovic", "https://upload.wikimedia.org/wikipedia/commons/7/74/Novak_Djokovic_2011_Serbia_Open.jpg", ["alive", "athlete", "tennis", "from_serbia", "european"]),
    seedCharacter("michael-jordan", "Michael Jordan", "https://upload.wikimedia.org/wikipedia/commons/a/ae/Michael_Jordan_in_2014.jpg", ["alive", "athlete", "basketball", "from_usa", "born_1950_1980"]),
    seedCharacter("beyonce", "Beyonce", "https://upload.wikimedia.org/wikipedia/commons/5/52/Beyonce_-_The_Formation_World_Tour%2C_at_Wembley_Stadium_in_London%2C_England.jpg", ["female", "alive", "singer", "grammy", "from_usa"]),
    seedCharacter("taylor-swift", "Taylor Swift", "https://upload.wikimedia.org/wikipedia/commons/f/f2/Taylor_Swift_The_Eras_Tour_01.jpg", ["female", "alive", "singer", "grammy", "billionaire", "from_usa"]),
    seedCharacter("lady-gaga", "Lady Gaga", "https://upload.wikimedia.org/wikipedia/commons/e/e9/Lady_Gaga_2017.jpg", ["female", "alive", "singer", "actor", "grammy", "oscar", "from_usa"]),
    seedCharacter("leonardo-dicaprio", "Leonardo DiCaprio", "https://upload.wikimedia.org/wikipedia/commons/7/76/Leonardo_DiCaprio_2014.jpg", ["alive", "actor", "oscar", "from_usa", "born_1950_1980"]),
    seedCharacter("barack-obama", "Barack Obama", "https://upload.wikimedia.org/wikipedia/commons/8/8d/President_Barack_Obama.jpg", ["alive", "politician", "nobel", "from_usa", "born_1950_1980"]),
    seedCharacter("donald-trump", "Donald Trump", "https://upload.wikimedia.org/wikipedia/commons/5/56/Donald_Trump_official_portrait.jpg", ["alive", "politician", "billionaire", "from_usa", "born_before_1950"]),
    seedCharacter("giorgia-meloni", "Giorgia Meloni", "https://upload.wikimedia.org/wikipedia/commons/4/42/Giorgia_Meloni_2022.jpg", ["female", "alive", "politician", "from_italy", "european", "born_1950_1980"]),
    seedCharacter("leonardo-da-vinci", "Leonardo da Vinci", "https://upload.wikimedia.org/wikipedia/commons/e/ec/Leonardo_da_Vinci_-_presumed_self-portrait_-_WGA12798.jpg", ["scientist", "inventor", "painter", "born_before_1950", "european", "from_italy"], ["alive"])
];

function cloneCharacter(character) {
    return {
        id: character.id,
        name: character.name,
        image: character.image || "",
        traits: { ...character.traits }
    };
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
        if (!current) {
            map.set(key, cloneCharacter(character));
            return;
        }

        const currentScore = knownTraitCount(current);
        const nextScore = knownTraitCount(character);
        const nextImage = sanitizeHttpUrl(character.image);
        const currentImage = sanitizeHttpUrl(current.image);

        if (nextScore > currentScore) {
            map.set(key, cloneCharacter(character));
            return;
        }

        if (!currentImage && nextImage) {
            current.image = nextImage;
        }
    };

    baseList.forEach(put);
    incomingList.forEach(put);
    return Array.from(map.values());
}

function parseYear(rawDate) {
    const text = String(rawDate || "");
    const match = text.match(/^-?\d{1,4}/);
    if (!match) return null;
    const year = Number(match[0]);
    return Number.isFinite(year) ? year : null;
}

function hasAnyKeyword(text, keywords) {
    const haystack = String(text || "").toLowerCase();
    if (!haystack) return false;
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

    if (deathYear) falseSet.add("alive");
    else if (birthYear) trueSet.add("alive");

    if (birthYear !== null) {
        if (birthYear < 1950) {
            trueSet.add("born_before_1950");
            falseSet.add("born_1950_1980");
        } else if (birthYear <= 1980) {
            trueSet.add("born_1950_1980");
            falseSet.add("born_before_1950");
        } else {
            falseSet.add("born_before_1950");
            falseSet.add("born_1950_1980");
        }
    }

    let matchedCountryTrait = "";
    for (const rule of COUNTRY_TRAIT_RULES) {
        if (hasAnyKeyword(country, rule.match)) {
            matchedCountryTrait = rule.trait;
            trueSet.add(rule.trait);
            break;
        }
    }
    if (matchedCountryTrait) {
        for (const rule of COUNTRY_TRAIT_RULES) {
            if (rule.trait !== matchedCountryTrait) falseSet.add(rule.trait);
        }
    }

    if (hasAnyKeyword(country, EUROPE_KEYWORDS)) {
        trueSet.add("european");
    } else if (country) {
        falseSet.add("european");
    }

    for (const [trait, words] of Object.entries(TRAIT_KEYWORD_RULES)) {
        if (hasAnyKeyword(searchableText, words)) trueSet.add(trait);
    }

    for (const [trait, words] of Object.entries(AWARD_KEYWORDS)) {
        if (hasAnyKeyword(awards, words)) trueSet.add(trait);
    }

    if (trueSet.has("footballer") || trueSet.has("basketball") || trueSet.has("tennis")) {
        trueSet.add("athlete");
    }

    if (trueSet.has("singer")) falseSet.add("actor");
    if (trueSet.has("actor")) falseSet.add("singer");

    for (const trait of trueSet) {
        falseSet.delete(trait);
    }

    return createTraits(Array.from(trueSet), Array.from(falseSet));
}

function buildCharacterFromWikidata(binding) {
    const name = String(binding?.itemLabel?.value || "").trim();
    const itemUri = String(binding?.item?.value || "");
    if (!name || !itemUri) return null;

    const idMatch = itemUri.match(/Q\d+/i);
    const id = idMatch ? `wd-${idMatch[0].toLowerCase()}` : `wd-${name.toLowerCase().replace(/\s+/g, "-")}`;
    const image = sanitizeHttpUrl(binding?.image?.value || "");
    const traits = inferTraitsFromWikidata(binding);
    return { id, name, image, traits };
}

function buildWikidataSparqlQuery(limit = WIKIDATA_CHARACTER_LIMIT) {
    const safeLimit = Math.max(40, Math.min(350, Math.floor(limit || WIKIDATA_CHARACTER_LIMIT)));
    return `
SELECT ?item ?itemLabel ?sexLabel ?countryLabel ?birth ?death ?image ?sitelinks
       (GROUP_CONCAT(DISTINCT LCASE(?occLabel); separator="|") AS ?occupations)
       (GROUP_CONCAT(DISTINCT LCASE(?awardLabel); separator="|") AS ?awards)
WHERE {
  ?item wdt:P31 wd:Q5;
        wdt:P18 ?image.
  ?item wikibase:sitelinks ?sitelinks.
  FILTER(?sitelinks > 25)

  OPTIONAL { ?item wdt:P21 ?sex. }
  OPTIONAL { ?item wdt:P27 ?country. }
  OPTIONAL { ?item wdt:P569 ?birth. }
  OPTIONAL { ?item wdt:P570 ?death. }
  OPTIONAL { ?item wdt:P106 ?occupation. }
  OPTIONAL { ?item wdt:P166 ?award. }

  SERVICE wikibase:label {
    bd:serviceParam wikibase:language "it,en".
    ?item rdfs:label ?itemLabel.
    OPTIONAL { ?sex rdfs:label ?sexLabel. }
    OPTIONAL { ?country rdfs:label ?countryLabel. }
    OPTIONAL { ?occupation rdfs:label ?occLabel. }
    OPTIONAL { ?award rdfs:label ?awardLabel. }
  }
}
GROUP BY ?item ?itemLabel ?sexLabel ?countryLabel ?birth ?death ?image ?sitelinks
ORDER BY DESC(?sitelinks)
LIMIT ${safeLimit}
`;
}

async function fetchWikidataCharacters(limit = WIKIDATA_CHARACTER_LIMIT) {
    const query = buildWikidataSparqlQuery(limit);
    const url = `${SPARQL_ENDPOINT}?format=json&query=${encodeURIComponent(query)}`;
    const payload = await fetchJsonWithTimeout(url, WIKIDATA_TIMEOUT_MS);
    const rows = Array.isArray(payload?.results?.bindings) ? payload.results.bindings : [];
    const parsed = rows
        .map((row) => buildCharacterFromWikidata(row))
        .filter(Boolean);
    return mergeCharacterSets([], parsed);
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
    warmImageCacheInBackground();
    return true;
}

async function loadCharactersFromWikidata() {
    setStatus("Carico personaggi online da Wikidata...", "");
    try {
        const onlineCharacters = await fetchWikidataCharacters();
        if (onlineCharacters.length < WIKIDATA_MIN_ACCEPTED) {
            throw new Error("Dataset online troppo piccolo");
        }

        const merged = mergeCharacterSets(LOCAL_SEED, onlineCharacters);
        state.pendingCharacters = merged;
        state.source = "wikidata + locale";

        const activated = activatePendingDataset(false);
        if (activated) {
            setStatus(`Wikidata attivo: ${merged.length} personaggi pronti.`, "ok");
        } else {
            setStatus(`Wikidata pronto (${merged.length} personaggi): si attiva al prossimo round.`, "ok");
            updateStaticStats();
        }
    } catch {
        state.source = "locale";
        updateStaticStats();
        setStatus("Wikidata non disponibile ora: uso dataset locale intelligente.", "bad");
    }
}

const state = {
    mode: "intro",
    introNoCount: 0,

    characters: [],
    posteriors: [],

    askedCount: 0,
    askedKeys: new Set(),
    answers: {},
    currentQuestionKey: null,

    guessOrder: [],
    guessIndex: 0,
    guessAttempts: 0,

    source: "locale",
    pendingCharacters: null,
    imageCache: {},
    characterViewToken: 0,
    tutorialIndex: 0
};

const el = {
    questionBox: document.getElementById("questionBox"),
    characterFrame: document.querySelector(".character-frame"),
    progressBlock: document.getElementById("progressBlock"),
    progressLabel: document.getElementById("progressLabel"),
    progressFill: document.getElementById("progressFill"),
    characterImage: document.getElementById("characterImage"),
    characterName: document.getElementById("characterName"),
    instruction: document.getElementById("instruction"),
    questionText: document.getElementById("questionText"),

    btnYes: document.getElementById("btnYes"),
    btnNo: document.getElementById("btnNo"),
    btnDontKnow: document.getElementById("btnDontKnow"),
    btnProbably: document.getElementById("btnProbably"),
    btnProbablyNo: document.getElementById("btnProbablyNo"),

    attemptsStat: document.getElementById("attemptsStat"),
    answersStat: document.getElementById("answersStat"),
    attemptsValue: document.getElementById("attemptsValue"),
    answersValue: document.getElementById("answersValue"),
    datasetStat: document.getElementById("datasetStat"),
    sourceStat: document.getElementById("sourceStat"),
    statusLine: document.getElementById("statusLine"),
    candidateList: document.getElementById("candidateList"),

    tutorialOverlay: document.getElementById("tutorialOverlay"),
    tutorialTitle: document.getElementById("tutorialTitle"),
    tutorialBody: document.getElementById("tutorialBody"),
    tutorialDots: document.getElementById("tutorialDots"),
    tutorialNext: document.getElementById("tutorialNext"),
    tutorialSkip: document.getElementById("tutorialSkip"),
    tutorialClose: document.getElementById("tutorialClose"),
    tutorialNever: document.getElementById("tutorialNever")
};

function setDynamicFavicon(href) {
    const defs = [
        { rel: "icon", sizes: "32x32" },
        { rel: "icon", sizes: "16x16" },
        { rel: "shortcut icon", sizes: "" },
        { rel: "apple-touch-icon", sizes: "180x180" }
    ];

    for (const def of defs) {
        const selector = def.sizes
            ? `link[rel="${def.rel}"][sizes="${def.sizes}"]`
            : `link[rel="${def.rel}"]:not([sizes])`;
        let link = document.head.querySelector(selector);
        if (!link) {
            link = document.createElement("link");
            link.rel = def.rel;
            if (def.sizes) link.sizes = def.sizes;
            document.head.appendChild(link);
        }
        link.type = "image/png";
        link.href = href;
    }
}

function optimizeTabIconFromSource(sourcePath = TAB_ICON_SOURCE) {
    const image = new Image();
    image.onload = () => {
        try {
            const sw = image.naturalWidth || image.width;
            const sh = image.naturalHeight || image.height;
            if (!sw || !sh) {
                setDynamicFavicon(sourcePath);
                return;
            }

            const scanCanvas = document.createElement("canvas");
            scanCanvas.width = sw;
            scanCanvas.height = sh;
            const sctx = scanCanvas.getContext("2d", { willReadFrequently: true });
            if (!sctx) {
                setDynamicFavicon(sourcePath);
                return;
            }

            sctx.drawImage(image, 0, 0, sw, sh);
            const data = sctx.getImageData(0, 0, sw, sh).data;

            let minX = sw;
            let minY = sh;
            let maxX = -1;
            let maxY = -1;

            for (let y = 0; y < sh; y += 1) {
                for (let x = 0; x < sw; x += 1) {
                    const alpha = data[(y * sw + x) * 4 + 3];
                    if (alpha > 18) {
                        if (x < minX) minX = x;
                        if (y < minY) minY = y;
                        if (x > maxX) maxX = x;
                        if (y > maxY) maxY = y;
                    }
                }
            }

            if (maxX < minX || maxY < minY) {
                setDynamicFavicon(sourcePath);
                return;
            }

            const bw = maxX - minX + 1;
            const bh = maxY - minY + 1;
            const pad = Math.round(Math.max(bw, bh) * 0.12);

            minX = Math.max(0, minX - pad);
            minY = Math.max(0, minY - pad);
            maxX = Math.min(sw - 1, maxX + pad);
            maxY = Math.min(sh - 1, maxY + pad);

            const cw = maxX - minX + 1;
            const ch = maxY - minY + 1;
            const outSize = 128;
            const outCanvas = document.createElement("canvas");
            outCanvas.width = outSize;
            outCanvas.height = outSize;
            const octx = outCanvas.getContext("2d");
            if (!octx) {
                setDynamicFavicon(sourcePath);
                return;
            }

            const scale = Math.min((outSize * 0.9) / cw, (outSize * 0.9) / ch);
            const dw = cw * scale;
            const dh = ch * scale;
            const dx = (outSize - dw) / 2;
            const dy = (outSize - dh) / 2;

            octx.clearRect(0, 0, outSize, outSize);
            octx.drawImage(scanCanvas, minX, minY, cw, ch, dx, dy, dw, dh);
            setDynamicFavicon(outCanvas.toDataURL("image/png"));
        } catch {
            setDynamicFavicon(sourcePath);
        }
    };

    image.onerror = () => setDynamicFavicon(sourcePath);
    image.src = `${sourcePath}?v=${Date.now()}`;
}

function setStatus(text, tone = "") {
    el.statusLine.textContent = text;
    el.statusLine.className = "status-line";
    if (tone) el.statusLine.classList.add(tone);
}

function setProgressVisible(visible) {
    if (el.progressBlock) el.progressBlock.hidden = !visible;
}

function setQuestionBoxIntroMode(active) {
    if (!el.questionBox) return;
    el.questionBox.classList.toggle("intro-mode", Boolean(active));
}

function setAnswerLayout(mode = "asking") {
    const askMode = mode === "asking";
    el.btnDontKnow.hidden = !askMode;
    el.btnProbably.hidden = !askMode;
    el.btnProbablyNo.hidden = !askMode;
}

function setButtons(enabled, mode = "asking") {
    const askMode = mode === "asking";
    el.btnYes.disabled = !enabled;
    el.btnNo.disabled = !enabled;
    el.btnDontKnow.disabled = !enabled || !askMode;
    el.btnProbably.disabled = !enabled || !askMode;
    el.btnProbablyNo.disabled = !enabled || !askMode;
}

function updateStaticStats() {
    el.datasetStat.textContent = `Personaggi: ${state.characters.length}`;
    el.sourceStat.textContent = `Sorgente: ${state.source}`;
}

function updateProgress() {
    const progress = Math.round((state.askedCount / MAX_QUESTIONS) * 100);
    el.progressLabel.textContent = `DOMANDA ${state.askedCount} / ${MAX_QUESTIONS}`;
    el.progressFill.style.width = `${Math.max(0, Math.min(100, progress))}%`;
    el.answersStat.textContent = `Risposte: ${state.askedCount}/${MAX_QUESTIONS}`;
    if (el.answersValue) el.answersValue.textContent = `${state.askedCount}/${MAX_QUESTIONS}`;
}

function updateAttemptsStat() {
    el.attemptsStat.textContent = `Tentativi: ${state.guessAttempts}/${MAX_GUESS_ATTEMPTS}`;
    if (el.attemptsValue) el.attemptsValue.textContent = `${state.guessAttempts}/${MAX_GUESS_ATTEMPTS}`;
}

function setQuestionText(text, instruction = "") {
    if (instruction) el.instruction.textContent = instruction;
    el.questionText.textContent = text;
}

function sanitizeHttpUrl(value) {
    if (typeof value !== "string" || !value) return "";
    try {
        const parsed = new URL(value);
        if (parsed.protocol === "http:" || parsed.protocol === "https:") {
            return parsed.href;
        }
    } catch {
        return "";
    }
    return "";
}

function normalizeCacheKey(name) {
    return String(name || "").trim().toLowerCase();
}

function loadImageCache() {
    try {
        const raw = localStorage.getItem(IMAGE_CACHE_KEY);
        if (!raw) return;
        const parsed = JSON.parse(raw);
        if (parsed && typeof parsed === "object") {
            state.imageCache = parsed;
        }
    } catch {
        state.imageCache = {};
    }
}

function saveImageCache() {
    try {
        localStorage.setItem(IMAGE_CACHE_KEY, JSON.stringify(state.imageCache));
    } catch {
        /* ignore cache write errors */
    }
}

function readCachedImage(name) {
    const key = normalizeCacheKey(name);
    if (!key) return "";
    const row = state.imageCache[key];
    if (!row || typeof row !== "object") return "";

    const age = Date.now() - Number(row.ts || 0);
    if (!row.url || age > IMAGE_CACHE_TTL_MS) {
        delete state.imageCache[key];
        return "";
    }

    return sanitizeHttpUrl(row.url);
}

function writeCachedImage(name, url) {
    const key = normalizeCacheKey(name);
    const normalized = sanitizeHttpUrl(url);
    if (!key || !normalized) return;
    state.imageCache[key] = { url: normalized, ts: Date.now() };
    saveImageCache();
}

function fetchJsonWithTimeout(url, timeoutMs = IMAGE_FETCH_TIMEOUT_MS) {
    const controller = new AbortController();
    const timeout = window.setTimeout(() => controller.abort(), timeoutMs);
    return fetch(url, {
        method: "GET",
        signal: controller.signal,
        headers: { Accept: "application/json" }
    })
        .then((response) => {
            if (!response.ok) throw new Error(`HTTP ${response.status}`);
            return response.json();
        })
        .finally(() => {
            window.clearTimeout(timeout);
        });
}

async function fetchWikipediaImageByTitle(title, lang) {
    const cleanedTitle = String(title || "").trim();
    if (!cleanedTitle) return "";

    const api = `https://${lang}.wikipedia.org/w/api.php?action=query&format=json&formatversion=2&origin=*&redirects=1&prop=pageimages&piprop=thumbnail&pithumbsize=900&titles=${encodeURIComponent(cleanedTitle)}`;
    const data = await fetchJsonWithTimeout(api);
    const page = data?.query?.pages?.[0];
    return sanitizeHttpUrl(page?.thumbnail?.source || "");
}

async function searchWikipediaTitles(name, lang) {
    const cleanedName = String(name || "").trim();
    if (!cleanedName) return [];

    const api = `https://${lang}.wikipedia.org/w/api.php?action=query&format=json&formatversion=2&origin=*&list=search&srlimit=4&srsearch=${encodeURIComponent(cleanedName)}`;
    const data = await fetchJsonWithTimeout(api);
    const rows = Array.isArray(data?.query?.search) ? data.query.search : [];
    return rows
        .map((row) => String(row?.title || "").trim())
        .filter(Boolean);
}

async function resolveWikipediaImage(name) {
    const cached = readCachedImage(name);
    if (cached) return cached;

    const normalizedName = String(name || "").trim();
    if (!normalizedName) return "";

    const directTitles = Array.from(new Set([
        normalizedName,
        normalizedName.replace(/\s+\(.+?\)\s*$/, "").trim()
    ].filter(Boolean)));

    for (const lang of IMAGE_LANGS) {
        for (const title of directTitles) {
            try {
                const image = await fetchWikipediaImageByTitle(title, lang);
                if (image) {
                    writeCachedImage(name, image);
                    return image;
                }
            } catch {
                /* try next source */
            }
        }
    }

    for (const lang of IMAGE_LANGS) {
        try {
            const titles = await searchWikipediaTitles(normalizedName, lang);
            for (const title of titles) {
                try {
                    const image = await fetchWikipediaImageByTitle(title, lang);
                    if (image) {
                        writeCachedImage(name, image);
                        return image;
                    }
                } catch {
                    /* keep scanning search results */
                }
            }
        } catch {
            /* try next language */
        }
    }

    return "";
}

async function ensureCharacterImage(character) {
    if (!character) return "";

    const current = sanitizeHttpUrl(character.image);
    const cached = readCachedImage(character.name);
    if (cached) {
        character.image = cached;
        return cached;
    }

    try {
        const online = await resolveWikipediaImage(character.name);
        if (online) {
            character.image = online;
            return online;
        }
    } catch {
        /* keep fallback */
    }

    return current;
}

function applyCharacterImage(src, fallback = PERSON_IMAGE_FALLBACK) {
    const finalSrc = src || fallback;
    el.characterImage.onerror = () => {
        el.characterImage.onerror = null;
        el.characterImage.src = fallback;
    };
    el.characterImage.src = finalSrc;
}

async function setCandidateCharacter(character) {
    if (!character) {
        setGuideCharacter();
        return;
    }

    const viewToken = ++state.characterViewToken;
    el.characterName.textContent = character.name;
    if (el.characterFrame) el.characterFrame.classList.add("person-mode");

    const firstImage = sanitizeHttpUrl(character.image);
    applyCharacterImage(firstImage, PERSON_IMAGE_FALLBACK);

    const resolved = await ensureCharacterImage(character);
    if (viewToken !== state.characterViewToken) return;
    if (resolved) applyCharacterImage(resolved, PERSON_IMAGE_FALLBACK);
}

function warmImageCacheInBackground(limit = 12) {
    const queue = state.characters.slice(0, Math.max(0, limit));
    queue.forEach((character, index) => {
        window.setTimeout(() => {
            void ensureCharacterImage(character);
        }, index * 140);
    });
}

function setGuideCharacter() {
    state.characterViewToken += 1;
    el.characterName.textContent = GUIDE_NAME;
    if (el.characterFrame) el.characterFrame.classList.remove("person-mode");
    applyCharacterImage(GUIDE_IMAGE, GUIDE_IMAGE_FALLBACK);
}

function saveCharacterCatalog() {
    try {
        const payload = {
            ts: Date.now(),
            source: state.source,
            count: state.characters.length,
            characters: state.characters.map((character) => ({
                id: character.id,
                name: character.name,
                image: sanitizeHttpUrl(character.image || "")
            }))
        };
        localStorage.setItem(CATALOG_CACHE_KEY, JSON.stringify(payload));
    } catch {
        /* ignore cache write errors */
    }
}

function tutorialIsAvailable() {
    return Boolean(
        el.tutorialOverlay &&
        el.tutorialTitle &&
        el.tutorialBody &&
        el.tutorialNext &&
        el.tutorialSkip
    );
}

function shouldAutoOpenTutorial() {
    if (!tutorialIsAvailable()) return false;
    try {
        return localStorage.getItem(TUTORIAL_DISABLED_KEY) !== "1";
    } catch {
        return true;
    }
}

function renderTutorialDots() {
    if (!el.tutorialDots) return;
    el.tutorialDots.innerHTML = TUTORIAL_STEPS.map((_, index) => {
        const cls = index === state.tutorialIndex ? "dot active" : "dot";
        return `<span class="${cls}" aria-hidden="true"></span>`;
    }).join("");
}

function renderTutorialStep() {
    const step = TUTORIAL_STEPS[state.tutorialIndex] || TUTORIAL_STEPS[0];
    if (!step) return;
    el.tutorialTitle.textContent = step.title;
    el.tutorialBody.textContent = step.text;
    el.tutorialNext.textContent = state.tutorialIndex >= TUTORIAL_STEPS.length - 1 ? "INIZIA A GIOCARE" : "AVANTI";
    renderTutorialDots();
}

function closeTutorial() {
    if (!tutorialIsAvailable()) return;
    if (el.tutorialNever?.checked) {
        try {
            localStorage.setItem(TUTORIAL_DISABLED_KEY, "1");
        } catch {
            /* ignore storage write errors */
        }
    }
    el.tutorialOverlay.hidden = true;
    document.body.classList.remove("tutorial-open");
}

function openTutorial() {
    if (!tutorialIsAvailable()) return;
    state.tutorialIndex = 0;
    if (el.tutorialNever) el.tutorialNever.checked = false;
    renderTutorialStep();
    el.tutorialOverlay.hidden = false;
    document.body.classList.add("tutorial-open");
}

function nextTutorialStep() {
    if (state.tutorialIndex >= TUTORIAL_STEPS.length - 1) {
        closeTutorial();
        return;
    }
    state.tutorialIndex += 1;
    renderTutorialStep();
}

function bindTutorialEvents() {
    if (!tutorialIsAvailable()) return;
    el.tutorialNext.addEventListener("click", () => nextTutorialStep());
    el.tutorialSkip.addEventListener("click", () => closeTutorial());
    el.tutorialClose?.addEventListener("click", () => closeTutorial());
    el.tutorialOverlay.addEventListener("click", (event) => {
        if (event.target === el.tutorialOverlay) closeTutorial();
    });
    document.addEventListener("keydown", (event) => {
        if (event.key === "Escape" && !el.tutorialOverlay.hidden) {
            closeTutorial();
        }
    });
}

function normalizeProbabilities(values) {
    const sum = values.reduce((acc, v) => acc + v, 0);
    if (sum <= 0) {
        const base = 1 / Math.max(1, values.length);
        return values.map(() => base);
    }
    return values.map((v) => v / sum);
}

function initPosteriors() {
    const base = 1 / Math.max(1, state.characters.length);
    return state.characters.map(() => base);
}

function traitYesProbability(trait) {
    if (trait === true) return 0.85;
    if (trait === false) return 0.15;
    return 0.5;
}

function answerStrength(answerType) {
    if (answerType === "yes") return 1;
    if (answerType === "no") return 0;
    if (answerType === "probably_yes") return 0.75;
    if (answerType === "probably_no") return 0.25;
    return null;
}

function traitLikelihood(trait, strength) {
    if (strength === null) return 1;
    if (trait === null || trait === undefined) return 0.5;
    if (trait === true) return 0.12 + 0.76 * strength;
    return 0.12 + 0.76 * (1 - strength);
}

function applyEvidence(questionKey, answerType) {
    const strength = answerStrength(answerType);
    if (strength === null) return;

    const next = state.characters.map((character, index) => {
        const prior = state.posteriors[index] || 0;
        const trait = character.traits[questionKey];
        return prior * traitLikelihood(trait, strength);
    });

    state.posteriors = normalizeProbabilities(next);
}

function shannonEntropy(probs) {
    let h = 0;
    for (const p of probs) {
        if (p > 0) h -= p * Math.log2(p);
    }
    return h;
}

function expectedEntropyForQuestion(questionKey) {
    const yesWeights = [];
    const noWeights = [];
    let pYes = 0;
    let pNo = 0;
    let knownMass = 0;

    for (let i = 0; i < state.characters.length; i += 1) {
        const p = state.posteriors[i] || 0;
        const trait = state.characters[i].traits[questionKey];
        if (trait === true || trait === false) knownMass += p;

        const py = traitYesProbability(trait);
        const pn = 1 - py;
        const wy = p * py;
        const wn = p * pn;

        yesWeights.push(wy);
        noWeights.push(wn);
        pYes += wy;
        pNo += wn;
    }

    const yesPosterior = normalizeProbabilities(yesWeights);
    const noPosterior = normalizeProbabilities(noWeights);

    const expected = pYes * shannonEntropy(yesPosterior) + pNo * shannonEntropy(noPosterior);
    return { expectedEntropy: expected, knownMass };
}

function chooseBestQuestion() {
    const unanswered = QUESTION_BANK.filter((q) => !state.askedKeys.has(q.key));
    if (!unanswered.length) return null;

    const currentEntropy = shannonEntropy(state.posteriors);
    let best = null;
    let bestScore = -Infinity;

    for (const question of unanswered) {
        const { expectedEntropy, knownMass } = expectedEntropyForQuestion(question.key);
        if (knownMass < 0.15) continue;

        const gain = currentEntropy - expectedEntropy;
        const score = gain + knownMass * 0.08;

        if (score > bestScore) {
            bestScore = score;
            best = question;
        }
    }

    if (!best) {
        best = unanswered
            .map((q) => ({ q, knownMass: expectedEntropyForQuestion(q.key).knownMass }))
            .sort((a, b) => b.knownMass - a.knownMass)[0].q;
    }

    return best;
}

function rankCandidates() {
    const rows = state.characters.map((character, index) => ({
        character,
        probability: state.posteriors[index] || 0
    }));

    rows.sort((a, b) => b.probability - a.probability || a.character.name.localeCompare(b.character.name, "it"));
    return rows;
}

function updateCandidateList() {
    const top = rankCandidates().slice(0, CANDIDATE_PREVIEW);
    if (!top.length) {
        el.candidateList.innerHTML = "<li>Nessun candidato</li>";
        return;
    }
    el.candidateList.innerHTML = top
        .map((row) => `<li>${row.character.name} - ${Math.round(row.probability * 100)}%</li>`)
        .join("");
}

function shouldPrepareGuessing() {
    if (state.askedCount >= MAX_QUESTIONS) return true;
    const left = QUESTION_BANK.length - state.askedKeys.size;
    if (left <= 0) return true;

    const ranked = rankCandidates();
    const top = ranked[0];
    if (!top) return true;
    const second = ranked[1];
    const margin = top.probability - (second ? second.probability : 0);

    if (state.askedCount >= MIN_QUESTIONS_BEFORE_GUESS && top.probability >= GUESS_CONFIDENCE_THRESHOLD) return true;
    if (state.askedCount >= 8 && top.probability >= MID_GAME_GUESS_THRESHOLD && margin >= MID_GAME_MARGIN_THRESHOLD) return true;

    return false;
}

function askNextQuestion() {
    const next = chooseBestQuestion();
    if (!next) {
        prepareGuessing();
        return;
    }

    state.currentQuestionKey = next.key;
    setQuestionText(next.text, "Rispondi con SI, NO o una risposta incerta");
}

function showIntroPrompt() {
    state.mode = "intro";
    state.askedCount = 0;
    state.guessAttempts = 0;

    updateProgress();
    updateAttemptsStat();
    setProgressVisible(false);
    setQuestionBoxIntroMode(true);
    setAnswerLayout("intro");
    setButtons(true, "intro");
    setGuideCharacter();
    setQuestionText("SEI PRONTO PER GIOCARE?", "Il Genio Indovino e pronto a sfidarti...");
}

function showNotReadyPrompt() {
    state.mode = "intro_no";
    state.askedCount = 0;
    state.guessAttempts = 0;

    updateProgress();
    updateAttemptsStat();
    setProgressVisible(false);
    setQuestionBoxIntroMode(true);
    setAnswerLayout("intro_no");
    setButtons(true, "intro");
    setGuideCharacter();

    const index = Math.max(0, state.introNoCount - 1) % INTRO_NO_LINES.length;
    const line = INTRO_NO_LINES[index];
    setQuestionText(line.question, line.instruction);
}

function showCurrentGuessQuestion(isRetry = false) {
    const row = state.guessOrder[state.guessIndex];
    if (!row) return;
    const guess = row.character;
    if (isRetry) {
        setQuestionText(`Allora provo: e ${guess.name}?`, "Nuovo tentativo");
    } else {
        setQuestionText(`Il tuo personaggio e ${guess.name}?`, "Conferma con SI o NO");
    }
    void setCandidateCharacter(guess);
}

function prepareGuessing() {
    state.mode = "guessing";
    state.guessOrder = rankCandidates();
    state.guessIndex = 0;
    state.guessAttempts = 1;

    updateAttemptsStat();
    setProgressVisible(true);
    setQuestionBoxIntroMode(false);
    setAnswerLayout("guessing");
    setButtons(true, "guessing");

    if (!state.guessOrder.length) {
        state.mode = "finished";
        setQuestionText("NON CI SONO. VUOI RIPROVARE?", "Tentativi esauriti.");
        setAnswerLayout("finished");
        return;
    }

    showCurrentGuessQuestion(false);
}

function startRound() {
    activatePendingDataset(true);
    state.mode = "asking";
    state.askedCount = 0;
    state.askedKeys = new Set();
    state.answers = {};
    state.currentQuestionKey = null;
    state.guessOrder = [];
    state.guessIndex = 0;
    state.guessAttempts = 0;
    state.posteriors = initPosteriors();

    updateAttemptsStat();
    setProgressVisible(true);
    setQuestionBoxIntroMode(false);
    setGuideCharacter();
    updateProgress();
    updateCandidateList();
    setAnswerLayout("asking");
    setButtons(true, "asking");
    askNextQuestion();
}

function handleGuessingAnswer(answerType) {
    const row = state.guessOrder[state.guessIndex];
    const currentGuess = row ? row.character : null;

    if (answerType === "yes") {
        state.mode = "finished";
        if (currentGuess) {
            void setCandidateCharacter(currentGuess);
            setQuestionText(`L'HO INDOVINATO: ${currentGuess.name}!`, "Partita conclusa. Vuoi farne un'altra?");
        } else {
            setQuestionText("PARTITA CONCLUSA. VUOI FARNE UN'ALTRA?", "Perfetto, ho indovinato.");
        }
        setAnswerLayout("finished");
        setButtons(true, "finished");
        return;
    }

    if (answerType === "no") {
        if (state.guessAttempts >= MAX_GUESS_ATTEMPTS || state.guessIndex + 1 >= state.guessOrder.length) {
            state.mode = "finished";
            setQuestionText("NON CI SONO. VUOI RIPROVARE?", "Tentativi esauriti.");
            setAnswerLayout("finished");
            setButtons(true, "finished");
            return;
        }

        state.guessIndex += 1;
        state.guessAttempts += 1;
        updateAttemptsStat();

        showCurrentGuessQuestion(true);
    }
}

function applyAnswer(answerType) {
    if (state.mode === "intro" || state.mode === "intro_no") {
        if (answerType === "yes" || answerType === "probably_yes") {
            state.introNoCount = 0;
            startRound();
            return;
        }
        state.introNoCount += 1;
        showNotReadyPrompt();
        return;
    }

    if (state.mode === "finished") {
        if (answerType === "yes" || answerType === "probably_yes") {
            startRound();
            return;
        }
        state.introNoCount += 1;
        showNotReadyPrompt();
        return;
    }

    if (state.mode === "guessing") {
        handleGuessingAnswer(answerType);
        return;
    }

    if (state.mode !== "asking" || !state.currentQuestionKey) return;

    state.askedKeys.add(state.currentQuestionKey);
    state.answers[state.currentQuestionKey] = answerType;
    state.askedCount += 1;

    if (answerType !== "unknown") {
        applyEvidence(state.currentQuestionKey, answerType);
    }

    updateProgress();
    updateCandidateList();

    if (shouldPrepareGuessing()) {
        prepareGuessing();
        return;
    }

    askNextQuestion();
}

function bindEvents() {
    el.btnYes.addEventListener("click", () => applyAnswer("yes"));
    el.btnNo.addEventListener("click", () => applyAnswer("no"));
    el.btnDontKnow.addEventListener("click", () => applyAnswer("unknown"));
    el.btnProbably.addEventListener("click", () => applyAnswer("probably_yes"));
    el.btnProbablyNo.addEventListener("click", () => applyAnswer("probably_no"));
}

function bootstrap() {
    state.source = "locale";
    state.characters = LOCAL_SEED.map((character) => cloneCharacter(character));
    state.posteriors = initPosteriors();
    loadImageCache();

    optimizeTabIconFromSource();
    updateStaticStats();
    setGuideCharacter();
    setStatus("Algoritmo adattivo attivo. Connessione a Wikidata in corso...", "");
    updateCandidateList();
    saveCharacterCatalog();
    bindEvents();
    bindTutorialEvents();
    showIntroPrompt();
    warmImageCacheInBackground();
    void loadCharactersFromWikidata();
    if (shouldAutoOpenTutorial()) {
        window.setTimeout(() => openTutorial(), 320);
    }
}

bootstrap();
