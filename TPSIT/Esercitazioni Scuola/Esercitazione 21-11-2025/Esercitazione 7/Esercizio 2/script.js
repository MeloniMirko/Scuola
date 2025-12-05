function somma() {
            // Prende i valori e li converte in numero vero
            let n1 = Number(document.getElementById("num1").value);
            let n2 = Number(document.getElementById("num2").value);

            // Calcola la somma
            let s = n1 + n2;

            // Mostra il risultato
            document.getElementById("risultato").innerText = "Risultato: " + s;
        }