let citta="";
let totReg =0;
let tempRec=0;
let giornoRec=0;
function Meteo() {
    totReg++;
    let tipo=document.getElementById("tipo").value;
    let temperatura=document.getElementById("temperatura").value*1;
    let giorno=document.getElementById("giorno").value*1;
    tempRec=temperatura;
    giornoRec=giorno;
    document.getElementById("gradi").innerHTML=+tempRec;
    document.getElementById("g").innerHTML=+tempRec;
    if(tipo==="" || temperatura==="") {
        alert("Errore");
    } else {
        document.getElementById("Elenco").innerHTML=document.getElementById("Elenco").innerHTML+"<br>-Giorno: "+giorno+"  Tipo di meteo: "+tipo+"  Temperatura registrata: "+temperatura;
    }

}
function Imposta() {
    citta=prompt("Inserisci il nome della città");
    document.getElementById("luogo").innerHTML= citta;
    
}
function Riepilogo() {
    alert("Numero registrazioni totali: "+totReg+"\nTemperatura più recente: "+tempRec+"\nCittà impostata: "+citta+"\n\nEcco il tuo riepilogo meteo della giornata!");
}


