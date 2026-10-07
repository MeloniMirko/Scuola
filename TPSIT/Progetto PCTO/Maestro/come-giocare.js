"use strict";

const GUIDE_IMAGE_FALLBACK = "assets/loghetto.webp";
const FALLBACK_IMAGE = "assets/loghetto.webp";
const WIKIMEDIA_THUMB_WIDTH = 320;

// -------------------- DATA --------------------
const CHARACTERS_JSON_URL = "data/characters.json";

// -------------------- STATE --------------------

const state = {
    characters: [],
    filtered: [],
    source: "locale",
    lastUpdate: 0
};

// -------------------- ELEMENTS --------------------

const el = {
    charactersGrid: document.getElementById("charactersGrid"),
    charactersMeta: document.getElementById("charactersMeta"),
    charactersStatus: document.getElementById("charactersStatus"),
    characterSearch: document.getElementById("characterSearch")
};

// -------------------- UTILS --------------------

function sanitizeHttpUrl(url) {
    if (!url || typeof url !== "string") return "";

    try {
        let clean = url.trim();

        if (clean.includes("wikimedia.org")) {
            clean = clean.replace(/^http:\/\//i, "https://");
        }

        return clean;
    } catch {
        return "";
    }
}

function normalizeName(value) {
    return String(value || "").trim().toLowerCase();
}

function toWikimediaThumb(url, width = WIKIMEDIA_THUMB_WIDTH) {
    if (!url || typeof url !== "string") return url;
    if (!url.includes("upload.wikimedia.org")) return url;
    if (url.includes("/wikipedia/commons/thumb/")) return url;

    try {
        const parsed = new URL(url);
        const prefix = "/wikipedia/commons/";
        if (!parsed.pathname.startsWith(prefix)) return url;

        const pathAfter = parsed.pathname.slice(prefix.length);
        const fileName = pathAfter.split("/").pop();
        if (!fileName) return url;

        parsed.pathname = `${prefix}thumb/${pathAfter}/${width}px-${fileName}`;
        return parsed.toString();
    } catch {
        return url;
    }
}

function fromWikimediaThumb(url) {
    if (!url || typeof url !== "string") return "";
    if (!url.includes("/wikipedia/commons/thumb/")) return "";
    try {
        const parsed = new URL(url);
        parsed.pathname = parsed.pathname.replace("/wikipedia/commons/thumb/", "/wikipedia/commons/");
        parsed.pathname = parsed.pathname.replace(/\/\d+px-[^/]+$/, (match) => {
            const parts = match.split("/");
            return parts.length > 1 ? "" : match;
        });
        return parsed.toString();
    } catch {
        return "";
    }
}

async function loadCharacters() {
    const response = await fetch(CHARACTERS_JSON_URL);
    if (!response.ok) {
        throw new Error("Errore nel caricamento dei personaggi.");
    }

    const data = await response.json();
    const list = Array.isArray(data) ? data : [];

    return list.map(c => ({
        name: c.name,
        image: sanitizeHttpUrl(toWikimediaThumb(c.image))
    }));
}


function setSafeImage(img, src) {
    if (!src || typeof src !== "string") {
        img.src = FALLBACK_IMAGE;
        return;
    }

    const safeSrc = src.trim();
    const originalSrc = fromWikimediaThumb(safeSrc);
    img.dataset.originalTried = "";

    img.referrerPolicy = "no-referrer";
    img.src = safeSrc;

    img.onerror = function () {
        console.warn("IMG ERROR:", safeSrc);
        if (originalSrc && this.dataset.originalTried !== "1") {
            this.dataset.originalTried = "1";
            this.src = originalSrc;
            return;
        }
        this.onerror = null;
        this.src = FALLBACK_IMAGE;
    };
}


// -------------------- CORE --------------------

function uniqueCharacters(list) {
    const map = new Map();

    for (const c of list) {
        const name = String(c.name || "").trim();
        if (!name) continue;

        const key = normalizeName(name);
        const image = sanitizeHttpUrl(c.image);

        if (!map.has(key)) {
            map.set(key, { name, image });
        } else {
            const existing = map.get(key);
            if (!existing.image && image) {
                existing.image = image;
            }
        }
    }

    return Array.from(map.values())
        .sort((a, b) => a.name.localeCompare(b.name, "it"));
}

// -------------------- UI --------------------

function renderCharacters(list) {
    if (!el.charactersGrid) return;

    el.charactersGrid.innerHTML = "";

    if (!list.length) {
        el.charactersGrid.innerHTML = "<li>Nessun personaggio</li>";
        return;
    }

    const fragment = document.createDocumentFragment();

    for (const character of list) {
        const li = document.createElement("li");
        li.className = "character-card";

        const img = document.createElement("img");
        img.className = "character-thumb";
        img.alt = character.name;
        img.loading = "lazy";
        img.decoding = "async";
        
        if (character.image) {
            setSafeImage(img, character.image);
        } else {
            img.src = GUIDE_IMAGE_FALLBACK;
        }

        const name = document.createElement("p");
        name.textContent = character.name;

        li.appendChild(img);
        li.appendChild(name);
        fragment.appendChild(li);
    }

    el.charactersGrid.appendChild(fragment);
}

function updateMeta() {
    if (!el.charactersMeta) return;

    el.charactersMeta.textContent =
        `${state.characters.length} personaggi - ${state.source}`;
}

function setStatus(text) {
    if (el.charactersStatus) {
        el.charactersStatus.textContent = text;
    }
}

// -------------------- FILTER --------------------

function applyFilter() {
    const query = normalizeName(el.characterSearch?.value);

    state.filtered = !query
        ? [...state.characters]
        : state.characters.filter(c =>
            normalizeName(c.name).includes(query)
        );

    renderCharacters(state.filtered);
}

// -------------------- INIT --------------------

function activateCharacters(characters) {
    state.characters = uniqueCharacters(characters);
    state.filtered = [...state.characters];
    state.source = "locale";
    state.lastUpdate = Date.now();

    renderCharacters(state.filtered);
    updateMeta();
}

function bindEvents() {
    el.characterSearch?.addEventListener("input", applyFilter);
}

async function bootstrap() {
    bindEvents();

    try {
        const characters = await loadCharacters();
        activateCharacters(characters);
        setStatus("Lista caricata correttamente");
    } catch (err) {
        console.error(err);
        activateCharacters([]);
        setStatus("Impossibile caricare i personaggi");
    }
}

bootstrap();
