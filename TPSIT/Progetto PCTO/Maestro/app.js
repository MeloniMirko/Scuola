"use strict";

/* ============================================================
   GENIO INDOVINO — Algoritmo Akinator-style
   ============================================================ */

// ── Costanti ────────────────────────────────────────────────
const MAX_GUESS_ATTEMPTS = 3;
const GUESS_THRESHOLD = 0.92;
const MARGIN_THRESHOLD   = 0.25;
const MIN_QUESTIONS_AFTER_NO = 3;

// ── Gruppi di trait mutualmente esclusivi ───────────────────
const EXCLUSIVE_GROUPS = [
    ["female", "male"],
    ["born_before_1950", "born_1950_1980", "born_after_1980"],
    ["from_italy", "from_usa", "from_uk", "from_france", "from_germany", "from_poland", "from_netherlands", "from_switzerland", "from_sweden", "from_hungary", "from_serbia"],
    ["physicist", "mathematician", "biologist", "chemist", "astronomer", "inventor", "engineer", "tech_founder", "scientist", "philosopher"],
    ["nobel", "oscar", "grammy"]
];

function getGroup(trait) {
    for (const group of EXCLUSIVE_GROUPS) {
        if (group.includes(trait)) return group;
    }
    return null;
}

// ── Chiavi trait (dalle domande) ──────────────────────────
const TRAIT_KEYS = QUESTION_BANK.map(q => q.key);

// ── Tutorial ────────────────────────────────────────────────
const TUTORIAL_STEPS = [
    { title: "Pensa al personaggio", text: "Scegli in segreto un personaggio famoso STEM. Non dirlo al gioco!" },
    { title: "Rispondi onestamente", text: "Il Genio ti farà domande. Rispondi solo con SÌ o NO." },
    { title: "Indovina!", text: "Quando sarà sicuro, ti proporrà il personaggio. Se è quello giusto, premi SÌ!" }
];

const INTRO_NO_LINES = [
    { question: "Dai, non fare il timido!", instruction: "Premi SÌ per iniziare" },
    { question: "Sarà divertente, te lo prometto!", instruction: "Premi SÌ" },
    { question: "Ok ok, nessuna fretta!", instruction: "Quando sei pronto, premi SÌ!" }
];

// ── Stato ─────────────────────────────────────────────────
const state = {
    mode: "intro",
    characters: [],
    posteriors: [],
    askedKeys: new Set(),
    answers: {},
    askedCount: 0,
    questionsAfterLastNo: 0,
    currentQuestionKey: null,
    guessOrder: [],
    guessIndex: 0,
    guessAttempts: 0,
    introNoCount: 0,
    tutorialIndex: 0,
    characterViewToken: 0
};

// ── Elementi DOM ───────────────────────────────────────────
const el = {
    questionBox:     document.getElementById("questionBox"),
    progressBlock:   document.getElementById("progressBlock"),
    progressLabel:   document.getElementById("progressLabel"),
    progressFill:    document.getElementById("progressFill"),
    characterFrame:  document.querySelector(".character-frame"),
    characterImage:  document.getElementById("characterImage"),
    characterName:   document.getElementById("characterName"),
    instruction:     document.getElementById("instruction"),
    questionText:    document.getElementById("questionText"),
    btnYes:          document.getElementById("btnYes"),
    btnNo:           document.getElementById("btnNo"),
    attemptsStat:    document.getElementById("attemptsStat"),
    answersStat:     document.getElementById("answersStat"),
    attemptsValue:   document.getElementById("attemptsValue"),
    answersValue:    document.getElementById("answersValue"),
    datasetStat:     document.getElementById("datasetStat"),
    sourceStat:      document.getElementById("sourceStat"),
    statusLine:      document.getElementById("statusLine"),
    candidateList:   document.getElementById("candidateList"),
    tutorialOverlay: document.getElementById("tutorialOverlay"),
    tutorialTitle:   document.getElementById("tutorialTitle"),
    tutorialBody:    document.getElementById("tutorialBody"),
    tutorialDots:    document.getElementById("tutorialDots"),
    tutorialNext:    document.getElementById("tutorialNext"),
    tutorialSkip:    document.getElementById("tutorialSkip")
};

