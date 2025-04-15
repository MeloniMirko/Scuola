#include <stdio.h>
#include <stdlib.h>
#include <time.h>

int main() {
    int cartella[3]; 
    int numeroEstratto;  
    int trovato = 0;
	
	printf("Benvenuto!Questo programma serve per giocare a tombola.\n");  

    // Inizializza il generatore di numeri casuali
    srand(time(NULL));

    // Chiedi all'utente di inserire i 3 numeri della sua cartella
    printf("Inserisci i 3 numeri della tua cartella (da 1 a 90):\n");
    for (int i = 0; i < 3; i++) {
        do {
            printf("Numero %d: ", i + 1);
            scanf("%d", &cartella[i]);
            
            // Controlla se il numero è valido (compreso tra 1 e 90)
            if (cartella[i] < 1 || cartella[i] > 90) {
                printf("Il numero deve essere compreso tra 1 e 90.\n");
            }
        } while (cartella[i] < 1 || cartella[i] > 90);
    }

    // Estrai un numero casuale tra 1 e 90
    numeroEstratto = rand() % 90 + 1;

    // Controlla se il numero estratto è presente nella cartella dell'utente
    for (int i = 0; i < 3; i++) {
        if (cartella[i] == numeroEstratto) {
            trovato = 1;
            break;
        }
    }

    // Stampa il risultato
    printf("Il numero estratto e: %d\n", numeroEstratto);
    if (trovato) {
        printf("Hai vinto!\n");
    } else {
        printf("Non hai vinto.\n");
    }

    return 0;
}
