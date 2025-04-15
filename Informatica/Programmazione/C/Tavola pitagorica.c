#include <stdio.h>


int main() {
    const int M=10; 
    const int N=10; 
    int a[M][N], i, j; // dichiara le variabili
    
    
    // Inserimento degli elementi della tavola pitagorica
    for(i = 0; i < M; i++) {  // ciclo per le righe 
        for(j = 0; j < N; j++) { // ciclo per le colonne
            a[i][j] = (i + 1) * (j + 1); // calcola il valore della cella
        }
    }
    
    // Visualizzazione della tavola pitagorica
    printf("Tavola Pitagorica:\n"); // titolo della tavola pitagorica
    for(i = 0; i < M; i++) { // ciclo per le righe
        for(j = 0; j < N; j++) { // ciclo per le colonne
            printf("%d\t", a[i][j]); // stampa il valore della cella
        }
        printf("\n");
    }
    
    return 0;
}