// ── Personaggi locali ────────────────────────────────────────
function buildTraits(trueKeys) {
    const t = {};
    TRAIT_KEYS.forEach(k => { t[k] = false; }); 

    (trueKeys || []).forEach(k => { 
        if (k in t) t[k] = true; 
    });

    return t;
}

function seedCharacter(id, name, image, trueKeys) {
    return { id, name, image: image || "", traits: buildTraits(trueKeys) };
}

const LOCAL_SEED = (typeof SHARED_CHARACTERS_DATA !== "undefined")
    ? SHARED_CHARACTERS_DATA.map(d => seedCharacter(...d.args))
    : [];

// ── Algoritmo Bayesiano ─────────────────────────────────────
function initPosteriors() {
    const base = 1 / Math.max(1, state.characters.length);
    return state.characters.map(() => base);
}

function traitLikelihood(trait, answerYes) {
    if (trait === true && answerYes) return 0.99;
    if (trait === true && !answerYes) return 0.01;

    if (trait === false && !answerYes) return 0.99;
    if (trait === false && answerYes) return 0.01;

    return 0.5;
}

function shannonEntropy(probs) {
    let h = 0;
    for (const p of probs) { if (p > 0) h -= p * Math.log2(p); }
    return h;
}

function normalizeProbabilities(probs) {
    const sum = probs.reduce((a, b) => a + b, 0);
    if (sum === 0 || !isFinite(sum)) return probs.map(() => 1 / probs.length);
    return probs.map(p => p / sum);
}

function scoreQuestion(q) {
    const traitKey = q.key;
    let yesW = [], noW = [], pYes = 0, pNo = 0, knownMass = 0;
    for (let i = 0; i < state.characters.length; i++) {
        const p = state.posteriors[i] || 0;
        const trait = state.characters[i].traits[traitKey];
        if (trait === true || trait === false) knownMass += p;
        const wY = p * traitLikelihood(trait, true);
        const wN = p * traitLikelihood(trait, false);
        yesW.push(wY); noW.push(wN);
        pYes += wY; pNo += wN;
    }
    const H_yes = shannonEntropy(normalizeProbabilities(yesW));
    const H_no  = shannonEntropy(normalizeProbabilities(noW));
    const expectedH = pYes * H_yes + pNo * H_no;
    return { expectedH, knownMass };
}

// 🔹 shouldSkipQuestion aggiornato
function shouldSkipQuestion(key) {
    if (state.answers[key] !== undefined) return true;

    const group = getGroup(key);

    if (group) {
        for (const g of group) {
            if (state.answers[g] === "yes") return true;
        }

        const others = group.filter(g => g !== key);
        if (others.every(g => state.answers[g] === "no")) return true;
    }

    // storico → no traits moderni per personaggi vecchi
    if (state.answers["born_before_1950"] === "yes") {
        if (["billionaire", "tech_founder", "alive"].includes(key)) return true;
    }

    // blocca "alive" solo se non sappiamo epoca
    if (key === "alive" &&
        state.answers["born_before_1950"] === undefined &&
        state.answers["born_1950_1980"] === undefined &&
        state.answers["born_after_1980"] === undefined
    ) return true;

    // penalità paesi dinamica
    if (key.startsWith("from_")) {
        const topCandidates = rankCandidates().filter(r => r.probability > 0.05);
        const uniqueCountries = new Set(
            topCandidates.map(r => Object.keys(r.character.traits)
                .find(k => k.startsWith("from_") && r.character.traits[k] === true)
            )
        );
        if (uniqueCountries.size > 2) return true;
    }

    // evita traits già impliciti
    if ((key === "male" || key === "female") &&
        (state.answers["male"] === "yes" || state.answers["female"] === "yes")
    ) return true;

    return false;
}

