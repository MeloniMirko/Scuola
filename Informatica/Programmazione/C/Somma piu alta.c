#include <stdio.h>
#include <stdlib.h>
#include <time.h>

int main() {
    int matrice[4][4];

    int sommaRigaMax = 0;
    int sommaColonnaMax = 0;
    int rigaMax = 0;
    int colonnaMax = 0;

    printf("Benvenuto!Questo programma stampa una matrice 4x4 di numeri casuali e trova la riga e la colonna con la somma maggiore.\n");

    // Inizializzazione della matrice con valori casuali
    srand(time(NULL));
    for (int i = 0; i < 4; i++) {
        for (int j = 0; j < 4; j++) {
            matrice[i][j] = rand() % 100;
        }
    }

    // Stampa della matrice
    printf("Matrice 4x4:\n");
    for (int i = 0; i < 4; i++) {
        for (int j = 0; j < 4; j++) {
            printf("%d ", matrice[i][j]);
        }
        printf("\n");
    }

    // Calcolo della somma di ogni riga
    printf("\nSomma di ogni riga:\n");
    for (int i = 0; i < 4; i++) {
        int sommaRigaAttuale = 0;
        for (int j = 0; j < 4; j++) {
            sommaRigaAttuale += matrice[i][j];
        }
        printf("Riga %d: %d\n", i + 1, sommaRigaAttuale);
        if (sommaRigaAttuale > sommaRigaMax) {
            sommaRigaMax = sommaRigaAttuale;
            rigaMax = i + 1;
        }
    }

    // Calcolo della somma di ogni colonna
    printf("\nSomma di ogni colonna:\n");
    for (int i = 0; i < 4; i++) {
        int sommaColonnaAttuale = 0;
        for (int j = 0; j < 4; j++) {
            sommaColonnaAttuale += matrice[j][i];
        }
        printf("Colonna %d: %d\n", i + 1, sommaColonnaAttuale);
        if (sommaColonnaAttuale > sommaColonnaMax) {
            sommaColonnaMax = sommaColonnaAttuale;
            colonnaMax = i + 1;
        }
    }

    // Stampa dei risultati
    printf("La riga con la somma piu alta: %d \n", rigaMax);
    printf("La colonna con la somma piu alta: Colonna %d \n", colonnaMax);

    return 0;
}