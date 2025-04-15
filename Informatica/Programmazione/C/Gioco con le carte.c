#include <stdio.h>
#include <stdlib.h>
#include <time.h>

#define NUM 10

// Funzione per generare una carta casuale (valore tra 1 e 10)
int carta_casuale() {
    return rand() % 10 + 1;
}

int main() {
    srand(time(NULL)); // Inizializza il generatore di numeri casuali

    int fiches_1, fiches_2, fiches_3;
    int carta_1, carta_2, carta_3;
    int turno = 1;
    int giocatori;
    
    printf("Quanti giocatori devono giocare?");
    scanf("%d",&giocatori);

    // Ciclo del gioco: continua finché ci sono giocatori con fiches
    while (fiches_1 > 0 && fiches_2 > 0 && fiches_3 > 0) {
        printf("\n--- Turno %d ---\n", turno);

        // Ogni giocatore perde una ficha per partecipare
        if (fiches_1 > 0) fiches_1--;
        if (fiches_2 > 0) fiches_2--;
        if (fiches_3 > 0) fiches_3--;

        // Ogni giocatore pesca una carta
        carta_1 = carta_casuale();
        carta_2 = carta_casuale();
        carta_3 = carta_casuale();

        printf("Giocatore 1 ha pescato la carta: %d\n", carta_1);
        printf("Giocatore 2 ha pescato la carta: %d\n", carta_2);
        printf("Giocatore 3 ha pescato la carta: %d\n", carta_3);

        // Determina il vincitore della mano
        if (carta_1 > carta_2 && carta_1 > carta_3) {
            fiches_1 += 2; // Il Giocatore 1 vince
            printf("Giocatore 1 ha vinto e ha preso tutte le fiches!\n");
        } else if (carta_2 > carta_1 && carta_2 > carta_3) {
            fiches_2 += 2; // Il Giocatore 2 vince
            printf("Giocatore 2 ha vinto e ha preso tutte le fiches!\n");
        } else if (carta_3 > carta_1 && carta_3 > carta_2) {
            fiches_3 += 2; // Il Giocatore 3 vince
            printf("Giocatore 3 ha vinto e ha preso tutte le fiches!\n");
        } else {
            printf("Il banco vince tutte le fiches di questa mano.\n");
        }

        // Stampa lo stato delle fiches di ogni giocatore
        printf("Giocatore 1 ha %d fiches.\n", fiches_1);
        printf("Giocatore 2 ha %d fiches.\n", fiches_2);
        printf("Giocatore 3 ha %d fiches.\n", fiches_3);

        // Controlla se c'è un solo giocatore con fiches
        if (fiches_1 == 0 || fiches_2 == 0 || fiches_3 == 0) {
            printf("\nIl gioco e finito! Un giocatore ha finito le fiches.\n");
            break;
        }
        
		// Passa al turno successivo
        turno++; 
    }

    return 0;
}

