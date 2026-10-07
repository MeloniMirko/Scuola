#include <stdio.h>

int main() {
    int scelta;
    float importo, prezzo;
    
    printf("Menu:\n");
    printf("1. Bevanda - 1,50 EUR\n");
    printf("2. Acqua - 0,50 EUR\n");
    printf("3. Patatine - 1,00 EUR\n");
    
    // Richiesta dell'importo
    printf("Inserisci l'importo: ");
    scanf("%f", &importo);
    
    // Scelta del prodotto
    printf("Seleziona il prodotto (1-3): ");
    scanf("%d", &scelta);
    
    switch (scelta) {
        case 1:
            prezzo = 1.50;
            break;
        case 2:
            prezzo = 0.50;
            break;
        case 3:
            prezzo = 1.00;
            break;
        default:
            printf("Scelta non valida.\n");
            return 1;
    }
    
    // Calcolo del resto
    if (importo < prezzo) {
        printf("Importo insufficiente. Prezzo: %.2f EUR.\n", prezzo);
    } else {
        float resto = importo - prezzo;
        printf("Hai scelto il prodotto %d. Prezzo: %.2f EUR.\n", scelta, prezzo);
        printf("Resto: %.2f EUR.\n", resto);
    }
    
    return 0;
}
