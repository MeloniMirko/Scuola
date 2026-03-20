"use strict";

const CATALOG_CACHE_KEY = "genio_indovino_catalog_v4_clear";
const GUIDE_IMAGE_FALLBACK = "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a0/Question_mark_alternate.svg/400px-Question_mark_alternate.svg.png";
const SPARQL_ENDPOINT = "https://query.wikidata.org/sparql";
const WIKIDATA_LIMIT = 60;
const WIKIDATA_TIMEOUT_MS = 15000;
const WIKIDATA_MIN_ACCEPTED = 20;
const CHARACTER_IMAGE_CACHE_KEY = "genio_indovino_guide_images_v4";
const CHARACTER_IMAGE_CACHE_TTL_MS = 1000 * 60 * 60 * 24 * 30;

// Sanitize images immediately at import
const FALLBACK_CHARACTERS = typeof SHARED_CHARACTERS_DATA !== 'undefined' ? SHARED_CHARACTERS_DATA.map(d => ({ name: d.args[1], image: sanitizeHttpUrl(d.args[2]) })) : [];

const state = { characters: [], filtered: [], source: "locale", lastUpdate: 0, imageCache: {}, imageInFlight: {} };

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
        return value.trim().replace(/^http:\/\//i, "https://");
    } catch { }
    return value;
}

function normalizeName(value) { return String(value || "").trim().toLowerCase(); }

function loadImageCache() {
    try {
        const raw = localStorage.getItem(CHARACTER_IMAGE_CACHE_KEY);
        if (raw) { const parsed = JSON.parse(raw); if (parsed && typeof parsed === "object") state.imageCache = parsed; }
    } catch { state.imageCache = {}; }
}

function saveImageCache() {
    try { localStorage.setItem(CHARACTER_IMAGE_CACHE_KEY, JSON.stringify(state.imageCache)); } catch { }
}

function readCachedImage(name) {
    const key = normalizeName(name);
    if (!key) return "";
    const row = state.imageCache[key];
    if (!row || typeof row !== "object") return "";
    const age = Date.now() - Number(row.ts || 0);
    if (!row.url || age > CHARACTER_IMAGE_CACHE_TTL_MS) { delete state.imageCache[key]; return ""; }
    return sanitizeHttpUrl(row.url);
}

function writeCachedImage(name, url) {
    const key = normalizeName(name);
    const value = sanitizeHttpUrl(url);
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
    return fetch(url, { method: "GET", signal: controller.signal, headers: { Accept: "application/json" } })
        .then((response) => { if (!response.ok) throw new Error(`HTTP ${response.status}`); return response.json(); })
        .finally(() => { window.clearTimeout(timeout); });
}

function uniqueCharacters(list) {
    const map = new Map();
    for (const row of list) {
        const name = String(row?.name || "").trim();
        if (!name) continue;
        const key = normalizeName(name);
        const image = sanitizeHttpUrl(row?.image || "");
        if (!map.has(key)) { map.set(key, { name, image }); continue; }
        const current = map.get(key);
        if (!current.image && image) current.image = image;
    }
    return Array.from(map.values()).sort((a, b) => a.name.localeCompare(b.name, "it"));
}

function saveCatalog(characters, source) {
    try {
        const payload = { ts: Date.now(), source, count: characters.length, characters };
        localStorage.setItem(CATALOG_CACHE_KEY, JSON.stringify(payload));
    } catch { }
}

function readCatalog() {
    try {
        const raw = localStorage.getItem(CATALOG_CACHE_KEY);
        if (!raw) return null;
        const parsed = JSON.parse(raw);
        if (!parsed || !Array.isArray(parsed.characters)) return null;
        return { ts: Number(parsed.ts || 0), source: String(parsed.source || "cache"), characters: uniqueCharacters(parsed.characters) };
    } catch { return null; }
}

