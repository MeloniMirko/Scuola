#include <stdio.h>

int main() {
    int num1, num2, num3;

    // Input dei tre numeri
    printf("Inserisci il primo numero: ");
    scanf("%d", &num1);
    printf("Inserisci il secondo numero: ");
    scanf("%d", &num2);
    printf("Inserisci il terzo numero: ");
    scanf("%d", &num3);

    // Determinare il minimo
    int minimo = num1; 

    if (num2 < minimo) {
        minimo = num2; 
    }
    if (num3 < minimo) {
        minimo = num3; 
    }

    // Stampa del minimo
    printf("Il numero minimo è: %d\n", minimo);

    return 0;
}
