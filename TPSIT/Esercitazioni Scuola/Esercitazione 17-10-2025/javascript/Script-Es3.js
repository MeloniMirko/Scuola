function calcola() {
  const copieStr = document.getElementById("copiesInput").value;
  const costoStr = document.getElementById("costInput").value;
  const scontoStr = document.getElementById("discountInput").value;

  // Converti le stringhe in numeri
  const copie = parseFloat(copieStr);
  const costo = parseFloat(costoStr);
  const sconto = parseFloat(scontoStr);

  // Controlla se i valori sono numeri validi
  const importo = copie * costo;
  alert(`Importo da pagare: ${importo.toFixed(2)} euro`);

  // Calcola l'importo scontato
  const importoScontato = importo * (1 - sconto / 100);
  alert("Con il " + sconto + "% di sconto dovrai pagare " + importoScontato.toFixed(2) + " euro");
}