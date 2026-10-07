function calcolaSomma() {
    let num1 = document.getElementById('num1').value;
    let num2 = document.getElementById('num2').value;
    
    if (num1 < 0 || num2 < 0) {
    alert("Inserisci solo numeri positivi.");
    }else{
        let somma = num1 *1 + num2 *1;
        alert("La somma è: " + somma);
    }
}
