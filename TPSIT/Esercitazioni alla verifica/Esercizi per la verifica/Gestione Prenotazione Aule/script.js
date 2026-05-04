// Array paralleli
let stanze = [];
let clienti = [];
let notti = [];

function registraPrenotazione() {
    let stanza = document.getElementById("stanza").value;
    let cliente = document.getElementById("cliente").value;
    let numNotti = document.getElementById("notti").value;

    if (stanza === "" || cliente === "" || numNotti === "") {
        alert("Compila tutti i campi");
        return;
    }

    // Controllo duplicati
    let trovato = false;
    for (let i = 0; i < stanze.length; i++) {
        if (stanze[i] == stanza) {
            trovato = true;
            break;
        }
    }

    if (trovato) {
        alert("Stanza già prenotata");
    } else {
        stanze[stanze.length] = stanza;
        clienti[clienti.length] = cliente;
        notti[notti.length] = numNotti;
        alert("Prenotazione registrata correttamente");

        // Svuotare campi
        document.getElementById("stanza").value = "";
        document.getElementById("cliente").value = "";
        document.getElementById("notti").value = "";
    }
}

function controllaPrenotazione() {
    let stanza = prompt("Inserisci il numero della stanza da controllare:");
    let trovato = false;

    for (let i = 0; i < stanze.length; i++) {
        if (stanze[i] == stanza) {
            document.getElementById("paragrafo").innerText =
                "Cliente: " + clienti[i] + " - Notti: " + notti[i];
            trovato = true;
            break;
        }
    }

    if (!trovato) {
        alert("Stanza non prenotata");
    }
}

function cancellaPrenotazione() {
    let stanza = prompt("Inserisci il numero della stanza da cancellare:");
    let trovato = false;

    for (let i = 0; i < stanze.length; i++) {
        if (stanze[i] == stanza) {
            for (let j = i; j < stanze.length - 1; j++) {
                stanze[j] = stanze[j + 1];
                clienti[j] = clienti[j + 1];
                notti[j] = notti[j + 1];
            }
            stanze.length--;
            clienti.length--;
            notti.length--;
            alert("Prenotazione cancellata");
            trovato = true;
            break;
        }
    }

    if (!trovato) {
        alert("Stanza non trovata");
    }
}

function elencoPrenotazioni() {
    if (stanze.length === 0) {
        document.getElementById("paragrafo").innerText = "Nessuna prenotazione registrata";
    } else {
        let testo = "";
        for (let i = 0; i < stanze.length; i++) {
            testo += stanze[i] + " - " + clienti[i] + " - " + notti[i] + "\n";
        }
        document.getElementById("paragrafo").innerText = testo;
    }
}
