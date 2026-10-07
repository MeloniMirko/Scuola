#include <stdio.h>

int main() {
    float litri, costo_litro, importo_pagare, banconota, resto;

    // Input dei litri di carburante e del costo per litro
    printf("Inserisci il numero di litri di carburante: ");
    scanf("%f", &litri);
    printf("Inserisci il costo per litro della benzina: ");
    scanf("%f", &costo_litro);

    // Calcola l'importo da pagare
    importo_pagare = litri * costo_litro;
    printf("L'importo da pagare è: %.2f euro\n", importo_pagare);

    // Inserisci importro banconota
    printf("Inserisci l'importo della banconota: ");
    scanf("%f", &banconota);

    // Calcola il resto
    if (banconota >= importo_pagare) {
        resto = banconota - importo_pagare;
        printf("Il resto da dare è: %.2f euro\n", resto);
    } else {
        printf("la banconota non è sufficiente per poter effettuare il pagamento\n");
    }

    return 0;
}