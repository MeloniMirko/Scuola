#include <stdio.h>

void calcola_sconto_negozio1(float totale_speso) {
    float sconto, importo_da_pagare;

    if (totale_speso < 500) {
        sconto = totale_speso * 0.10; // 10% di sconto
    } else {
        sconto = totale_speso * 0.20; // 20% di sconto
    }

    importo_da_pagare = totale_speso - sconto;

    printf("Negozio 1:\n");
    printf("Totale speso: %.2f\n", totale_speso);
    printf("Sconto: %.2f\n", sconto);
    printf("Importo da pagare: %.2f\n", importo_da_pagare);
}

void calcola_sconto_negozio2(float totale_speso) {
    float sconto, importo_da_pagare;

    if (totale_speso <= 300) {
        sconto = totale_speso * 0.10; // 10% sui primi 300€
    } else {
        sconto = 300 * 0.10 + (totale_speso - 300) * 0.20; // 10% sui primi 300€ e 20% sul resto
    }

    importo_da_pagare = totale_speso - sconto;

    printf("Negozio 2:\n");
    printf("Totale speso: %.2f\n", totale_speso);
    printf("Sconto: %.2f\n", sconto);
    printf("Importo da pagare: %.2f\n", importo_da_pagare);
}

int main() {
    float totale_negozio1, totale_negozio2;

    // Input per negozio 1
    printf("Inserisci il totale speso nel negozio 1: ");
    scanf("%f", &totale_negozio1);
    calcola_sconto_negozio1(totale_negozio1);

    // Input per negozio 2
    printf("Inserisci il totale speso nel negozio 2: ");
    scanf("%f", &totale_negozio2);
    calcola_sconto_negozio2(totale_negozio2);

    // Confronto tra i due negozi
    printf("\nConfronto tra i due negozi:\n");
    printf("Fino a quanto conviene comprare nel negozio 1?\n");
    
    for (float spesa = 0; spesa <= 1000; spesa += 100) {
        float sconto1, sconto2, totale1, totale2;

        if (spesa < 500) {
            sconto1 = spesa * 0.10;
        } else {
            sconto1 = spesa * 0.20;
        }

        totale1 = spesa - sconto1;

        if (spesa <= 300) {
            sconto2 = spesa * 0.10;
        } else {
            sconto2 = 300 * 0.10 + (spesa - 300) * 0.20;
        }

        totale2 = spesa - sconto2;

        if (totale1 < totale2) {
            printf("Fino a %.2f conviene negozio 1\n", spesa);
            break;
        }
    }

    for (float spesa = 0; spesa <= 1000; spesa += 100) {
        float sconto1, sconto2, totale1, totale2;

        if (spesa < 500) {
            sconto1 = spesa * 0.10;
        } else {
            sconto1 = spesa * 0.20;
        }

        totale1 = spesa - sconto1;

        if (spesa <= 300) {
            sconto2 = spesa * 0.10;
        } else {
            sconto2 = 300 * 0.10 + (spesa - 300) * 0.20;
        }

        totale2 = spesa - sconto2;

        if (totale2 < totale1) {
            printf("Oltre %.2f conviene negozio 2\n", spesa);
            break;
        }
    }

    return 0;
}

