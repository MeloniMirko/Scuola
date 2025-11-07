
let countSinistra = 0;
let countDestra = 0;
let countTotale = 0;


function contaSinistra() {
    countSinistra++;
    countTotale++;
    document.getElementById('contatoresinistra').innerHTML = countSinistra;
    document.getElementById('contatoretotale').innerHTML = countTotale;
}


function contaDestra() {
    countDestra++;
    countTotale++;
    document.getElementById('contatoresdestra').innerHTML = countDestra;
    document.getElementById('contatoretotale').innerHTML = countTotale;
}





