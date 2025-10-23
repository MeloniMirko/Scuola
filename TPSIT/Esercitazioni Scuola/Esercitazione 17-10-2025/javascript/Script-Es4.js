function calcolaVelocita() {
  
    const spazioStr = document.getElementById("spaceInput").value;
    const tempoStr = document.getElementById("timeInput").value;

  // Converti in numeri
    const spazio = parseFloat(spazioStr);
    const tempo = parseFloat(tempoStr);

  // Esegui solo i calcoli
    const v = spazio / tempo;

  
    alert("Per uno spazio di " + spazio + " metri e un tempo di " + tempo + " secondi, la velocità è " + velocita + " m/s.");
}
