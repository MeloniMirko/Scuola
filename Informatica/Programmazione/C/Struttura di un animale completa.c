#include <stdio.h>
#include <string.h>


typedef struct {
    char razza[20];
    char specie[20];
    char colore[20];
    int peso;
    float altezza;
} Animale;

void stampaAnimale(Animale Dado);

int main() {
    Animale Dado; //dichiarazione della variabile Dado di tipo
//  tipo    nome    

    printf("Che razza e' il tuo animale domestico? ");
    scanf("%s", Dado.razza);
    printf("Di che specie e' ? ");
    scanf("%s", Dado.specie);
    printf("Di che colore e' ? ");
    scanf("%s",Dado.colore);
    printf("Quanto pesa? ");
    scanf("%d", &Dado.peso);
    printf("Quanto e' alto? ");
    scanf("%f", &Dado.altezza);
    stampaAnimale(Dado);

}


void stampaAnimale(Animale Dado) {
    printf("\nIl tuo animale domestico e' un %s", Dado.razza);
    printf("\nLa razza e' %s", Dado.specie);
    printf("\nIl colore e' %s", Dado.colore);
    printf("\nPesa %d Kg", Dado.peso);
    printf("\nE' alto %.2f cm",Dado.altezza);
}