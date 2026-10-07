function calcola() {
  let numeri = [];
  let somma = 0;

  for (let i = 0; i < 5; i++) {
    numeri[i] = prompt("Inserisci un numero")*1;
    somma = somma + numeri[i];
  }

  document.getElementById("ris").innerHTML = "Somma: " + somma;
}