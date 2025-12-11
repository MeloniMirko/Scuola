function AggiungiLibro(){
    let titololibro = document.getElementById("Titolo").value;
    let quantita = Number(document.getElementById("Quantita").value);

    if(titololibro && quantita == "" ){
        document.getElementById("redalert").innerHTML = "non hai inserito nessun titolo o quantita riprova";
    }
}