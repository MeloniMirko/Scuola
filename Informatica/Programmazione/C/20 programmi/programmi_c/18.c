Programma 18 – Animali in uno zoo
#include <stdio.h>
#include <string.h>

#define N 20 // Numero massimo di animali

typedef struct {
    int giorno;
    int mese;
    int anno;
} Data;

typedef struct {
    int idAnimale;
    char specie[30];
    char nome[30];
    int eta;
    char habitat[30];
    Data dataArrivo;
} Animale;

Animale zoo[N];

void aggiungiAnimale();
void mostraAnimali();
int contaAnimali();

int main() {
    int scelta;
    char continua;
    int totale;

    do {
        printf("\n=== GESTIONE ANIMALI ZOO ===\n");
        printf("1) Aggiungi animale\n");
        printf("2) Mostra tutti gli animali\n");
        printf("3) Conta animali\n");
        printf("Scelta: ");
        scanf("%d", &scelta);

        switch(scelta) {
            case 1: aggiungiAnimale(); break;
            case 2: mostraAnimali(); break;
            case 3: totale = contaAnimali(); printf("Totale animali: %d\n", totale); break;
            default: printf("Scelta non valida\n");
        }

        printf("Vuoi continuare? (S/N): ");
        scanf(" %c", &continua);

    } while(continua=='S' || continua=='s');

    return 0;
}

void aggiungiAnimale() {
    for(int i=0; i<N; i++) {
        if(zoo[i].idAnimale == 0) {
            printf("ID animale: ");
            scanf("%d", &zoo[i].idAnimale);

            printf("Specie: ");
            scanf("%s", zoo[i].specie);

            printf("Nome: ");
            scanf("%s", zoo[i].nome);

            printf("Eta': ");
            scanf("%d", &zoo[i].eta);

            printf("Habitat: ");
            scanf("%s", zoo[i].habitat);

            printf("Data arrivo (gg mm aaaa): ");
            scanf("%d %d %d", &zoo[i].dataArrivo.giorno, &zoo[i].dataArrivo.mese, &zoo[i].dataArrivo.anno);

            printf("Animale aggiunto!\n");
            return;
        }
    }
    printf("Archivio pieno!\n");
}

void mostraAnimali() {
    int count = 0;
    for(int i=0; i<N; i++) {
        if(zoo[i].idAnimale != 0) {
            count++;
            printf("\nAnimale %d\n", count);
            printf("ID: %d\n", zoo[i].idAnimale);
            printf("Specie: %s\n", zoo[i].specie);
            printf("Nome: %s\n", zoo[i].nome);
            printf("Eta': %d\n", zoo[i].eta);
            printf("Habitat: %s\n", zoo[i].habitat);
            printf("Data arrivo: %02d/%02d/%04d\n", zoo[i].dataArrivo.giorno, zoo[i].dataArrivo.mese, zoo[i].dataArrivo.anno);
        }
    }
    if(count == 0) printf("Nessun animale registrato.\n");
}

int contaAnimali() {
    int totale = 0;
    for(int i=0; i<N; i++) {
        if(zoo[i].idAnimale != 0) totale++;
    }
    return totale;
}