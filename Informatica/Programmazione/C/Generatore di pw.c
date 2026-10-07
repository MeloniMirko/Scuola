#include <stdio.h>
#include <stdlib.h>
#include <time.h>

#define LUNGHEZZA_PASSWORD 30 // Lunghezza della password (puoi modificarla)

printf("Benvenuto!Questo programma serve per generare un passwoard casuale");

char genera_carattere() {
    int tipo = rand() % 4; // Seleziona un tipo di carattere: 0=minuscolo, 1=maiuscolo, 2=numero, 3=simbolo

    if (tipo == 0) {
        // Lettera minuscola ('a' - 'z')
        return 'a' + rand() % 26;
    } else if (tipo == 1) {
        // Lettera maiuscola ('A' - 'Z')
        return 'A' + rand() % 26;
    } else if (tipo == 2) {
        // Numero ('0' - '9')
        return '0' + rand() % 10;
    } else {
        // Carattere speciale (alcuni simboli)
        char simboli[] = "!@#$%^&*()_-+=<>?";
        return simboli[rand() % (sizeof(simboli) - 1)];
    }
}

int main() {
    // Inizializza il generatore di numeri casuali
    srand(time(NULL));

    printf("Password generata: ");
    for (int i = 0; i < LUNGHEZZA_PASSWORD; i++) {
        printf("%c", genera_carattere());
    }
    printf("\n");

    return 0;
}

