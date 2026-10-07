Correzione esercizio 
#include <stdio.h>
#include <string.h>
#define N 20

typedef struct {
    int giorno;
    int mese;
    int anno;
} Data;

typedef struct {
    int codice;
    char nome[N];
    int quantita;
    float prezzo;
    Data giornaliera;
} Vendita;

void aggiungiVendita();
void visualizzaVendita();
float calcolaTotale(int anno_ver);

Vendita v[N];

int main() {
    char scelta;
    int s, anno_ver;
    float totale;
    printf("Questo programma registra le vendite dei prodotti.\n");
    do {
        printf("Scegli quale operazione effettuare: ");
        printf("\n1)Aggiungi una nuova vendita\n2)Visualizza le informazioni relative a tutte le vendite effettuate\n3)Calcola il totale delle vendite effettuate in un determinato anno\n");
        scanf("%d", &s);
        switch (s) {
            case 1:
                aggiungiVendita();
                break;
            case 2:
                visualizzaVendita();
                break;
            case 3:
                printf("Scrivi l'anno da verificare: ");
                scanf("%d", &anno_ver);
                totale=calcolaTotale(anno_ver);
                printf("Il totale speso nell'anno %d e' %.2f", anno_ver, totale);
                   break;
            default:
                printf("Scelta non valida\n");
                break;            
        }
       
        printf("\n\nVuoi continuare: S/N ");
        scanf(" %c", &scelta);
    } while (scelta=='S'||scelta=='s');
   
}

void aggiungiVendita() {
        int i;
        for (i=0; i<N; i++) {
            if (v[i].codice==NULL) {
                printf("Inserisci il codice del prodotto: ");
                scanf("%d", &v[i].codice);
                printf("Inserisci il nome del prodotto: ");
                scanf("%s", v[i].nome);
                printf("Inserisci la quantita' del prodotto: ");
                scanf("%d", &v[i].quantita);
                printf("Inserisci il prezzo unitario del prodotto: ");
                scanf("%f", &v[i].prezzo);
                printf("Inserisci la data di acquisto. Giorno: ");
                scanf("%d", &v[i].giornaliera.giorno);
                printf("Mese: ");
                scanf("%d", &v[i].giornaliera.mese);
                printf("Anno: ");
                scanf("%d", &v[i].giornaliera.anno);
                return 0;
            }
        }
       
}


void visualizzaVendita() {
    int i;
    for (i=0; i<N; i++) {
       
        if(v[i].codice!=NULL) {
            printf("\nVendita n. %d", i+1);
            printf("\nCodice vendita: %d", v[i].codice);
            printf("\nDescrizione prodotto: %s", v[i].nome);
            printf("\nQuantita': %d", v[i].quantita);
            printf("\nPrezzo unitario: %.2f", v[i].prezzo);
            printf("\nPrezzo totale: %.2f", v[i].quantita*v[i].prezzo);
            printf("\nData acquisto: %d/%d/%d\n", v[i].giornaliera.giorno, v[i].giornaliera.mese, v[i].giornaliera.anno);
        }
    }
}

float calcolaTotale(int anno_ver) {
    int i;
    float totale=0;
    for (i=0; i<N; i++) {
        if(v[i].giornaliera.anno==anno_ver) {
            totale+=(v[i].prezzo*v[i].quantita);
        }
    }
    return totale;
}