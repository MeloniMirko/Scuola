#include <stdio.h>
#include <stdlib.h>
#include <time.h>

int main() {
    int matrice[5][10], i, j, scelta, uscita = 0;
    int max_riga[5], min_col[10], media;

    // Inizializza il generatore di numeri casuali
    srand(time(NULL));

    // Genera la matrice con valori interi random compresi tra 150 e 200
    for (i = 0; i < 5; i++) {
        for (j = 0; j < 10; j++) {
            matrice[i][j] = (rand() % 51) + 150;
        }
    }

    // Calcola la massima altezza degli alunni di ogni classe (massimo per riga)
    for (i = 0; i < 5; i++) {
        max_riga[i] = matrice[i][0];
        for (j = 0; j < 10; j++) {
            if (matrice[i][j] > max_riga[i]) {
                max_riga[i] = matrice[i][j];
            }
        }
    }

    // Calcola l'altezza minima per colonna
    for (j = 0; j < 10; j++) {
        min_col[j] = matrice[0][j];
        for (i = 0; i < 5; i++) {
            if (matrice[i][j] < min_col[j]) {
                min_col[j] = matrice[i][j];
            }
        }
    }

    // Calcola l'altezza media di tutti gli studenti (considerando tutte le classi)
    media = 0;
    for (i = 0; i < 5; i++) {
        for (j = 0; j < 10; j++) {
            media += matrice[i][j];
        }
    }
    media /= 50;

    // Stampa la matrice
    printf("\nMatrice:\n");
    for (i = 0; i < 5; i++) {
        for (j = 0; j < 10; j++) {
            printf("%d ", matrice[i][j]);
        }
        printf("\n");
    }

    // Menù per scegliere cosa visualizzare
    do {
        printf("\n\nScegli cosa fare:\n");
        printf("1) Visualizza la matrice\n");
        printf("2) Visualizza la massima altezza degli alunni di ogni classe\n");
        printf("3) Visualizza l'altezza minima per colonna\n");
        printf("4) Visualizza l'altezza media di tutti gli studenti\n");
        printf("5) Esci\n");
        scanf("%d", &scelta);

        switch (scelta) {
            case 1: // Visualizza la matrice
                printf("\nMatrice:\n");
                for (i = 0; i < 5; i++) {
                    for (j = 0; j < 10; j++) {
                        printf("%d ", matrice[i][j]);
                    }
                    printf("\n");
                }
                break;
            case 2: //Visualizza l'altezza massima degli alunni di ogni classe
                printf("\nMassima altezza degli alunni di ogni classe:\n");
                for (i = 0; i < 5; i++) {
                    printf("%d\n", max_riga[i]);
                }
                break;
            case 3: // Visualizza l'altezza minima per colonna
                printf("\nAltezza minima per colonna:\n");
                for (j = 0; j < 10; j++) {
                    printf("%d ", min_col[j]);
                }
                printf("\n");
                break;
            case 4: //Visualizza l'altezza media di tutti gli studenti
                printf("\nAltezza media di tutti gli studenti: %d\n", media);
                break;
            case 5: //Visualizza l'uscita
                printf("\nArrivederci!\n");
                uscita = 1;
                break;
            default:
                printf("\nScelta non valida. Riprova.\n");
        }
    } while (uscita == 0);

    return 0;
}