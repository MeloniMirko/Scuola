Programma 14 – Libri in biblioteca
#include <stdio.h>
#include <string.h>

#define N 20 // Numero massimo di libri

typedef struct {
    int giorno;
    int mese;
    int anno;
} Data;

typedef struct {
    int idLibro;
    char titolo[30];
    char autore[30];
    int pagine;
    Data dataAcquisto;
} Libro;

Libro biblioteca[N];

void aggiungiLibro();
void mostraLibri();
int totalePagine();

int main() {
    int scelta;
    char continua;
    int totale;

    do {
        printf("\n=== GESTIONE LIBRI IN BIBLIOTECA ===\n");
        printf("1) Aggiungi libro\n");
        printf("2) Mostra tutti i libri\n");
        printf("3) Calcola totale pagine\n");
        printf("Scelta: ");
        scanf("%d", &scelta);

        switch(scelta) {
            case 1: aggiungiLibro(); break;
            case 2: mostraLibri(); break;
            case 3: totale = totalePagine(); printf("Totale pagine: %d\n", totale); break;
            default: printf("Scelta non valida\n");
        }

        printf("Vuoi continuare? (S/N): ");
        scanf(" %c", &continua);

    } while(continua=='S' || continua=='s');

    return 0;
}

void aggiungiLibro() {
    for(int i=0; i<N; i++) {
        if(biblioteca[i].idLibro == 0) {
            printf("ID libro: ");
            scanf("%d", &biblioteca[i].idLibro);

            printf("Titolo: ");
            scanf("%s", biblioteca[i].titolo);

            printf("Autore: ");
            scanf("%s", biblioteca[i].autore);

            printf("Numero pagine: ");
            scanf("%d", &biblioteca[i].pagine);

            printf("Data acquisto (gg mm aaaa): ");
            scanf("%d %d %d", &biblioteca[i].dataAcquisto.giorno, &biblioteca[i].dataAcquisto.mese, &biblioteca[i].dataAcquisto.anno);

            printf("Libro aggiunto!\n");
            return;
        }
    }
    printf("Archivio pieno!\n");
}

void mostraLibri() {
    int count = 0;
    for(int i=0; i<N; i++) {
        if(biblioteca[i].idLibro != 0) {
            count++;
            printf("\nLibro %d\n", count);
            printf("ID: %d\n", biblioteca[i].idLibro);
            printf("Titolo: %s\n", biblioteca[i].titolo);
            printf("Autore: %s\n", biblioteca[i].autore);
            printf("Numero pagine: %d\n", biblioteca[i].pagine);
            printf("Data acquisto: %02d/%02d/%04d\n", biblioteca[i].dataAcquisto.giorno, biblioteca[i].dataAcquisto.mese, biblioteca[i].dataAcquisto.anno);
        }
    }
    if(count == 0) printf("Nessun libro registrato.\n");
}

int totalePagine() {
    int totale = 0;
    for(int i=0; i<N; i++) {
        if(biblioteca[i].idLibro != 0) {
            totale += biblioteca[i].pagine;
        }
    }
    return totale;
}