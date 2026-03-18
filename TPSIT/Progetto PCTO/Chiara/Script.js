// Database of 20 STEAM characters
const characters = [
    {
        name: "Albert Einstein",
        field: "Fisica",
        image: "https://upload.wikimedia.org/wikipedia/commons/3/3e/Einstein_1921_by_F_Schmutzer_-_restoration.jpg",
        description: "Fisico teorico tedesco, noto per la teoria della relatività.",
        traits: {
            scienziato: true,
            fisica: true,
            matematico: true,
            premio_nobel: true,
            capelli_bianchi: true,
            baffi: true,
            inventore: false,
            donna: false,
            italiano: false,
            americano: true,
            tedesco: true,
            inglese: false,
            francese: false,
            contemporaneo: false,
            pittore: false,
            musicista: false,
            informatico: false,
            ingegnere: false,
            astronomo: true,
            biologo: false,
            chimico: false,
            filosofo: true,
            esploratore: false,
            militare: false,
            politico: false,
            sportivo: false,
            attore: false,
            scrittore: false,
            inventore_noto: false,
            teorico: true,
            pratico: false,
            recente: false
        }
    },
    {
        name: "Marie Curie",
        field: "Fisica/Chimica",
        image: "https://upload.wikimedia.org/wikipedia/commons/7/7e/Marie_Curie_c1920.jpg",
        description: "Fisica e chimica polacca, prima donna a vincere il Nobel.",
        traits: {
            scienziato: true,
            fisica: true,
            matematico: false,
            premio_nobel: true,
            capelli_bianchi: true,
            baffi: false,
            inventore: true,
            donna: true,
            italiano: false,
            americano: false,
            tedesco: false,
            inglese: false,
            francese: true,
            contemporaneo: false,
            pittore: false,
            musicista: false,
            informatico: false,
            ingegnere: false,
            astronomo: false,
            biologo: false,
            chimico: true,
            filosofo: false,
            esploratore: false,
            militare: false,
            politico: false,
            sportivo: false,
            attore: false,
            scrittore: false,
            inventore_noto: true,
            teorico: true,
            pratico: true,
            recente: false
        }
    },
    {
        name: "Leonardo da Vinci",
        field: "Arte/Scienza",
        image: "https://upload.wikimedia.org/wikipedia/commons/b/b8/Leonardo_da_Vinci_-_presumed_self-portrait_-_WGA12798.jpg",
        description: "Polmita italiano del Rinascimento, artista e scienziato.",
        traits: {
            scienziato: true,
            fisica: false,
            matematico: true,
            premio_nobel: false,
            capelli_bianchi: true,
            baffi: true,
            inventore: true,
            donna: false,
            italiano: true,
            americano: false,
            tedesco: false,
            inglese: false,
            francese: false,
            contemporaneo: false,
            pittore: true,
            musicista: true,
            informatico: false,
            ingegnere: true,
            astronomo: true,
            biologo: true,
            chimico: true,
            filosofo: true,
            esploratore: false,
            militare: true,
            politico: false,
            sportivo: false,
            attore: false,
            scrittore: true,
            inventore_noto: true,
            teorico: true,
            pratico: true,
            recente: false
        }
    },
    {
        name: "Ada Lovelace",
        field: "Informatica",
        image: "https://upload.wikimedia.org/wikipedia/commons/a/a4/Ada_Lovelace_portrait.jpg",
        description: "Matematica inglese, considerata la prima programmatrice della storia.",
        traits: {
            scienziato: true,
            fisica: false,
            matematico: true,
            premio_nobel: false,
            capelli_bianchi: false,
            baffi: false,
            inventore: false,
            donna: true,
            italiano: false,
            americano: false,
            tedesco: false,
            inglese: true,
            francese: false,
            contemporaneo: false,
            pittore: false,
            musicista: false,
            informatico: true,
            ingegnere: false,
            astronomo: false,
            biologo: false,
            chimico: false,
            filosofo: false,
            esploratore: false,
            militare: false,
            politico: false,
            sportivo: false,
            attore: false,
            scrittore: true,
            inventore_noto: false,
            teorico: true,
            pratico: false,
            recente: false
        }
    },
    {
        name: "Alan Turing",
        field: "Informatica",
        image: "https://upload.wikimedia.org/wikipedia/commons/7/79/Alan_Turing_az_1930-as_%C3%A9vekben.jpg",
        description: "Matematico inglese, padre dell'informatica teorica.",
        traits: {
            scienziato: true,
            fisica: false,
            matematico: true,
            premio_nobel: false,
            capelli_bianchi: false,
            baffi: false,
            inventore: true,
            donna: false,
            italiano: false,
            americano: false,
            tedesco: false,
            inglese: true,
            francese: false,
            contemporaneo: false,
            pittore: false,
            musicista: false,
            informatico: true,
            ingegnere: true,
            astronomo: false,
            biologo: false,
            chimico: false,
            filosofo: true,
            esploratore: false,
            militare: true,
            politico: false,
            sportivo: false,
            attore: false,
            scrittore: false,
            inventore_noto: true,
            teorico: true,
            pratico: true,
            recente: false
        }
    },
    {
        name: "Steve Jobs",
        field: "Tecnologia",
        image: "https://upload.wikimedia.org/wikipedia/commons/d/dc/Steve_Jobs_Headshot_2010-CROP_%28cropped%29.jpg",
        description: "Co-fondatore di Apple, rivoluzionario della tecnologia.",
        traits: {
            scienziato: false,
            fisica: false,
            matematico: false,
            premio_nobel: false,
            capelli_bianchi: false,
            baffi: false,
            inventore: true,
            donna: false,
            italiano: true,
            americano: true,
            tedesco: false,
            inglese: false,
            francese: false,
            contemporaneo: true,
            pittore: false,
            musicista: false,
            informatico: true,
            ingegnere: false,
            astronomo: false,
            biologo: false,
            chimico: false,
            filosofo: true,
            esploratore: false,
            militare: false,
            politico: false,
            sportivo: false,
            attore: false,
            scrittore: true,
            inventore_noto: true,
            teorico: false,
            pratico: true,
            recente: true
        }
    },
    {
        name: "Galileo Galilei",
        field: "Astronomia/Fisica",
        image: "https://upload.wikimedia.org/wikipedia/commons/0/00/Justus_Sustermans_-_Portrait_of_Galileo_Galilei%2C_1636.jpg",
        description: "Astronomo e fisico italiano, padre della scienza moderna.",
        traits: {
            scienziato: true,
            fisica: true,
            matematico: true,
            premio_nobel: false,
            capelli_bianchi: true,
            baffi: true,
            inventore: true,
            donna: false,
            italiano: true,
            americano: false,
            tedesco: false,
            inglese: false,
            francese: false,
            contemporaneo: false,
            pittore: false,
            musicista: true,
            informatico: false,
            ingegnere: true,
            astronomo: true,
            biologo: false,
            chimico: false,
            filosofo: true,
            esploratore: false,
            militare: false,
            politico: false,
            sportivo: false,
            attore: false,
            scrittore: true,
            inventore_noto: true,
            teorico: true,
            pratico: true,
            recente: false
        }
    },
    {
        name: "Nikola Tesla",
        field: "Ingegneria Elettrica",
        image: "https://upload.wikimedia.org/wikipedia/commons/d/d4/N.Tesla.jpg",
        description: "Inventore e ingegnere elettrico serbo-americano.",
        traits: {
            scienziato: true,
            fisica: true,
            matematico: true,
            premio_nobel: false,
            capelli_bianchi: true,
            baffi: true,
            inventore: true,
            donna: false,
            italiano: false,
            americano: true,
            tedesco: false,
            inglese: false,
            francese: false,
            contemporaneo: false,
            pittore: false,
            musicista: true,
            informatico: false,
            ingegnere: true,
            astronomo: false,
            biologo: false,
            chimico: false,
            filosofo: true,
            esploratore: false,
            militare: false,
            politico: false,
            sportivo: false,
            attore: false,
            scrittore: false,
            inventore_noto: true,
            teorico: true,
            pratico: true,
            recente: false
        }
    },
    {
        name: "Frida Kahlo",
        field: "Arte",
        image: "https://upload.wikimedia.org/wikipedia/commons/0/06/Frida_Kahlo%2C_by_Guillermo_Kahlo.jpg",
        description: "Pittrice messicana, icona dell'arte surrealista.",
        traits: {
            scienziato: false,
            fisica: false,
            matematico: false,
            premio_nobel: false,
            capelli_bianchi: false,
            baffi: true,
            inventore: false,
            donna: true,
            italiano: false,
            americano: false,
            tedesco: false,
            inglese: false,
            francese: false,
            contemporaneo: false,
            pittore: true,
            musicista: false,
            informatico: false,
            ingegnere: false,
            astronomo: false,
            biologo: false,
            chimico: false,
            filosofo: false,
            esploratore: false,
            militare: false,
            politico: true,
            sportivo: false,
            attore: false,
            scrittore: true,
            inventore_noto: false,
            teorico: false,
            pratico: true,
            recente: false
        }
    },
    {
        name: "Vincent van Gogh",
        field: "Arte",
        image: "https://upload.wikimedia.org/wikipedia/commons/4/4c/Vincent_van_Gogh_-_Self-Portrait_-_Google_Art_Project_%28454045%29.jpg",
        description: "Pittore olandese, maestro della pittura post-impressionista.",
        traits: {
            scienziato: false,
            fisica: false,
            matematico: false,
            premio_nobel: false,
            capelli_bianchi: true,
            baffi: false,
            inventore: false,
            donna: false,
            italiano: false,
            americano: false,
            tedesco: false,
            inglese: false,
            francese: true,
            contemporaneo: false,
            pittore: true,
            musicista: false,
            informatico: false,
            ingegnere: false,
            astronomo: false,
            biologo: false,
            chimico: false,
            filosofo: false,
            esploratore: false,
            militare: false,
            politico: false,
            sportivo: false,
            attore: false,
            scrittore: true,
            inventore_noto: false,
            teorico: false,
            pratico: true,
            recente: false
        }
    },
    {
        name: "Isaac Newton",
        field: "Fisica/Matematica",
        image: "https://upload.wikimedia.org/wikipedia/commons/3/39/GodfreyKneller-IsaacNewton-1689.jpg",
        description: "Fisico e matematico inglese, padre della meccanica classica.",
        traits: {
            scienziato: true,
            fisica: true,
            matematico: true,
            premio_nobel: false,
            capelli_bianchi: true,
            baffi: false,
            inventore: true,
            donna: false,
            italiano: false,
            americano: false,
            tedesco: false,
            inglese: true,
            francese: false,
            contemporaneo: false,
            pittore: false,
            musicista: false,
            informatico: false,
            ingegnere: false,
            astronomo: true,
            biologo: false,
            chimico: true,
            filosofo: true,
            esploratore: false,
            militare: false,
            politico: true,
            sportivo: false,
            attore: false,
            scrittore: true,
            inventore_noto: true,
            teorico: true,
            pratico: true,
            recente: false
        }
    },
    {
        name: "Rosalind Franklin",
        field: "Biologia",
        image: "https://upload.wikimedia.org/wikipedia/en/9/97/Rosalind_Franklin.jpg",
        description: "Biologa inglese, chiave nella scoperta della struttura del DNA.",
        traits: {
            scienziato: true,
            fisica: false,
            matematico: false,
            premio_nobel: false,
            capelli_bianchi: false,
            baffi: false,
            inventore: false,
            donna: true,
            italiano: false,
            americano: false,
            tedesco: false,
            inglese: true,
            francese: false,
            contemporaneo: false,
            pittore: false,
            musicista: false,
            informatico: false,
            ingegnere: false,
            astronomo: false,
            biologo: true,
            chimico: true,
            filosofo: false,
            esploratore: false,
            militare: false,
            politico: false,
            sportivo: false,
            attore: false,
            scrittore: false,
            inventore_noto: false,
            teorico: true,
            pratico: true,
            recente: false
        }
    },
    {
        name: "Bill Gates",
        field: "Informatica",
        image: "https://upload.wikimedia.org/wikipedia/commons/8/87/Bill_Gates_2017_%28cropped%29.jpg",
        description: "Co-fondatore di Microsoft, filantropo e imprenditore.",
        traits: {
            scienziato: false,
            fisica: false,
            matematico: false,
            premio_nobel: false,
            capelli_bianchi: false,
            baffi: false,
            inventore: true,
            donna: false,
            italiano: false,
            americano: true,
            tedesco: false,
            inglese: false,
            francese: false,
            contemporaneo: true,
            pittore: false,
            musicista: false,
            informatico: true,
            ingegnere: false,
            astronomo: false,
            biologo: false,
            chimico: false,
            filosofo: false,
            esploratore: false,
            militare: false,
            politico: false,
            sportivo: false,
            attore: false,
            scrittore: true,
            inventore_noto: true,
            teorico: false,
            pratico: true,
            recente: true
        }
    },
    {
        name: "Maria Gaetana Agnesi",
        field: "Matematica",
        image: "https://upload.wikimedia.org/wikipedia/commons/9/9e/Maria_Gaetana_Agnesi.jpg",
        description: "Matematica italiana, prima donna a ottenere una cattedra universitaria.",
        traits: {
            scienziato: true,
            fisica: false,
            matematico: true,
            premio_nobel: false,
            capelli_bianchi: true,
            baffi: false,
            inventore: false,
            donna: true,
            italiano: true,
            americano: false,
            tedesco: false,
            inglese: false,
            francese: false,
            contemporaneo: false,
            pittore: false,
            musicista: false,
            informatico: false,
            ingegnere: false,
            astronomo: false,
            biologo: false,
            chimico: false,
            filosofo: true,
            esploratore: false,
            militare: false,
            politico: false,
            sportivo: false,
            attore: false,
            scrittore: true,
            inventore_noto: false,
            teorico: true,
            pratico: false,
            recente: false
        }
    },
    {
        name: "Antonio Vivaldi",
        field: "Musica",
        image: "https://upload.wikimedia.org/wikipedia/commons/b/bd/Vivaldi.jpg",
        description: "Compositore italiano, maestro del barocco.",
        traits: {
            scienziato: false,
            fisica: false,
            matematico: false,
            premio_nobel: false,
            capelli_bianchi: true,
            baffi: false,
            inventore: false,
            donna: false,
            italiano: true,
            americano: false,
            tedesco: false,
            inglese: false,
            francese: false,
            contemporaneo: false,
            pittore: false,
            musicista: true,
            informatico: false,
            ingegnere: false,
            astronomo: false,
            biologo: false,
            chimico: false,
            filosofo: false,
            esploratore: false,
            militare: false,
            politico: false,
            sportivo: false,
            attore: false,
            scrittore: true,
            inventore_noto: false,
            teorico: false,
            pratico: true,
            recente: false
        }
    },
    {
        name: "Michelangelo Buonarroti",
        field: "Arte",
        image: "https://upload.wikimedia.org/wikipedia/commons/5/5e/Miguel_%C3%81ngel%2C_por_Daniele_da_Volterra_%28detalle%29.jpg",
        description: "Scultore, pittore e architetto italiano del Rinascimento.",
        traits: {
            scienziato: true,
            fisica: false,
            matematico: true,
            premio_nobel: false,
            capelli_bianchi: true,
            baffi: true,
            inventore: true,
            donna: false,
            italiano: true,
            americano: false,
            tedesco: false,
            inglese: false,
            francese: false,
            contemporaneo: false,
            pittore: true,
            musicista: false,
            informatico: false,
            ingegnere: true,
            astronomo: false,
            biologo: false,
            chimico: false,
            filosofo: false,
            esploratore: false,
            militare: false,
            politico: true,
            sportivo: false,
            attore: false,
            scrittore: true,
            inventore_noto: true,
            teorico: false,
            pratico: true,
            recente: false
        }
    },
    {
        name: "Stephen Hawking",
        field: "Fisica",
        image: "https://upload.wikimedia.org/wikipedia/commons/e/eb/Stephen_Hawking_2015.jpg",
        description: "Fisico teorico inglese, esperto di cosmologia e buchi neri.",
        traits: {
            scienziato: true,
            fisica: true,
            matematico: true,
            premio_nobel: false,
            capelli_bianchi: true,
            baffi: false,
            inventore: false,
            donna: false,
            italiano: false,
            americano: false,
            tedesco: false,
            inglese: true,
            francese: false,
            contemporaneo: true,
            pittore: false,
            musicista: false,
            informatico: false,
            ingegnere: false,
            astronomo: true,
            biologo: false,
            chimico: false,
            filosofo: true,
            esploratore: false,
            militare: false,
            politico: false,
            sportivo: false,
            attore: false,
            scrittore: true,
            inventore_noto: false,
            teorico: true,
            pratico: false,
            recente: true
        }
    },
    {
        name: "Catherine Deneuve",
        field: "Arte",
        image: "https://upload.wikimedia.org/wikipedia/commons/4/48/Catherine_Deneuve_Cannes_2016.jpg",
        description: "Attrice francese leggendaria del cinema.",
        traits: {
            scienziato: false,
            fisica: false,
            matematico: false,
            premio_nobel: false,
            capelli_bianchi: true,
            baffi: false,
            inventore: false,
            donna: true,
            italiano: false,
            americano: false,
            tedesco: false,
            inglese: false,
            francese: true,
            contemporaneo: true,
            pittore: false,
            musicista: false,
            informatico: false,
            ingegnere: false,
            astronomo: false,
            biologo: false,
            chimico: false,
            filosofo: false,
            esploratore: false,
            militare: false,
            politico: false,
            sportivo: false,
            attore: true,
            scrittore: false,
            inventore_noto: false,
            teorico: false,
            pratico: true,
            recente: true
        }
    },
    {
        name: "Pablo Picasso",
        field: "Arte",
        image: "https://upload.wikimedia.org/wikipedia/en/9/98/Pablo_picasa1.jpg",
        description: "Pittore spagnolo, co-creatore del cubismo.",
        traits: {
            scienziato: false,
            fisica: false,
            matematico: false,
            premio_nobel: false,
            capelli_bianchi: true,
            baffi: true,
            inventore: false,
            donna: false,
            italiano: false,
            americano: false,
            tedesco: false,
            inglese: false,
            francese: true,
            contemporaneo: false,
            pittore: true,
            musicista: false,
            informatico: false,
            ingegnere: false,
            astronomo: false,
            biologo: false,
            chimico: false,
            filosofo: false,
            esploratore: false,
            militare: false,
            politico: true,
            sportivo: false,
            attore: false,
            scrittore: true,
            inventore_noto: false,
            teorico: false,
            pratico: true,
            recente: false
        }
    },
    {
        name: "Carlo Rovelli",
        field: "Fisica",
        image: "https://upload.wikimedia.org/wikipedia/commons/8/86/Carlo_Rovelli_2015.jpg",
        description: "Fisico italiano, esperto di gravità quantistica.",
        traits: {
            scienziato: true,
            fisica: true,
            matematico: true,
            premio_nobel: false,
            capelli_bianchi: false,
            baffi: false,
            inventore: false,
            donna: false,
            italiano: true,
            americano: false,
            tedesco: false,
            inglese: false,
            francese: false,
            contemporaneo: true,
            pittore: false,
            musicista: false,
            informatico: false,
            ingegnere: false,
            astronomo: true,
            biologo: false,
            chimico: false,
            filosofo: true,
            esploratore: false,
            militare: false,
            politico: false,
            sportivo: false,
            attore: false,
            scrittore: true,
            inventore_noto: false,
            teorico: true,
            pratico: false,
            recente: true
        }
    }
];

