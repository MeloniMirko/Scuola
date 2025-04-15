//Crea una matrice A di 3 righe e 4 colonne, in cui vengono inseriti i numeri consecutivi, prima nelle righe poi nelle colonne, nel seguente modo:
//1   2   3   4
//5   6   7   8
//9 10 11 12.

//Successivamente crea la matrice B con 3 righe e 4 colonne, in cui vengono inseriti i numeri consecutivi, prima nelle colonne poi nelle righe, nel seguente modo:
//1  4  7  10   
//2  5  8  11
//3  6  9  12

//Poi mandale in stampa

#include <stdio.h>

int main(){
    const int M=3;
    const int N=4;
    int A[M][N];
    int B[M][N];
    int i, j, k=1;

    for (i=0; i<M; i++){
        for (j=0; j<N; j++){
            A[i][j]=k;
            k++;
        }
    }
    k=1;
    for (j=0; j<N; j++){
        for (i=0; i<M; i++){
            B[i][j]=k;
            k++;
            }
            }
    printf("Matrice A\n");
    for (i=0; i<M; i++){
        for (j=0; j<N; j++){
            printf("%4d", A[i][j]);
            }
            printf("\n");
            }
            printf("\nMatrice B\n");

            for (i=0; i<M; i++){
                for (j=0; j<N; j++){
                    printf("%4d", B[i][j]);
                    }
                    printf("\n");
           }
    return 0;
}