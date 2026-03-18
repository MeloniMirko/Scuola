"use strict";

const CATALOG_CACHE_KEY = "genio_indovino_catalog_v1";
const GUIDE_IMAGE_FALLBACK = "https://cdnjs.cloudflare.com/ajax/libs/twemoji/14.0.2/svg/1f9d1.svg";
const SPARQL_ENDPOINT = "https://query.wikidata.org/sparql";
const WIKIDATA_LIMIT = 280;
const WIKIDATA_TIMEOUT_MS = 12000;
const WIKIDATA_MIN_ACCEPTED = 40;
const IMAGE_RESOLVE_TIMEOUT_MS = 7000;
const IMAGE_LANGS = ["it", "en"];
const CHARACTER_IMAGE_CACHE_KEY = "genio_indovino_guide_images_v1";
const CHARACTER_IMAGE_CACHE_TTL_MS = 1000 * 60 * 60 * 24 * 30;

const FALLBACK_CHARACTERS = [
    { name: "Albert Einstein", image: "https://upload.wikimedia.org/wikipedia/commons/3/3e/Einstein_1921_by_F_Schmutzer_-_restoration.jpg" },
    { name: "Marie Curie", image: "https://upload.wikimedia.org/wikipedia/commons/7/7e/Marie_Curie_c1920.jpg" },
    { name: "Ada Lovelace", image: "https://upload.wikimedia.org/wikipedia/commons/a/a4/Ada_Lovelace_portrait.jpg" },
    { name: "Alan Turing", image: "https://upload.wikimedia.org/wikipedia/commons/7/79/Alan_Turing_az_1930-as_%C3%A9vekben.jpg" },
    { name: "Steve Jobs", image: "https://upload.wikimedia.org/wikipedia/commons/8/85/Steve_Jobs_Headshot_2010-CROP2.jpg" },
    { name: "Elon Musk", image: "https://upload.wikimedia.org/wikipedia/commons/8/8f/Elon_Musk_Royal_Society_%28crop1%29.jpg" },
    { name: "Bill Gates", image: "https://upload.wikimedia.org/wikipedia/commons/a/a0/Bill_Gates_2018.jpg" },
    { name: "Lionel Messi", image: "https://upload.wikimedia.org/wikipedia/commons/c/c1/Lionel_Messi_20180626.jpg" },
    { name: "Cristiano Ronaldo", image: "https://upload.wikimedia.org/wikipedia/commons/8/8c/Cristiano_Ronaldo_2018.jpg" },
    { name: "Serena Williams", image: "https://upload.wikimedia.org/wikipedia/commons/4/4a/Serena_Williams_at_2013_US_Open.jpg" },
    { name: "Novak Djokovic", image: "https://upload.wikimedia.org/wikipedia/commons/1/1d/Novak_Djokovic_at_ATP_2015.jpg" },
    { name: "Michael Jordan", image: "https://upload.wikimedia.org/wikipedia/commons/a/ae/Michael_Jordan_in_2014.jpg" },
    { name: "Beyonce", image: "https://upload.wikimedia.org/wikipedia/commons/5/52/Beyonce_-_The_Formation_World_Tour%2C_at_Wembley_Stadium_in_London%2C_England.jpg" },
    { name: "Taylor Swift", image: "https://upload.wikimedia.org/wikipedia/commons/f/f2/Taylor_Swift_The_Eras_Tour_01.jpg" },
    { name: "Lady Gaga", image: "https://upload.wikimedia.org/wikipedia/commons/3/35/Lady_Gaga%2C_Joanne_World_Tour%2C_Bell" },
    { name: "Leonardo DiCaprio", image: "https://upload.wikimedia.org/wikipedia/commons/7/76/Leonardo_DiCaprio_2014.jpg" },
    { name: "Barack Obama", image: "https://upload.wikimedia.org/wikipedia/commons/8/8d/President_Barack_Obama.jpg" },
    { name: "Donald Trump", image: "https://upload.wikimedia.org/wikipedia/commons/5/56/Donald_Trump_official_portrait.jpg" },
    { name: "Giorgia Meloni", image: "https://upload.wikimedia.org/wikipedia/commons/4/42/Giorgia_Meloni_2022.jpg" },
    { name: "Leonardo da Vinci", image: "https://upload.wikimedia.org/wikipedia/commons/e/ec/Leonardo_da_Vinci_-_presumed_self-portrait_-_WGA12798.jpg" }
];

const state = {
    characters: [],
    filtered: [],
    source: "locale",
    lastUpdate: 0,
    imageCache: {},
    imageInFlight: {}
};

