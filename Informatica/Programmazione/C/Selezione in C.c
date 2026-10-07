#include <stdio.h>
int main() {
    //dichiarazioni delle varibili
    int a, b;
    //corpo del programma
    printf("Ciao! Questo programma confronta due valori numerici.\nScrivi il valore del primo numero intero: ");
    scanf("%d", &a);
    printf("Scrivi il valore del secondo numero: ");
    scanf("%d", &b);

    //SELEZIONE: in C si utilizza il costrutto IF-ELSE
   
    if (a<=b) {
        printf("Il primo numero e' piu' piccolo o uguale al primo");
    }
    else {
        printf("Il secondo numero e' il piu' piccolo");
    }
    return 0;
}