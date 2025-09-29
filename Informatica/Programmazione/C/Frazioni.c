/*Crea un programma per fare i calcoli con le frazioni.
Crea un tipo di dato personalizzato, Frazione, che contiene un numeratore e un denominatore, entrambi numeri interi.
Il programma, dopo aver chiesto all'utente di inserire i valori di numeratore e denominatore delle due frazioni dovrà far scegliere all'utente di tra le seguenti operazioni:
1) Moltiplicazione delle frazioni
2) Divisione tra due frazioni
3) Addizione tra due frazioni //opzionale
4) Sottrazione tra due frazioni //opzionale

L'utente potrà scegliere se proseguire o se uscire dal programma.
ATTENZIONE: La frazione non può avere 0 come denominatore! Prevedi un sistema per evitarlo.*/

#include <stdio.h>

typedef struct {
    int numeratore;
    int denominatore;
} Frazione;

int main() {
    Frazione frazione1, frazione2;
    int risultato_numeratore, risultato_denominatore;
    int scelta, continua;

    printf("Inserisci il numeratore della frazione:");
    scanf("%d", &frazione1.numeratore);

    printf("Inserisci il denominatore della frazione (diverso da 0):");

    do{scanf("%d", &frazione1.denominatore);
        if(frazione1.denominatore==0){
            printf("Il denominatore non può essere 0, riprova\n");}
    }while (frazione1.denominatore==0);

    printf("Inserisci il numeratore della seconda frazione:");
    scanf("%d", &frazione2.numeratore);

    printf("Inserisci il denominatore della seconda frazione (diverso da 0):");

    do{scanf("%d", &frazione2.denominatore);
        if(frazione2.denominatore==0){
            printf("Il denominatore non può essere 0, riprova\n");}
    }while(frazione2.denominatore==0);


    do{

        printf("\n===============================\n");
        printf("Scegli l'operazione:\n");
        printf("1) Moltiplicazione\n");
        printf("2) Divisione\n");
        printf("3) Addizione\n");
        printf("4) Sottrazione\n");
        printf("===============================\n");
        scanf("%d", &scelta);

        switch (scelta){
        case 1:
            risultato_numeratore = frazione1.numeratore * frazione2.numeratore;
            risultato_denominatore = frazione1.denominatore * frazione2.denominatore;
            printf("Il risultato della moltiplicazione è: %d/%d\n", risultato_numeratore, risultato_denominatore);
            break;
        case 2:
            if(frazione2.numeratore == 0) {
                printf("Errore: impossibile dividere per una frazione con numeratore 0.\n");
            }else{
                risultato_numeratore = frazione1.numeratore * frazione2.denominatore;
                risultato_denominatore = frazione1.denominatore * frazione2.numeratore;
                printf("Il risultato della divisione è: %d/%d\n", risultato_numeratore, risultato_denominatore);
            }
            break;
        case 3:
            risultato_numeratore = (frazione1.numeratore * frazione2.denominatore) + (frazione2.numeratore * frazione1.denominatore);
            risultato_denominatore = frazione1.denominatore * frazione2.denominatore;
            printf("Il risultato dell'addizione è: %d/%d\n", risultato_numeratore, risultato_denominatore);
            break;

        case 4:
            risultato_numeratore = (frazione1.numeratore * frazione2.denominatore) - (frazione2.numeratore * frazione1.denominatore);
            risultato_denominatore = frazione1.denominatore * frazione2.denominatore;
            printf("Il risultato della sottrazione è: %d/%d\n", risultato_numeratore, risultato_denominatore);
            break;

        default:
            printf("Scelta non valida.\n");
            break;}
        
        printf("Vuoi fare un'altra operazione? 1 = sì, 0 = no: ");
        scanf("%d", &continua);
    }while(continua == 1);

}

