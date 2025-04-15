#include <stdio.h>

int main() {
    int eta,prezzo;
    

    printf("Inserisci l'eta dello spettatore: ");
    scanf("%d", &eta);

    if (eta <= 10) {
        prezzo = 0.0; 
    } else if (eta > 10 && eta <= 18) {
        prezzo = 5.0; 
    } else if (eta > 18 && eta <= 65) {
        prezzo = 10.0; 
    } else {
        prezzo = 0.0; 
    }

    printf("L'importo da pagare e: %d\n", prezzo);
    return 0;
}
