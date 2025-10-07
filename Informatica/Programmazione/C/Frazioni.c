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

// Struttura per rappresentare una frazione
typedef struct {
    int numeratore;
    int denominatore;
} Frazione;

// Funzione per leggere una frazione (controlla che il denominatore non sia zero)
Frazione leggiFrazione() {
    Frazione f;
    printf("Numeratore: ");
    scanf("%d", &f.numeratore);
    do {
        printf("Denominatore (diverso da zero): ");
        scanf("%d", &f.denominatore);
        if (f.denominatore == 0)
            printf("Il denominatore non può essere zero.\n");
    } while (f.denominatore == 0);
    return f;
}

// Moltiplicazione tra due frazioni
Frazione moltiplica(Frazione a, Frazione b) {
    Frazione risultato;
    risultato.numeratore = a.numeratore * b.numeratore;
    risultato.denominatore = a.denominatore * b.denominatore;
    return risultato;
}

// Divisione tra due frazioni
Frazione dividi(Frazione a, Frazione b) {
    Frazione risultato;
    risultato.numeratore = a.numeratore * b.denominatore;
    risultato.denominatore = a.denominatore * b.numeratore;
    return risultato;
}

// Addizione tra due frazioni
Frazione somma(Frazione a, Frazione b) {
    Frazione risultato;
    risultato.numeratore = a.numeratore * b.denominatore + b.numeratore * a.denominatore;
    risultato.denominatore = a.denominatore * b.denominatore;
    return risultato;
}

// Sottrazione tra due frazioni
Frazione sottrai(Frazione a, Frazione b) {
    Frazione risultato;
    risultato.numeratore = a.numeratore * b.denominatore - b.numeratore * a.denominatore;
    risultato.denominatore = a.denominatore * b.denominatore;
    return risultato;
}

// Stampa una frazione
void stampaFrazione(Frazione f) {
    printf("Risultato: %d/%d\n", f.numeratore, f.denominatore);
}

int main() {
    int scelta;
    Frazione frazione1, frazione2, risultato;

    do {
        printf("\nMenu:\n");
        printf("1) Moltiplicazione\n");
        printf("2) Divisione\n");
        printf("3) Addizione\n");
        printf("4) Sottrazione\n");
        printf("0) Esci\n");
        printf("Cosa vuoi fare? ");
        scanf("%d", &scelta);

        switch (scelta) {
            case 1:
                printf("\nPrima frazione:\n");
                frazione1 = leggiFrazione();
                printf("Seconda frazione:\n");
                frazione2 = leggiFrazione();
                risultato = moltiplica(frazione1, frazione2);
                stampaFrazione(risultato);
                break;
            case 2:
                printf("\nPrima frazione:\n");
                frazione1 = leggiFrazione();
                printf("Seconda frazione:\n");
                frazione2 = leggiFrazione();
                risultato = dividi(frazione1, frazione2);
                stampaFrazione(risultato);
                break;
            case 3:
                printf("\nPrima frazione:\n");
                frazione1 = leggiFrazione();
                printf("Seconda frazione:\n");
                frazione2 = leggiFrazione();
                risultato = somma(frazione1, frazione2);
                stampaFrazione(risultato);
                break;
            case 4:
                printf("\nPrima frazione:\n");
                frazione1 = leggiFrazione();
                printf("Seconda frazione:\n");
                frazione2 = leggiFrazione();
                risultato = sottrai(frazione1, frazione2);
                stampaFrazione(risultato);
                break;
            case 0:
                printf("Fine programma\n");
                break;
            default:
                printf("Scelta non valida!\n");
        }
    } while (scelta != 0);

    return 0;
}
