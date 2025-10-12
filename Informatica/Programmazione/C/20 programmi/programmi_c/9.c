Programma 9 – Prodotti agricoli
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
    char tipo[20]; // es. frutta, verdura
    float prezzoUnitario;
    int quantita;
    Data dataRaccolta;
} Prodotto;

Prodotto prodotti[N];

void aggiungiProdotto();
void mostraProdotti();
float valoreTotale();

int main() {
    int scelta;
    char continua;
    float totale;

    do {
        printf("\n=== GESTIONE PRODOTTI AGRICOLI ===\n");
        printf("1) Aggiungi prodotto\n");
        printf("2) Mostra tutti i prodotti\n");
        printf("3) Calcola valore totale\n");
        printf("Scelta: ");
        scanf("%d", &scelta);

        switch(scelta) {
            case 1: aggiungiProdotto(); break;
            case 2: mostraProdotti(); break;
            case 3: totale = valoreTotale(); printf("Valore totale prodotti: %.2f\n", totale); break;
            default: printf("Scelta non valida\n");
        }

        printf("Vuoi continuare? (S/N): ");
        scanf(" %c", &continua);

    } while(continua=='S' || continua=='s');

    return 0;
}

void aggiungiProdotto() {
    for(int i=0; i<N; i++) {
        if(prodotti[i].idProdotto == 0) {
            printf("ID prodotto: ");
            scanf("%d", &prodotti[i].idProdotto);

            printf("Nome: ");
            scanf("%s", prodotti[i].nome);

            printf("Tipo: ");
            scanf("%s", prodotti[i].tipo);

            printf("Prezzo unitario: ");
            scanf("%f", &prodotti[i].prezzoUnitario);

            printf("Quantita': ");
            scanf("%d", &prodotti[i].quantita);

            printf("Data raccolta (gg mm aaaa): ");
            scanf("%d %d %d", &prodotti[i].dataRaccolta.giorno, &prodotti[i].dataRaccolta.mese, &prodotti[i].dataRaccolta.anno);

            printf("Prodotto aggiunto!\n");
            return;
        }
    }
    printf("Archivio pieno!\n");
}

void mostraProdotti() {
    int count = 0;
    for(int i=0; i<N; i++) {
        if(prodotti[i].idProdotto != 0) {
            count++;
            printf("\nProdotto %d\n", count);
            printf("ID: %d\n", prodotti[i].idProdotto);
            printf("Nome: %s\n", prodotti[i].nome);
            printf("Tipo: %s\n", prodotti[i].tipo);
            printf("Prezzo unitario: %.2f\n", prodotti[i].prezzoUnitario);
            printf("Quantita': %d\n", prodotti[i].quantita);
            printf("Data raccolta: %02d/%02d/%04d\n", prodotti[i].dataRaccolta.giorno, prodotti[i].dataRaccolta.mese, prodotti[i].dataRaccolta.anno);
        }
    }
    if(count == 0) printf("Nessun prodotto registrato.\n");
}

float valoreTotale() {
    float totale = 0;
    for(int i=0; i<N; i++) {
        if(prodotti[i].idProdotto != 0) {
            totale += prodotti[i].prezzoUnitario * prodotti[i].quantita;
        }
    }
    return totale;
}