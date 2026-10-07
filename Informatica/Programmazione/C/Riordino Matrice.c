#include <stdio.h>
#include <stdlib.h>
#include <time.h>

int main(){
    int matrice[5][10], riga[5], i, j, k, temp, pos, n = 5, m = 10;

    printf("Ciao! Questo programma serve per ordinare una matrice in ordine crescente secondo la somma degli elementi di ogni riga.\n");

    srand(time(NULL));
    for (i = 0; i < n; i++) { // genero la matrice
        for (j = 0; j < m; j++) { 
            matrice[i][j] = (rand() % 99) + 1; // genero un numero random tra 1 e 99
        }
    }
    
    // stampo la matrice
    printf("Matrice originale:\n");
    for (i = 0; i < n; i++) { 
        for (j = 0; j < m; j++) { 
            printf("%d ", matrice[i][j]); // stampo gli elementi della riga
        }
        printf("\n");
    }

    for (i = 0; i < n; i++){ // calcolo la somma degli elementi di ogni riga
        riga[i] = 0; // inizializzo la riga
        for (j = 0; j < m; j++) {  
            riga[i] += matrice[i][j]; // sommo gli elementi della riga
        }
    }
  
    // stampo la somma degli elementi di ogni riga
    printf("\nSomma degli elementi di ogni riga:\n");
    for (i = 0; i < n; i++) { 
        printf("Riga %d: %d\n", i+1, riga[i]);
    }

    for (i = 0; i < n; i++) { // riordino le righe
        for (j = i + 1; j < n; j++) { // confronto gli elementi della somma
            if (riga[i] > riga[j]) { // se la somma della riga i è maggiore della somma della riga j

                // scambia le righe
                for (k = 0; k < m; k++) { 
                    temp = matrice[i][k];
                    matrice[i][k] = matrice[j][k];
                    matrice[j][k] = temp;
                }
                // scambia i valori complessivi
                temp = riga[i];
                riga[i] = riga[j];
                riga[j] = temp;
            }
        }
    }

    // stampa la matrice riordinata
    printf("\nMatrice riordinata:\n"); 
    for (i = 0; i < n; i++) { 
        for (j = 0; j < m; j++) { 
            printf("%d ", matrice[i][j]); // stampo gli elementi della riga
        }
        printf(" | Somma: %d\n ", riga[i]); // stampo la somma della riga
    }

    return 0;
}