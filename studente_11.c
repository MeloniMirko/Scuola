
#include <stdio.h>
#include <string.h>

#define N 20 // Numero massimo di studenti

typedef struct {
    int giorno;
    int mese;
    int anno;
} Data;

typedef struct {
    int matricola;
    char nome[30];
    char cognome[30];
    int eta;
    float mediaVoti;
    Data dataIscrizione;
} Studente;

Studente studenti[N];

void aggiungiStudente();
void mostraStudenti();
float mediaGenerale();

int main() {
    int scelta;
    char continua;

    do {
        printf("\n=== GESTIONE STUDENTI ===\n");
        printf("1) Aggiungi studente\n");
        printf("2) Mostra tutti gli studenti\n");
        printf("3) Calcola media generale dei voti\n");
        printf("Scelta: ");
        scanf("%d", &scelta);

        switch(scelta) {
            case 1: aggiungiStudente(); break;
            case 2: mostraStudenti(); break;
            case 3: printf("Media generale: %.2f\n", mediaGenerale()); break;
            default: printf("Scelta non valida\n");
        }

        printf("Vuoi continuare? (S/N): ");
        scanf(" %c", &continua);

    } while(continua=='S' || continua=='s');

    return 0;
}

void aggiungiStudente() {
    for(int i=0; i<N; i++) {
        if(studenti[i].matricola == 0) {
            printf("Inserisci la matricola: ");
            scanf("%d", &studenti[i].matricola);

            printf("Inserisci il nome: ");
            scanf("%s", studenti[i].nome);

            printf("Inserisci il cognome: ");
            scanf("%s", studenti[i].cognome);

            printf("Inserisci l'eta': ");
            scanf("%d", &studenti[i].eta);

            printf("Inserisci la media voti: ");
            scanf("%f", &studenti[i].mediaVoti);

            printf("Inserisci la data di iscrizione (gg mm aaaa): ");
            scanf("%d %d %d", &studenti[i].dataIscrizione.giorno, &studenti[i].dataIscrizione.mese, &studenti[i].dataIscrizione.anno);

            printf("Studente aggiunto!\n");
            return;
        }
    }
    printf("Archivio pieno!\n");
}

void mostraStudenti() {
    int count = 0;
    for(int i=0; i<N; i++) {
        if(studenti[i].matricola != 0) {
            count++;
            printf("\nStudente %d\n", count);
            printf("Matricola: %d\n", studenti[i].matricola);
            printf("Nome: %s\n", studenti[i].nome);
            printf("Cognome: %s\n", studenti[i].cognome);
            printf("Eta': %d\n", studenti[i].eta);
            printf("Media voti: %.2f\n", studenti[i].mediaVoti);
            printf("Data iscrizione: %02d/%02d/%04d\n", studenti[i].dataIscrizione.giorno, studenti[i].dataIscrizione.mese, studenti[i].dataIscrizione.anno);
        }
    }
    if(count == 0) printf("Nessuno studente registrato.\n");
}

float mediaGenerale() {
    float totale = 0;
    int count = 0;
    for(int i=0; i<N; i++) {
        if(studenti[i].matricola != 0) {
            totale += studenti[i].mediaVoti;
            count++;
        }
    }
    if(count == 0) return 0;
    return totale / count;
}
