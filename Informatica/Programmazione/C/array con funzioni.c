#include <stdio.h>
#include <stdlib.h>
#include <time.h>

// Dimensione degli array (10 elementi)
#define DIM 10

// Funzione per generare un numero casuale tra 1 e 50
int generaNumero() {
    return rand() % 50 + 1;
}

// Funzione per contare i pari in un array
int contaPari(int arr[]) {
    int contatore = 0;
    for(int i = 0; i < DIM; i++) {
        if(arr[i] % 2 == 0) {
            contatore++;
        }
    }
    return contatore;
}

// Funzione per ordinare in modo decrescente (usando un algoritmo semplice)
void ordina(int arr[]) {
    int temp;
    for(int i = 0; i < DIM-1; i++) {
        for(int j = i+1; j < DIM; j++) {
            if(arr[i] < arr[j]) {
                temp = arr[i];
                arr[i] = arr[j];
                arr[j] = temp;
            }
        }
    }
}

int main() {
    int arrayA[DIM], arrayB[DIM], arraySomma[DIM];
    int i;
    
    // Inizializzo il generatore di numeri casuali
    srand(time(NULL));
    
    // 1. RIEMPIO GLI ARRAY CON NUMERI CASUALI
    printf("Generazione numeri casuali:\n");
    for(i = 0; i < DIM; i++) {
        arrayA[i] = generaNumero();
        arrayB[i] = generaNumero();
        printf("Coppia %d: %d e %d\n", i+1, arrayA[i], arrayB[i]);
    }
    
    // 2. CONTO I PARI E I DISPARI
    int pariA = contaPari(arrayA);
    int pariB = contaPari(arrayB);
    
    printf("\nStatistiche:\n");
    printf("Array A: %d pari e %d dispari\n", pariA, DIM - pariA);
    printf("Array B: %d pari e %d dispari\n", pariB, DIM - pariB);
    
    // 3. CREO L'ARRAY SOMMA
    for(i = 0; i < DIM; i++) {
        arraySomma[i] = arrayA[i] + arrayB[i];
    }
    
    // 4. ORDINO L'ARRAY SOMMA
    ordina(arraySomma);
    
    // STAMPO I RISULTATI
    printf("\nArray somma ordinato:\n");
    for(i = 0; i < DIM; i++) {
        printf("%d ", arraySomma[i]);
    }
    
    return 0;
}