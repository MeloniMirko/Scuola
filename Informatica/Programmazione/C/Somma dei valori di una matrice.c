#include <stdio.h>
#include <stdlib.h>
#include <time.h>

int main() {
    int n;
    printf("Inserisci la dimensione della matrice quadrata: ");
    scanf("%d", &n);

    int matrice[n][n];
    int somma_diagonale;
    int media_righe[n];
    int prodotto_colonne[n]; 
    int scelta;
    int i, j;

    srand(time(NULL));

    // Crea una matrice quadrata con numeri casuali
    for (i = 0; i < n; i++) {
        for (j = 0; j < n; j++) {
            matrice[i][j] = rand() % 100 + 1;
        }
    }

    // Stampa la matrice
    printf("Matrice:\n");
    for (i = 0; i < n; i++) {
        for (j = 0; j < n; j++) {
            printf("%d ", matrice[i][j]);
        }
        printf("\n");
    }

    // Calcola la somma dei valori della diagonale principale
    somma_diagonale = 0;
    for (i = 0; i < n; i++) {
        somma_diagonale += matrice[i][i];
    }

    // Calcola la media di ogni riga
    for (i = 0; i < n; i++) {
        int somma_riga = 0;
        for (j = 0; j < n; j++) {
            somma_riga += matrice[i][j];
        }
        media_righe[i] = somma_riga / n;
    }

    // Calcola il prodotto di ogni colonna
    for (j = 0; j < n; j++) {
        int prodotto_colonna = 1;
        for (i = 0; i < n; i++) {
            prodotto_colonna *= matrice[i][j];
        }
        prodotto_colonne[j] = prodotto_colonna;
    }

    while (1) {
        printf("\nMenu:\n");
        printf("1. Somma dei valori della diagonale principale\n");
        printf("2. Media di ogni riga\n");
        printf("3. Prodotto di ogni colonna\n");
        printf("4. Esci\n");

        printf("Inserisci la tua scelta: ");
        scanf("%d", &scelta);

        switch (scelta) {
            case 1:
                printf("Somma dei valori della diagonale principale: %d\n", somma_diagonale);
                break;
            case 2:
                printf("Media di ogni riga: ");
                for (i = 0; i < n; i++) {
                    printf("%d ", media_righe[i]);
                }
                printf("\n");
                break;
            case 3:
                printf("Prodotto di ogni colonna: ");
                for (j = 0; j < n; j++) {
                    printf("%d ", prodotto_colonne[j]);
                }
                printf("\n");
                break;
            case 4:
                printf("Arrivederci!\n");
                return 0;
            default:
                printf("Scelta non valida. Riprova.\n");
        }
    }

    return 0;
}