// 🔹 chooseBestQuestion aggiornato con countryPenalty dinamica
function chooseBestQuestion() {
    const unanswered = QUESTION_BANK.filter(q => !shouldSkipQuestion(q.key));
    if (!unanswered.length) return null;

    const H_current = shannonEntropy(state.posteriors);
    let best = null;
    let bestScore = -Infinity;

    for (const q of unanswered) {
        const { expectedH, knownMass } = scoreQuestion(q);

        if (knownMass < 0.15) continue;

        let yesMass = 0, noMass = 0;
        for (let i = 0; i < state.characters.length; i++) {
            const p = state.posteriors[i] || 0;
            const trait = state.characters[i].traits[q.key];
            if (trait === true) yesMass += p;
            if (trait === false) noMass += p;
        }
        if (yesMass < 0.05 || noMass < 0.05) continue;

        const gain = H_current - expectedH;
        const weight = q.weight || 1;

        const baseBonus =
            (q.key === "european" ? 0.4 : 0) +
            (q.key.startsWith("born_") ? 2.0 : 0) +
            (q.key === "alive" ? 1.5 : 0);

        const importantBonus =
            (q.key === "inventor" ? 0.7 : 0) +
            (["physicist","mathematician"].includes(q.key) ? 0.2 : 0);

        // penalità dinamica per paesi / traits moderni
        let countryPenalty = 0;
        if (q.key.startsWith("from_") || q.key === "tech_founder" || q.key === "billionaire") {
            const topCandidates = rankCandidates().filter(r => r.probability > 0.05);
            const uniqueTraits = new Set(
                topCandidates.map(r => Object.keys(r.character.traits)
                    .find(k => k === q.key && r.character.traits[k] === true)
                )
            );
            if (uniqueTraits.size > 2) countryPenalty = -0.8;
        }

        // bonus per traits unici (discriminanti)
        let uniqueBonus = 0;
        const topCandidates = rankCandidates().filter(r => r.probability > 0.05);
        const countWithTrait = topCandidates.reduce((acc, r) => acc + (r.character.traits[q.key] ? 1 : 0), 0);
        if (countWithTrait === 1) uniqueBonus = 0.8; // solo un candidato ha questo trait

        const score = (gain + knownMass * 0.2 + baseBonus + importantBonus + countryPenalty + uniqueBonus) * weight;

        if (score > bestScore) {
            bestScore = score;
            best = q;
        }
    }

    return best || unanswered[0];
}

function rankCandidates() {
    return state.characters
        .map((c, i) => ({ character: c, probability: state.posteriors[i] || 0 }))
        .sort((a, b) => b.probability - a.probability);
}

function applyEvidence(questionKey, answerType) {
    const answerYes = answerType === "yes";
    state.answers[questionKey] = answerType;

    const next = state.characters.map((c, i) => {
        const trait = c.traits[questionKey];
        let p = state.posteriors[i] || 0;

        // 🔥 penalità forte
        if (trait === true && !answerYes) return p * 0.001;
        if (trait === false && answerYes) return p * 0.001;

        if (trait === null) return p * 0.5;

        return p;
    });

    state.posteriors = normalizeProbabilities(next);
    state.askedKeys.add(questionKey);
    state.askedCount++;
    state.questionsAfterLastNo++;
}
// ── UI ──────────────────────────────────────────────────────
function setQuestionText(text, instruction = "") {
    if (el.instruction) el.instruction.textContent = instruction || "";
    if (el.questionText) el.questionText.textContent = text;
}

function setButtons(enabled) {
    if (el.btnYes) el.btnYes.disabled = !enabled;
    if (el.btnNo) el.btnNo.disabled = !enabled;
}

function setProgressVisible(visible) {
    if (el.progressBlock) el.progressBlock.hidden = !visible;
}

