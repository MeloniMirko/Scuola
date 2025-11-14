function aggiungiprodotto(){
    let nomeAlimento = prompt("Dammi un nome prodotto");
    document.getElementById("dati").innerHTML=
    document.getElementById("dati").innerHTML+"<br>-"+nomeAlimento;
}


