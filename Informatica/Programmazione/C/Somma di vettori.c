/*Crea un programma che caricati due vettori V1 e V2 di MAX elementi, calcoli un terzo vettore somma dei primi due.
Per vettore somma si intende un vettore V3 tale che per ogni i da 0 a MAX-1, valga:
V3[i]=V1[i]+V2[i] */

#include <stdio.h>
#include <stdlib.h>
#include <time.h>
int main(){

    int const MAX = 2;
    int i,V1[100],V2[100],V3[100];
    
    //introduzione al programma
    printf("Ciao! Questo programma calcola la somma di due vettori.\n"); 

    
    srand(time(NULL));

    //richiesta di inserire i valori
    printf("Inserisci i valori dei due vettori.\n"); 

    for (i=0;i<MAX;i++) { 
        printf("Inserisci il valore di V1[%d]: ",i); 
        scanf("%d",&V1[i]); 
        printf("Inserisci il valore di V2[%d]: ",i); 
        scanf("%d",&V2[i]); 
        }
        
        //calcolo della somma
        for (i=0;i<MAX;i++) {
            V3[i]=V1[i]+V2[i];
            }

            //stampa i vettori
            printf("La somma dei due vettori e:\n");
            for (i=0;i<MAX;i++) {
                printf("V3[%d]=%d\n",i,V3[i]);
            }
        return 0;
       
}