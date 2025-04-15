#include <stdio.h>
#include <stdlib.h>
#include <time.h>

int main() {
    int N, i, j, temp, a[100];

    // Inizializzazione del generatore di numeri casuali
    srand(time(NULL));

    printf("Inserire il numero di numeri interi da generare (max 100): ");
    scanf("%d", &N);

    // Controllo se N è un valore valido
    if (N <= 0 || N > 100) {
        printf("Errore: il numero di elementi deve essere compreso tra 1 e 100.\n");
        return 1; // Uscita dal programma con codice di errore
    }

    // Generazione di numeri casuali
    for (i = 0; i < N; i++) {
        a[i] = rand() % 100; // Genera un numero casuale tra 0 e 99
    }

    // Ordinamento dei numeri
    for (i = 0; i < N - 1; i++) {
        for (j = 0; j < N - i - 1; j++) {
            if (a[j] > a[j + 1]) {
                temp = a[j];
                a[j] = a[j + 1];
                a[j + 1] = temp;
            }
        }
    }

    printf("Numeri in ordine crescente: ");
    for (i = 0; i < N; i++) {
        printf("%d ", a[i]);
    }
    printf("\n"); // Aggiunta di un newline per una migliore formattazione

    return 0;
}