const QUESTION_BANK = [
    { key: "female", text: "Il tuo personaggio è una donna?" },
    { key: "male", text: "Il tuo personaggio è un uomo?" },
    { key: "alive", text: "Il tuo personaggio è ancora in vita?" },
    { key: "european", text: "Il tuo personaggio è europeo?" },
    { key: "from_italy", text: "Il tuo personaggio è nato in Italia?" },
    { key: "from_usa", text: "Il tuo personaggio è nato negli Stati Uniti?" },
    { key: "from_uk", text: "Il tuo personaggio è nato nel Regno Unito?" },
    { key: "from_france", text: "Il tuo personaggio è nato in Francia?" },
    { key: "from_germany", text: "Il tuo personaggio è nato in Germania?" },
    { key: "physicist", text: "Il tuo personaggio è un fisico o una fisica?" },
    { key: "chemist", text: "Il tuo personaggio è un chimico o una chimica?" },
    { key: "mathematician", text: "Il tuo personaggio è un matematico o una matematica?" },
    { key: "inventor", text: "Il tuo personaggio è conosciuto come inventore?" },
    { key: "engineer", text: "Il tuo personaggio è un ingegnere?" },
    { key: "tech_founder", text: "Ha fondato o guidato una grande azienda tech?" },
    { key: "billionaire", text: "Il tuo personaggio è miliardario?" },
    { key: "nobel", text: "Ha vinto un premio Nobel?" },
    { key: "philosopher", text: "Il tuo personaggio è un filosofo?" },
    { key: "astronomer", text: "Il tuo personaggio è un astronomo?" },
    { key: "biologist", text: "Il tuo personaggio è un biologo o biologa?" },
    { key: "scientist", text: "Il tuo personaggio è uno scienziato?" },
    { key: "born_before_1950", text: "Il tuo personaggio è nato prima del 1950?" },
    { key: "born_1950_1980", text: "Il tuo personaggio è nato tra il 1950 e il 1980?" }
];

// Esportiamo per poterlo usare in game.js
if (typeof module !== "undefined") {
    module.exports = { QUESTION_BANK };
}