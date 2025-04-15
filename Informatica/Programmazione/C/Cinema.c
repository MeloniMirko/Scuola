#include <stdio.h>

int main() {
    int studentitotali, studentiminori15, gratuiti;
    float costobiglietto, totale = 0.0;

    // Leggi in ingresso il numero di studenti, di studenti con meno di 15 anni e il costo del biglietto
    printf("Inserisci il numero totale di studenti: ");
    scanf("%d", &studentitotali);

    printf("Inserisci il numero di studenti con meno di 15 anni: ");
    scanf("%d", &studentiminori15);

    printf("Inserisci il costo del biglietto intero: ");
    scanf("%f", &costobiglietto);

    // Calcola il numero di gratuità (1 ogni 12 studenti)
    gratuiti = studentitotali / 12;

 
    // Calcola il costo per gli studenti con meno di 15 anni (sconto del 40%)
    float costoscontato = studentiminori15 * (costobiglietto * 0.6);

    // Calcola il costo per gli altri studenti (biglietto intero)
    float costointero = (studentitotali - studentiminori15 - gratuiti) * costobiglietto;

    // Calcola il totale finale
    totale = costoscontato + costointero;

    // Stampa l'importo totale da pagare
    printf("L'importo totale da pagare è: %.2f euro\n", totale);

    return 0;
}

