#include <stdio.h>

int main() {
    int numero;

    // Legge un numero intero dall'input
    printf("Inserisci un numero intero: ");
    scanf("%d", &numero);

    // Controlla se il numero è pari o dispari
    if (numero % 2 == 0) {
        // Numero pari
        printf("Il quadruplo di %d è: %d\n", numero, numero * 4);
    } else {
        // Numero dispari
        printf("Il triplo di %d è: %d\n", numero, numero * 3);
    }
    
	return 0
}
