Programma 11 – Canzoni in playlist
#include <stdio.h>
#include <string.h>

#define N 20 // Numero massimo di canzoni

typedef struct {
    int giorno;
    int mese;
    int anno;
} Data;

typedef struct {
    int idCanzone;
    char titolo[30];
    char artista[30];
    int durata; // in secondi
    Data dataAggiunta;
} Canzone;

Canzone playlist[N];

void aggiungiCanzone();
void mostraCanzoni();
int durataTotale();

int main() {
    int scelta;
    char continua;
    int totale;

    do {
        printf("\n=== GESTIONE CANZONI IN PLAYLIST ===\n");
        printf("1) Aggiungi canzone\n");
        printf("2) Mostra tutte le canzoni\n");
        printf("3) Calcola durata totale\n");
        printf("Scelta: ");
        scanf("%d", &scelta);

        switch(scelta) {
            case 1: aggiungiCanzone(); break;
            case 2: mostraCanzoni(); break;
            case 3: totale = durataTotale(); printf("Durata totale: %d secondi\n", totale); break;
            default: printf("Scelta non valida\n");
        }

        printf("Vuoi continuare? (S/N): ");
        scanf(" %c", &continua);

    } while(continua=='S' || continua=='s');

    return 0;
}

void aggiungiCanzone() {
    for(int i=0; i<N; i++) {
        if(playlist[i].idCanzone == 0) {
            printf("ID canzone: ");
            scanf("%d", &playlist[i].idCanzone);

            printf("Titolo: ");
            scanf("%s", playlist[i].titolo);

            printf("Artista: ");
            scanf("%s", playlist[i].artista);

            printf("Durata (secondi): ");
            scanf("%d", &playlist[i].durata);

            printf("Data aggiunta (gg mm aaaa): ");
            scanf("%d %d %d", &playlist[i].dataAggiunta.giorno, &playlist[i].dataAggiunta.mese, &playlist[i].dataAggiunta.anno);

            printf("Canzone aggiunta!\n");
            return;
        }
    }
    printf("Playlist piena!\n");
}

void mostraCanzoni() {
    int count = 0;
    for(int i=0; i<N; i++) {
        if(playlist[i].idCanzone != 0) {
            count++;
            printf("\nCanzone %d\n", count);
            printf("ID: %d\n", playlist[i].idCanzone);
            printf("Titolo: %s\n", playlist[i].titolo);
            printf("Artista: %s\n", playlist[i].artista);
            printf("Durata: %d secondi\n", playlist[i].durata);
            printf("Data aggiunta: %02d/%02d/%04d\n", playlist[i].dataAggiunta.giorno, playlist[i].dataAggiunta.mese, playlist[i].dataAggiunta.anno);
        }
    }
    if(count == 0) printf("Nessuna canzone registrata.\n");
}

int durataTotale() {
    int totale = 0;
    for(int i=0; i<N; i++) {
        if(playlist[i].idCanzone != 0) {
            totale += playlist[i].durata;
        }
    }
    return totale;
}