const el = {
    charactersGrid: document.getElementById("charactersGrid"),
    charactersMeta: document.getElementById("charactersMeta"),
    charactersStatus: document.getElementById("charactersStatus"),
    characterSearch: document.getElementById("characterSearch"),
    refreshCharacters: document.getElementById("refreshCharacters")
};

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

function extractFilenameFromUrl(urlValue) {
    const url = sanitizeHttpUrl(urlValue);
    if (!url) return "";
    try {
        const parsed = new URL(url);
        const segments = parsed.pathname.split("/").filter(Boolean);
        if (!segments.length) return "";
        const raw = segments[segments.length - 1];
        return decodeURIComponent(raw).trim();
    } catch {
        return "";
    }
}

function buildCommonsThumbFromFile(fileName, width = 420) {
    const cleaned = String(fileName || "").trim();
    if (!cleaned) return "";
    return `https://commons.wikimedia.org/wiki/Special:FilePath/${encodeURIComponent(cleaned)}?width=${Math.max(120, Math.floor(width))}`;
}

function normalizeCharacterImageUrl(value) {
    const url = sanitizeHttpUrl(value);
    if (!url) return "";

    try {
        const parsed = new URL(url);
        const host = parsed.hostname.toLowerCase();
        const isWikiHost = host.includes("wikimedia.org") || host.includes("wikipedia.org");
        if (!isWikiHost) return parsed.href;

        if (parsed.pathname.includes("/Special:FilePath/")) {
            parsed.searchParams.set("width", "420");
            return parsed.href;
        }

        const fileName = extractFilenameFromUrl(parsed.href);
        if (fileName) return buildCommonsThumbFromFile(fileName, 420);
        return parsed.href;
    } catch {
        return "";
    }
}

function normalizeName(value) {
    return String(value || "").trim().toLowerCase();
}

function loadImageCache() {
    try {
        const raw = localStorage.getItem(CHARACTER_IMAGE_CACHE_KEY);
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
        localStorage.setItem(CHARACTER_IMAGE_CACHE_KEY, JSON.stringify(state.imageCache));
    } catch {
        /* ignore cache write errors */
    }
}

function readCachedImage(name) {
    const key = normalizeName(name);
    if (!key) return "";
    const row = state.imageCache[key];
    if (!row || typeof row !== "object") return "";

    const age = Date.now() - Number(row.ts || 0);
    if (!row.url || age > CHARACTER_IMAGE_CACHE_TTL_MS) {
        delete state.imageCache[key];
        return "";
    }

    return sanitizeHttpUrl(row.url);
}

function writeCachedImage(name, url) {
    const key = normalizeName(name);
    const value = normalizeCharacterImageUrl(url);
    if (!key || !value) return;
    state.imageCache[key] = { url: value, ts: Date.now() };
    saveImageCache();
}

function setStatus(text, tone = "") {
    if (!el.charactersStatus) return;
    el.charactersStatus.textContent = text;
    el.charactersStatus.className = "guide-status";
    if (tone) el.charactersStatus.classList.add(tone);
}

