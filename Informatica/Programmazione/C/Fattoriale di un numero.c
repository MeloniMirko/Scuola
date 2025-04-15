#include <stdio.h>

int main() {
    int numero, fattoriale = 1,i;
    
    printf("Ciao!Questo programma serve per calcolare il fattoriale di un numero inserito dall'utente");

    // Chiede all'utente di inserire un numero
    printf("\nInserisci un numero: ");
    scanf("%d", &numero);

    // Calcola il fattoriale utilizzando un ciclo for
    for (i = numero; i >0; i--) {
        fattoriale *= i;
    }

    // Stampa il risultato
    printf("Il fattoriale di %d e %d\n", numero, fattoriale);

    return 0;
}
