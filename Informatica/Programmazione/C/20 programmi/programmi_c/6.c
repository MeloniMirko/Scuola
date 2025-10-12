Programma 6 – Ricette di cucina
#include <stdio.h>
#include <string.h>

#define N 20 // Numero massimo di ricette

typedef struct {
    int giorno;
    int mese;
    int anno;
} Data;

typedef struct {
    int idRicetta;
    char nome[30];
    char tipo[20];       // es. primo, secondo, dolce
    int tempoPreparazione; // minuti
    int porzioni;
    Data dataInserimento;
} Ricetta;

Ricetta ricette[N];

void aggiungiRicetta();
void mostraRicette();
int tempoTotalePreparazione();

int main() {
    int scelta;
    char continua;
    int totale;

    do {
        printf("\n=== GESTIONE RICETTE ===\n");
        printf("1) Aggiungi ricetta\n");
        printf("2) Mostra tutte le ricette\n");
        printf("3) Calcola tempo totale preparazione\n");
        printf("Scelta: ");
        scanf("%d", &scelta);

        switch(scelta) {
            case 1: aggiungiRicetta(); break;
            case 2: mostraRicette(); break;
            case 3: totale = tempoTotalePreparazione(); printf("Tempo totale: %d minuti\n", totale); break;
            default: printf("Scelta non valida\n");
        }

        printf("Vuoi continuare? (S/N): ");
        scanf(" %c", &continua);

    } while(continua=='S' || continua=='s');

    return 0;
}

void aggiungiRicetta() {
    for(int i=0; i<N; i++) {
        if(ricette[i].idRicetta == 0) {
            printf("ID ricetta: ");
            scanf("%d", &ricette[i].idRicetta);

            printf("Nome: ");
            scanf("%s", ricette[i].nome);

            printf("Tipo: ");
            scanf("%s", ricette[i].tipo);

            printf("Tempo preparazione (minuti): ");
            scanf("%d", &ricette[i].tempoPreparazione);

            printf("Porzioni: ");
            scanf("%d", &ricette[i].porzioni);

            printf("Data inserimento (gg mm aaaa): ");
            scanf("%d %d %d", &ricette[i].dataInserimento.giorno, &ricette[i].dataInserimento.mese, &ricette[i].dataInserimento.anno);

            printf("Ricetta aggiunta!\n");
            return;
        }
    }
    printf("Archivio pieno!\n");
}

void mostraRicette() {
    int count = 0;
    for(int i=0; i<N; i++) {
        if(ricette[i].idRicetta != 0) {
            count++;
            printf("\nRicetta %d\n", count);
            printf("ID: %d\n", ricette[i].idRicetta);
            printf("Nome: %s\n", ricette[i].nome);
            printf("Tipo: %s\n", ricette[i].tipo);
            printf("Tempo preparazione: %d minuti\n", ricette[i].tempoPreparazione);
            printf("Porzioni: %d\n", ricette[i].porzioni);
            printf("Data inserimento: %02d/%02d/%04d\n", ricette[i].dataInserimento.giorno, ricette[i].dataInserimento.mese, ricette[i].dataInserimento.anno);
        }
    }
    if(count == 0) printf("Nessuna ricetta registrata.\n");
}

int tempoTotalePreparazione() {
    int totale = 0;
    for(int i=0; i<N; i++) {
        if(ricette[i].idRicetta != 0) {
            totale += ricette[i].tempoPreparazione;
        }
    }
    return totale;
}