function fetchJsonWithTimeout(url, timeoutMs = WIKIDATA_TIMEOUT_MS) {
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

function uniqueCharacters(list) {
    const map = new Map();
    for (const row of list) {
        const name = String(row?.name || "").trim();
        if (!name) continue;
        const key = normalizeName(name);
        const fromRow = normalizeCharacterImageUrl(row?.image || "");
        const fromCache = readCachedImage(name);
        const image = fromCache || fromRow;
        if (!map.has(key)) {
            map.set(key, { name, image });
            continue;
        }
        const current = map.get(key);
        if (!current.image && image) current.image = image;
    }
    return Array.from(map.values()).sort((a, b) => a.name.localeCompare(b.name, "it"));
}

function saveCatalog(characters, source) {
    try {
        const payload = {
            ts: Date.now(),
            source,
            count: characters.length,
            characters
        };
        localStorage.setItem(CATALOG_CACHE_KEY, JSON.stringify(payload));
    } catch {
        /* ignore cache write errors */
    }
}

function readCatalog() {
    try {
        const raw = localStorage.getItem(CATALOG_CACHE_KEY);
        if (!raw) return null;
        const parsed = JSON.parse(raw);
        if (!parsed || !Array.isArray(parsed.characters)) return null;
        return {
            ts: Number(parsed.ts || 0),
            source: String(parsed.source || "cache"),
            characters: uniqueCharacters(parsed.characters)
        };
    } catch {
        return null;
    }
}

function renderCharacters(list) {
    if (!el.charactersGrid) return;
    el.charactersGrid.innerHTML = "";

    if (!list.length) {
        const empty = document.createElement("li");
        empty.className = "characters-empty";
        empty.textContent = "Nessun personaggio trovato per questa ricerca.";
        el.charactersGrid.appendChild(empty);
        return;
    }

    for (const character of list) {
        const item = document.createElement("li");
        item.className = "character-card";

        const image = document.createElement("img");
        image.className = "character-thumb";
        image.loading = "lazy";
        image.decoding = "async";
        image.referrerPolicy = "no-referrer";
        image.alt = character.name;
        image.src = sanitizeHttpUrl(character.image) || GUIDE_IMAGE_FALLBACK;
        image.onerror = () => {
            image.onerror = null;
            image.src = GUIDE_IMAGE_FALLBACK;
        };

        const name = document.createElement("p");
        name.className = "character-name";
        name.textContent = character.name;

        item.appendChild(image);
        item.appendChild(name);
        el.charactersGrid.appendChild(item);
    }
}

function updateMeta() {
    if (!el.charactersMeta) return;
    const count = state.filtered.length;
    const total = state.characters.length;
    const label = count === total ? `${total}` : `${count} su ${total}`;
    const date = state.lastUpdate ? new Date(state.lastUpdate).toLocaleString("it-IT") : "adesso";
    el.charactersMeta.textContent = `${label} personaggi visibili (${state.source}) - aggiornato ${date}`;
}

function applyFilter() {
    const query = normalizeName(el.characterSearch?.value || "");
    if (!query) {
        state.filtered = [...state.characters];
    } else {
        state.filtered = state.characters.filter((character) => normalizeName(character.name).includes(query));
    }
    renderCharacters(state.filtered);
    updateMeta();
}

function activateCharacters(characters, source) {
    state.characters = uniqueCharacters(characters);
    state.filtered = [...state.characters];
    state.source = source;
    state.lastUpdate = Date.now();
    renderCharacters(state.filtered);
    updateMeta();
}

function buildSparqlQuery(limit = WIKIDATA_LIMIT) {
    const safeLimit = Math.max(50, Math.min(420, Math.floor(limit || WIKIDATA_LIMIT)));
    return `
SELECT ?item ?itemLabel ?image ?sitelinks
WHERE {
  ?item wdt:P31 wd:Q5;
        wdt:P18 ?image.
  ?item wikibase:sitelinks ?sitelinks.
  FILTER(?sitelinks > 20)
  SERVICE wikibase:label {
    bd:serviceParam wikibase:language "it,en".
    ?item rdfs:label ?itemLabel.
  }
}
ORDER BY DESC(?sitelinks)
LIMIT ${safeLimit}
`;
}

async function fetchWikidataCharacters() {
    const query = buildSparqlQuery();
    const url = `${SPARQL_ENDPOINT}?format=json&query=${encodeURIComponent(query)}`;
    const payload = await fetchJsonWithTimeout(url, WIKIDATA_TIMEOUT_MS);
    const rows = Array.isArray(payload?.results?.bindings) ? payload.results.bindings : [];
    return rows
        .map((row) => ({
            name: String(row?.itemLabel?.value || "").trim(),
            image: sanitizeHttpUrl(row?.image?.value || "")
        }))
        .filter((row) => row.name);
}

async function refreshFromOnline() {
    setStatus("Aggiornamento personaggi da Wikidata...", "");
    try {
        const online = await fetchWikidataCharacters();
        if (online.length < WIKIDATA_MIN_ACCEPTED) {
            throw new Error("Dataset online troppo piccolo");
        }

        const merged = uniqueCharacters([...FALLBACK_CHARACTERS, ...online]);
        activateCharacters(merged, "wikidata + locale");
        saveCatalog(merged, "wikidata + locale");
        setStatus(`Lista online attiva: ${merged.length} personaggi`, "ok");
    } catch {
        if (!state.characters.length) {
            activateCharacters(FALLBACK_CHARACTERS, "locale");
            saveCatalog(FALLBACK_CHARACTERS, "locale");
        }
        setStatus("Wikidata non disponibile adesso, lista locale attiva.", "bad");
    }
}

function bindEvents() {
    el.characterSearch?.addEventListener("input", () => applyFilter());
    el.refreshCharacters?.addEventListener("click", () => {
        void refreshFromOnline();
    });
}

function bootstrap() {
    bindEvents();

    const cached = readCatalog();
    if (cached?.characters?.length) {
        activateCharacters(cached.characters, cached.source || "cache");
        state.lastUpdate = cached.ts || Date.now();
        updateMeta();
        setStatus("Lista caricata dalla cache locale.", "ok");
    } else {
        activateCharacters(FALLBACK_CHARACTERS, "locale");
        setStatus("Carico la lista iniziale locale...", "");
    }

    void refreshFromOnline();
}

bootstrap();
