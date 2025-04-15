#include <stdio.h>

int main() {
    int alunni, giorni;
    float kmeffettuati, costototale;

    // Leggi il numero di alunni, giorni della gita e chilometri effettuati
    printf("Inserisci il numero di alunni: ");
    scanf("%d", &alunni);

    printf("Inserisci il numero di giorni della gita: ");
    scanf("%d", &giorni);

    printf("Inserisci il numero di chilometri effettuati: ");
    scanf("%f", &kmeffettuati);

    // Calcolo dei costi per l'albergo
    float costopernotte = 40.0 * alunni * giorni;
    float costopasti = 20.0 * 2 * alunni * giorni; // Due pasti al giorno
    float costocolazioni = 6.0 * alunni * giorni;

    // Calcolo dei costi per il pullman
    float costopullman = 200.0 * giorni + 0.50 * kmeffettuati;

    // Calcolo del costo totale
    costototale = costopernotte + costopasti + costocolazioni + costopullman;

    // Stampa il costo totale della gita
    printf("Il costo totale della gita è: %.2f euro\n", costototale);

    return 0;
}