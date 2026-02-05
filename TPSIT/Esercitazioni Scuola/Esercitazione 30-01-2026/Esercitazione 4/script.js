let nomi = [];
let cognomi = [];
let cont = 0;

function aggiungi() {
  nomi[cont] = document.getElementById("nome").value;
  cognomi[cont] = document.getElementById("cognome").value;
  cont++;
}

function visualizza() {
  let testo = "";

  for (let i = 0; i < cont; i++) {
    testo += nomi[i] + " " + cognomi[i] + "<br>";
  }

  document.getElementById("oo").innerHTML = testo;
}
