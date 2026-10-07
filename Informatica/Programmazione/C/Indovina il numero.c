#include <stdio.h>
#include <stdlib.h>
#include <time.h>

int main() {
    int numeroEstratto, numeroUtente, tentativi, continua;

    // Inizializza il generatore di numeri casuali
    srand(time(NULL));

    do {
        // Genera un numero casuale tra 1 e 100
        numeroEstratto = rand() % 100 + 1;
        tentativi = 0;

        printf("Benvenuto al gioco! Ho estratto un numero tra 1 e 100. Prova ad indovinare quale è.\n");

        // Inizia il ciclo di tentativi
        do {
            printf("Inserisci il tuo numero: ");
            scanf("%d", &numeroUtente);
            tentativi++;

            if (numeroUtente < numeroEstratto) {
                printf("Il numero che hai scelto è troppo basso.\n");
            } else if (numeroUtente > numeroEstratto) {
                printf("Il numero che hai scelto è troppo alto.\n");
            } else {
                printf("Hai indovinato in %d tentativi!\n", tentativi);
            }
        } while (numeroUtente != numeroEstratto);

        // Chiedi se l'utente vuole riprovare
        printf("Vuoi riprovare? (1 per sì, 0 per uscire): ");
        scanf("%d", &continua);

    } while (continua == 1);

    printf("Grazie per aver giocato! Arrivederci!\n");

    return 0;
}
