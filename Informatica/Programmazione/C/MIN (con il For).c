#include <stdio.h>

int main() {
    int NUM;  
    int num, min,i;

	printf("\nCiao!Questo programma serve per visualizzare il numero minimo tra una sequenza di numeri inseriti dall'utente");

    // Chiediamo all'utente di inserire il numero di elementi
    printf("\nQuanti numeri vuoi inserire? ");
    scanf("%d", &NUM);

    // Controlla che NUM sia maggiore di 0
    if (NUM <= 0) {
        printf("Il numero di numeri deve essere maggiore di 0.\n");
        return 1;
    }

    // Chiede il primo numero e impostiamo min come il primo numero
    printf("Inserisci un numero: ");
    scanf("%d", &num);
    min = num;

    
    for ( i = 1; i < NUM; i++) {
        printf("Inserisci un altro numero: ");
        scanf("%d", &num);

       
        if (num < min) {
            min = num;
        }
    }

    // Visualizza il valore minimo
    printf("Il valore minimo e: %d\n", min);

    return 0;
}

