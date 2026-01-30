let nomi = [];
let cont = 0;

function aggiungi() {
  nomi[cont] = document.getElementById("nome").value;
  cont++;
}

function visualizza() {
  let testo = "";
  for (let i = 0; i < cont; i++) {
    testo += nomi[i] + " ";
  }
  document.getElementById("oo").innerHTML = testo;
}