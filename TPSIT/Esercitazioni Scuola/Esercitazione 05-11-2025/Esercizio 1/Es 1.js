let scelta_film;
let prezzo;
// Ciclo finché l'utente non fa una scelta valida
//selezione del film
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

//selezione della fascia oraria

let scelta_orario;
while (true) {
  scelta_orario = prompt(
    "Scegli una fascia oraria digitando un numero:\n" +
    "1 - Mattina (9:00-12:00)\n" +
    "2 - Pomeriggio (12:30-16:00)\n" +
    "3 - Sera (16:30-23:00)"
  );
  if (scelta_orario === "1") {
    alert("Hai scelto la fascia oraria Mattina.");
    break;
  } else if (scelta_orario === "2") {
    alert("Hai scelto la fascia oraria Pomeriggio.");
    break;
  } else if (scelta_orario === "3") {
    alert("Hai scelto la fascia oraria Sera.");
    break;
  } else {
    alert("Fascia oraria non disponibile! Riprova.");
  }
  }


  //quantita di biglietti
  let quantita;
  while (true) {
    quantita = prompt("Quanti biglietti vuoi acquistare? (max 50)");
    if (quantita > 0 && quantita <= 50) {
      alert("Hai scelto di acquistare " + quantita + " biglietti.");
      break;
    } else {
      alert("Quantità non valida! Riprova.");
    }
  }

  //calcolo totale
  let totale = prezzo * quantita;
  let sconto = 0;
  if (quantita > 4) {
    sconto = 0.10; // 10% di sconto
  } else if (quantita == 1) {
    sconto = 0.05; // 5% di sconto
  }
  let importo_scontato = totale - (totale * sconto);

  if (sconto > 0) {
    alert("Dovrai pagare " + importo_scontato + " euro dopo uno sconto del " + (sconto * 100) + "%.");
  } else {
    alert("Dovrai pagare " + totale + " euro.");
  }

  //inserimento eta e calcolo sconto per eta


  let eta;
  while (true) {
    eta = prompt("Quanti anni hai?");
    if (eta > 0) {
      alert("Hai inserito la tua età: " + eta + " anni.");
      break;
    } else {
      alert("Età non valida! Riprova.");
    }
  }

  let sconto_eta = 0;
  if (eta < 12 || eta > 65) {
    sconto_eta = 0.50; // 50% di sconto
  } else if (eta >= 12 && eta <= 18) {
    sconto_eta = 0.20; // 20% di sconto
  }
  if (sconto_eta > 0) {
    let importo_finale = importo_scontato - (importo_scontato * sconto_eta);
    alert("Dovrai pagare " + importo_finale + " euro dopo uno sconto per età del " + (sconto_eta * 100) + "%.");
  } else {
    alert("Non hai diritto a sconti per età. Dovrai pagare " + importo_scontato + " euro.");
  }
  
  //sconto aggiuntivo per orario mattina e quantita >=10

  if (scelta_orario === "1" && quantita >= 10) {
    let importo_ult_sconto = (eta < 12 || eta > 65) ? importo_scontato - (importo_scontato * sconto_eta) : importo_scontato;
    importo_ult_sconto -= 20;
    alert("Ti informiamo che hai ricevuto un ulteriore sconto di 20EUR sul totale. Il nuovo importo da pagare sarà quindi EUR " + importo_ult_sconto);
  }




