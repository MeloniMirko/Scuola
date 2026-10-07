function converti() {
            let m = Number(document.getElementById("metri").value);
            document.getElementById("cm").innerText = m + " metri = " + (m * 100) + " cm";
        }