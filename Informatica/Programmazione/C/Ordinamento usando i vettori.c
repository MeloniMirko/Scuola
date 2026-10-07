#include <stdio.h>
#include <stdlib.h>

#define DIM 4

// Struttura per rappresentare una persona
typedef struct {
    char codice;
    float peso;
    int altezza;
} Persona;

// Funzione per leggere i dati e caricarli nei vettori paralleli
void leggiDati(Persona dati[DIM]) {
    for (int i = 0; i < DIM; i++) {
        printf("Inserisci codice identificativo: ");
        scanf(" %c", &dati[i].codice);
        printf("Inserisci peso (in kg): ");
        scanf("%f", &dati[i].peso);
        printf("Inserisci altezza (in cm): ");
        scanf("%d", &dati[i].altezza);
    }
}

// Funzione per ordinare i vettori paralleli in base al peso
void ordinaPerPeso(Persona dati[DIM]) {
    for (int i = 0; i < DIM - 1; i++) {
        for (int j = i + 1; j < DIM; j++) {
            if (dati[i].peso > dati[j].peso) {
                // Scambia i dati
                Persona temp = dati[i];
                dati[i] = dati[j];
                dati[j] = temp;
            }
        }
    }
}

// Funzione per ordinare i vettori paralleli in base all'altezza
void ordinaPerAltezza(Persona dati[DIM]) {
    for (int i = 0; i < DIM - 1; i++) {
        for (int j = i + 1; j < DIM; j++) {
            if (dati[i].altezza > dati[j].altezza) {
                // Scambia i dati
                Persona temp = dati[i];
                dati[i] = dati[j];
                dati[j] = temp;
            }
        }
    }
}

// Funzione per stampare i dati
void stampaDati(Persona dati[DIM]) {
    for (int i = 0; i < DIM; i++) {
        printf("Codice: %c, Peso: %.2f kg, Altezza: %d cm\n", dati[i].codice, dati[i].peso, dati[i].altezza);
    }
}

int main() {
    Persona dati[DIM];

    // Leggi i dati e caricarli nei vettori paralleli
    leggiDati(dati);

    printf("Dati originali:\n");
    stampaDati(dati);

    // Ordina i vettori paralleli in base al peso
    ordinaPerPeso(dati);

    printf("\nDati ordinati per peso:\n");
    stampaDati(dati);

    // Ordina i vettori paralleli in base all'altezza
    ordinaPerAltezza(dati);

    printf("\nDati ordinati per altezza:\n");
    stampaDati(dati);

    return 0;
}