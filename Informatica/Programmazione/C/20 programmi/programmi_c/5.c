Programma 5 – Film in videoteca
#include <stdio.h>
#include <string.h>

#define N 20 // Numero massimo di film

typedef struct {
    int giorno;
    int mese;
    int anno;
} Data;

typedef struct {
    int idFilm;
    char titolo[30];
    char genere[20];
    char regista[30];
    int durata; // in minuti
    Data dataAcquisto;
} Film;

Film videoteca[N];

void aggiungiFilm();
void mostraFilm();
int durataTotale();

int main() {
    int scelta;
    char continua;
    int totale;

    do {
        printf("\n=== GESTIONE FILM IN VIDEOTECA ===\n");
        printf("1) Aggiungi film\n");
        printf("2) Mostra tutti i film\n");
        printf("3) Calcola durata totale\n");
        printf("Scelta: ");
        scanf("%d", &scelta);

        switch(scelta) {
            case 1: aggiungiFilm(); break;
            case 2: mostraFilm(); break;
            case 3: totale = durataTotale(); printf("Durata totale: %d minuti\n", totale); break;
            default: printf("Scelta non valida\n");
        }

        printf("Vuoi continuare? (S/N): ");
        scanf(" %c", &continua);

    } while(continua=='S' || continua=='s');

    return 0;
}

void aggiungiFilm() {
    for(int i=0; i<N; i++) {
        if(videoteca[i].idFilm == 0) {
            printf("ID film: ");
            scanf("%d", &videoteca[i].idFilm);

            printf("Titolo: ");
            scanf("%s", videoteca[i].titolo);

            printf("Genere: ");
            scanf("%s", videoteca[i].genere);

            printf("Regista: ");
            scanf("%s", videoteca[i].regista);

            printf("Durata (minuti): ");
            scanf("%d", &videoteca[i].durata);

            printf("Data acquisto (gg mm aaaa): ");
            scanf("%d %d %d", &videoteca[i].dataAcquisto.giorno, &videoteca[i].dataAcquisto.mese, &videoteca[i].dataAcquisto.anno);

            printf("Film aggiunto!\n");
            return;
        }
    }
    printf("Archivio pieno!\n");
}

void mostraFilm() {
    int count = 0;
    for(int i=0; i<N; i++) {
        if(videoteca[i].idFilm != 0) {
            count++;
            printf("\nFilm %d\n", count);
            printf("ID: %d\n", videoteca[i].idFilm);
            printf("Titolo: %s\n", videoteca[i].titolo);
            printf("Genere: %s\n", videoteca[i].genere);
            printf("Regista: %s\n", videoteca[i].regista);
            printf("Durata: %d minuti\n", videoteca[i].durata);
            printf("Data acquisto: %02d/%02d/%04d\n", videoteca[i].dataAcquisto.giorno, videoteca[i].dataAcquisto.mese, videoteca[i].dataAcquisto.anno);
        }
    }
    if(count == 0) printf("Nessun film registrato.\n");
}

int durataTotale() {
    int totale = 0;
    for(int i=0; i<N; i++) {
        if(videoteca[i].idFilm != 0) {
            totale += videoteca[i].durata;
        }
    }
    return totale;
}