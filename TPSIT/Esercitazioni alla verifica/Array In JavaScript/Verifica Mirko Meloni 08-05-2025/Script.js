let libri=[];
let autori=[];


function Aggiungi(){
    let libro = document.getElementById("libro").value;
    let autore =document.getElementById("autore").value;

    if(libro =="\" || autore ==""){
        alert("Errore nell'inserimento dei campi , Riprovare");

        return;
    }

    let posizione = libri.indexOf(libro);
  
    if (posizione != -1){
        alert("Il Libro è gia esistente");

        return;
    }

    libri.push(libro);
    autori.push(autore);

    alert("Il libro è stato Aggiunto Correttamente");

    libro = document.getElementById("libro").value = "";
    autore =document.getElementById("autore").value = "";

}

function Cerca(){
    let libro = prompt("Inserisci il Nome del libro da cercare");

    let posizione = libri.indexOf(libro);

    if (posizione == -1){
        alert("Il Libro Non è Presente nell'Archivio");
        return;
    }

    document.getElementById("outputlibri").innerHTML = libri[posizione] + "<br>";
    document.getElementById("outputtitolo").innerHTML = autori[posizione] +"<br>";
    

}

function Vedi(){
    let testoTitolo="";
    let testoAutori="";
    
    for(let i=0; i<libri.length; i++){
        testoTitolo += libri[i] + "<br>";       
        testoAutori += autori[i] + "<br>";
    }

    document.getElementById("outputlibri").innerHTML = testoTitolo;
    document.getElementById("outputautori").innerHTML = testoAutori;
}

function AggiungiVecchioTitolo(){
    let vecchiotitolo = document.getElementById("VecchiTitoli").innerHTML;
    let autore ="sconosciuto";

    libri.push(vecchiotitolo);
    autori.push(autore);

    alert("Libro Vecchio Aggiunto Correttamente");
}

function Elimina() {
    let libro = prompt("Inserisci il nome del libro che vuoi eliminare");

    let posizione = libri.indexOf(libro);

    if (posizione == -1){
        alert("Il Libro non Esiste");

        return;
    }

    libri.splice(posizione,1);
    autori.splice(posizione,1);

    alert("Il libro e stato eliminato");

}