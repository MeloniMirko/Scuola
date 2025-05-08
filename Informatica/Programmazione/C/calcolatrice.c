#include <stdio.h>

// Funzioni per le operazioni
float somma(float a, float b) {
    return a + b;
}

float sottrazione(float a, float b) {
    return a - b;
}

float moltiplicazione(float a, float b) {
    return a * b;
}

float divisione(float a, float b) {
    if (b != 0) {
        return a / b;
    } else {
        printf("Errore: divisione per zero!\n");
        return 0;  // Restituisce 0 in caso di divisione per zero
    }
}

int main() {
    float num1, num2, risultato;
    int scelta;

    // Menu delle operazioni
    printf("Calcolatrice in C\n");
    printf("Seleziona l'operazione:\n");
    printf("1. Somma\n");
    printf("2. Sottrazione\n");
    printf("3. Moltiplicazione\n");
    printf("4. Divisione\n");
    printf("Inserisci la tua scelta (1/2/3/4): ");
    scanf("%d", &scelta);

    // Input dei numeri
    printf("Inserisci il primo numero: ");
    scanf("%f", &num1);
    printf("Inserisci il secondo numero: ");
    scanf("%f", &num2);

    // Esegui l'operazione in base alla scelta
    switch (scelta) {
        case 1:
            risultato = somma(num1, num2);
            printf("Risultato: %.2f\n", risultato);
            break;
        case 2:
            risultato = sottrazione(num1, num2);
            printf("Risultato: %.2f\n", risultato);
            break;
        case 3:
            risultato = moltiplicazione(num1, num2);
            printf("Risultato: %.2f\n", risultato);
            break;
        case 4:
            risultato = divisione(num1, num2);
            printf("Risultato: %.2f\n", risultato);
            break;
        default:
            printf("Scelta non valida!\n");
            break;
    }

    return 0;
}
