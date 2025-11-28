// Prezzo di ogni bevanda
const prezzo = 1.20;
// Variabile per il totale
let totale = 0;

function aggiungi() {
    // Prendo i valori dagli input
    let bevanda = document.getElementById("bevanda").value;
    let quantita = document.getElementById("quantita").value;
    
    // Controllo che la quantità sia un numero positivo
    if(quantita <= 0) {
        alert("La quantità deve essere maggiore di 0!");
        return;
    }
    
    // Calcolo il prezzo per questa bevanda
    let prezzoBevanda = quantita * prezzo;
    
    // Aggiungo al totale
    totale = totale + prezzoBevanda;
    
    // Aggiorno la lista
    let lista = document.getElementById("lista");
    lista.innerHTML = lista.innerHTML + "<p>" + bevanda + " - " + quantita + " pz = " + prezzoBevanda.toFixed(2) + " €</p>";
    
    // Aggiorno il totale
    document.getElementById("totale").innerHTML = "Totale: " + totale + " €";
    
    // Pulisco gli input
    document.getElementById("bevanda").value = "";
    document.getElementById("quantita").value = "1";
}

function conferma() {
    let risposta = prompt("Vuoi confermare l'ordine? (s/n)");
    
    if(risposta == "s") {
        alert("Ordine confermato! Totale: " + totale + " €");
    } else if(risposta == "n") {
        alert("Ordine annullato");
    }
    
    // Reset di tutto
    document.getElementById("lista").innerHTML = "";
    document.getElementById("totale").innerHTML = "Totale: 0.00 €";
    totale = 0;
}