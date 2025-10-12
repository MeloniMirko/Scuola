Programma 19 – Giochi in un negozio
#include <stdio.h>
#include <string.h>

#define N 20 // Numero massimo di giochi

typedef struct {
    int giorno;
    int mese;
    int anno;
} Data;

typedef struct {
    int idGioco;
    char nome[30];
    char piattaforma[20];
    float prezzo;
    Data dataArrivo;
} Gioco;

Gioco negozio[N];

void aggiungiGioco();
void mostraGiochi();
float totalePrezzi();

int main() {
    int scelta;
    char continua;
    float totale;

    do {
        printf("\n=== GESTIONE GIOCHI NEL NEGOZIO ===\n");
        printf("1) Aggiungi gioco\n");
        printf("2) Mostra tutti i giochi\n");
        printf("3) Calcola totale prezzi\n");
        printf("Scelta: ");
        scanf("%d", &scelta);

        switch(scelta) {
            case 1: aggiungiGioco(); break;
            case 2: mostraGiochi(); break;
            case 3: totale = totalePrezzi(); printf("Totale prezzi: %.2f\n", totale); break;
            default: printf("Scelta non valida\n");
        }

        printf("Vuoi continuare? (S/N): ");
        scanf(" %c", &continua);

    } while(continua=='S' || continua=='s');

    return 0;
}

void aggiungiGioco() {
    for(int i=0; i<N; i++) {
        if(negozio[i].idGioco == 0) {
            printf("ID gioco: ");
            scanf("%d", &negozio[i].idGioco);

            printf("Nome: ");
            scanf("%s", negozio[i].nome);

            printf("Piattaforma: ");
            scanf("%s", negozio[i].piattaforma);

            printf("Prezzo: ");
            scanf("%f", &negozio[i].prezzo);

            printf("Data arrivo (gg mm aaaa): ");
            scanf("%d %d %d", &negozio[i].dataArrivo.giorno, &negozio[i].dataArrivo.mese, &negozio[i].dataArrivo.anno);

            printf("Gioco aggiunto!\n");
            return;
        }
    }
    printf("Archivio pieno!\n");
}

void mostraGiochi() {
    int count = 0;
    for(int i=0; i<N; i++) {
        if(negozio[i].idGioco != 0) {
            count++;
            printf("\nGioco %d\n", count);
            printf("ID: %d\n", negozio[i].idGioco);
            printf("Nome: %s\n", negozio[i].nome);
            printf("Piattaforma: %s\n", negozio[i].piattaforma);
            printf("Prezzo: %.2f\n", negozio[i].prezzo);
            printf("Data arrivo: %02d/%02d/%04d\n", negozio[i].dataArrivo.giorno, negozio[i].dataArrivo.mese, negozio[i].dataArrivo.anno);
        }
    }
    if(count == 0) printf("Nessun gioco registrato.\n");
}

float totalePrezzi() {
    float totale = 0;
    for(int i=0; i<N; i++) {
        if(negozio[i].idGioco != 0) totale += negozio[i].prezzo;
    }
    return totale;
}