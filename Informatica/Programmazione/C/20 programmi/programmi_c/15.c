Programma 15 – Studenti in classe
#include <stdio.h>
#include <string.h>

#define N 20 // Numero massimo di studenti

typedef struct {
    int giorno;
    int mese;
    int anno;
} Data;

typedef struct {
    int idStudente;
    char nome[30];
    char cognome[30];
    int eta;
    float mediaVoti;
    Data dataIscrizione;
} Studente;

Studente classe[N];

void aggiungiStudente();
void mostraStudenti();
float mediaTotale();

int main() {
    int scelta;
    char continua;
    float media;

    do {
        printf("\n=== GESTIONE STUDENTI IN CLASSE ===\n");
        printf("1) Aggiungi studente\n");
        printf("2) Mostra tutti gli studenti\n");
        printf("3) Calcola media totale voti\n");
        printf("Scelta: ");
        scanf("%d", &scelta);

        switch(scelta) {
            case 1: aggiungiStudente(); break;
            case 2: mostraStudenti(); break;
            case 3: media = mediaTotale(); printf("Media totale voti: %.2f\n", media); break;
            default: printf("Scelta non valida\n");
        }

        printf("Vuoi continuare? (S/N): ");
        scanf(" %c", &continua);

    } while(continua=='S' || continua=='s');

    return 0;
}

void aggiungiStudente() {
    for(int i=0; i<N; i++) {
        if(classe[i].idStudente == 0) {
            printf("ID studente: ");
            scanf("%d", &classe[i].idStudente);

            printf("Nome: ");
            scanf("%s", classe[i].nome);

            printf("Cognome: ");
            scanf("%s", classe[i].cognome);

            printf("Eta': ");
            scanf("%d", &classe[i].eta);

            printf("Media voti: ");
            scanf("%f", &classe[i].mediaVoti);

            printf("Data iscrizione (gg mm aaaa): ");
            scanf("%d %d %d", &classe[i].dataIscrizione.giorno, &classe[i].dataIscrizione.mese, &classe[i].dataIscrizione.anno);

            printf("Studente aggiunto!\n");
            return;
        }
    }
    printf("Archivio pieno!\n");
}

void mostraStudenti() {
    int count = 0;
    for(int i=0; i<N; i++) {
        if(classe[i].idStudente != 0) {
            count++;
            printf("\nStudente %d\n", count);
            printf("ID: %d\n", classe[i].idStudente);
            printf("Nome: %s\n", classe[i].nome);
            printf("Cognome: %s\n", classe[i].cognome);
            printf("Eta': %d\n", classe[i].eta);
            printf("Media voti: %.2f\n", classe[i].mediaVoti);
            printf("Data iscrizione: %02d/%02d/%04d\n", classe[i].dataIscrizione.giorno, classe[i].dataIscrizione.mese, classe[i].dataIscrizione.anno);
        }
    }
    if(count == 0) printf("Nessuno studente registrato.\n");
}

float mediaTotale() {
    float totale = 0;
    int count = 0;
    for(int i=0; i<N; i++) {
        if(classe[i].idStudente != 0) {
            totale += classe[i].mediaVoti;
            count++;
        }
    }
    if(count == 0) return 0;
    return totale / count;
}