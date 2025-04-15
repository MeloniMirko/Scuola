#include <stdio.h>

int main() {
    int numero1, numero2, risultato = 0,i;
    
    printf("Hey! Questo programma ha la funzione di eseguire la moltiplicazione di due numeri inseriti dall'utente con il metodo delle somme ripetute");

    // Chiede all'utente di inserire i due numeri interi
    printf("\nInserisci il primo numero: ");
    scanf("%d", &numero1);

    printf("Inserisci il secondo numero: ");
    scanf("%d", &numero2);

    // Esegue la moltiplicazione come somma ripetuta
    for ( i = 0; i < numero2; i++) {
        risultato=risultato+numero1;
    }

    // Stampa il risultato
    printf("Il risultato e:%d",risultato);

    return 0;
}
