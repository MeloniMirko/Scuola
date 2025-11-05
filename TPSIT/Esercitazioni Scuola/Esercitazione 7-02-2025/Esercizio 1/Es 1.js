let scelta;
let prezzo;

while (true) {
  scelta = prompt(
    "Scegli un film digitando un numero:\n" +
    "1 - Film 1 (10€)\n" +
    "2 - Film 2 (12€)\n" +
    "3 - Film 3 (15€)"
  );

  if (scelta === "1") {
    prezzo = 10;
    alert("Hai scelto Film 1. Prezzo biglietto: " + prezzo + "€");
    break;
  } else if (scelta === "2") {
    prezzo = 12;
    alert("Hai scelto Film 2. Prezzo biglietto: " + prezzo + "€");
    break;
  } else if (scelta === "3") {
    prezzo = 15;
    alert("Hai scelto Film 3. Prezzo biglietto: " + prezzo + "€");
    break;
  } else {
    alert("Film non disponibile! Riprova.");
  }
}