function renderCharacters(list) {
    if (!el.charactersGrid) return;
    el.charactersGrid.innerHTML = "";
    if (!list.length) {
        const empty = document.createElement("li");
        empty.className = "characters-empty";
        empty.textContent = "Nessun personaggio trovato.";
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
        image.alt = character.name;

        const cachedImage = readCachedImage(character.name);
        if (cachedImage) {
            image.src = cachedImage;
        } else if (character.image) {
            image.src = character.image;
            writeCachedImage(character.name, character.image);
        } else {
            image.src = GUIDE_IMAGE_FALLBACK;
        }

        image.onerror = function () {
            if (this.src !== GUIDE_IMAGE_FALLBACK) {
                this.onerror = null;
                this.src = GUIDE_IMAGE_FALLBACK;
            }
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
    el.charactersMeta.textContent = `${label} personaggi (${state.source}) - ${date}`;
}

function applyFilter() {
    const query = normalizeName(el.characterSearch?.value || "");
    state.filtered = !query ? [...state.characters] : state.characters.filter((character) => normalizeName(character.name).includes(query));
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

function buildSparqlQuery(limit = 60) {
    const safeLimit = Math.max(20, Math.min(100, Math.floor(limit || 60)));
    return `SELECT ?item ?itemLabel ?image ?sitelinks WHERE { 
  ?item wdt:P31 wd:Q5; wdt:P18 ?image. 
  { ?item wdt:P106 wd:Q901. } UNION { ?item wdt:P106 wd:Q169470. } UNION { ?item wdt:P106 wd:Q593074. } UNION { ?item wdt:P106 wd:Q1067611. } UNION { ?item wdt:P106 wd:Q131954. } UNION { ?item wdt:P106 wd:Q79808. } UNION { ?item wdt:P106 wd:Q205398. }
  ?item wikibase:sitelinks ?sitelinks. 
  FILTER(?sitelinks > 30) 
  SERVICE wikibase:label { bd:serviceParam wikibase:language "it,en". ?item rdfs:label ?itemLabel. } 
} ORDER BY DESC(?sitelinks) LIMIT ${safeLimit}`;
}

async function fetchWikidataCharacters() {
    const query = buildSparqlQuery();
    const url = `${SPARQL_ENDPOINT}?format=json&query=${encodeURIComponent(query)}`;
    const payload = await fetchJsonWithTimeout(url, WIKIDATA_TIMEOUT_MS);
    const rows = Array.isArray(payload?.results?.bindings) ? payload.results.bindings : [];
    return rows
        .map((row) => {
            const name = String(row?.itemLabel?.value || "").trim();
            const image = sanitizeHttpUrl(row?.image?.value || "");
            return { name, image };
        })
        .filter((row) => row.name && row.image);
}

async function refreshFromOnline() {
    setStatus("Caricamento personaggi da Wikidata...", "");
    try {
        const online = await fetchWikidataCharacters();
        if (online.length < WIKIDATA_MIN_ACCEPTED) throw new Error("Dataset troppo piccolo");
        const merged = uniqueCharacters([...FALLBACK_CHARACTERS, ...online]);
        activateCharacters(merged, "wikidata + locale");
        saveCatalog(merged, "wikidata + locale");
        setStatus(`Caricati ${merged.length} personaggi`, "ok");
    } catch (e) {
        activateCharacters(FALLBACK_CHARACTERS, "locale");
        saveCatalog(FALLBACK_CHARACTERS, "locale");
        setStatus("Wikidata non disponibile - usando lista locale", "bad");
    }
}

function bindEvents() {
    el.characterSearch?.addEventListener("input", () => applyFilter());
    el.refreshCharacters?.addEventListener("click", () => { void refreshFromOnline(); });
}

function bootstrap() {
    bindEvents();
    loadImageCache();

    activateCharacters(FALLBACK_CHARACTERS, "locale");
    saveCatalog(FALLBACK_CHARACTERS, "locale");
    setStatus("Caricamento lista locale...", "");

    void refreshFromOnline();
}

bootstrap();
