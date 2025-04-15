#include <stdio.h>
#include <stdlib.h>
#include <time.h>

#define LANCIO_MAX 6
#define MAX_GIOCO 10 // Numero massimo di sfide

// Funzione per stampare il dado
int disegna_dado(int numero) {
    // Stampa il bordo del dado
    printf(" ----- \n");

    // Disegna il dado in base al numero
    switch (numero) {
        case 1:      
            printf("|     | \n");
            printf("|  *  | \n");
            printf("|     | \n");
            break;
        case 2:
            printf("| *   | \n");
            printf("|     | \n");
            printf("|   * | \n");
            break;
        case 3:
            printf("| *   | \n");
            printf("|  *  | \n");
            printf("|   * | \n");
            break;
        case 4:
            printf("| * * | \n");
            printf("|     | \n");
            printf("| * * | \n");
            break;
        case 5:
            printf("| * * | \n");
            printf("|  *  | \n");
            printf("| * * | \n");
            break;
        case 6:
            printf("| * * | \n");
            printf("| * * | \n");
            printf("| * * | \n");
            break;
    }

    // Stampa il bordo inferiore del dado
    printf(" ----- \n");
}

int main() {
    int punteggio_A = 0, punteggio_B = 0;
    int vittorie_A = 0, vittorie_B = 0;
    int scelta, lancio_A[MAX_GIOCO], lancio_B[MAX_GIOCO];
    int numero_sfide = 0;

    // Inizializzare il generatore di numeri casuali
    srand(time(NULL));

    do {
        // Lancio del dado per il giocatore A
        lancio_A[numero_sfide] = rand() % LANCIO_MAX + 1;
        printf("Giocatore A ha lanciato:\n ");
        disegna_dado(lancio_A[numero_sfide]);
        
        // Lancio del dado per il giocatore B
        lancio_B[numero_sfide] = rand() % LANCIO_MAX + 1;
        printf("Giocatore B ha lanciato:\n ");
        disegna_dado(lancio_B[numero_sfide]);
        
        // Aggiorniamo i punteggi
        punteggio_A += lancio_A[numero_sfide];
        punteggio_B += lancio_B[numero_sfide];

        // Determiniamo il vincitore della sfida
        if (lancio_A[numero_sfide] > lancio_B[numero_sfide]) {
            printf("Giocatore A vince questa sfida!\n");
            vittorie_A++;
        } else if (lancio_B[numero_sfide] > lancio_A[numero_sfide]) {
            printf("Giocatore B vince questa sfida!\n");
            vittorie_B++;
        } else {
            printf("La sfida e' un pareggio!\n");
        }

        numero_sfide++;

        // Chiede se il giocatore vuole continuare
        if (numero_sfide < MAX_GIOCO) {
            printf("Vuoi continuare a giocare? (1 per si, 0 per no): ");
            scanf("%d", &scelta);
        } else {
            scelta = 0;  // Fine del gioco se si raggiunge il massimo delle sfide
        }

    } while (scelta == 1 && numero_sfide < MAX_GIOCO);

    // Resoconto finale
    printf("\nResoconto finale:\n");
    printf("Giocatore A ha vinto %d volte.\n", vittorie_A);
    printf("Giocatore B ha vinto %d volte.\n", vittorie_B);
    printf("Punteggio totale di A: %d\n", punteggio_A);
    printf("Punteggio totale di B: %d\n", punteggio_B);

    if (vittorie_A > vittorie_B) {
        printf("Giocatore A ha vinto piu' sfide!\n");
    } else if (vittorie_B > vittorie_A) {
        printf("Giocatore B ha vinto piu' sfide!\n");
    } else {
        printf("I giocatori hanno vinto lo stesso numero di sfide.\n");
    }

    if (punteggio_A > punteggio_B) {
        printf("Giocatore A ha il punteggio totale piu' alto!\n");
    } else if (punteggio_B > punteggio_A) {
        printf("Giocatore B ha il punteggio totale piu' alto!\n");
    } else {
        printf("I punteggi totali sono uguali.\n");
    }

    return 0;
}
