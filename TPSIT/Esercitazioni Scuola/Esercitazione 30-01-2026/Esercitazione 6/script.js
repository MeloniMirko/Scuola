var usernames = [];
var passwords = [];

function registra() {
    var u = document.getElementById("username").value;
    var p = document.getElementById("password").value;

    usernames.push(u);
    passwords.push(p);

    document.getElementById("messaggio").innerHTML =
        "Registrazione avvenuta";
}

function autentica() {
    var u = document.getElementById("username").value;
    var p = document.getElementById("password").value;
    var ok = false;

    for (var i = 0; i < usernames.length; i++) {
        if (usernames[i] == u && passwords[i] == p) {
            ok = true;
        }
    }

    if (ok) {
        document.getElementById("messaggio").innerHTML =
            "Autenticazione riuscita";
    } else {
        document.getElementById("messaggio").innerHTML =
            "Dati errati";
    }
}
