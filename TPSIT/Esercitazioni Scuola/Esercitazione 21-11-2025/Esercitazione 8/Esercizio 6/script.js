 function aggiungi() {
            let t = prompt("Inserisci il testo:");
            if(!t) return;

            let li = document.createElement("li");
            li.textContent = t;
            document.getElementById("lista").appendChild(li);
        }