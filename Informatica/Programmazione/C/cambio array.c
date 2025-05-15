#include <stdio.h>

void scambio1(int p, int q);

int main(){
    int a,b;
    printf("Scrivi un numero intero, a= ");
    scanf("%d", &a);
    printf("Scrivi un numero intero, b= ");
    scanf("%d", &b); 
    scambio1(a,b);
    printf ("stampo i valori di a e b dopo la chiamata alla funzione scambio1\n");
    printf("a=%d, b=%d\n", a, b);



}

void scambio1(int x, int y){
    int temp;
    temp=x;
    x=y;
    y=temp;
}

void scambio2(int *p, int *q){
    int temp;
    temp=*p;
    *p=*q;
    *q=temp;
}