#include <stdio.h>
#include <stdlib.h>
#include <time.h>

// Funzione per generare una carta casuale (valore tra 1 e 10)
int carta_casuale() {
    return rand() % 10 + 1;
}

int main() {
    srand(time(NULL)); // Inizializza il generatore di numeri casuali

    // Variabili per le fiches e le carte dei giocatori
    int fiches_1 = 0, fiches_2 = 0, fiches_3 = 0, fiches_4 = 0, fiches_5 = 0;
    int fiches_6 = 0, fiches_7 = 0, fiches_8 = 0, fiches_9 = 0, fiches_10 = 0;
    int carta_1, carta_2, carta_3, carta_4, carta_5, carta_6, carta_7, carta_8, carta_9, carta_10;
    int giocatori, fiches_iniziali;
    int turno = 1;

    // Chiedi il numero di giocatori
    printf("Quanti giocatori devono giocare (massimo 10)? ");
    scanf("%d", &giocatori);

    // Verifica se il numero di giocatori è valido
    if (giocatori < 2 || giocatori > 10) {
        printf("Numero di giocatori non valido. Il numero deve essere tra 2 e 10.\n");
        return 1; // Termina il programma se il numero di giocatori è fuori range
    }

    // Chiedi quante fiches devono iniziare a ciascun giocatore
    printf("Quante fiches vuoi dare a ciascun giocatore? ");
    scanf("%d", &fiches_iniziali);

    // Inizializza le fiches per ogni giocatore
    if (giocatori >= 1) fiches_1 = fiches_iniziali;
    if (giocatori >= 2) fiches_2 = fiches_iniziali;
    if (giocatori >= 3) fiches_3 = fiches_iniziali;
    if (giocatori >= 4) fiches_4 = fiches_iniziali;
    if (giocatori >= 5) fiches_5 = fiches_iniziali;
    if (giocatori >= 6) fiches_6 = fiches_iniziali;
    if (giocatori >= 7) fiches_7 = fiches_iniziali;
    if (giocatori >= 8) fiches_8 = fiches_iniziali;
    if (giocatori >= 9) fiches_9 = fiches_iniziali;
    if (giocatori == 10) fiches_10 = fiches_iniziali;

    // Ciclo del gioco: continua finché ci sono giocatori con fiches
    while ((giocatori == 1 && fiches_1 > 0) ||
           (giocatori == 2 && fiches_1 > 0 && fiches_2 > 0) ||
           (giocatori == 3 && fiches_1 > 0 && fiches_2 > 0 && fiches_3 > 0) ||
           (giocatori == 4 && fiches_1 > 0 && fiches_2 > 0 && fiches_3 > 0 && fiches_4 > 0) ||
           (giocatori == 5 && fiches_1 > 0 && fiches_2 > 0 && fiches_3 > 0 && fiches_4 > 0 && fiches_5 > 0) ||
           (giocatori == 6 && fiches_1 > 0 && fiches_2 > 0 && fiches_3 > 0 && fiches_4 > 0 && fiches_5 > 0 && fiches_6 > 0) ||
           (giocatori == 7 && fiches_1 > 0 && fiches_2 > 0 && fiches_3 > 0 && fiches_4 > 0 && fiches_5 > 0 && fiches_6 > 0 && fiches_7 > 0) ||
           (giocatori == 8 && fiches_1 > 0 && fiches_2 > 0 && fiches_3 > 0 && fiches_4 > 0 && fiches_5 > 0 && fiches_6 > 0 && fiches_7 > 0 && fiches_8 > 0) ||
           (giocatori == 9 && fiches_1 > 0 && fiches_2 > 0 && fiches_3 > 0 && fiches_4 > 0 && fiches_5 > 0 && fiches_6 > 0 && fiches_7 > 0 && fiches_8 > 0 && fiches_9 > 0) ||
           (giocatori == 10 && fiches_1 > 0 && fiches_2 > 0 && fiches_3 > 0 && fiches_4 > 0 && fiches_5 > 0 && fiches_6 > 0 && fiches_7 > 0 && fiches_8 > 0 && fiches_9 > 0 && fiches_10 > 0)) {
        
        printf("\n--- Turno %d ---\n", turno);

        int puntata_1 = 0, puntata_2 = 0, puntata_3 = 0, puntata_4 = 0, puntata_5 = 0;
        int puntata_6 = 0, puntata_7 = 0, puntata_8 = 0, puntata_9 = 0, puntata_10 = 0;

        // Ogni giocatore decide quante fiches puntare
        if (fiches_1 > 0) {
            printf("Giocatore 1 ha %d fiches. Quante fiches vuoi puntare? ", fiches_1);
            scanf("%d", &puntata_1);
            if (puntata_1 <= fiches_1 && puntata_1 > 0) fiches_1 -= puntata_1;
            else printf("Puntata non valida. Il giocatore non parteciperà a questo turno.\n");
        }

        if (fiches_2 > 0) {
            printf("Giocatore 2 ha %d fiches. Quante fiches vuoi puntare? ", fiches_2);
            scanf("%d", &puntata_2);
            if (puntata_2 <= fiches_2 && puntata_2 > 0) fiches_2 -= puntata_2;
            else printf("Puntata non valida. Il giocatore non parteciperà a questo turno.\n");
        }

        if (fiches_3 > 0) {
            printf("Giocatore 3 ha %d fiches. Quante fiches vuoi puntare? ", fiches_3);
            scanf("%d", &puntata_3);
            if (puntata_3 <= fiches_3 && puntata_3 > 0) fiches_3 -= puntata_3;
            else printf("Puntata non valida. Il giocatore non parteciperà a questo turno.\n");
        }

        if (fiches_4 > 0) {
            printf("Giocatore 4 ha %d fiches. Quante fiches vuoi puntare? ", fiches_4);
            scanf("%d", &puntata_4);
            if (puntata_4 <= fiches_4 && puntata_4 > 0) fiches_4 -= puntata_4;
            else printf("Puntata non valida. Il giocatore non parteciperà a questo turno.\n");
        }

        if (fiches_5 > 0) {
            printf("Giocatore 5 ha %d fiches. Quante fiches vuoi puntare? ", fiches_5);
            scanf("%d", &puntata_5);
            if (puntata_5 <= fiches_5 && puntata_5 > 0) fiches_5 -= puntata_5;
            else printf("Puntata non valida. Il giocatore non parteciperà a questo turno.\n");
        }

        if (fiches_6 > 0) {
            printf("Giocatore 6 ha %d fiches. Quante fiches vuoi puntare? ", fiches_6);
            scanf("%d", &puntata_6);
            if (puntata_6 <= fiches_6 && puntata_6 > 0) fiches_6 -= puntata_6;
            else printf("Puntata non valida. Il giocatore non parteciperà a questo turno.\n");
        }

        if (fiches_7 > 0) {
            printf("Giocatore 7 ha %d fiches. Quante fiches vuoi puntare? ", fiches_7);
            scanf("%d", &puntata_7);
            if (puntata_7 <= fiches_7 && puntata_7 > 0) fiches_7 -= puntata_7;
            else printf("Puntata non valida. Il giocatore non parteciperà a questo turno.\n");
        }

        if (fiches_8 > 0) {
            printf("Giocatore 8 ha %d fiches. Quante fiches vuoi puntare? ", fiches_8);
            scanf("%d", &puntata_8);
            if (puntata_8 <= fiches_8 && puntata_8 > 0) fiches_8 -= puntata_8;
            else printf("Puntata non valida. Il giocatore non parteciperà a questo turno.\n");
        }

        if (fiches_9 > 0) {
            printf("Giocatore 9 ha %d fiches. Quante fiches vuoi puntare? ", fiches_9);
            scanf("%d", &puntata_9);
            if (puntata_9 <= fiches_9 && puntata_9 > 0) fiches_9 -= puntata_9;
            else printf("Puntata non valida. Il giocatore non parteciperà a questo turno.\n");
        }

        if (fiches_10 > 0) {
            printf("Giocatore 10 ha %d fiches. Quante fiches vuoi puntare? ", fiches_10);
            scanf("%d", &puntata_10);
            if (puntata_10 <= fiches_10 && puntata_10 > 0) fiches_10 -= puntata_10;
            else printf("Puntata non valida. Il giocatore non parteciperà a questo turno.\n");
        }

        // Ogni giocatore pesca una carta
        if (fiches_1 > 0) carta_1 = carta_casuale();
        if (fiches_2 > 0) carta_2 = carta_casuale();
        if (fiches_3 > 0) carta_3 = carta_casuale();
        if (fiches_4 > 0) carta_4 = carta_casuale();
        if (fiches_5 > 0) carta_5 = carta_casuale();
        if (fiches_6 > 0) carta_6 = carta_casuale();
        if (fiches_7 > 0) carta_7 = carta_casuale();
        if (fiches_8 > 0) carta_8 = carta_casuale();
        if (fiches_9 > 0) carta_9 = carta_casuale();
        if (fiches_10 > 0) carta_10 = carta_casuale();

        // Determina il vincitore
        int max_carta = 0, vincitore = 0;
        if (fiches_1 > 0 && carta_1 > max_carta) { max_carta = carta_1; vincitore = 1; }
        if (fiches_2 > 0 && carta_2 > max_carta) { max_carta = carta_2; vincitore = 2; }
        if (fiches_3 > 0 && carta_3 > max_carta) { max_carta = carta_3; vincitore = 3; }
        if (fiches_4 > 0 && carta_4 > max_carta) { max_carta = carta_4; vincitore = 4; }
        if (fiches_5 > 0 && carta_5 > max_carta) { max_carta = carta_5; vincitore = 5; }
        if (fiches_6 > 0 && carta_6 > max_carta) { max_carta = carta_6; vincitore = 6; }
        if (fiches_7 > 0 && carta_7 > max_carta) { max_carta = carta_7; vincitore = 7; }
        if (fiches_8 > 0 && carta_8 > max_carta) { max_carta = carta_8; vincitore = 8; }
        if (fiches_9 > 0 && carta_9 > max_carta) { max_carta = carta_9; vincitore = 9; }
        if (fiches_10 > 0 && carta_10 > max_carta) { max_carta = carta_10; vincitore = 10; }

        // Aggiungi le fiches al vincitore
        if (vincitore > 0) {
            if (vincitore == 1) fiches_1 += 2;
            if (vincitore == 2) fiches_2 += 2;
            if (vincitore == 3) fiches_3 += 2;
            if (vincitore == 4) fiches_4 += 2;
            if (vincitore == 5) fiches_5 += 2;
            if (vincitore == 6) fiches_6 += 2;
            if (vincitore == 7) fiches_7 += 2;
            if (vincitore == 8) fiches_8 += 2;
            if (vincitore == 9) fiches_9 += 2;
            if (vincitore == 10) fiches_10 += 2;
            printf("Giocatore %d ha vinto e ha preso tutte le fiches!\n", vincitore);
        } else {
            printf("Nessun vincitore, il banco vince tutte le fiches di questa mano.\n");
        }

        // Stampa lo stato delle fiches di ogni giocatore
        if (fiches_1 > 0) printf("Giocatore 1 ha %d fiches.\n", fiches_1);
        if (fiches_2 > 0) printf("Giocatore 2 ha %d fiches.\n", fiches_2);
        if (fiches_3 > 0) printf("Giocatore 3 ha %d fiches.\n", fiches_3);
        if (fiches_4 > 0) printf("Giocatore 4 ha %d fiches.\n", fiches_4);
        if (fiches_5 > 0) printf("Giocatore 5 ha %d fiches.\n", fiches_5);
        if (fiches_6 > 0) printf("Giocatore 6 ha %d fiches.\n", fiches_6);
        if (fiches_7 > 0) printf("Giocatore 7 ha %d fiches.\n", fiches_7);
        if (fiches_8 > 0) printf("Giocatore 8 ha %d fiches.\n", fiches_8);
        if (fiches_9 > 0) printf("Giocatore 9 ha %d fiches.\n", fiches_9);
        if (fiches_10 > 0) printf("Giocatore 10 ha %d fiches.\n", fiches_10);

        // Incrementa il turno
        turno++; 
    }

    printf("\nIl gioco è finito.\n");
    return 0;
}
