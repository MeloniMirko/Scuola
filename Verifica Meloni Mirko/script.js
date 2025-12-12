function AggiungiEsameSvolgere(){

    let nomeesame = prompt("Aggiungi nome esame");
    document.getElementById("nomeesami").innerHTML = document.getElementById("nomeesami").innerHTML +"<br>"+ nomeesame;

    document.getElementById("numeroesamisvolgere").innerHTML = document.getElementById("numeroesamisvolgere").innerHTML*1+1;


    document.getElementById("esameaggiuntosvolgere").innerHTML = "Esame aggiunto correttamente!" ;

    


}

function AggiungiEsameSvolto(){
    let esamesvolto = prompt("Aggiungi esame svolto");
    document.getElementById("esamisvolti").innerHTML = document.getElementById("esamisvolti").innerHTML +"<br>"+ esamesvolto;
    
    document.getElementById("numeroesamisvolti").innerHTML = document.getElementById("numeroesamisvolti").innerHTML*1+1;

    document.getElementById("esameaggiuntosvolto").innerHTML = "Bravo hai terminato con "+ esamesvolto+"" ;

    


}

function VerificaCarriera(){
    let NumeroEsamiSvolti = Number(document.getElementById("numeroesamisvolti").innerHTML);
    let NumeroEsamiSvolgere = Number(document.getElementById("numeroesamisvolgere").innerHTML);

    let Sommapagare = Number(document.getElementById("sommapagare").innerHTML)
   
    if(NumeroEsamiSvolti >= NumeroEsamiSvolgere && Sommapagare == 0){

            alert("Bravo,hai terminato con successo");

    }else if(NumeroEsamiSvolti >= NumeroEsamiSvolgere && Sommapagare > 0){

            alert("Hai terminato gli esami ma hai ancora " + Sommapagare + "");
    }else{

            alert("Hai ancora esami da svolgere!");

    }
    
    
}

function Paga(){
    let paga = prompt("Quanto vuoi Pagare?")*1;
    let valoredapagare = document.getElementById("sommapagare").innerHTML*1;

    
    while(paga > valoredapagare || paga < 0){
        alert("Hai inserito un importo negativo o troppo grande , RIPROVA!");
        paga = prompt("Quanto vuoi Pagare?")*1;
    }
    
     
      document.getElementById("sommapagare").innerHTML = valoredapagare - paga;
    

   

   
   
}

