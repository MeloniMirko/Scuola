Programma 13 – Clienti in palestra
#include <stdio.h>
#include <string.h>

#define N 20 // Numero massimo di clienti

typedef struct {
    int giorno;
    int mese;
    int anno;
} Data;

typedef struct {
    int idCliente;
    char nome[30];
    char cognome[30];
    int eta;
    float abbonamentoMensile;
    Data dataIscrizione;
} ClientePalestra;

ClientePalestra clienti[N];

void aggiungiCliente();
void mostraClienti();
float totaleAbbonamenti();

int main() {
    int scelta;
    char continua;
    float totale;

    do {
        printf("\n=== GESTIONE CLIENTI PALESTRA ===\n");
        printf("1) Aggiungi cliente\n");
        printf("2) Mostra tutti i clienti\n");
        printf("3) Calcola totale abbonamenti\n");
        printf("Scelta: ");
        scanf("%d", &scelta);

        switch(scelta) {
            case 1: aggiungiCliente(); break;
            case 2: mostraClienti(); break;
            case 3: totale = totaleAbbonamenti(); printf("Totale abbonamenti: %.2f\n", totale); break;
            default: printf("Scelta non valida\n");
        }

        printf("Vuoi continuare? (S/N): ");
        scanf(" %c", &continua);

    } while(continua=='S' || continua=='s');

    return 0;
}

void aggiungiCliente() {
    for(int i=0; i<N; i++) {
        if(clienti[i].idCliente == 0) {
            printf("ID cliente: ");
            scanf("%d", &clienti[i].idCliente);

            printf("Nome: ");
            scanf("%s", clienti[i].nome);

            printf("Cognome: ");
            scanf("%s", clienti[i].cognome);

            printf("Eta': ");
            scanf("%d", &clienti[i].eta);

            printf("Abbonamento mensile: ");
            scanf("%f", &clienti[i].abbonamentoMensile);

            printf("Data iscrizione (gg mm aaaa): ");
            scanf("%d %d %d", &clienti[i].dataIscrizione.giorno, &clienti[i].dataIscrizione.mese, &clienti[i].dataIscrizione.anno);

            printf("Cliente aggiunto!\n");
            return;
        }
    }
    printf("Archivio pieno!\n");
}

void mostraClienti() {
    int count = 0;
    for(int i=0; i<N; i++) {
        if(clienti[i].idCliente != 0) {
            count++;
            printf("\nCliente %d\n", count);
            printf("ID: %d\n", clienti[i].idCliente);
            printf("Nome: %s\n", clienti[i].nome);
            printf("Cognome: %s\n", clienti[i].cognome);
            printf("Eta': %d\n", clienti[i].eta);
            printf("Abbonamento mensile: %.2f\n", clienti[i].abbonamentoMensile);
            printf("Data iscrizione: %02d/%02d/%04d\n", clienti[i].dataIscrizione.giorno, clienti[i].dataIscrizione.mese, clienti[i].dataIscrizione.anno);
        }
    }
    if(count == 0) printf("Nessun cliente registrato.\n");
}

float totaleAbbonamenti() {
    float totale = 0;
    for(int i=0; i<N; i++) {
        if(clienti[i].idCliente != 0) {
            totale += clienti[i].abbonamentoMensile;
        }
    }
    return totale;
}