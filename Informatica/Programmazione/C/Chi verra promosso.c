#include <stdio.h>

int main() {
    const int NUM_VOTI = 12;  // Numero massimo di voti per alunno

    float voti[NUM_VOTI];  // Modifica del tipo di dati da int a float
    int numVoti; // Variabile per contare il numero di voti inseriti
    float media; // Variabile per calcolare la media dei voti
    int risposta; // Variabile per chiedere conferma all'utente

    // Ciclo per inserire voti finché l'utente non conferma di averli
    do { 
        printf("Inserisci il numero di voti (max %d): ", NUM_VOTI);
        scanf("%d", &numVoti);

        // Controllo se il numero di voti è valido
        if (numVoti <= 0 || numVoti > NUM_VOTI) {
            printf("Numero di voti non valido. Inserisci un numero tra 1 e %d.\n", NUM_VOTI);
            continue;
        }

        // Inserimento dei voti
        for (int i = 0; i < numVoti; i++) {
            printf("Inserisci voto %d: ", i + 1);
            scanf("%f", &voti[i]);  // Modifica del formato di input da %d a %f
        }

        // Calcolo della media
        media = 0;
        for (int i = 0; i < numVoti; i++) {
            media += voti[i];
        }
        media /= numVoti;

        // Stampa il risultato
        if (media >= 6) {
            printf("L'alunno è stato promosso con una media di %.2f.\n", media);
        } else {
            printf("L'alunno è stato bocciato con una media di %.2f.\n", media);
        }

        // Richiesta di inserimento di un altro alunno
        printf("Vuoi inserire i voti di un altro alunno? (1 per sì, 0 per no): ");
        scanf("%d", &risposta);
    } while (risposta == 1); 

    return 0;
}