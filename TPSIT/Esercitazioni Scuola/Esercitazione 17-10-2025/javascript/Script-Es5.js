function calcolaIMC() {
 
    const peso = document.getElementById("weightInput").value;
    const altezza = document.getElementById("heightInput").value;

  // Converti in numeri
    const pesoG = parseFloat(peso);
    const altezzaCm = parseFloat(altezza);

  // Conversioni: 
  const pesoKg = pesoG / 1000;      // 1000 g = 1 kg
  const altezzaM = altezzaCm / 100; // 100 cm = 1 m

  // Calcolo IMC = peso(kg) / (altezza(m)^2)
  const imc = pesoKg / (altezzaM * altezzaM);


    alert("IMC=" + imc);
}
