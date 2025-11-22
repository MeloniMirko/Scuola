function esegui() {
	/*let x = prompt("Dammi un numero")*1;
	alert("ciao");
	alert("Hai inserito "+x);*/
	let x = document.getElementById("num").value*1;
	let x2 = document.getElementById("num2").value*1;
	let somma = x+x2;
	// alert("La somma dei numeri inseriti è :"+somma);
	document.getElementById("risultato").innerHTML = "La somma dei numeri inseriti è :"+somma; 
}