// Questions database
const questions = [
    { text: "È una donna?", trait: "donna" },
    { text: "È un personaggio italiano?", trait: "italiano" },
    { text: "È un personaggio americano?", trait: "americano" },
    { text: "È vissuto nel periodo contemporaneo (XX-XXI secolo)?", trait: "contemporaneo" },
    { text: "È un personaggio tedesco?", trait: "tedesco" },
    { text: "È un personaggio inglese?", trait: "inglese" },
    { text: "È un personaggio francese?", trait: "francese" },
    { text: "È principalmente un matematico?", trait: "matematico" },
    { text: "È principalmente un fisico?", trait: "fisica" },
    { text: "È principalmente un biologo?", trait: "biologo" },
    { text: "È principalmente un chimico?", trait: "chimico" },
    { text: "È principalmente un astronomo?", trait: "astronomo" },
    { text: "È principalmente un ingegnere?", trait: "ingegnere" },
    { text: "È principalmente un informatico?", trait: "informatico" },
    { text: "È principalmente un artista/pittore?", trait: "pittore" },
    { text: "È principalmente un musicista?", trait: "musicista" },
    { text: "È principalmente un attore?", trait: "attore" },
    { text: "È un inventore famoso?", trait: "inventore_noto" },
    { text: "Ha vinto il Premio Nobel?", trait: "premio_nobel" },
    { text: "È un filosofo?", trait: "filosofo" },
    { text: "Ha i capelli bianchi / era anziano?", trait: "capelli_bianchi" },
    { text: "Ha i baffi?", trait: "baffi" },
    { text: "È un personaggio storico (non recente)?", trait: "recente", inverse: true },
    { text: "È un teorico / ricercatore?", trait: "teorico" },
    { text: "È un uomo d'azione / pratico?", trait: "pratico" }
];

