let clienti = [];
let corsi = [];

// 1. AGGIUNGI PRENOTAZIONE
function aggiungiPrenotazione() {
    let nome = document.getElementById("nomeCliente").value.trim();
    let corso = document.getElementById("nomeCorso").value.trim();

    if (nome === "" || corso === "") {
        alert("Errore: inserire nome e corso");
        return;
    }

    let index = clienti.indexOf(nome);

    if (index !== -1) {
        alert("Cliente già prenotato");
    } else {
        clienti.push(nome);
        corsi.push(corso);

        alert("Prenotazione aggiunta correttamente");

        document.getElementById("nomeCliente").value = "";
        document.getElementById("nomeCorso").value = "";
    }
}
