Programma 10 – Veicoli in officina
#include <stdio.h>
#include <string.h>

#define N 20 // Numero massimo di veicoli

typedef struct {
    int giorno;
    int mese;
    int anno;
} Data;

typedef struct {
    int idVeicolo;
    char marca[30];
    char modello[30];
    int annoProduzione;
    float costoRiparazione;
    Data dataIngresso;
} Veicolo;

Veicolo officina[N];

void aggiungiVeicolo();
void mostraVeicoli();
float totaleRiparazioni();

int main() {
    int scelta;
    char continua;
    float totale;

    do {
        printf("\n=== GESTIONE VEICOLI IN OFFICINA ===\n");
        printf("1) Aggiungi veicolo\n");
        printf("2) Mostra tutti i veicoli\n");
        printf("3) Calcola totale riparazioni\n");
        printf("Scelta: ");
        scanf("%d", &scelta);

        switch(scelta) {
            case 1: aggiungiVeicolo(); break;
            case 2: mostraVeicoli(); break;
            case 3: totale = totaleRiparazioni(); printf("Totale riparazioni: %.2f\n", totale); break;
            default: printf("Scelta non valida\n");
        }

        printf("Vuoi continuare? (S/N): ");
        scanf(" %c", &continua);

    } while(continua=='S' || continua=='s');

    return 0;
}

void aggiungiVeicolo() {
    for(int i=0; i<N; i++) {
        if(officina[i].idVeicolo == 0) {
            printf("ID veicolo: ");
            scanf("%d", &officina[i].idVeicolo);

            printf("Marca: ");
            scanf("%s", officina[i].marca);

            printf("Modello: ");
            scanf("%s", officina[i].modello);

            printf("Anno produzione: ");
            scanf("%d", &officina[i].annoProduzione);

            printf("Costo riparazione: ");
            scanf("%f", &officina[i].costoRiparazione);

            printf("Data ingresso (gg mm aaaa): ");
            scanf("%d %d %d", &officina[i].dataIngresso.giorno, &officina[i].dataIngresso.mese, &officina[i].dataIngresso.anno);

            printf("Veicolo aggiunto!\n");
            return;
        }
    }
    printf("Archivio pieno!\n");
}

void mostraVeicoli() {
    int count = 0;
    for(int i=0; i<N; i++) {
        if(officina[i].idVeicolo != 0) {
            count++;
            printf("\nVeicolo %d\n", count);
            printf("ID: %d\n", officina[i].idVeicolo);
            printf("Marca: %s\n", officina[i].marca);
            printf("Modello: %s\n", officina[i].modello);
            printf("Anno produzione: %d\n", officina[i].annoProduzione);
            printf("Costo riparazione: %.2f\n", officina[i].costoRiparazione);
            printf("Data ingresso: %02d/%02d/%04d\n", officina[i].dataIngresso.giorno, officina[i].dataIngresso.mese, officina[i].dataIngresso.anno);
        }
    }
    if(count == 0) printf("Nessun veicolo registrato.\n");
}

float totaleRiparazioni() {
    float totale = 0;
    for(int i=0; i<N; i++) {
        if(officina[i].idVeicolo != 0) {
            totale += officina[i].costoRiparazione;
        }
    }
    return totale;
}