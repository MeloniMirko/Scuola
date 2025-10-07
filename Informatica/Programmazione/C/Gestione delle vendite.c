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
} Vendita;