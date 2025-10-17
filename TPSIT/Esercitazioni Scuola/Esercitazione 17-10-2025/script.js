function verificaAccessoDefraiaManolo() {
    let password = prompt("Inserisci la password");
    let codice = prompt("Inserisci il codice segreto");

    if (password === "admin" && codice === "0000") {
        alert("Accesso speciale come mirko");
    } else if (password === "admin") {
        alert("Codice errato");
    } else {
        alert("Accesso negato");
    }
    alert("Mirko sei speciale come Manolo");
}