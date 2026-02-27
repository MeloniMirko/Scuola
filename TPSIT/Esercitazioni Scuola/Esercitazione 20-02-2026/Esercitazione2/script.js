var prodotti = [];
let prezzi =  [];
let quantita =  [];
let i = 0;
function aggiungi(){
    let nomeprezzo = prompt("Che prodotto e?");
    let prezzo = prompt("quanto costa?")*1;
    let quantita = prompt("Quanta disponiblita ha?")*1;

    prodotti[i] = nomeProdotto;
    prezzi[i] = prezzo;
    quantita[i] = disponibile;
    i++;
    alert("Prodotto inserito");
}

function visualizza(){
    for (let j=0; j < prodotti.length; j++){
        document.getElementById("listaprodotti").innerHTML += 
            "x"+prodotti[j]+""+prezzi[j]+"EUR"+quantita[j]+""+(prezzi[j]*quantita[j])+"EUR"+"</br>";
    }

}

function cerca(){
    
}