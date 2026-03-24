"use strict";

const SHARED_CHARACTERS_DATA = [

    { args: ["alan-turing", "Alan Turing",
        "https://upload.wikimedia.org/wikipedia/commons/thumb/7/79/Alan_Turing_az_1930-as_%C3%A9vekben.jpg/400px-Alan_Turing_az_1930-as_%C3%A9vekben.jpg",
        ["mathematician","computer_pioneer","programming","born_before_1950","european","from_uk","male"], []] },

    { args: ["einstein", "Albert Einstein",
        "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3e/Einstein_1921_by_F_Schmutzer_-_restoration.jpg/400px-Einstein_1921_by_F_Schmutzer_-_restoration.jpg",
        ["physicist","nobel","relativity","born_before_1950","european","from_germany","male"], []] },

    { args: ["alessandro-volta", "Alessandro Volta",
        "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4a/Alessandro_Volta.jpg/400px-Alessandro_Volta.jpg",
        ["physicist","inventor","electricity","battery","born_before_1950","european","from_italy","male"], []] },

    { args: ["bill-gates", "Bill Gates",
        "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a0/Bill_Gates_2018.jpg/400px-Bill_Gates_2018.jpg",
        ["tech_founder","billionaire","alive","microsoft","born_1950_1980","from_usa","male","software","modern_era","business","digital_business"], []] },

    { args: ["blaise-pascal", "Blaise Pascal",
        "https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/Blaise_Pascal_Versailles.JPG/400px-Blaise_Pascal_Versailles.JPG",
        ["mathematician","physicist","probability_theory","born_before_1950","european","from_france","male","theoretical_science"], []] },

    { args: ["cartesio", "Cartesio",
        "https://upload.wikimedia.org/wikipedia/commons/7/73/Frans_Hals_-_Portret_van_Ren%C3%A9_Descartes.jpg",
        ["mathematician","philosopher","geometry_founder","born_before_1950","european","from_france","male"], []] },

    { args: ["charles-darwin", "Charles Darwin",
        "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2e/Charles_Darwin_seated_crop.jpg/400px-Charles_Darwin_seated_crop.jpg",
        ["biologist","evolution","born_before_1950","european","from_uk","male"], []] },

    { args: ["elon-musk", "Elon Musk",
        "https://upload.wikimedia.org/wikipedia/commons/thumb/8/85/Elon_Musk_Royal_Society_%28crop1%29.jpg/400px-Elon_Musk_Royal_Society_%28crop1%29.jpg",
        ["engineer","tech_founder","billionaire","alive","spacex","tesla","born_1950_1980","from_usa","male","modern_era","business","digital_business"], []] },

    { args: ["enrico-fermi", "Enrico Fermi",
        "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d4/Enrico_Fermi_1943-49.jpg/400px-Enrico_Fermi_1943-49.jpg",
        ["physicist","nobel","atomic_bomb","born_before_1950","european","from_italy","male"], []] },

    { args: ["galileo", "Galileo Galilei",
        "https://upload.wikimedia.org/wikipedia/commons/c/cc/Galileo.arp.300pix.jpg/400px-Galileo.arp.300pix.jpg",
        ["physicist","astronomer","telescope","heliocentrism","born_before_1950","european","from_italy","male"], []] },

    { args: ["isaac-newton", "Isaac Newton",
        "https://upload.wikimedia.org/wikipedia/commons/thumb/3/39/GodfreyKneller-IsaacNewton-1689.jpg/400px-GodfreyKneller-IsaacNewton-1689.jpg",
        ["physicist","mathematician","gravity_laws","calculus","born_before_1950","european","from_uk","male"], []] },

    { args: ["jeff-bezos", "Jeff Bezos",
        "https://upload.wikimedia.org/wikipedia/commons/9/9e/Jeff_Bezos_%28cropped%29.jpg",
        ["tech_founder","billionaire","alive","amazon","born_1950_1980","from_usa","male","ecommerce","modern_era","business","digital_business"], []] },

    { args: ["john-von-neumann", "John von Neumann",
        "https://upload.wikimedia.org/wikipedia/commons/a/a9/John_von_Neumann.jpg",
        ["mathematician","game_theory","computer_architecture","born_before_1950","european","from_hungary","male","modern_computing"], []] },

    { args: ["leonardo-da-vinci", "Leonardo da Vinci",
        "https://upload.wikimedia.org/wikipedia/commons/thumb/3/38/Leonardo_da_Vinci_-_presumed_self-portrait_-_WGA12798.jpg/400px-Leonardo_da_Vinci_-_presumed_self-portrait_-_WGA12798.jpg",
        ["inventor","engineer","renaissance","born_before_1950","european","from_italy","male"], []] },

    { args: ["leonhard-euler", "Leonhard Euler",
        "https://upload.wikimedia.org/wikipedia/commons/7/76/Leonhard_Euler_Kupferstich-2.png",
        ["mathematician","pure_mathematics","euler_formula","born_before_1950","european","from_switzerland","male"], []] },

    { args: ["louis-pasteur", "Louis Pasteur",
        "https://upload.wikimedia.org/wikipedia/commons/a/a6/Louis_Pasteur%2C_foto_av_Paul_Nadar%2C_Crisco_edit.jpg",
        ["biologist","chemist","pasteurization","born_before_1950","european","from_france","male"], []] },

    { args: ["marie-curie", "Marie Curie",
        "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7e/Marie_Curie_c1920.jpg/400px-Marie_Curie_c1920.jpg",
        ["female","physicist","chemist","nobel","radioactivity","born_before_1950","european","from_france"], []] },

    { args: ["nikola-tesla", "Nikola Tesla",
        "https://upload.wikimedia.org/wikipedia/commons/7/77/Tesla_Sarony.jpg",
        ["inventor","physicist","engineer","electricity","ac_current","born_before_1950","european","from_serbia","male"], []] },

    { args: ["thomas-edison", "Thomas Edison",
        "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9d/Thomas_Edison2.jpg/400px-Thomas_Edison2.jpg",
        ["inventor","engineer","light_bulb","dc_current","born_before_1950","from_usa","male"], []] },

    { args: ["james-watt", "James Watt",
        "https://upload.wikimedia.org/wikipedia/commons/0/06/James_Watt_portrait.jpg",
        ["inventor","engineer","steam_engine","industrial_revolution","born_before_1950","european","from_uk","male"], []] },

    { args: ["guglielmo-marconi", "Guglielmo Marconi",
        "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0d/Guglielmo_Marconi.jpg/400px-Guglielmo_Marconi.jpg",
        ["inventor","engineer","radio","wireless","nobel","born_before_1950","european","from_italy","male"], []] },

    { args: ["ada-lovelace", "Ada Lovelace",
        "https://upload.wikimedia.org/wikipedia/commons/a/a4/Ada_Lovelace_portrait.jpg",
        ["female","mathematician","computer_pioneer","born_before_1950","european","from_uk","first_programmer"], []] },

    { args: ["grace-hopper", "Grace Hopper",
        "https://upload.wikimedia.org/wikipedia/commons/a/ad/Commodore_Grace_M._Hopper%2C_USN_%28covered%29.jpg",
        ["female","engineer","inventor","computer_pioneer","programming","compiler","born_before_1950","from_usa","navy"], []] }

];