

let nomiStudenti = [];
let votiStudenti = [];

function inserisciStudente() {
    let nome = prompt("Inserisci il nome dello studente:");
    let voto = prompt("Inserisci il voto ottenuto:");
    nomiStudenti[nomiStudenti.length] = nome; 
    votiStudenti[votiStudenti.length] = voto; 
    alert("Studente inserito con successo!");
}

function visualizzaRegistro() {
    let output = document.getElementById("output");
    output.innerHTML = "";  
    for (let i = 0; i < nomiStudenti.length; i++) {
        output.innerHTML += nomiStudenti[i] + ": " + votiStudenti[i] + "<br>";
    }
}

function calcolaMediaClasse() {
    let somma = 0;
    for (let i = 0; i < votiStudenti.length; i++) {
        somma += votiStudenti[i]; 
    }
    let media = somma / votiStudenti.length;
    alert("La media della classe è: " + media); 
}

function trovaVotoPiuAlto() {
    let votoPiuAlto = votiStudenti[0];
    let studentePiuAlto = nomiStudenti[0];
    for (let i = 0; i < votiStudenti.length; i++) {
        if (votiStudenti[i] > votoPiuAlto) {
            votoPiuAlto = votiStudenti[i];
            studentePiuAlto = nomiStudenti[i];
        }
    }
    alert("Lo studente con il voto più alto è: " + studentePiuAlto + " con un voto di: " + votoPiuAlto);
}

function trovaInsufficienze() {
    let output = document.getElementById("output");
    output.innerHTML = "";
    let insufficienzeTrovate = false;
    for (let i = 0; i < votiStudenti.length; i++) {
        if (votiStudenti[i] < 6) {
            output.innerHTML += nomiStudenti[i] + ": " + votiStudenti[i] + "<br>";
            insufficienzeTrovate = true;
        }
    }
    if (!insufficienzeTrovate) {
        alert("Nessuna insufficienza");
    }
}


    


