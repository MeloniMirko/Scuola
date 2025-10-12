Programma 17 – Prenotazioni albergo
#include <stdio.h>
#include <string.h>

#define N 20 // Numero massimo di prenotazioni

typedef struct {
    int giorno;
    int mese;
    int anno;
} Data;

typedef struct {
    int idPrenotazione;
    char nomeCliente[30];
    int numeroPersone;
    int numeroNotti;
    float prezzoPerNotte;
    Data dataCheckIn;
} Prenotazione;

Prenotazione prenotazioni[N];

void aggiungiPrenotazione();
void mostraPrenotazioni();
float totaleIncassi();

int main() {
    int scelta;
    char continua;
    float totale;

    do {
        printf("\n=== GESTIONE PRENOTAZIONI ALBERGO ===\n");
        printf("1) Aggiungi prenotazione\n");
        printf("2) Mostra tutte le prenotazioni\n");
        printf("3) Calcola totale incassi\n");
        printf("Scelta: ");
        scanf("%d", &scelta);

        switch(scelta) {
            case 1: aggiungiPrenotazione(); break;
            case 2: mostraPrenotazioni(); break;
            case 3: totale = totaleIncassi(); printf("Totale incassi: %.2f\n", totale); break;
            default: printf("Scelta non valida\n");
        }

        printf("Vuoi continuare? (S/N): ");
        scanf(" %c", &continua);

    } while(continua=='S' || continua=='s');

    return 0;
}

void aggiungiPrenotazione() {
    for(int i=0; i<N; i++) {
        if(prenotazioni[i].idPrenotazione == 0) {
            printf("ID prenotazione: ");
            scanf("%d", &prenotazioni[i].idPrenotazione);

            printf("Nome cliente: ");
            scanf("%s", prenotazioni[i].nomeCliente);

            printf("Numero persone: ");
            scanf("%d", &prenotazioni[i].numeroPersone);

            printf("Numero notti: ");
            scanf("%d", &prenotazioni[i].numeroNotti);

            printf("Prezzo per notte: ");
            scanf("%f", &prenotazioni[i].prezzoPerNotte);

            printf("Data check-in (gg mm aaaa): ");
            scanf("%d %d %d", &prenotazioni[i].dataCheckIn.giorno, &prenotazioni[i].dataCheckIn.mese, &prenotazioni[i].dataCheckIn.anno);

            printf("Prenotazione aggiunta!\n");
            return;
        }
    }
    printf("Archivio pieno!\n");
}

void mostraPrenotazioni() {
    int count = 0;
    for(int i=0; i<N; i++) {
        if(prenotazioni[i].idPrenotazione != 0) {
            count++;
            printf("\nPrenotazione %d\n", count);
            printf("ID: %d\n", prenotazioni[i].idPrenotazione);
            printf("Nome cliente: %s\n", prenotazioni[i].nomeCliente);
            printf("Numero persone: %d\n", prenotazioni[i].numeroPersone);
            printf("Numero notti: %d\n", prenotazioni[i].numeroNotti);
            printf("Prezzo per notte: %.2f\n", prenotazioni[i].prezzoPerNotte);
            printf("Data check-in: %02d/%02d/%04d\n", prenotazioni[i].dataCheckIn.giorno, prenotazioni[i].dataCheckIn.mese, prenotazioni[i].dataCheckIn.anno);
        }
    }
    if(count == 0) printf("Nessuna prenotazione registrata.\n");
}

float totaleIncassi() {
    float totale = 0;
    for(int i=0; i<N; i++) {
        if(prenotazioni[i].idPrenotazione != 0) {
            totale += prenotazioni[i].numeroNotti * prenotazioni[i].prezzoPerNotte * prenotazioni[i].numeroPersone;
        }
    }
    return totale;
}