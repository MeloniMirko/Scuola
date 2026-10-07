 function verifica() {
            let u = document.getElementById("user").value;
            let p = document.getElementById("pass").value;

            if (u !== "" && p !== "") {
                document.getElementById("msg").innerText = "Tutti i campi sono compilati!";
            } else {
                document.getElementById("msg").innerText = "Compila entrambi i campi!";
            }
        }