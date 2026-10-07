Programma 12 – Film in streaming
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
    int durata; // in minuti
    Data dataAggiunta;
} FilmStreaming;

FilmStreaming catalogo[N];

void aggiungiFilm();
void mostraFilm();
int durataTotale();

int main() {
    int scelta;
    char continua;
    int totale;

    do {
        printf("\n=== GESTIONE FILM IN STREAMING ===\n");
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
        if(catalogo[i].idFilm == 0) {
            printf("ID film: ");
            scanf("%d", &catalogo[i].idFilm);

            printf("Titolo: ");
            scanf("%s", catalogo[i].titolo);

            printf("Genere: ");
            scanf("%s", catalogo[i].genere);

            printf("Durata (minuti): ");
            scanf("%d", &catalogo[i].durata);

            printf("Data aggiunta (gg mm aaaa): ");
            scanf("%d %d %d", &catalogo[i].dataAggiunta.giorno, &catalogo[i].dataAggiunta.mese, &catalogo[i].dataAggiunta.anno);

            printf("Film aggiunto!\n");
            return;
        }
    }
    printf("Catalogo pieno!\n");
}

void mostraFilm() {
    int count = 0;
    for(int i=0; i<N; i++) {
        if(catalogo[i].idFilm != 0) {
            count++;
            printf("\nFilm %d\n", count);
            printf("ID: %d\n", catalogo[i].idFilm);
            printf("Titolo: %s\n", catalogo[i].titolo);
            printf("Genere: %s\n", catalogo[i].genere);
            printf("Durata: %d minuti\n", catalogo[i].durata);
            printf("Data aggiunta: %02d/%02d/%04d\n", catalogo[i].dataAggiunta.giorno, catalogo[i].dataAggiunta.mese, catalogo[i].dataAggiunta.anno);
        }
    }
    if(count == 0) printf("Nessun film registrato.\n");
}

int durataTotale() {
    int totale = 0;
    for(int i=0; i<N; i++) {
        if(catalogo[i].idFilm != 0) {
            totale += catalogo[i].durata;
        }
    }
    return totale;
}