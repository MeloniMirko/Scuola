"use strict";

const CATALOG_CACHE_KEY = "genio_indovino_catalog_v4_clear";
const GUIDE_IMAGE_FALLBACK = "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a0/Question_mark_alternate.svg/400px-Question_mark_alternate.svg.png";
const CHARACTER_IMAGE_CACHE_KEY = "genio_indovino_guide_images_v4";
const CHARACTER_IMAGE_CACHE_TTL_MS = 1000 * 60 * 60 * 24 * 30;

// -------------------- DATA --------------------

const FALLBACK_CHARACTERS = typeof SHARED_CHARACTERS_DATA !== 'undefined'
    ? SHARED_CHARACTERS_DATA.map(d => ({
        name: d.args[1],
        image: sanitizeHttpUrl(d.args[2])
    }))
    : [];

// -------------------- STATE --------------------

const state = {
    characters: [],
    filtered: [],
    source: "locale",
    lastUpdate: 0,
    imageCache: {}
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



// -------------------- CACHE --------------------

function loadImageCache() {
    try {
        const raw = localStorage.getItem(CHARACTER_IMAGE_CACHE_KEY);
        if (raw) state.imageCache = JSON.parse(raw);
    } catch {
        state.imageCache = {};
    }
}

function saveImageCache() {
    try {
        localStorage.setItem(CHARACTER_IMAGE_CACHE_KEY, JSON.stringify(state.imageCache));
    } catch {}
}

function setSafeImage(img, src) {
    if (!src || typeof src !== "string") {
        img.src = "assets/fallback.png";
        return;
    }

    img.src = src;

    img.onerror = function () {
        console.warn("IMG ERROR:", src);
        this.onerror = null;
        this.src = "assets/fallback.png";
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

    for (const character of list) {
        const li = document.createElement("li");
        li.className = "character-card";

        const img = document.createElement("img");
        img.className = "character-thumb";
        img.alt = character.name;
        img.loading = "lazy";
        
        if (character.image) {
            setSafeImage(img, character.image);
        } else {
            img.src = GUIDE_IMAGE_FALLBACK;
        }

        img.onerror = function () {
            console.warn("Errore immagine:", this.src);
        
            // se è una thumb prova originale
            if (this.src.includes("/thumb/")) {
                const original = this.src
                    .replace("/thumb/", "/")
                    .replace(/\/\d+px-/, "/");
        
                this.onerror = null;
                this.src = original;
                return;
            }
        
            // fallback finale
            if (!this.src.includes("Question_mark")) {
                this.onerror = null;
                this.src = GUIDE_IMAGE_FALLBACK;
            }
        };

        const name = document.createElement("p");
        name.textContent = character.name;

        li.appendChild(img);
        li.appendChild(name);
        el.charactersGrid.appendChild(li);
    }
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

function bootstrap() {
    bindEvents();
    localStorage.removeItem(CHARACTER_IMAGE_CACHE_KEY);

    loadImageCache();

    activateCharacters(FALLBACK_CHARACTERS);
    setStatus("Lista caricata correttamente");
}

bootstrap();