// Game state
let currentQuestionIndex = 0;
let possibleCharacters = [];
let usedQuestions = [];
let answers = [];

function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

function startGame() {
    // Reset game state
    possibleCharacters = [...characters];
    usedQuestions = [];
    answers = [];
    currentQuestionIndex = 0;
    
    // Shuffle questions
    const shuffledQuestions = shuffleArray([...questions]);
    
    // Show loading
    document.getElementById('intro').classList.add('hidden');
    document.getElementById('loading').classList.remove('hidden');
    
    setTimeout(() => {
        document.getElementById('loading').classList.add('hidden');
        document.getElementById('question').classList.remove('hidden');
        updatePossibilityList();
        showNextQuestion(shuffledQuestions);
    }, 1500);
}

function showNextQuestion(allQuestions) {
    if (possibleCharacters.length <= 1 || currentQuestionIndex >= allQuestions.length) {
        showResult();
        return;
    }

    // Find the best next question
    let bestQuestion = null;
    let bestScore = 0;
    
    for (let i = 0; i < allQuestions.length; i++) {
        if (usedQuestions.includes(i)) continue;
        
        const trait = allQuestions[i].trait;
        let yesCount = 0;
        let noCount = 0;
        let forseCount = 0;
        
        for (const char of possibleCharacters) {
            if (char.traits[trait]) yesCount++;
            else noCount++;
        }
        
        // Score based on how well the question divides the group
        const score = Math.min(yesCount, noCount);
        if (score > bestScore && score > 0) {
            bestScore = score;
            bestQuestion = i;
        }
    }
    
    if (bestQuestion === null) {
        showResult();
        return;
    }
    
    usedQuestions.push(bestQuestion);
    const question = allQuestions[bestQuestion];
    
    // Update UI
    document.getElementById('questionNumber').textContent = `Domanda ${currentQuestionIndex + 1}`;
    document.getElementById('questionText').textContent = question.text;
    
    // Update progress
    const progress = Math.min((currentQuestionIndex / 15) * 100, 100);
    document.getElementById('progress').style.width = progress + '%';
    
    // Store current question for answer handling
    document.getElementById('question').dataset.trait = question.trait;
    document.getElementById('question').dataset.inverse = question.inverse || false;
}

