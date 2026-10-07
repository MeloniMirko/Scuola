let contatore = 0;
let ultimaDurata = "-";
let ultimaData = "-";
let categoriaPrincipale = "Nessuna";


function AggiungiAttivita() {
    let nomeattivita = document.getElementById("NomeAttivita").value;
    let durataattivita = Number(document.getElementById("DurataAttivita").value);
    let dataattivita = document.getElementById("GiornoAttivita").value;

    if (nomeattivita === "") {
        alert("Inserisci un nome attivita");
        return;
    }

    if (isNaN(durataattivita) || durataattivita === 0) {
        alert("Inserisci una durata attivita valida");
        return;
    }

    if (dataattivita === "") {
        alert("Inserisci un giorno valido");
        return;
    }

    document.getElementById("ultimaattivita").innerHTML =
        document.getElementById("ultimaattivita").innerHTML +
        "<br>" + nomeattivita + " " + durataattivita + " min";

    contatore = contatore + 1;
    ultimaDurata = durataattivita;
    ultimaData = dataattivita;
}


function CategoriaPrincipale() {
    let categoriaprincipale = prompt("Inserisci la categoria principale (es. Studio, Sport, Tempo libero...)");

    if (categoriaprincipale !== null && categoriaprincipale !== "") {
        document.getElementById("categoria").innerHTML = categoriaprincipale;
        categoriaPrincipale = categoriaprincipale;
    }
}


function MostraRiepilogo() {
    alert(
        "Numero totale di attività: " + contatore +
        "\nUltima durata registrata: " + ultimaDurata +
        "\nCategoria principale: " + categoriaPrincipale +
        "\nUltimo giorno registrato: " + ultimaData +
        "\nEcco il riepilogo delle tue attività!"
    );
}
