#include <stdio.h>

int main() {
    int n, num, massimo, minimo;

    // Chiediamo all'utente di inserire il numero di elementi
    printf("Quanti numeri vuoi inserire? ");
    scanf("%d", &n);

    // Verifica se l'utente ha inserito almeno un numero
    if (n <= 0) {
        printf("Devi inserire almeno un numero.\n");
        return 1;
    }

    // Chiediamo all'utente di inserire il primo numero
    printf("Inserisci un numero: ");
    scanf("%d", &num);
    
    // Inizializziamo massimo e minimo con il primo numero inserito
    massimo = minimo = num;

    // Ciclo per leggere i restanti n-1 numeri
    int i = 1;
    while (i < n) {
        printf("Inserisci un altro numero: ");
        scanf("%d", &num);

        // Aggiorniamo massimo e minimo
        if (num > massimo) {
            massimo = num;
        }
        if (num < minimo) {
            minimo = num;
        }

        i++;
    }

    // Stampiamo il massimo e il minimo
    printf("Il numero massimo e: %d\n", massimo);
    printf("Il numero minimo e: %d\n", minimo);

    return 0;
}
