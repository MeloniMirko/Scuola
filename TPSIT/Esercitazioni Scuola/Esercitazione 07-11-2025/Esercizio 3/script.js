function Somma(){
    let num1 = document.getElementById("num1").value*1;
    let num2 = document.getElementById("num2").value*1;
    let risultato = num1 + num2;
    document.getElementById("risultato").innerText = "La somma è: " + risultato;
}
function Sottrazione(){
    let num1 = document.getElementById("num1").value*1;
    let num2 = document.getElementById("num2").value*1;
    let risultato = num1 - num2;
    document.getElementById("risultato").innerText = "La sottrazione è: " + risultato;
}
function Moltiplicazione(){
    let num1 = document.getElementById("num1").value*1;
    let num2 = document.getElementById("num2").value*1;
    let risultato = num1 * num2;
    document.getElementById("risultato").innerText = "La moltiplicazione è: " + risultato;
}
function Divisione(){
    let num1 = document.getElementById("num1").value*1;
    let num2 = document.getElementById("num2").value*1;
    if(num2 === 0){
        document.getElementById("risultato").innerText = "Errore: Divisione per zero non consentita.";
    } else {
        let risultato = num1 / num2;
        document.getElementById("risultato").innerText = "La divisione è: " + risultato;
    }
}
