var carrello = [];

function aggiungiProdotto() {
    var prodotto = prompt("Inserisci prodotto:");
    if (prodotto != "") {
        carrello.push(prodotto);
        alert("Prodotto aggiunto");
    }
}

function mostraCarrello() {
    if (carrello.length == 0) {
        alert("Carrello vuoto");
    } else {
        alert(carrello);
    }
}

function cercaProdotto() {
    var nome = prompt("Nome prodotto da cercare:");
    var trovato = false;

    for (var i = 0; i < carrello.length; i++) {
        if (carrello[i] == nome) {
            trovato = true;
        }
    }

    if (trovato) {
        alert("Prodotto presente");
    } else {
        alert("Prodotto non presente");
    }
}
