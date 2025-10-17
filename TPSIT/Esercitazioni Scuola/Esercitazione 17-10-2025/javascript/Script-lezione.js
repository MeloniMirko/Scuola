function verificaAccesso() {
    let psw = document.getElementById('password').value;
    let codice = document.getElementById('codice').value;

    if (psw === "admin" && codice === "0000") {
        alert("Accesso speciale ");
    } else if (psw === "admin") {
        alert("Codice errato");
    } else {
        alert("Accesso negato");
    }
    alert("Operazione terminata");
}