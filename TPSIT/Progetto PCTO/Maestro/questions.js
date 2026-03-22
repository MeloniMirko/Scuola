"use strict";

const QUESTION_BANK = [
    // ✅ Priorità alta all'inizio: sesso, epoca, continente
    { key: "female", text: "Il tuo personaggio è una donna?", weight: 1.5 },
    { key: "male", text: "Il tuo personaggio è un uomo?", weight: 1.5 },
    { key: "alive", text: "Il tuo personaggio è ancora in vita?", weight: 1.4 },
    { key: "european", text: "Il tuo personaggio è europeo?", weight: 1.3 },

    // ✅ Domande sul paese (da chiedere solo se candidati distinti)
    { key: "from_italy", text: "Il tuo personaggio è nato in Italia?", weight: 1.2 },
    { key: "from_usa", text: "Il tuo personaggio è nato negli Stati Uniti?", weight: 1.2 },
    { key: "from_uk", text: "Il tuo personaggio è nato nel Regno Unito?", weight: 1.2 },
    { key: "from_france", text: "Il tuo personaggio è nato in Francia?", weight: 1.2 },
    { key: "from_germany", text: "Il tuo personaggio è nato in Germania?", weight: 1.2 },

    // ✅ Professioni e discipline
    { key: "physicist", text: "Il tuo personaggio è un fisico o una fisica?", weight: 1.3 },
    { key: "chemist", text: "Il tuo personaggio è un chimico o una chimica?", weight: 1.3 },
    { key: "mathematician", text: "Il tuo personaggio è un matematico o una matematica?", weight: 1.3 },
    { key: "astronomer", text: "Il tuo personaggio è un astronomo?", weight: 1.2 },
    { key: "biologist", text: "Il tuo personaggio è un biologo o biologa?", weight: 1.2 },
    { key: "philosopher", text: "Il tuo personaggio è un filosofo?", weight: 1.0 },
    { key: "scientist", text: "Il tuo personaggio è uno scienziato?", weight: 1.1 },

    // ✅ Inventori/ingegneri
    { key: "inventor", text: "Il tuo personaggio è conosciuto come inventore?", weight: 1.0 },
    { key: "engineer", text: "Il tuo personaggio è un ingegnere?", weight: 1.1 },

    // ✅ Moderni: peso ridotto per non favorire Gates
    { key: "tech_founder", text: "Ha fondato o guidato una grande azienda tech?", weight: 0.7 },
    { key: "billionaire", text: "Il tuo personaggio è miliardario?", weight: 0.6 },

    // ✅ Premi
    { key: "nobel", text: "Ha vinto un premio Nobel?", weight: 1.2 },

    // ✅ Epoca
    { key: "born_before_1950", text: "Il tuo personaggio è nato prima del 1950?", weight: 1.5 },
    { key: "born_1950_1980", text: "Il tuo personaggio è nato tra il 1950 e il 1980?", weight: 1.3 },

    // ✅ Traits moderni discriminanti (es. Elon Musk)
    { key: "spacex", text: "Ha fondato SpaceX?", weight: 0.9 },
    { key: "tesla", text: "Ha guidato Tesla?", weight: 0.9 }
];

if (typeof module !== "undefined") {
    module.exports = { QUESTION_BANK };
}