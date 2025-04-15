#include <stdio.h>
#include <stdlib.h>
#include <time.h>

int main(){
    int matrice[9][9], n, i, j, trovato = 0;

    printf("Hey!Questo programma serve trovare dei numeri che vuole l'utente all'interno di una matrice generata casualmente\n"); //introduzione al programma

    srand(time(NULL)); // inizializza il generatore di numeri casuali
    for (i = 0; i < 9; i++) {
        for (j = 0; j < 9; j++) {
            matrice[i][j] = rand() % 101; // genera un numero casuali
        }
    }
    do {
        printf("Inserisci un numero da cercare: ");
        scanf("%d", &n);
        trovato = 0; // resetta la variabile trovato
        for (i = 0; i < 9; i++) {
            for (j = 0; j < 9; j++) {
                if (matrice[i][j] == n) {
                    trovato = 1;
                }
            }
        }
        if (trovato == 1) {
            printf("Il numero %d e presente nella matrice.\n", n);
        } else {
            printf("Il numero %d non e presente nella matrice.\n", n);
        }
        printf("Vuoi cercare un altro numero? (s/n): ");
        char risposta;
        scanf(" %c", &risposta);
        while (risposta != 's' && risposta != 'n') {
            printf("Inserisci una risposta corretta.\n");
            printf("Vuoi cercare un altro numero? (s/n): ");
            scanf(" %c", &risposta);
        }
        if (risposta == 'n') {
            break;
        }
    } while (1);

    // visualizza la matrice generata
    printf("Matrice generata:\n");
    for (i = 0; i < 9; i++) {
        for (j = 0; j < 9; j++) {
            printf("%3d ", matrice[i][j]);
        }
        printf("\n");
    }

    return 0;
}