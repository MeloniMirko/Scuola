#include <stdio.h>
#include <string.h>

//definizone struttura
struct poppi
{
    char razza[20];
    char specie[20];
    char colore[20];
    int peso;
    int altezza;
};

int main(){

    struct poppi
{
    char razza[20];
    char specie[20];
    char colore[20];
    int peso;
    float altezza;
};
    struct poppi poppi;

    //assegnazione valori 

    strcpy (poppi.razza,"Pinscher");
    strcpy (poppi.specie,"Mammifero");
    strcpy (poppi.colore,"Nero");
    poppi.peso=5;
    poppi.altezza=0.28;

    //stampa

    printf("razza:%s\n",poppi.razza);
    printf("specie:%s\n",poppi.specie);
    printf("colore:%s\n",poppi.colore);
    printf("peso:%d\n",poppi.peso);
    printf("altezza:%.2f",poppi.altezza);

    return 0;
}