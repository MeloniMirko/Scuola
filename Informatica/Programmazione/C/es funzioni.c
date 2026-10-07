#include <stdio.h>
#define N 10

void stampa(int A[], int n);
void carica(int A[], int n);
int max(int A[], int n);

int main(){
    int A[N];
    int n;

    printf("quanti valori vuoi inserire? \n");
    scanf("%d", &n);
    carica(A, n);
    
    return 0;
}

void carica(int A[],int n){
    for(int i = 0; i < n; i++){
        printf("inserisci il valore %d: ", i + 1);
        scanf("%d", &A[i]);
    }
}
void stampa(int A[], int n){
    for(int i = 0; i < n; i++){
        printf("funzione stampa\n");
        printf("valore %d: %d\n", i + 1, A[i]);
    }
    printf("\n");
}