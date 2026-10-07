Programma 16 – Ordini online
#include <stdio.h>
#include <string.h>

#define N 20 // Numero massimo di ordini

typedef struct {
    int giorno;
    int mese;
    int anno;
} Data;

typedef struct {
    int idOrdine;
    char prodotto[30];
    int quantita;
    float prezzoUnitario;
    Data dataOrdine;
} Ordine;

Ordine ordini[N];

void aggiungiOrdine();
void mostraOrdini();
float totaleOrdini();

int main() {
    int scelta;
    char continua;
    float totale;

    do {
        printf("\n=== GESTIONE ORDINI ONLINE ===\n");
        printf("1) Aggiungi ordine\n");
        printf("2) Mostra tutti gli ordini\n");
        printf("3) Calcola totale ordini\n");
        printf("Scelta: ");
        scanf("%d", &scelta);

        switch(scelta) {
            case 1: aggiungiOrdine(); break;
            case 2: mostraOrdini(); break;
            case 3: totale = totaleOrdini(); printf("Totale ordini: %.2f\n", totale); break;
            default: printf("Scelta non valida\n");
        }

        printf("Vuoi continuare? (S/N): ");
        scanf(" %c", &continua);

    } while(continua=='S' || continua=='s');

    return 0;
}

void aggiungiOrdine() {
    for(int i=0; i<N; i++) {
        if(ordini[i].idOrdine == 0) {
            printf("ID ordine: ");
            scanf("%d", &ordini[i].idOrdine);

            printf("Prodotto: ");
            scanf("%s", ordini[i].prodotto);

            printf("Quantita': ");
            scanf("%d", &ordini[i].quantita);

            printf("Prezzo unitario: ");
            scanf("%f", &ordini[i].prezzoUnitario);

            printf("Data ordine (gg mm aaaa): ");
            scanf("%d %d %d", &ordini[i].dataOrdine.giorno, &ordini[i].dataOrdine.mese, &ordini[i].dataOrdine.anno);

            printf("Ordine aggiunto!\n");
            return;
        }
    }
    printf("Archivio pieno!\n");
}

void mostraOrdini() {
    int count = 0;
    for(int i=0; i<N; i++) {
        if(ordini[i].idOrdine != 0) {
            count++;
            printf("\nOrdine %d\n", count);
            printf("ID: %d\n", ordini[i].idOrdine);
            printf("Prodotto: %s\n", ordini[i].prodotto);
            printf("Quantita': %d\n", ordini[i].quantita);
            printf("Prezzo unitario: %.2f\n", ordini[i].prezzoUnitario);
            printf("Prezzo totale: %.2f\n", ordini[i].quantita * ordini[i].prezzoUnitario);
            printf("Data ordine: %02d/%02d/%04d\n", ordini[i].dataOrdine.giorno, ordini[i].dataOrdine.mese, ordini[i].dataOrdine.anno);
        }
    }
    if(count == 0) printf("Nessun ordine registrato.\n");
}

float totaleOrdini() {
    float totale = 0;
    for(int i=0; i<N; i++) {
        if(ordini[i].idOrdine != 0) {
            totale += ordini[i].quantita * ordini[i].prezzoUnitario;
        }
    }
    return totale;
}