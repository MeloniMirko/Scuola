let libri = [];
let utenti = [];
let giorni = [];
let i = 0;

// funzione cerca (come il prof)
function cerca(titolo) {
    for (let k = 0; k < libri.length; k++) {
        if (titolo == libri[k]) {
            return k;
        }
    }
    return -1;
}

// 1. REGISTRA PRESTITO
function registra() {
    let libro = document.getElementById("libro").value;
    let utente = document.getElementById("utente").value;
    let giorno = document.getElementById("giorni").value;

    if (libro == "" || utente == "" || giorno == "") {
        alert("Compila tutti i campi");
        return;
    }

    let posizione = cerca(libro);

    if (posizione >= 0) {
        alert("Libro già in prestito");
    } else {
        libri[i] = libro;
        utenti[i] = utente;
        giorni[i] = giorno;
        i++;

        alert("Prestito registrato correttamente");

        // svuota input
        document.getElementById("libro").value = "";
        document.getElementById("utente").value = "";
        document.getElementById("giorni").value = "";
    }
}

// 2. CONTROLLA PRESTITO
function controlla() {
    let titolo = prompt("Inserisci titolo libro");
    let posizione = cerca(titolo);

    if (posizione < 0) {
        alert("Libro non presente");
    } else {
        document.getElementById("output").innerHTML =
            "Utente: " + utenti[posizione] +
            " - Giorni: " + giorni[posizione];
    }
}

// 3. RESTITUISCI LIBRO
function restituisci() {
    let titolo = prompt("Inserisci titolo da restituire");
    let posizione = cerca(titolo);

    if (posizione < 0) {
        alert("Libro non trovato");
    } else {

        // shift manuale (stile semplice)
        for (let k = posizione; k < libri.length - 1; k++) {
            libri[k] = libri[k + 1];
            utenti[k] = utenti[k + 1];
            giorni[k] = giorni[k + 1];
        }

        libri.length--;
        utenti.length--;
        giorni.length--;

        i--;

        alert("Libro restituito");
    }
}

// 4. ELENCO PRESTITI
function elenco() {
    let testo = "";

    for (let k = 0; k < libri.length; k++) {
        testo += libri[k] + " - " + utenti[k] + " - " + giorni[k] + " giorni<br>";
    }

    if (testo == "") {
        testo = "Nessun prestito registrato";
    }

    document.getElementById("output").innerHTML = testo;
}