#include <stdio.h>

int main() {
    int num1, num2,risultato;
    
    printf("Ciao!Questo programma serve per sottrarre il minore dal maggiore finché la loro differenza diventa inferiore a 3 unita\n");

    // Input dei numeri
    printf("Inserisci il primo numero: ");
    scanf("%d", &num1);
    printf("Inserisci il secondo numero: ");
    scanf("%d", &num2);

    // Ciclo per sottrarre il minore dal maggiore finché la differenza è maggiore o uguale a 3
    while (num1 >= num2 + 3 || num2 >= num1 + 3) {
        if (num1 > num2) {
            risultato=num1 -= num2;
        } 
		else {
            risultato=num2 -= num1;
        }
        // Stampa il risultato dell'iterazione
        printf("Il risultato parziale e:%d\n",risultato);
    }

    // Stampa il risultato finale
    printf("Il risultato finale e:%d",risultato);

    return 0;
}
