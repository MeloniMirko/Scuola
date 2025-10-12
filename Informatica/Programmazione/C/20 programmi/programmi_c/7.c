Programma 7 – Animali nello zoo
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
    char nome[30];
    char specie[30];
    int eta;
    Data dataArrivo;
} Animale;

Animale zoo[N];

void aggiungiAnimale();
void mostraAnimali();
float etaTotaleAnimali();

int main() {
    int scelta;
    char continua;
    float totaleEta;

    do {
        printf("\n=== GESTIONE ANIMALI NELLO ZOO ===\n");
        printf("1) Aggiungi animale\n");
        printf("2) Mostra tutti gli animali\n");
        printf("3) Calcola eta' totale\n");
        printf("Scelta: ");
        scanf("%d", &scelta);

        switch(scelta) {
            case 1: aggiungiAnimale(); break;
            case 2: mostraAnimali(); break;
            case 3: totaleEta = etaTotaleAnimali(); printf("Eta' totale degli animali: %.2f anni\n", totaleEta); break;
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

            printf("Nome: ");
            scanf("%s", zoo[i].nome);

            printf("Specie: ");
            scanf("%s", zoo[i].specie);

            printf("Eta': ");
            scanf("%d", &zoo[i].eta);

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
            printf("Nome: %s\n", zoo[i].nome);
            printf("Specie: %s\n", zoo[i].specie);
            printf("Eta': %d\n", zoo[i].eta);
            printf("Data arrivo: %02d/%02d/%04d\n", zoo[i].dataArrivo.giorno, zoo[i].dataArrivo.mese, zoo[i].dataArrivo.anno);
        }
    }
    if(count == 0) printf("Nessun animale registrato.\n");
}

float etaTotaleAnimali() {
    float totale = 0;
    for(int i=0; i<N; i++) {
        if(zoo[i].idAnimale != 0) {
            totale += zoo[i].eta;
        }
    }
    return totale;
}