let libri = [];
let pagine = [];
let i=0;

function aggiungi()
{
    let libro =document.getElementById("Nome").value;

    let pagina = parseInt(document.getElementById("Pagine").value);

    let posizione = libri.indexOf(libro);

    if(posizione != -1)
    {
        alert("Oggetto già presente");

        return;
    }

    libri.push(libro);

    pagine.push(pagina);
}

function mostra(){
    let testo =""; 

    for(let i=0 ; i<libri.length; i++){
        testo += libri[i] + "-" + pagine[i] + "<br>";
    }

    document.getElementById("output").innerHTML = testo;
}

function svuota(){

    libri = [];
    pagine =[];

    document.getElementById("output").innerHTML = "";
}

function cerca()
{
    let libro =
        document.getElementById("Nome").value;

    let posizione = libri.indexOf(libro);

    if(posizione == -1)
    {
        alert("Libro non trovato");

        return;
    }

    document.getElementById("output").innerHTML =
        libri[posizione] +
        " - " +
        pagine[posizione] +
        " pagine";
}

function preleva()
{
    let prodotto =
        document.getElementById("prodotto").value;

    let qta = parseInt(
        document.getElementById("quantita").value
    );

    let posizione = prodotti.indexOf(prodotto);

    if(posizione == -1)
    {
        alert("Prodotto non trovato");

        return;
    }

    if(quantita[posizione] < qta)
    {
        alert("Quantità insufficiente");

        return;
    }

    quantita[posizione] -= qta;

    alert("Prelievo effettuato");
}