#include <stdio.h>
#include <stdlib.h>
#include <time.h>

int main() {
    const int n = 4;
    int altezza[n];
    int peso[n];
    char nome[4] = {'A', 'B', 'C', 'D'};
    int i, j, temp1, temp2, temp3;

    srand(time(NULL));

    // Estrazione dei numeri casuali
    for (i = 0; i < n; i++) {
        altezza[i] = rand() % 100 + 1;
        peso[i] = rand() % 100 + 1;
    }

    // Stampa dei numeri casuali
    printf("Numeri casuali:\n");
    for (i = 0; i < n; i++) {
        printf("Nome: %c, Altezza: %d, Peso: %d\n", nome[i], altezza[i], peso[i]);
    }

    // Ordinamento per altezza
    for (i = 0; i < n - 1; i++) {
        for (j = 0; j < n - i - 1; j++) {
            if (altezza[j] > altezza[j + 1]) {
                temp1 = altezza[j];
                altezza[j] = altezza[j + 1];
                altezza[j + 1] = temp1;

                temp2 = peso[j];
                peso[j] = peso[j + 1];
                peso[j + 1] = temp2;

                temp3 = nome[j];
                nome[j] = nome[j + 1];
                nome[j + 1] = temp3;
            }
        }
    }

    // Stampa dei dati ordinati per altezza
    printf("\nDati ordinati per altezza:\n");
    for (i = 0; i < n; i++) {
        printf("Nome: %c, Altezza: %d, Peso: %d\n", nome[i], altezza[i], peso[i]);
    }

    // Ordinamento per peso
    for (i = 0; i < n - 1; i++) {
        for (j = 0; j < n - i - 1; j++) {
            if (peso[j] > peso[j + 1]) {
                temp1 = peso[j];
                peso[j] = peso[j + 1];
                peso[j + 1] = temp1;

                temp2 = altezza[j];
                altezza[j] = altezza[j + 1];
                altezza[j + 1] = temp2;

                temp3 = nome[j];
                nome[j] = nome[j + 1];
                nome[j + 1] = temp3;
            }
        }
    }

    // Stampa dei dati ordinati per peso
    printf("\nDati ordinati per peso:\n");
    for (i = 0; i < n; i++) {
        printf("Nome: %c, Altezza: %d, Peso: %d\n", nome[i], altezza[i], peso[i]);
    }

    return 0;
}