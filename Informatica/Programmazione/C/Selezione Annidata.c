#include <stdio.h>
int main() {
    //dichiarazioni delle varibili
    int a, b;
    //corpo del programma
    printf("Ciao! Questo programma confronta due valori numerici.\nScrivi il valore del primo numero intero: ");
    scanf("%d", &a);
    printf("Scrivi il valore del secondo numero: ");
    scanf("%d", &b);

    //SELEZIONE ANNIDATA effettuiamo più confronti, si usa quando abbiamo più di due possibilità:
    if (a<b) {
        printf("Il primo numero e' piu' piccolo del primo");
    }
    else if(a>b) {
        printf("Il secondo numero e' il piu' piccolo");
    }
    else {
        printf("I due numeri sono uguali");
       
    }
    return 0;
}