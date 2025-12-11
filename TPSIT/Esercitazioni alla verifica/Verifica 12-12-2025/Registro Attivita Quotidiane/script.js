let contatore = 0;
let ultimaDurata = "-";
let ultimaData = "-";
let categoriaPrincipale = "Nessuna";


function AggiungiAttivita(){
 

    let nomeattivita = document.getElementById("NomeAttivita").value;
    let durataattivita = Number(document.getElementById("DurataAttivita").value);

    if (nomeattivita === ""){
       alert("Inserisci un nome attivita");
    }

    if(durataattivita == ""){
        alert("Inserisci una durata attivita valida");
    }

    document.getElementById("ultimaattivita").innerHTML = document.getElementById("ultimaattivita").innerHTML +"<br>"+ nomeattivita + " "+durataattivita;

    contatore = contatore + 1;  // aumenti il totale
    ultimaDurata = durataattivita;      // aggiorni l'ultima durata

  

}

function CategoriaPrincipale(){
    let categoriaprincipale = prompt("Inserisci la categoria principale (es. Studio, Sport, Tempo libero...")

    document.getElementById("categoria").innerHTML = categoriaprincipale ;
}

function MostraRiepilogo() {
    alert(
        "Numero totale di attività: " + contatore +
        "\nUltima durata registrata: " + ultimaDurata +
        "\nCategoria principale: " + categoriaPrincipale +
        "\nEcco il riepilogo delle tue attività!"
    );
}
