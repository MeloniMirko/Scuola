let nomi = [];
let quantitaDisponibili=[];
let i=0;

function Aggiungi(){
    let nome=document.getElementById("nomeProdotto").value;
    let quanty=document.getElementById("quantitaDisponibile").value;
    let risultato=cerca(nome);

    if(risultato!=-1){
        alert("Prodotto gia esistente!");
    }
    else if(quanty!="" && nome!="" && quanty>=0){
        nomi[i]=nome;
        quantitaDisponibili[i]=quanty;
      
        alert("Prodotto ( "+nomi[i]+" ) aggiunto correttamente!");
        document.getElementById("nomeProdotto").value="";
        document.getElementById("quantitaDisponibile").value="";
        document.getElementById("visual").innerHTML="Lista da aggiornare!";

        i++;

    }else{
        alert("Errore nella compilazione!\nCompliare prodotto e quantità");
        document.getElementById("nomeProdotto").value="";
        document.getElementById("quantitaDisponibile").value="";
    }

}

function Mostra(){
    document.getElementById("visual").innerHTML="";

    if(nomi.length == 0){
       document.getElementById("visual").innerHTML="Magazzino vuoto";  
    }else{
        document.getElementById("visual").innerHTML=" <b><span>Nome del prodotto</span> <span>Quantita disponibile</span></b><br/> "
    }

    for(let k=0;k < nomi.length; k++ ){
        document.getElementById("visual").innerHTML+=nomi[k]+" x "+ quantitaDisponibili[k]+"<br/>";
       
    }
}

function Svuota(){
    if(nomi.length==0){
        alert("ERRORE! Magazzino già vuoto");
    }else if(nomi.length>=0){
        quantitaDisponibili=[];
        nomi=[];
        document.getElementById("visual").innerHTML="";
        alert("Carrello svuotato completamente!");
    }
}

function Preleva(){
    if(nomi.length==0){
        alert("Serve aggiungere almeno un prodotto");
    }else{
        let nome=prompt("Inserisci il nome del prodotto che desideri prelevare");
        let quantita=prompt("Inserisci la quantita che desideri prelevare")*1;
        let risultato=cerca(nome);
        if(nome===""||quantita==""){
            alert("Compilare prodotto e quantita");
    }
        else if(risultato!=-1 && quantita<=quantitaDisponibili[risultato]){
                let quantitaAggiornata=quantitaDisponibili[risultato]-quantita;
                quantitaDisponibili[risultato]=quantitaAggiornata;
                alert("Preievlo effettuato correttamente");
                document.getElementById("visual").innerHTML="Lista da aggiornare!";
            }
            
            else if(quantita>quantitaDisponibili[risultato]){
                alert("Quantita insufficiente");
            }
                else if(risultato==-1){
            alert("Prodotto inesistente");
            }
        }

}


function cerca(nomeDaRicercare){
    for(k=0; k<nomi.length; k++){
        if(nomeDaRicercare == nomi[k]){
            return k;
        }
    }return -1;
}