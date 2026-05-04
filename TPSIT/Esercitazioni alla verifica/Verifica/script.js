
let prodotti = [];
let quantita = [];
let i = 0;



function cerca(nome) {
    for (let k = 0; k < prodotti.length; k++) {
        if (nome == prodotti[k]) {
            return k;
        }
    }
    return -1;
}


function aggiungi() {

    let nome = document.getElementById("prodotto").value;
    let q = document.getElementById("quantita").value * 1;

    // controlli
    if (nome == "" || q == "") {
        alert("Compilare prodotto e quantità");
        return;
    }

    if (q <= 0) {
        alert("Quantità non valida");
        return;
    }

    let pos = cerca(nome);

    if (pos >= 0) {
        alert("Prodotto già presente!");
    } else {
        prodotti[i] = nome;
        quantita[i] = q;
        i++;

        alert("Prodotto " + nome + " aggiunto correttamente");
    }

    // svuota input
    document.getElementById("prodotto").value = "";
    document.getElementById("quantita").value = "";
}



function mostra() {

    let testo = "";

    if (prodotti.length == 0) {
        testo = "Magazzino vuoto";
    } else {

        testo = "Prodotto - Quantità<br>";

        for (let k = 0; k < prodotti.length; k++) {
            testo += prodotti[k] + " - " + quantita[k] + "<br>";
        }
    }

    document.getElementById("output").innerHTML = testo;
}


function svuota() {

    prodotti = [];
    quantita = [];
    i = 0;

    document.getElementById("output").innerHTML = "Magazzino vuoto";
}



function preleva() {

    // controlli iniziali
    if (prodotti.length == 0) {
        alert("Serve aggiungere almeno un prodotto");
        return;
    }

    let nome = prompt("Nome prodotto");
    let q = prompt("Quantità da prelevare") * 1;

    if (nome == "" || q == "") {
        alert("Compilare prodotto e quantità");
        return;
    }

    let pos = cerca(nome);

    if (pos < 0) {
        alert("Prodotto " + nome + " non trovato!");
    } else {

        if (quantita[pos] >= q) {
            quantita[pos] = quantita[pos] - q;
            alert("Prelievo effettuato correttamente");
        } else {
            alert("Quantità insufficiente");
        }
    }
}
