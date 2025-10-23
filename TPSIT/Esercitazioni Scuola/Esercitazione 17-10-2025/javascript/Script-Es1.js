function checkAge() {
let nome = document.getElementById("nameInput").value;
let eta = document.getElementById("ageInput").value;

if (eta < 18) {
  alert("Ciao " + nome + ", sei troppo giovane per registrarti");
}
if (eta >= 18) {
  alert("Ciao " + nome + ", registrazione completata");
}
}