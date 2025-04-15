#include <stdio.h>
#include <stdlib.h>
#include <time.h>

//Introduzione al programma
printf("Hey!Questo programma serve per lanciare il dado");
sleep(2);
int disegna_dado(int numero) {
    // Stampa il bordo del dado
    printf(" ----- \n");

    // Disegna il dado in base al numero
    switch (numero) {
        case 1:
            printf("|     | \n");
            printf("|  *  | \n");
            printf("|     | \n");
            break;
        case 2:
            printf("| *   | \n");
            printf("|     | \n");
            printf("|   * | \n");
            break;
        case 3:
            printf("| *   | \n");
            printf("|  *  | \n");
            printf("|   * | \n");
            break;
        case 4:
            printf("| * * | \n");
            printf("|     | \n");
            printf("| * * | \n");
            break;
        case 5:
            printf("| * * | \n");
            printf("|  *  | \n");
            printf("| * * | \n");
            break;
        case 6:
            printf("| * * | \n");
            printf("| * * | \n");
            printf("| * * | \n");
            break;
    }

    // Stampa il bordo inferiore del dado
    printf(" ----- \n");
}

int main() {
    // Inizializza il generatore di numeri casuali
    srand(time(0)); 

    // Genera un numero casuale tra 1 e 6
    int numero = rand() % 6 + 1;

    // Mostra il risultato
    printf("Numero estratto: %d\n", numero);
    disegna_dado(numero);

    return 0;
}
