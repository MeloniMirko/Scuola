function submitQuiz() {
    // Risposte corrette
    const correctAnswers = {
        q1: "b",
        q2: "b",
        q3: "b",
        q4: "b",
        q5: "c",
        q6: "c",    
        q7: "b",
        q8: "a",
        q9: "b",
        q10: "a",
        q11: "b",
        q12: "b",
    };

    // Recupera tutte le domande
    const questions = Object.keys(correctAnswers);
    let score = 0;
    let unanswered = 0; // Contatore per le domande non risposte

    // Cicla ogni domanda
    questions.forEach(function (question) {
        const selectedOption = document.querySelector(`input[name="${question}"]:checked`);
        const labels = document.querySelectorAll(`input[name="${question}"]`);

        // Se una risposta è stata selezionata
        if (selectedOption) {
            // Confronta con la risposta corretta
            if (selectedOption.value === correctAnswers[question]) {
                score++;
                selectedOption.parentElement.style.color = "green"; // Risposta corretta
            } else {
                selectedOption.parentElement.style.color = "red"; // Risposta errata
            }
        } else {
            // Se non è stata selezionata una risposta, coloriamo tutte le opzioni in rosso
            labels.forEach(label => {
                label.parentElement.style.color = "red"; // Risposta non data, colorata di rosso
            });
            unanswered++; // Incrementa il contatore delle domande non risposte
        }
    });

    // Mostra il punteggio nel modal
    const modal = document.getElementById("resultModal");
    const modalMessage = document.getElementById("modalMessage");
    modalMessage.textContent = `Hai risposto correttamente a ${score} su ${questions.length} domande. \n Non hai risposto a ${unanswered} domande.`;
    modal.style.display = "block"; // Mostra il modal

    // Chiudi il modal quando l'utente clicca sulla "X"
    const closeModal = document.getElementById("closeModal");
    closeModal.onclick = function() {
        modal.style.display = "none"; // Nascondi il modal
        window.location.reload(); // Ricarica la pagina
    }

    // Chiudi il modal quando l'utente clicca al di fuori del modal
    window.onclick = function(event) {
        if (event.target === modal) {
            modal.style.display = "none"; // Nascondi il modal
        }
        
    }
}

    // caricamento pagina quiz
    document.addEventListener("DOMContentLoaded", function () {
        const loader = document.getElementById("loader");
        const content = document.getElementById("content");

    setTimeout(() => {
        loader.style.display = "none";
        content.style.display = "block";
    }, 3000); // Simula un caricamento di 3 secondi
});

//modal istruzioni Quiz


setTimeout(function() {
    var modal = document.getElementById("modal-istruzioni");
    modal.style.display = "block";
  }, 1000);
  
  
// Inizia il Quiz
function startQuiz() {
    const modalIstruzioni = document.getElementById("modal-istruzioni");
    if (modalIstruzioni) {
        modalIstruzioni.style.display = "none";
    }
}