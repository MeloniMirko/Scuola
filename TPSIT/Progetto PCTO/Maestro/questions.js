"use strict";

const QUESTION_BANK = [

    { key: "female", text: "Il tuo personaggio è una donna?", weight: 1.5 },
    { key: "male", text: "Il tuo personaggio è un uomo?", weight: 1.5 },
    { key: "alive", text: "Il tuo personaggio è ancora in vita?", weight: 1.4 },
    { key: "european", text: "Il tuo personaggio è europeo?", weight: 1.3 },

    { key: "from_italy", text: "È nato in Italia?", weight: 1.2 },
    { key: "from_usa", text: "È nato negli Stati Uniti?", weight: 1.2 },
    { key: "from_uk", text: "È nato nel Regno Unito?", weight: 1.2 },
    { key: "from_france", text: "È nato in Francia?", weight: 1.2 },
    { key: "from_germany", text: "È nato in Germania?", weight: 1.2 },

    { key: "physicist", text: "È un fisico?", weight: 1.3 },
    { key: "chemist", text: "È un chimico?", weight: 1.3 },
    { key: "mathematician", text: "È un matematico?", weight: 1.3 },
    { key: "astronomer", text: "È un astronomo?", weight: 1.2 },
    { key: "biologist", text: "È un biologo?", weight: 1.2 },

    { key: "inventor", text: "È un inventore?", weight: 1.0 },
    { key: "engineer", text: "È un ingegnere?", weight: 1.1 },

    { key: "tech_founder", text: "Ha fondato un'azienda tech?", weight: 0.8 },
    { key: "billionaire", text: "È miliardario?", weight: 0.7 },

    { key: "nobel", text: "Ha vinto il Nobel?", weight: 1.2 },

    { key: "born_before_1950", text: "È nato prima del 1950?", weight: 1.5 },
    { key: "born_1950_1980", text: "È nato tra 1950 e 1980?", weight: 1.3 },

    { key: "relativity", text: "È famoso per la relatività?", weight: 1.5 },
    { key: "gravity_laws", text: "Ha formulato la gravità?", weight: 1.5 },
    { key: "electricity", text: "È legato all’elettricità?", weight: 1.3 },
    { key: "atomic_bomb", text: "È legato alla bomba atomica?", weight: 1.4 },
    { key: "computer_pioneer", text: "È un pioniere informatico?", weight: 1.4 },
    { key: "evolution", text: "È legato all’evoluzione?", weight: 1.5 },

    { key: "astronomy", text: "È legato all'astronomia?", weight: 1.3 },
    { key: "battery", text: "Ha inventato la batteria?", weight: 1.3 },
    { key: "alternating_current", text: "Ha lavorato sulla corrente alternata?", weight: 1.3 },
    { key: "industrial_innovation", text: "È legato all'industria moderna?", weight: 1.2 },
    { key: "probability_theory", text: "Ha lavorato sulla probabilità?", weight: 1.3 },

    { key: "renaissance", text: "È del Rinascimento?", weight: 1.4 },
    { key: "pure_mathematics", text: "Ha lavorato in matematica pura?", weight: 1.3 },
    {key: "programming", text: "Ha lavorato nella programmazione?", weight: 1.3 },
    {key: "computer_architecture", text: "Ha contribuito all'architettura dei computer?", weight: 1.3 },
    {key: "compiler", text: "Ha sviluppato un compilatore?", weight: 1.4 },

    { key: "amazon", text: "Ha fondato Amazon?", weight: 1.0 },
    { key: "microsoft", text: "Ha fondato Microsoft?", weight: 1.0 },
    { key: "light_bulb", text: "È legato alla lampadina?", weight: 1.0 },
    { key: "radio", text: "È legato alla radio?", weight: 1.0 },
    { key: "telescope", text: "Ha usato il telescopio?", weight: 1.0 },
    { key: "game_theory", text: "Ha lavorato sulla teoria dei giochi?", weight: 1.0 },
    { key: "pasteurization", text: "È legato alla pastorizzazione?", weight: 1.0 },
    { key: "steam_engine", text: "È legato alla macchina a vapore?", weight: 1.0 }

];

if (typeof module !== "undefined") {
    module.exports = { QUESTION_BANK };
}