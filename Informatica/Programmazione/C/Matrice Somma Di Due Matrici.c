/* Calcola la matrice C somma di due matrici A+B che hanno entrambe lo stesso numero di righe (N=3) e di colonne (M=4).
Genera a caso le matrici A e B con dei numeri compresi tra 1 e 20.
Stampa la matrice C (Promemoria: la matrice somma è tale che C[i][j]=A[i][j]+B[i][j] per tutti gli elementi della matrice)
- calcola la somma per righe della prima riga di A, di B e di C. */

#include <stdio.h>
#include <stdlib.h>
#include <time.h>

int main() {
    int i, j, N, M, A[3][4], B[3][4], C[3][4], somma;
    srand(time(NULL));
    N = 3; M = 4;

    // Generazione delle matrici A e B
    printf("Matrice A:\n");
    for (i = 0; i < N; i++) {
        for (j = 0; j < M; j++) {
            A[i][j] = rand() % 20 + 1;
            printf("%d ", A[i][j]);
        }
        printf("\n");
    }

    printf("\nMatrice B:\n");
    for (i = 0; i < N; i++) {
        for (j = 0; j < M; j++) {
            B[i][j] = rand() % 20 + 1;
            printf("%d ", B[i][j]);
        }
        printf("\n");
    }

    // Calcolo della matrice C
    printf("\nMatrice C (A+B):\n");
    for (i = 0; i < N; i++) {
        for (j = 0; j < M; j++) {
            C[i][j] = A[i][j] + B[i][j];
            printf("%d ", C[i][j]);
        }
        printf("\n");
    }

    // Calcolo della somma per righe della prima riga di A, B e C
    printf("\nSomma per righe della prima riga:\n");
    somma = 0;
    for (j = 0; j < M; j++) {
        somma += A[0][j];
    }
    printf("Somma della prima riga di A: %d\n", somma);

    somma = 0;
    for (j = 0; j < M; j++) {
        somma += B[0][j];
    }
    printf("Somma della prima riga di B: %d\n", somma);

    somma = 0;
    for (j = 0; j < M; j++) {
        somma += C[0][j];
    }
    printf("Somma della prima riga di C: %d\n", somma);

    return 0;
}