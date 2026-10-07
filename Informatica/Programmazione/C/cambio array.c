#include<stdio.h>
#include<string.h>
#define N 100
void carica(int A[], int n);
void stampa(int A[], int n);
int max(int A[], int n);
int min(int A[], int n);
float media(int A[], int n);
void riordina(int A[], int n);

int main() {
    int A[N];
    int n, i;
    int Max, Min;
    float Media;
    int o, s;
   
    do{
   
    printf("Quanti valori vuoi inserire?");
    scanf("%d",&n);
   
    carica(A, n);
    printf("scegliere l'opzione: inserire 1 per stampare l'array\n 2 per il massimo\n 3 per il minimo\n 4 per la media\n 5 per riordinare");
    scanf("%d", &o);
    switch (o){
        case 1:{
        stampa(A, n);
        printf("\n\n");
        break;
        }
        case 2:{
        Max= max(A, n);
        printf("il massimo=%d\n", Max);
        break;
        }
    case 3:{
    Min=min(A,n);
    printf("il minimo=%d\n", Min);
    break;
    }
    case 4:{
    Media=media(A,n);
    printf("la media=%.2f", Media);
    break;
    }
   
    case 5:{
    riordina(A, n);
    printf("\nil vettore è stato riordinato:\n");
    stampa (A, n);
    break;
    }
}
    printf("inserisci 1 per continuare");
    scanf("%d", &s);
}while(s==1);
}

void carica(int A[], int n){
    int cont;
    for    (cont=0; cont<n; cont++){
        printf("\narray[%d]= ", cont);
        scanf("%d", &A[cont]);
    }
}


void stampa(int A[], int n){
   
    int i;
    for(i=0; i<n; i++){
        printf("\narray[%d]=%d", i, A[i]);
    }
   
}
//definizione della funzione max
int max(int A[], int n)
{
    int Max;
    int i;
    Max=A[0];
    for(i=1; i<n; i++)
        {
            if(Max<A[i])
                {
                    Max=A[i];
                }
        }
        return Max;    
}        

int min(int A[], int n)
{
    int Min;
    int i;
    Min=A[0];
    for(i=1; i<n; i++)
        {
            if(Min>A[i])
                {
                    Min=A[i];
                }
        }
        return Min;    
}    

float media(int A[], int n){
    int totale, i;
    float Media;
   
    for(i=0; i<n; i++){
        totale=totale+A[i];
    }
   
    Media=(float)totale/n;
   
    return Media;
}    

void riordina(int A[], int n){
     int i, j, temp;
    for ( i = 0; i < n - 1; i++) {
        for (j = 0; j < n - i - 1; j++) {
            if (A[j] > A[j + 1]) {
                temp = A[j];
                A[j] = A[j + 1];
                A[j + 1] = temp;
            }
        }
    }
}