function updateProgress() {
    if (el.progressLabel) el.progressLabel.textContent = `DOMANDA ${state.askedCount}`;
    if (el.progressFill) el.progressFill.style.width = `${Math.min(100, state.askedCount * 5)}%`;
    if (el.answersStat) el.answersStat.textContent = `Risposte: ${state.askedCount}`;
    if (el.answersValue) el.answersValue.textContent = state.askedCount;
}

function updateAttemptsStat() {
    if (el.attemptsStat) el.attemptsStat.textContent = `Tentativi: ${state.guessAttempts}/${MAX_GUESS_ATTEMPTS}`;
    if (el.attemptsValue) el.attemptsValue.textContent = `${state.guessAttempts}/${MAX_GUESS_ATTEMPTS}`;
}

function updateStaticStats() {
    if (el.datasetStat) el.datasetStat.textContent = `Personaggi: ${state.characters.length}`;
    if (el.sourceStat) el.sourceStat.textContent = `Sorgente: locale`;
}

function updateCandidateList() {
    if (!el.candidateList) return;
    const ranked = rankCandidates().slice(0, 5);
    el.candidateList.innerHTML = ranked.map(r =>
        `<li>${r.character.name} <small>${Math.round(r.probability * 100)}%</small></li>`
    ).join("");
}

function setGuideCharacter() {
    state.characterViewToken++;
    if (el.characterName) el.characterName.textContent = "ZORINA";
    if (el.characterFrame) el.characterFrame.classList.remove("person-mode");
    if (el.characterImage) {
        el.characterImage.src = "assets/zorina.png";
        el.characterImage.onerror = () => { el.characterImage.src = "https://cdnjs.cloudflare.com/ajax/libs/twemoji/14.0.2/svg/1f9de-200d-2640-fe0f.svg"; };
    }
}

function setCandidateCharacter(character) {
    state.characterViewToken++;
    if (el.characterName) el.characterName.textContent = character.name;
    if (el.characterFrame) el.characterFrame.classList.add("person-mode");
    if (el.characterImage) {
        el.characterImage.src = character.image;
        el.characterImage.onerror = () => { el.characterImage.src = "https://cdnjs.cloudflare.com/ajax/libs/twemoji/14.0.2/svg/1f9d1.svg"; };
    }
}

// ── Flusso Gioco ────────────────────────────────────────────
function showIntroPrompt() {
    state.mode = "intro";
    state.introNoCount = 0;
    setProgressVisible(false);
    setButtons(true);
    setGuideCharacter();
    setQuestionText("SEI PRONTO PER GIOCARE?", "Il Genio Indovino è pronto...");
    updateProgress();
    updateAttemptsStat();
    if (el.questionBox) el.questionBox.classList.add("intro-mode");
}

function startGame() {
    state.characters = LOCAL_SEED.map(c => ({ ...c, traits: { ...c.traits } }));
    state.posteriors = initPosteriors();
    state.askedKeys = new Set();
    state.answers = {};
    state.askedCount = 0;
    state.questionsAfterLastNo = 0;
    state.guessIndex = 0;
    state.guessAttempts = 0;
    state.mode = "asking";
    state.currentQuestionKey = null;
    if (el.questionBox) el.questionBox.classList.remove("intro-mode");
    setButtons(true);
    setProgressVisible(true);
    setGuideCharacter();
    updateStaticStats();
    updateProgress();
    updateAttemptsStat();
    updateCandidateList();
    askNextQuestion();
}

function askNextQuestion() {
    const ranked = rankCandidates();
    const top = ranked[0];
    const second = ranked[1] || { probability: 0 };

    const margin = top.probability - second.probability;

    // 🔥 indovina quando è chiaro
    if (
        state.askedCount >= 3 &&
        top.probability > 0.65 &&
        margin > 0.2
    ) {
        prepareGuessing();
        return;
    }

    const next = chooseBestQuestion();

    if (!next) {
        prepareGuessing();
        return;
    }

    state.currentQuestionKey = next.key;
    setQuestionText(next.text, "Rispondi con SÌ o NO");
    updateCandidateList();
}