function answer(value) {
    const trait = document.getElementById('question').dataset.trait;
    const inverse = document.getElementById('question').dataset.inverse === 'true';
    
    answers.push({ trait, value, inverse });
    
    // Filter characters based on answer
    possibleCharacters = possibleCharacters.filter(char => {
        const charValue = char.traits[trait];
        let expectedValue = charValue;
        
        if (inverse) {
            expectedValue = !expectedValue;
        }
        
        if (value === 'si') return expectedValue === true;
        if (value === 'no') return expectedValue === false;
        if (value === 'forse') return true; // Keep all
        
        return true;
    });
    
    currentQuestionIndex++;
    updatePossibilityList();
    
    // Show next question
    showNextQuestion(questions);
}

function updatePossibilityList() {
    document.getElementById('possibilityCount').textContent = possibleCharacters.length;
    
    const list = document.getElementById('possibilityList');
    list.innerHTML = '';
    
    possibleCharacters.slice(0, 6).forEach(char => {
        const tag = document.createElement('span');
        tag.className = 'possibility-tag';
        tag.textContent = char.name;
        list.appendChild(tag);
    });
    
    if (possibleCharacters.length > 6) {
        const more = document.createElement('span');
        more.className = 'possibility-tag';
        more.textContent = `+${possibleCharacters.length - 6} altri`;
        list.appendChild(more);
    }
}

