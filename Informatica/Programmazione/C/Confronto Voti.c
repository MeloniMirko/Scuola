#include <stdio.h>
#include <time.h>
#include <stdlib.h>
#define N 30
void carica(int voti[], int n);
void stampa(int voti[], int n);
int alto  (int voti[],  int n);


int main(){
   
    int voti[N];
    int n;
   
    srand(time(NULL));
    printf("Quanti studenti contiene la classe ");
    scanf("%d",&n);
   
    carica (voti,n);
    stampa (voti,n);
    printf("\nil numero massimo e' %d",alto(voti,n));
   
}

void carica(int voti[], int n){
   
    int i;
   
   
    for (i=0; i<n ; i++){
        voti[i] = rand()%10+1;
    }
}

void stampa(int voti[], int n){
   
    int i;
         for (i=0; i<n ; i++){
             printf("\nil voto dello studente %d e' %d",i+1 , voti[i]);
             
     }
}
int alto  (int voti[],  int n){
    int i,massimo=voti[0];
    for(i=1; i<n ; i++){
        if(voti [i]>massimo){
            massimo=voti [i];
        }
    }    
    return massimo;    
   
}