function applyAnswer(answerType) {
    if (!state.currentQuestionKey) return;
    applyEvidence(state.currentQuestionKey, answerType);
    state.currentQuestionKey = null;
    updateProgress();
    updateCandidateList();
    askNextQuestion();
}

function prepareGuessing() {
    state.mode = "guessing";
    state.guessOrder = rankCandidates();
    state.guessIndex = 0;
    showCurrentGuess();
}

function showCurrentGuess(isRetry = false) {
    const row = state.guessOrder[state.guessIndex];
    if (!row) { finishGame(false); return; }
    const guess = row.character;
    const pct = Math.round(row.probability * 100);
    const instr = isRetry ? "Riprovo..." : `Confidenza: ${pct}%`;
    setQuestionText(`Il tuo personaggio è ${guess.name}?`, instr);
    setCandidateCharacter(guess);
    updateAttemptsStat();
    updateCandidateList();
}

function handleGuess(answerType) {
    if (answerType === "yes") {
        const winner = state.guessOrder[state.guessIndex]?.character;
        setQuestionText(`Ho indovinato! È ${winner?.name}!`, "Il Genio è imbattibile!");
        finishGame(true);
        return;
    }

    //  guess sbagliato
    const wrongGuess = state.guessOrder[state.guessIndex]?.character;
    const wrongIndex = state.characters.findIndex(c => c.id === wrongGuess?.id);

    if (wrongIndex >= 0) {
        state.posteriors[wrongIndex] *= 0.01; // penalizza
    }

    state.posteriors = normalizeProbabilities(state.posteriors);

    state.guessAttempts++;

    //  BLOCCO LOOP
    if (state.guessAttempts >= 2) {
        // torna a fare domande
        state.mode = "asking";
        state.guessIndex = 0;
        state.questionsAfterLastNo = 0;

        setGuideCharacter();
        setQuestionText("Ok, mi serve qualche informazione in più...", "Rispondi con SÌ o NO");

        askNextQuestion();
        return;
    }

    // prova prossimo candidato
    state.guessIndex++;
    showCurrentGuess(true);
}

function finishGame(won) {
    state.mode = "finished";
    setProgressVisible(false);
    setButtons(true);
    if (!won) {
        setGuideCharacter();
        setQuestionText("Non ci sono riuscito...", "Vuoi riprovare? Premi SÌ.");
    } else {
        setQuestionText("Vuoi sfidare ancora il Genio?", "Premi SÌ per giocare ancora!");
    }
}

function onAnswer(answerType) {
    switch (state.mode) {
        case "intro":
            if (answerType === "yes") startGame();
            else {
                state.mode = "intro_no";
                state.introNoCount++;
                const line = INTRO_NO_LINES[(state.introNoCount - 1) % INTRO_NO_LINES.length];
                setQuestionText(line.question, line.instruction);
            }
            break;
        case "intro_no":
            if (answerType === "yes") startGame();
            else {
                state.introNoCount++;
                const line = INTRO_NO_LINES[(state.introNoCount - 1) % INTRO_NO_LINES.length];
                setQuestionText(line.question, line.instruction);
            }
            break;
        case "asking":
            applyAnswer(answerType);
            break;
        case "guessing":
            handleGuess(answerType);
            break;
        case "finished":
            if (answerType === "yes") showIntroPrompt();
            break;
    }
}

// ── Bootstrap ────────────────────────────────────────────────
function bootstrap() {
    state.characters = LOCAL_SEED.map(c => ({ ...c, traits: { ...c.traits } }));
    updateStaticStats();
    showIntroPrompt();
    if (el.btnYes) el.btnYes.addEventListener("click", () => onAnswer("yes"));
    if (el.btnNo) el.btnNo.addEventListener("click", () => onAnswer("no"));
}

bootstrap();
