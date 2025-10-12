Programma 20 – Prodotti in un supermercato
#include <stdio.h>
#include <string.h>

#define N 20 // Numero massimo di prodotti

typedef struct {
    int giorno;
    int mese;
    int anno;
} Data;

typedef struct {
    int idProdotto;
    char nome[30];
    int quantita;
    float prezzoUnitario;
    Data dataArrivo;
} Prodotto;

Prodotto supermercato[N];

void aggiungiProdotto();
void mostraProdotti();
float totaleMagazzino();

int main() {
    int scelta;
    char continua;
    float totale;

    do {
        printf("\n=== GESTIONE PRODOTTI SUPERMERCATO ===\n");
        printf("1) Aggiungi prodotto\n");
        printf("2) Mostra tutti i prodotti\n");
        printf("3) Calcola totale magazzino\n");
        printf("Scelta: ");
        scanf("%d", &scelta);

        switch(scelta) {
            case 1: aggiungiProdotto(); break;
            case 2: mostraProdotti(); break;
            case 3: totale = totaleMagazzino(); printf("Totale valore magazzino: %.2f\n", totale); break;
            default: printf("Scelta non valida\n");
        }

        printf("Vuoi continuare? (S/N): ");
        scanf(" %c", &continua);

    } while(continua=='S' || continua=='s');

    return 0;
}

void aggiungiProdotto() {
    for(int i=0; i<N; i++) {
        if(supermercato[i].idProdotto == 0) {
            printf("ID prodotto: ");
            scanf("%d", &supermercato[i].idProdotto);

            printf("Nome prodotto: ");
            scanf("%s", supermercato[i].nome);

            printf("Quantita': ");
            scanf("%d", &supermercato[i].quantita);

            printf("Prezzo unitario: ");
            scanf("%f", &supermercato[i].prezzoUnitario);

            printf("Data arrivo (gg mm aaaa): ");
            scanf("%d %d %d", &supermercato[i].dataArrivo.giorno, &supermercato[i].dataArrivo.mese, &supermercato[i].dataArrivo.anno);

            printf("Prodotto aggiunto!\n");
            return;
        }
    }
    printf("Magazzino pieno!\n");
}

void mostraProdotti() {
    int count = 0;
    for(int i=0; i<N; i++) {
        if(supermercato[i].idProdotto != 0) {
            count++;
            printf("\nProdotto %d\n", count);
            printf("ID: %d\n", supermercato[i].idProdotto);
            printf("Nome: %s\n", supermercato[i].nome);
            printf("Quantita': %d\n", supermercato[i].quantita);
            printf("Prezzo unitario: %.2f\n", supermercato[i].prezzoUnitario);
            printf("Prezzo totale: %.2f\n", supermercato[i].quantita * supermercato[i].prezzoUnitario);
            printf("Data arrivo: %02d/%02d/%04d\n", supermercato[i].dataArrivo.giorno, supermercato[i].dataArrivo.mese, supermercato[i].dataArrivo.anno);
        }
    }
    if(count == 0) printf("Nessun prodotto registrato.\n");
}

float totaleMagazzino() {
    float totale = 0;
    for(int i=0; i<N; i++) {
        if(supermercato[i].idProdotto != 0) {
            totale += supermercato[i].quantita * supermercato[i].prezzoUnitario;
        }
    }
    return totale;
}