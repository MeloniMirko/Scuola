#include <stdio.h>
#include <stdlib.h>  // Per rand() e srand()
#include <time.h>    // Per inizializzare il generatore di numeri casuali

#define SIZE 10

// Funzione per generare un numero casuale da 0 a 99
int generaNumeroCasuale() {
    return rand() % 100;
}

// Funzione per contare i pari in un array
int contaPari(int array[], int dimensione) {
    int contatore = 0;
    for(int i = 0; i < dimensione; i++) {
        if(array[i] % 2 == 0) {
            contatore++;
        }
    }
    return contatore;
}

// Funzione per contare i dispari in un array
int contaDispari(int array[], int dimensione) {
    int contatore = 0;
    for(int i = 0; i < dimensione; i++) {
        if(array[i] % 2 != 0) {
            contatore++;
        }
    }
    return contatore;
}

// Funzione per ordinare un array in ordine decrescente
void ordinaDecrescente(int array[], int dimensione) {
    for(int i = 0; i < dimensione - 1; i++) {
        for(int j = i + 1; j < dimensione; j++) {
            if(array[i] < array[j]) {
                // Scambia i due elementi
                int temp = array[i];
                array[i] = array[j];
                array[j] = temp;
            }
        }
    }
}

// Funzione principale
int main() {
    int array1[SIZE];
    int array2[SIZE];
    int arraySomme[SIZE];

    // Inizializza il generatore di numeri casuali
    srand(time(NULL));

    // Genera numeri casuali, li inserisce nei due array e calcola la somma
    for(int i = 0; i < SIZE; i++) {
        array1[i] = generaNumeroCasuale();
        array2[i] = generaNumeroCasuale();
        arraySomme[i] = array1[i] + array2[i];
    }

    // Conta pari e dispari nei primi due array
    int pari1 = contaPari(array1, SIZE);
    int dispari1 = contaDispari(array1, SIZE);
    int pari2 = contaPari(array2, SIZE);
    int dispari2 = contaDispari(array2, SIZE);

    // Ordina il terzo array in ordine decrescente
    ordinaDecrescente(arraySomme, SIZE);

    // Stampa i risultati
    printf("Array 1: ");
    for(int i = 0; i < SIZE; i++) {
        printf("%d ", array1[i]);
    }
    printf("\nPari: %d, Dispari: %d\n", pari1, dispari1);

    printf("Array 2: ");
    for(int i = 0; i < SIZE; i++) {
        printf("%d ", array2[i]);
    }
    printf("\nPari: %d, Dispari: %d\n", pari2, dispari2);

    printf("Array Somme (ordinato decrescente): ");
    for(int i = 0; i < SIZE; i++) {
        printf("%d ", arraySomme[i]);
    }

    return 0;
}
