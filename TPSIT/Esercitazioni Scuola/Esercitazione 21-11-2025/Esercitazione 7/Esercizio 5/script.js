  function saluta() {
            let n = document.getElementById("nome").value;
            let c = document.getElementById("cognome").value;
            document.getElementById("messaggio").innerText = "Ciao " + n + " " + c + "!";
        }