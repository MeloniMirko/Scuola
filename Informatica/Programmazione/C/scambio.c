#include <stdio.h>

void procedura();
int a; //variabile globale

int main() {
    int b=5; //variabile locale
    int c; //variabile locale
    a=5;
    printf("%d",b);
    procedura();
    printf("\nDentro il main b=%d",b);    
}

void procedura() {
    int b=10; //variabile locale
    printf("\nDentro la procedura b=%d", b);
    a=10;
}