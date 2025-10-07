/*Un'azienda desidera monitorare le vendite dei propri prodotti. Ogni vendita contiene le seguenti informazioni:
Codice della vendita (un intero)
Nome del prodotto (una stringa)
Quantità venduta (un intero)
Prezzo unitario del prodotto (un float)
Data della vendita (espressa con una struttura in cui si memorizza giorno, mese, anno)
Si desidera realizzare un programma in C che permetta di:
- Definire una struttura per memorizzare le informazioni relative a una vendita.

Specifiche:
Utilizzare una struttura con typedef per definire il tipo di dato relativo a una vendita.
Gestire la data come una sottostruttura all'interno della struttura vendita.
Prevedere un array di vendite.
FACOLTATIVO
Implementare un array per memorizzare più vendite e permettere le seguenti operazioni:
Aggiungere una nuova vendita all'array.
Visualizzare le informazioni relative a tutte le vendite effettuate.
Calcolare il totale delle vendite effettuate in un determinato anno.*/


#include <stdio.h>
#include <string.h>

typedef struct {
    int giorno;
    int mese;
    int anno;
} Data;

typedef struct {
    int codice_vendita;
    char nome_prodotto[50];
    int quantita_venduta;
    float prezzo_unitario;
    Data dataV;
} Vendita;

// Funzione per caricare i dati (restituisce la struttura)
Vendita caricaVendita() {
    Vendita v;
    printf("Gestione delle vendite\n");
    printf("Inserisci il codice vendita: ");
    scanf("%d", &v.codice_vendita);
    printf("Inserisci il nome del prodotto: ");
    scanf("%s", v.nome_prodotto);
    printf("Inserisci la quantita venduta: ");
    scanf("%d", &v.quantita_venduta);
    printf("Inserisci il prezzo unitario del prodotto: ");
    scanf("%f", &v.prezzo_unitario);
    printf("Inserisci la data della vendita (giorno mese anno): ");
    scanf("%d %d %d", &v.dataV.giorno, &v.dataV.mese, &v.dataV.anno);
    return v;
}

// Funzione per stampare i dati (passa la struttura per valore)
void stampaVendita(Vendita v) {
    printf("\nDati della vendita:\n");
    printf("Codice vendita: %d\n", v.codice_vendita);
    printf("Nome prodotto: %s\n", v.nome_prodotto);
    printf("Quantita venduta: %d\n", v.quantita_venduta);
    printf("Prezzo unitario: %.2f\n", v.prezzo_unitario);
    printf("Data vendita: %02d/%02d/%04d\n", v.dataV.giorno, v.dataV.mese, v.dataV.anno);
}

int main() {
    Vendita v1 = caricaVendita();
    stampaVendita(v1);
    return 0;
}

