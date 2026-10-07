//Coloriamo lo schermo

#include <stdio.h>
#include <stdlib.h>
 
int main() {
   
    system("TITLE COLORI"); //imposta il titolo nella finestra di output, che sarà COLORI
    system("CLS"); //pulisce lo schermo da eventuali altre stampe precedenti
    system("COLOR 2"); //stabilisce il colore dei caratteri (1) e quello dello schermo (F)
    printf("CIAO"); //stampa la parola CIAO con i colori di schermo e caratteri impostata nell'istruzione precedente

/*  
0 - nero
1 - blu scuro
2 - verde
3 - verde acqua
4 - bordeaux
5 - viola
6 - verde oliva
7 - grigio chiaro
8 - grigio
9 - blu
A - verde limone
B - azzurro
C - rosso
D - fucsia
E - giallo
F - bianco
*/    
return 0;   
}
