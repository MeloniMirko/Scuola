#include <stdio.h>

int main() {
    int vittorie, pareggi, sconfitte;
    int punti;

    // Richiesta dei dati in input
    printf("Inserisci il numero di vittorie: ");
    scanf("%d", &vittorie);

    printf("Inserisci il numero di pareggi: ");
    scanf("%d", &pareggi);

    printf("Inserisci il numero di sconfitte: ");
    scanf("%d", &sconfitte);

    // Calcolo dei punti totali
    punti = vittorie * 3 + pareggi * 1;

    // Verifica delle condizioni di qualificazione
    if ((punti >= 10 && vittorie >= 3) || (punti > 7 && sconfitte <= 2)) {
        printf("La squadra si qualifica per la fase successiva!\n");
    } else {
        printf("La squadra non si qualifica per la fase successiva.\n");
    }

    return 0;
}
