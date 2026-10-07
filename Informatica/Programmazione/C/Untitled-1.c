#include <stdio.h>
int main (){
    int tanti=5;
    int vet[5]={80, 70, 60, 50, 40};
    int x,y,j,i_min;
    int temp;
    for(x=0;x<tanti-1;x++){             //ricerca del minimo in [i..n-1]
        i_min=x;                        //pongo il primo come minimo
        for(y=x+1;y<tanti;y++){         //scorro tutto il vettore
            if(vet[y]<vet[i_min])       //se trovo un elemento minore
            i_min=y;                    //è il nuovo minimo

            }
            if (i_min!=x){              //se il min non è l'elemento corrente
            temp=vet[i_min];            //scambia [i_min] e l'elemento corrente
            vet[i_min]=vet[x];
            vet[x]=temp;
            for(j=0;j<tanti;j++){
                printf("%d ", vet[j]); //visualizza un passo di ordinamento
        }
        printf("\n");
        }
    }
 
}