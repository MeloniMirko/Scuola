#include <stdio.h>
#include <string.h>

typedef struct
{
    char razza[20];
    char specie[20];
    char colore[20];
    int peso;
    int altezza;
};Animale;


int main(){
    
    Animale Dado; //dichiarazione della variabile
    
    printf("che razza è il tuo animale domestico?");
    scanf("%s",Dado.razza);
    printf("Di che specie e'?");
    scanf("%s",Dado.specie);
    printf("Di che colore e'?");
    scanf("%s",Dado.colore);
    printf("Quanto pesa?");
    scanf("%d",Dado.peso);
    printf("Quanto e' alto?");
    scanf("%d0,Dado.peso");

}
