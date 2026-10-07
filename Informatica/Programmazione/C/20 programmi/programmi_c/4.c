Programma 4 – Prenotazioni alberghiere
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
    float prezzoNotte;
    Data dataArrivo;
} Prenotazione;

Prenotazione prenotazioni[N];

void aggiungiPrenotazione();
void mostraPrenotazioni();
float incassoTotale();

int main() {
    int scelta;
    char continua;
    float totale;

    do {
        printf("\n=== GESTIONE PRENOTAZIONI ALBERGHIERE ===\n");
        printf("1) Aggiungi prenotazione\n");
        printf("2) Mostra tutte le prenotazioni\n");
        printf("3) Calcola incasso totale\n");
        printf("Scelta: ");
        scanf("%d", &scelta);

        switch(scelta) {
            case 1: aggiungiPrenotazione(); break;
            case 2: mostraPrenotazioni(); break;
            case 3: totale = incassoTotale(); printf("Incasso totale: %.2f\n", totale); break;
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
            scanf("%f", &prenotazioni[i].prezzoNotte);

            printf("Data arrivo (gg mm aaaa): ");
            scanf("%d %d %d", &prenotazioni[i].dataArrivo.giorno, &prenotazioni[i].dataArrivo.mese, &prenotazioni[i].dataArrivo.anno);

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
            printf("Cliente: %s\n", prenotazioni[i].nomeCliente);
            printf("Persone: %d\n", prenotazioni[i].numeroPersone);
            printf("Notti: %d\n", prenotazioni[i].numeroNotti);
            printf("Prezzo/notte: %.2f\n", prenotazioni[i].prezzoNotte);
            printf("Data arrivo: %02d/%02d/%04d\n", prenotazioni[i].dataArrivo.giorno, prenotazioni[i].dataArrivo.mese, prenotazioni[i].dataArrivo.anno);
        }
    }
    if(count == 0) printf("Nessuna prenotazione registrata.\n");
}

float incassoTotale() {
    float totale = 0;
    for(int i=0; i<N; i++) {
        if(prenotazioni[i].idPrenotazione != 0) {
            totale += prenotazioni[i].numeroPersone * prenotazioni[i].numeroNotti * prenotazioni[i].prezzoNotte;
        }
    }
    return totale;
}