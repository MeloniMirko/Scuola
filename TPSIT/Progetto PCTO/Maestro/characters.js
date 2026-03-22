const SHARED_CHARACTERS_DATA = [

    { args: ["alan-turing", "Alan Turing", "https://upload.wikimedia.org/wikipedia/commons/thumb/7/79/Alan_Turing_az_1930-as_%C3%A9vekben.jpg/400px-Alan_Turing_az_1930-as_%C3%A9vekben.jpg", ["mathematician","inventor","born_before_1950","european","from_uk","male"], []] },
    
    { args: ["einstein", "Albert Einstein", "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3e/Einstein_1921_by_F_Schmutzer_-_restoration.jpg/400px-Einstein_1921_by_F_Schmutzer_-_restoration.jpg", ["physicist","nobel","born_before_1950","european","from_germany","male"], []] },
    
    { args: ["alessandro-volta", "Alessandro Volta", "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4a/Alessandro_Volta.jpg/400px-Alessandro_Volta.jpg", ["physicist","inventor","born_before_1950","european","from_italy","male"], []] },
    
    { args: ["bill-gates", "Bill Gates", "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a0/Bill_Gates_2018.jpg/400px-Bill_Gates_2018.jpg", ["tech_founder","inventor","billionaire","alive","born_1950_1980","from_usa","male"], []] },
    
    { args: ["blaise-pascal", "Blaise Pascal", "https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/Blaise_Pascal_Versailles.JPG/400px-Blaise_Pascal_Versailles.JPG", ["mathematician","physicist","inventor","born_before_1950","european","from_france","male"], []] },
    
    { args: ["cartesio", "Cartesio", "https://upload.wikimedia.org/wikipedia/commons/7/73/Frans_Hals_-_Portret_van_Ren%C3%A9_Descartes.jpg", ["mathematician","philosopher","born_before_1950","european","from_france","male"], []] },
    
    { args: ["charles-darwin", "Charles Darwin", "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2e/Charles_Darwin_seated_crop.jpg/400px-Charles_Darwin_seated_crop.jpg", ["biologist","scientist","born_before_1950","european","from_uk","male"], []] },
    
    { args: ["elon-musk", "Elon Musk", "https://upload.wikimedia.org/wikipedia/commons/thumb/8/85/Elon_Musk_Royal_Society_%28crop1%29.jpg/400px-Elon_Musk_Royal_Society_%28crop1%29.jpg", ["alive","engineer","inventor","tech_founder","billionaire","born_1950_1980","from_usa","male"], []] },
    
    { args: ["enrico-fermi", "Enrico Fermi", "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d4/Enrico_Fermi_1943-49.jpg/400px-Enrico_Fermi_1943-49.jpg", ["physicist","nobel","inventor","born_before_1950","european","from_italy","male"], []] },
    
    { args: ["galileo", "Galileo Galilei", "https://upload.wikimedia.org/wikipedia/commons/c/cc/Galileo.arp.300pix.jpg/400px-Galileo.arp.300pix.jpg", ["physicist","astronomer","inventor","born_before_1950","european","from_italy","male"], []] },
    
    { args: ["isaac-newton", "Isaac Newton", "https://upload.wikimedia.org/wikipedia/commons/thumb/3/39/GodfreyKneller-IsaacNewton-1689.jpg/400px-GodfreyKneller-IsaacNewton-1689.jpg", ["physicist","mathematician","inventor","born_before_1950","european","from_uk","male"], []] },
    
    { args: ["jeff-bezos", "Jeff Bezos", "https://upload.wikimedia.org/wikipedia/commons/9/9e/Jeff_Bezos_%28cropped%29.jpg", ["tech_founder","inventor","billionaire","alive","born_1950_1980","from_usa","male"], []] },
    
    { args: ["john-von-neumann", "John von Neumann", "https://upload.wikimedia.org/wikipedia/commons/a/a9/John_von_Neumann.jpg", ["mathematician","physicist","inventor","born_before_1950","european","from_usa","male"], []] },
    
    { args: ["leonardo-da-vinci", "Leonardo da Vinci", "https://upload.wikimedia.org/wikipedia/commons/thumb/3/38/Leonardo_da_Vinci_-_presumed_self-portrait_-_WGA12798.jpg/400px-Leonardo_da_Vinci_-_presumed_self-portrait_-_WGA12798.jpg", ["inventor","engineer","mathematician","physicist","born_before_1950","european","from_italy","male"], []] },
    
    { args: ["leonhard-euler", "Leonhard Euler", "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d7/Leonhard_Euler_Portrait.jpg/400px-Leonhard_Euler_Portrait.jpg", ["mathematician","physicist","inventor","born_before_1950","european","from_switzerland","male"], []] },
    
    { args: ["louis-pasteur", "Louis Pasteur", "https://upload.wikimedia.org/wikipedia/commons/a/a6/Louis_Pasteur%2C_foto_av_Paul_Nadar%2C_Crisco_edit.jpg", ["biologist","chemist","inventor","born_before_1950","european","from_france","male"], []] },
    
    { args: ["marie-curie", "Marie Curie", "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7e/Marie_Curie_c1920.jpg/400px-Marie_Curie_c1920.jpg", ["female","physicist","chemist","nobel","born_before_1950","european","from_france"], []] },
    
    { args: ["mark-zuckerberg", "Mark Zuckerberg", "https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/Mark_Zuckerberg_F8_2019_Keynote_%2832830578717%29_%28cropped%29.jpg/400px-Mark_Zuckerberg_F8_2019_Keynote_%2832830578717%29_%28cropped%29.jpg", ["tech_founder","inventor","billionaire","alive","born_1950_1980","from_usa","male"], []] },
    
    { args: ["michael-faraday", "Michael Faraday", "https://upload.wikimedia.org/wikipedia/commons/5/5b/Faraday-Millikan-Gale-1913.jpg", ["physicist","chemist","inventor","born_before_1950","european","from_uk","male"], []] },
    
    { args: ["nikola-tesla", "Nikola Tesla", "https://upload.wikimedia.org/wikipedia/commons/7/77/Tesla_Sarony.jpg", ["inventor","physicist","engineer","born_before_1950","european","male"], []] },
    
    { args: ["pierre-curie", "Pierre Curie", "https://upload.wikimedia.org/wikipedia/commons/d/db/Pierre_Curie_by_Dujardin_c1906.jpg", ["physicist","nobel","born_before_1950","european","from_france","male"], []] },
    
    { args: ["oppenheimer", "Robert Oppenheimer", "https://upload.wikimedia.org/wikipedia/commons/8/85/Oppenheimer_%28cropped%29.jpg", ["physicist","scientist","born_before_1950","from_usa","male"], []] },
    
    { args: ["stephen-hawking", "Stephen Hawking", "https://upload.wikimedia.org/wikipedia/commons/thumb/e/eb/Stephen_Hawking.StarChild.jpg/400px-Stephen_Hawking.StarChild.jpg", ["physicist","astronomer","born_before_1950","european","from_uk","male"], []] },
    
    { args: ["steve-jobs", "Steve Jobs", "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f5/Steve_Jobs_Headshot_2010-CROP2.jpg/400px-Steve_Jobs_Headshot_2010-CROP2.jpg", ["tech_founder","inventor","billionaire","born_1950_1980","from_usa","alive","male"], []] },
    
    { args: ["thomas-edison", "Thomas Edison", "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9d/Thomas_Edison2.jpg/400px-Thomas_Edison2.jpg", ["inventor","engineer","born_before_1950","from_usa","male"], []] },
    
    { args: ["james-watt", "James Watt", "https://upload.wikimedia.org/wikipedia/commons/0/06/James_Watt_portrait.jpg", ["inventor","engineer","born_before_1950","european","from_uk","male"], []] },
    
    { args: ["guglielmo-marconi", "Guglielmo Marconi", "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0d/Guglielmo_Marconi.jpg/400px-Guglielmo_Marconi.jpg", ["inventor","engineer","nobel","born_before_1950","european","from_italy","male"], []] },
    
    { args: ["ada-lovelace", "Ada Lovelace", "https://upload.wikimedia.org/wikipedia/commons/a/a4/Ada_Lovelace_portrait.jpg", ["female","mathematician","inventor","born_before_1950","european","from_uk"], []] },
    
    { args: ["grace-hopper", "Grace Hopper", "https://upload.wikimedia.org/wikipedia/commons/a/ad/Commodore_Grace_M._Hopper%2C_USN_%28covered%29.jpg", ["female","inventor","engineer","born_before_1950","from_usa"], []] },
    
    { args: ["margaret-hamilton", "Margaret Hamilton", "https://upload.wikimedia.org/wikipedia/commons/d/db/Margaret_Hamilton_-_restored.jpg", ["female","inventor","engineer","alive","born_before_1950","from_usa"], []] }
];
