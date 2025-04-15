#include <stdio.h>
#include <stdlib.h>
#include <time.h>

#define LANCIO_MAX 6

// Funzione per stampare il dado
void disegna_dado(int numero) {
    // Stampa il bordo del dado
    printf(" ------- \n");

    // Disegna il dado in base al numero
    switch (numero) {
        case 1:      
            printf("|     | \n");
            printf("|  o  | \n");
            printf("|     | \n");
            break;
        case 2:
            printf("| o   | \n");
            printf("|     | \n");
            printf("|   o | \n");
            break;
        case 3:
            printf("| o   | \n");
            printf("|  o  | \n");
            printf("|   o | \n");
            break;
        case 4:
            printf("| o o | \n");
            printf("|     | \n");
            printf("| o o | \n");
            break;
        case 5:
            printf("| o o | \n");
            printf("|  o  | \n");
            printf("| o o | \n");
            break;
        case 6:
            printf("| o o | \n");
            printf("| o o | \n");
            printf("| o o | \n");
            break;
    }

    // Stampa il bordo inferiore del dado
    printf(" ------- \n");
}

int main() {
    int punteggio_A = 0, punteggio_B = 0;
    int vittorie_A = 0, vittorie_B = 0;
    int lanci, i, lancio_A, lancio_B;

    // Inizializzare il generatore di numeri casuali
    srand(time(NULL));

    // Chiediamo all'utente quanti lanci vuole fare
    printf("Quanti lanci vuoi fare? ");
    scanf("%d", &lanci);

    // Ciclo per i lanci
    for (i = 1; i <= lanci; i++) {
        printf("\nLancio numero %d:\n", i);

        // Lancio del dado per il giocatore A
        lancio_A = rand() % LANCIO_MAX + 1;
        printf("Giocatore A ha lanciato:\n");
        disegna_dado(lancio_A);

        // Lancio del dado per il giocatore B
        lancio_B = rand() % LANCIO_MAX + 1;
        printf("Giocatore B ha lanciato:\n");
        disegna_dado(lancio_B);

        // Aggiornamento dei punteggi
        punteggio_A += lancio_A;
        punteggio_B += lancio_B;

        // Determiniamo il vincitore della sfida
        if (lancio_A > lancio_B) {
            printf("Giocatore A vince questa sfida!\n");
            vittorie_A++;
        } else if (lancio_B > lancio_A) {
            printf("Giocatore B vince questa sfida!\n");
            vittorie_B++;
        } else {
            printf("La sfida e' un pareggio!\n");
        }
    }

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
        printf("Giocatore A ha il punteggio totale più alto!\n");
    } else if (punteggio_B > punteggio_A) {
        printf("Giocatore B ha il punteggio totale più alto!\n");
    } else {
        printf("I punteggi totali sono uguali.\n");
    }

    return 0;
}

