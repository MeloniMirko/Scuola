#include <stdio.h>

int main() {
    int mese;
    
    //Introduzione al programma
    printf("Benvenuto!! Questo programma stampa il mese corrispondente a un numero a te scelto\n");

    
    // Chiedi all'utente di inserire un numero tra 1 e 12
    printf("Inserisci un numero tra 1 e 12: ");
    scanf("%d", &mese);

    // Verifica se il numero è valido
    if (mese < 1 || mese > 12) {
        printf("Numero non valido! Devi inserire un numero tra 1 e 12.\n");
        return 1; // Termina il programma se il numero non è valido
    }

    // Stampa il nome del mese corrispondente
    switch (mese) {
        case 1:
            printf("Gennaio\n");
            break;
        case 2:
            printf("Febbraio\n");
            break;
        case 3:
            printf("Marzo\n");
            break;
        case 4:
            printf("Aprile\n");
            break;
        case 5:
            printf("Maggio\n");
            break;
        case 6:
            printf("Giugno\n");
            break;
        case 7:
            printf("Luglio\n");
            break;
        case 8:
            printf("Agosto\n");
            break;
        case 9:
            printf("Settembre\n");
            break;
        case 10:
            printf("Ottobre\n");
            break;
        case 11:
            printf("Novembre\n");
            break;
        case 12:
            printf("Dicembre\n");
            break;
        default:
            break;
    }

    return 0;
}
