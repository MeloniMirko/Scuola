let prezzi = [];
let n = 0;

function aggiungi() {
  prezzi[n] = document.getElementById("prezzo").value;
  n++;
}

function mostra() {
  let testo = "";
  for (let i = 0; i < n; i++) {
    testo += "€" + prezzi[i] + " ";
  }
  document.getElementById("ris").innerHTML = testo;
}
