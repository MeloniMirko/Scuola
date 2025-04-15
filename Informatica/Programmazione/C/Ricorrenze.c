#include <stdio.h>

int main() {
    int count = 0;
    
    printf("Caio!Questo programma serve per calcolare quante volte il 7 compare nei numeri compresi tra 1 e 100\n");

    // Ciclo attraverso i numeri da 1 a 100
    for (int i = 1; i <= 100; i++) {
        // Controlla se il numero contiene il 7
        int num = i;
        while (num > 0) {
            if (num % 10 == 7) {
                count++;
                break; /
            }
            num /= 10; 
        }
    }

    // Stampa il risultato
    printf("Il numero 7 appare %d volte nei numeri tra 1 e 100.\n", count);

    return 0;
}
