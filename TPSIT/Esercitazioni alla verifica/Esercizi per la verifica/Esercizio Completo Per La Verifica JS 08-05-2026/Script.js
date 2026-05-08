let giochi = [];
let prezzi = [];

function Aggiungi(){

    let gioco = document.getElementById("gioco").value
    let prezzo = document.getElementById("prezzo").value*1;

    let posizone = giochi.indexOf(gioco);

    if (posizione != -1){
        alert("Gioco gia presente")

        return;
    }

    giochi.push(gioco);
    prezzi.push(prezzo);

}

function Mostra(){
    let testo="";

    for(let i=0; i<giochi.length; i++){
        testo += giochi[i] + "-" +prezzi[i] +"€";
    }

    document.getElementById("output").innerHTML=testo;
}

function Cerca(){

    let gioco = document.getElementById("gioco").value

    let posizione = giochi.indexOf(gioco);

    if(posizione == -1){
        alert("Gioco non trovato");

        return;
    }

    document.getElementById("output").innerHTML = giochi[posizione] + "-" + prezzi[posizione]+"€";
}

function Aumenta()
{
    let gioco =
        document.getElementById("gioco").value;

    let prezzo =
        document.getElementById("prezzo").value*1;

    let posizione = giochi.indexOf(gioco);

    if(posizione == -1)
    {
        alert("Gioco non trovato");

        return;
    }

    prezzi[posizione] += prezzo;

    alert("Prezzo aggiornato");
}

function Aumenta()
{
    let gioco = document.getElementById("gioco").value;

    let prezzo = document.getElementById("prezzo").value*1;

    let posizione = giochi.indexOf(gioco);

    if(posizione == -1)
    {
        alert("Gioco non trovato");

        return;
    }

    prezzi[posizione] -= prezzo;

    alert("Prezzo aggiornato");
}

function Elimina()
{
    let gioco =
        document.getElementById("gioco").value;

    let posizione = giochi.indexOf(gioco);

    if(posizione == -1)
    {
        alert("Gioco non trovato");

        return;
    }

    giochi.splice(posizione, 1);

    prezzi.splice(posizione, 1);

    alert("Gioco eliminato");
}

function Svuota(){
    prezzi=[];
    giochi=[];

    document.getElementById("output")=""
}


