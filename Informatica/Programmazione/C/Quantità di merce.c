#include <stdio.h>

int main() {
    // Dichiarazione delle variabili
    float quantita, prezzo_per_kg, prezzo_totale, prezzo_finale;
    
     //Introduzione del programma
    printf("Hey,Benvenuto!Questo programma serve per calcolare il prezzo finale di una quantita di merce acquistata.Buon proseguimento!\n");
    
    // Lettura dei dati
    printf("Inserisci la quantita di merce (in kg): ");
    scanf("%f", &quantita);
    
    printf("Inserisci il prezzo per kg: ");
    scanf("%f", &prezzo_per_kg);
    
    // Calcolo del prezzo totale senza sconto
    prezzo_totale = quantita * prezzo_per_kg;
    
    // Applicazione dello sconto in base alla quantità
    if (quantita >= 10 && quantita < 20) {
        prezzo_finale = prezzo_totale * (1 - 0.03); 
    } else if (quantita >= 20 && quantita < 40) {
        prezzo_finale = prezzo_totale * (1 - 0.05);  
    } else if (quantita >= 40) {
        prezzo_finale = prezzo_totale * (1 - 0.10);  
    } else {
        prezzo_finale = prezzo_totale;  
    }
    
    // Stampa del prezzo finale
    printf("Il prezzo finale da pagare e: %.2f\n", prezzo_finale);
    
    return 0;
}
