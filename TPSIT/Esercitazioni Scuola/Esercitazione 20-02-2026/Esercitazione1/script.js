let nomiProdotti = [];
let prezziProdotti = [];
let quantityProdotti = [];
let i = 0;
function aggiungi() {
    let nome = prompt("Dammi nome prodotto");
    let prezzo = prompt("Dammi prezzo")*1;
    let quantity = prompt("Dammi quantità")*1;
    nomiProdotti[i] = nome;
    prezziProdotti[i] = prezzo;
    quantityProdotti[i] = quantity;
    i++;
    alert("Prodotto "+nome+" inserito correttamente");
}
function visualizza() {
    let prezzoTotale;
    for (let j = 0; j < nomiProdotti.length; j++) {
        prezzoTotale = prezziProdotti[j]*quantityProdotti[j];
        document.getElementById("dati").innerHTML +=
            j+"-"+nomiProdotti[j]+" "+prezziProdotti[j]+
            "EUR x"+quantityProdotti[j]+" "+
           + prezzoTotale+"EUR<br/>";
    }
}
function cerca() {
    let elementoDaRicercare = 
            prompt("Che prodotto stai cercando?");

    let risultato = ricercaElemento(elementoDaRicercare);
    
    if (risultato == -1) {
        //alert("Elemento non trovato");
        document.getElementById("messaggio").innerHTML="Elemento non trovato!";
    } else {
          //alert("Elemento trovato in posizione "+risultato);
         document.getElementById("messaggio").innerHTML = nomiProdotti[risultato]+" "+prezziProdotti[risultato]+ "EUR x"+quantityProdotti[risultato]
    }
}

function ricercaElemento(chiaveDiRicerca) {
    for (let j = 0; j < nomiProdotti.length; j++) {
        if (nomiProdotti[j] == chiaveDiRicerca) {
            return j;
        }
    }
    return -1;
}