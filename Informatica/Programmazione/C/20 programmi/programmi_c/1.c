Programma 1 – Vendite
#include <stdio.h>
#include <string.h>

#define N 20 // Numero massimo di vendite registrabili

// Struct per la data
typedef struct {
    int giorno;
    int mese;
    int anno;
} Data;

// Struct per la vendita
typedef struct {
    int codice;
    char nome[30];
    int quantita;
    float prezzo;
    Data dataVendita;
} Vendita;

// Array di vendite
Vendita vendite[N];

// Dichiarazione funzioni
void aggiungiVendita();
void mostraVendite();
float totaleVendite();

int main() {
    int scelta;
    char continua;

    do {
        printf("\n=== GESTIONE VENDITE ===\n");
        printf("1) Aggiungi una nuova vendita\n");
        printf("2) Mostra tutte le vendite\n");
        printf("3) Calcola il totale delle vendite\n");
        printf("Scelta: ");
        scanf("%d", &scelta);

        switch(scelta) {
            case 1: aggiungiVendita(); break;
            case 2: mostraVendite(); break;
            case 3: printf("Totale vendite: %.2f\n", totaleVendite()); break;
            default: printf("Scelta non valida\n");
        }

        printf("Vuoi continuare? (S/N): ");
        scanf(" %c", &continua);

    } while(continua=='S' || continua=='s');

    return 0;
}

// Funzione per aggiungere una vendita
void aggiungiVendita() {
    for(int i=0; i<N; i++) {
        if(vendite[i].codice == 0) { // Controlla se lo slot è vuoto
            printf("Inserisci il codice del prodotto: ");
            scanf("%d", &vendite[i].codice);

            printf("Inserisci il nome del prodotto: ");
            scanf("%s", vendite[i].nome);

            printf("Inserisci la quantita': ");
            scanf("%d", &vendite[i].quantita);

            printf("Inserisci il prezzo unitario: ");
            scanf("%f", &vendite[i].prezzo);

            printf("Inserisci la data di vendita (gg mm aaaa): ");
            scanf("%d %d %d", &vendite[i].dataVendita.giorno, &vendite[i].dataVendita.mese, &vendite[i].dataVendita.anno);

            printf("Vendita aggiunta!\n");
            return;
        }
    }
    printf("Archivio pieno!\n");
}

// Funzione per mostrare tutte le vendite
void mostraVendite() {
    int count = 0;
    for(int i=0; i<N; i++) {
        if(vendite[i].codice != 0) {
            count++;
            printf("\nVendita %d\n", count);
            printf("Codice: %d\n", vendite[i].codice);
            printf("Nome: %s\n", vendite[i].nome);
            printf("Quantita': %d\n", vendite[i].quantita);
            printf("Prezzo unitario: %.2f\n", vendite[i].prezzo);
            printf("Prezzo totale: %.2f\n", vendite[i].quantita * vendite[i].prezzo);
            printf("Data vendita: %02d/%02d/%04d\n", vendite[i].dataVendita.giorno, vendite[i].dataVendita.mese, vendite[i].dataVendita.anno);
        }
    }
    if(count == 0) printf("Nessuna vendita registrata.\n");
}

// Funzione per calcolare il totale delle vendite
float totaleVendite() {
    float totale = 0;
    for(int i=0; i<N; i++) {
        if(vendite[i].codice != 0) {
            totale += vendite[i].quantita * vendite[i].prezzo;
        }
    }
    return totale;
}