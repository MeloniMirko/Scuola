/*Scrivere un programma che definisca una struct Smartphone che descriva le principali componenti di uno smartphone. Prevedere l’input da tastiera per due 
diversi smartphone e la visualizzazione dei dati inseriti.

Richieste:
Dichiarare due variabili Smartphone s1, s2;.
Leggere da tastiera i campi per ciascuno (usa scanf con attenzione ai buffer per le stringhe).
Stampare a video i dati di entrambi in modo leggibile (etichettando i campi).
Modificare il valore della memoriaGB inserito precedentemente per errore e ristampare il i dati dello smartphone.
*/

#include <stdio.h>
#include <string.h>

typedef struct{
    char modello[40];
    char marca[30];
    int memoriaGB;     // memoria interna in GB
    int ramGB;         // RAM in GB
    double peso;       // peso in grammi
}Smartphone;

void stampaSmartphone(Smartphone s);



int main(){
    Smartphone s1, s2;

    // Input per il primo smartphone
    printf("Inserisci i dati del primo smartphone:\n");
    printf("Modello: ");
    scanf("%[^\n]s", s1.modello);
    printf("Marca: ");
    scanf("%s", s1.marca);
    printf("Memoria (GB): ");
    scanf("%d", &s1.memoriaGB);
    printf("RAM (GB): ");
    scanf("%d", &s1.ramGB);
    printf("Peso (grammi): ");
    scanf("%lf", &s1.peso);

    // Input per il secondo smartphone
    printf("\nInserisci i dati del secondo smartphone:\n");
    printf("Modello: ");
    scanf("%s", s2.modello);
    printf("Marca: ");
    scanf("%s", s2.marca);
    printf("Memoria (GB): ");
    scanf("%d", &s2.memoriaGB);
    printf("RAM (GB): ");
    scanf("%d", &s2.ramGB);
    printf("Peso (grammi): ");
    scanf("%lf", &s2.peso);
    printf("\n");
    // Stampa dei dati inseriti
    printf ("risultati primo smartphone:\n");
    stampaSmartphone(s1);
    printf ("\nrisultati secondo smartphone:\n");
    stampaSmartphone(s2);

    printf("\nModifica della memoria del primo smartphone:\n");
    s1.memoriaGB = 128; // Nuovo valore di memoria
    printf("Nuova memoria del primo smartphone: %d GB\n", s1.memoriaGB);
    printf("Dati aggiornati del primo smartphone:\n");
    stampaSmartphone(s1);

    return 0;
}
    void stampaSmartphone(Smartphone s){
        printf("Modello: %s\n", s.modello);
        printf("Marca: %s\n", s.marca);
        printf("Memoria (GB): %d\n", s.memoriaGB);
        printf("RAM (GB): %d\n", s.ramGB);
        printf("Peso (grammi): %.2f\n", s.peso);
    }
  


    
    


     
   
    
    




