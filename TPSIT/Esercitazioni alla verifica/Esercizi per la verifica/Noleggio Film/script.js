// Array paralleli
let film = [];
let utenti = [];
let giorni = [];

function registraNoleggio() {
    let titolo = document.getElementById("titolo").value;
    let utente = document.getElementById("utente").value;
    let giorniNoleggio = document.getElementById("giorni").value;

    if (titolo === "" || utente === "" || giorniNoleggio === "") {
        alert("Compila tutti i campi");
        return;
    }

    // Controllo duplicati
    let trovato = false;
    for (let i = 0; i < film.length; i++) {
        if (film[i] == titolo) {
            trovato = true;
            break;
        }
    }

    if (trovato) {
        alert("Film già in noleggio");
    } else {
        film[film.length] = titolo;
        utenti[utenti.length] = utente;
        giorni[giorni.length] = giorniNoleggio;
        alert("Noleggio registrato correttamente");

        // Svuotare campi
        document.getElementById("titolo").value = "";
        document.getElementById("utente").value = "";
        document.getElementById("giorni").value = "";
    }
}

function controllaNoleggio() {
    let titolo = prompt("Inserisci il titolo del film da controllare:");
    let trovato = false;

    for (let i = 0; i < film.length; i++) {
        if (film[i] == titolo) {
            document.getElementById("paragrafo").innerText =
                "Utente: " + utenti[i] + " - Giorni: " + giorni[i];
            trovato = true;
            break;
        }
    }

    if (!trovato) {
        alert("Film non presente");
    }
}

function restituisciFilm() {
    let titolo = prompt("Inserisci il titolo del film da restituire:");
    let trovato = false;

    for (let i = 0; i < film.length; i++) {
        if (film[i] == titolo) {
            for (let j = i; j < film.length - 1; j++) {
                film[j] = film[j + 1];
                utenti[j] = utenti[j + 1];
                giorni[j] = giorni[j + 1];
            }
            film.length--;
            utenti.length--;
            giorni.length--;
            alert("Film restituito");
            trovato = true;
            break;
        }
    }

    if (!trovato) {
        alert("Film non trovato");
    }
}

function elencoNoleggi() {
    if (film.length === 0) {
        document.getElementById("paragrafo").innerText = "Nessun noleggio registrato";
    } else {
        let testo = "";
        for (let i = 0; i < film.length; i++) {
            testo += film[i] + " - " + utenti[i] + " - " + giorni[i] + "\n";
        }
        document.getElementById("paragrafo").innerText = testo;
    }
}
