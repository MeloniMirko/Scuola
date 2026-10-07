#include <stdio.h>

int main() {
    int n_studenti,i,scelta,max,min,media;
    int somma = 0;
    float altezza;
    int altezze[n_studenti];
    const int MIN_ALTEZZA=140;
    const int MAX_ALTEZZA=200;
    const int MIN_STUDENTI=10;
    const int MAX_STUDENTI=15;
    
    printf("Hey! Questo programma serve per elaborare i dati riguardo l'altezza media delgli studenti del Sud Sardegna\n");
    printf("Inserisci il numero di studenti (tra %d e %d): ", MIN_STUDENTI, MAX_STUDENTI);
    scanf("%d", &n_studenti);

    while (n_studenti < MIN_STUDENTI || n_studenti > MAX_STUDENTI) {
        printf("Numero di studenti non valido. Inserisci un valore tra %d e %d: ", MIN_STUDENTI, MAX_STUDENTI);
        scanf("%d", &n_studenti);
    }

   
    for ( i = 0; i < n_studenti; i++) {
        printf("Inserisci l'altezza dello studente %d (tra %d e %d cm): ", i + 1, MIN_ALTEZZA, MAX_ALTEZZA);
        scanf("%d", &altezze[i]);

        while (altezze[i] < MIN_ALTEZZA || altezze[i] > MAX_ALTEZZA) {
            printf("Altezza non valida. Inserisci un valore tra %d e %d cm: ", MIN_ALTEZZA, MAX_ALTEZZA);
            scanf("%d", &altezze[i]);
        }
    }

   
    do {
        printf("\nMenu:\n");
        printf("1. Altezza media\n");
        printf("2. Altezza massima\n");
        printf("3. Altezza minima\n");
        printf("4. Esci\n");
        printf("Inserisci la tua scelta: ");
        scanf("%d", &scelta);

        switch (scelta) {
            case 1:
                
                for ( i = 0; i < n_studenti; i++) {
                    somma = somma + altezze[i];
                    media= somma / n_studenti;

                    
                }
                printf("Altezza media: %d cm\n", media);
                break;
            case 2:
                 max = altezze[0];
                for ( i = 1; i < n_studenti; i++) {
                    if (altezze[i] > max) {
                        max = altezze[i];
                    }
                }
                printf("Altezza massima: %d cm\n", max);
                break;
            case 3:
                 min = altezze[0];
                for ( i = 1; i < n_studenti; i++) {
                    if (altezze[i] < min) {
                        min = altezze[i];
                    }
                }
                printf("Altezza minima: %d cm\n", min);
                break;
            case 4:
                printf("Arrivederci!\n");
                break;
            default:
                printf("Scelta non valida. Riprova.\n");
        }
    } while (scelta != 4);

    return 0;
}