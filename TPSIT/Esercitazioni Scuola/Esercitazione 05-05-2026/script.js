function salva(){
    let linguaggio= document.querySelector('input[name=lang]:checked').value; 
//solo per un solo valore e prende tutti gli input; 
// se aggiungi [name=lang]ti prende tutti gli input con quel nome,
//  il checked si aggiunge per prendere solo il valore selezionato 
//aggiugendo "let linguaggio=" lo salvi appunto in linguaggio
alert(linguaggio);
}

function salva2(){
    let linguaggi= document.querySelectorAll('input[name="lang2"]:checked'); 

    for(let i=0; i< linguaggi.length; i++){
        alert(linguaggi[i].value);
    }
}