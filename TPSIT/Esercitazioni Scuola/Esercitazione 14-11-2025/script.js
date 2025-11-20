let contatore = 0;

function aggiungi() {
    let nomeAlimento = prompt("Dammi nome prodotto");

    if (nomeAlimento !== null && nomeAlimento !== "") {

        // tolgo il messaggio "Il carrello è vuoto" alla prima aggiunta
        if (contatore === 0) {
            document.getElementById("dati").innerHTML = "";
        }

        contatore = contatore + 1;

        document.getElementById("dati").innerHTML =
            document.getElementById("dati").innerHTML + "<br>- " + nomeAlimento;

        document.getElementById("contatore").innerHTML = contatore;
    }
}

function svuota() {
    document.getElementById("dati").innerHTML = "Il carrello è vuoto";
    contatore = 0;
    document.getElementById("contatore").innerHTML = 0;
}
