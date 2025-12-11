function AggiungiAttivita(){
    let nomeattivita = document.getElementById("NomeAttivita").value;
    let durataattivita = Number(document.getElementById("DurataAttivita").value);

    if (nomeattivita === ""){
       alert("Inserisci un nome attivita");
    }

    if(durataattivita == ""){
        alert("Inserisci una durata attivita valida");
    }
}

function CategoriaPrincipale(){
    let categoriaprincipale = prompt("Inserisci la categoria principale (es. Studio, Sport, Tempo libero...")

    categoriaprincipale = document.getElementById("categoria").value;
}