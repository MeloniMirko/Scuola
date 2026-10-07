 function aggiungi() {
            let t = document.getElementById("testo").value;
            if(t === "") return;

            let li = document.createElement("li");
            li.textContent = t;

            document.getElementById("lista").appendChild(li);

            document.getElementById("testo").value = "";
        }