function showResult() {
    document.getElementById('question').classList.add('hidden');
    document.getElementById('result').classList.remove('hidden');
    
    if (possibleCharacters.length === 0) {
        // Fallback to most likely
        possibleCharacters = [characters[Math.floor(Math.random() * characters.length)]];
    }
    
    // Sort by match score
    const scored = possibleCharacters.map(char => {
        let score = 0;
        for (const answer of answers) {
            const charValue = char.traits[answer.trait];
            let expectedValue = answer.inverse ? !charValue : charValue;
            
            if (answer.value === 'si' && expectedValue) score += 2;
            else if (answer.value === 'no' && !expectedValue) score += 2;
            else if (answer.value === 'forse') score += 1;
        }
        return { char, score };
    });
    
    scored.sort((a, b) => b.score - a.score);
    
    const best = scored[0];
    const maxScore = answers.length * 2;
    const confidence = Math.round((best.score / maxScore) * 100);
    
    // Show result
    document.getElementById('resultImage').src = best.char.image;
    document.getElementById('resultName').textContent = best.char.name;
    document.getElementById('resultField').textContent = best.char.field;
    document.getElementById('resultDescription').textContent = best.char.description;
    document.getElementById('confidenceFill').style.width = confidence + '%';
    document.getElementById('confidenceFill').textContent = confidence + '% di certezza';
    
    // Show alternatives
    if (scored.length > 1) {
        document.getElementById('alternatives').classList.remove('hidden');
        const altList = document.getElementById('alternativesList');
        altList.innerHTML = '';
        
        scored.slice(1, 4).forEach(item => {
            const div = document.createElement('div');
            div.className = 'alternative-item';
            div.innerHTML = `
                <img class="alternative-img" src="${item.char.image}" alt="${item.char.name}">
                <span>${item.char.name} - ${item.char.field}</span>
            `;
            altList.appendChild(div);
        });
    } else {
        document.getElementById('alternatives').classList.add('hidden');
    }
}

function restartGame() {
    document.getElementById('result').classList.add('hidden');
    document.getElementById('intro').classList.remove('hidden');
    document.getElementById('progress').style.width = '0%';
}