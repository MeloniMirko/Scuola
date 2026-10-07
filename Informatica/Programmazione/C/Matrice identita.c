/* Crea un programma che, dopo aver chiesto all'utente la dimensione, stampa la matrice identità
(matrice diagonale con tutti 1 nella diagonale principale, e 0 altrove) */

#include <stdio.h>

int main(){
    int i, j; // dichiarazione delle variabili per gli indici della matrice
    int n; // dichiarazione della variabile per la dimensione della matrice
    int mat[n][n]; // dichiarazione della matrice (Nota: in C, la dimensione della matrice deve essere nota a compile-time)
    
    // Introduzione al programma
    printf("Ciao!Questo programma serve per creare una matrice identita\n");

    // Chiede all'utente di inserire la dimensione della matrice
    printf("Inserisci la dimensione della matrice: ");
    scanf("%d", &n);

    // Stampa un messaggio per confermare la dimensione della matrice
    printf("Matrice identita di dimensione %dx%d:\n", n, n);

    // Inizializza la matrice con valori 0 e 1 sulla diagonale principale
    for (i = 0; i < n; i++) { 
        for (j = 0; j < n; j++) {
            if (i == j) {
                // Se è sulla diagonale principale, imposta il valore a 1
                mat[i][j] = 1;
            } else {
                // Altrimenti, imposta il valore a 0
                mat[i][j] = 0;
            }
        }
    }

    // Stampa la matrice
    for (i = 0; i < n; i++) {
        for (j = 0; j < n; j++) {
            // Stampa il valore della cella con un formato di 3 caratteri
            printf("%3d ", mat[i][j]);
        }
        // Va a capo dopo ogni riga
        printf("\n");
    }

    // Restituisce 0 per indicare che il programma è stato eseguito correttamente
    return 0;
}