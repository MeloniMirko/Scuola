#include <stdio.h>
#include <string.h>
#define DIM 15
int main () {
    int x,n;
    char stringa1[DIM],app[x];
    printf("Inserisci il tuo nome handicappto: ");
    scanf("%s", stringa1);
    n = strlen(stringa1);
    printf("La lunghezza della stringa è: %d\n", n);

    for(x=0; x<n; x++){
        n=n-1;
        app[x]=stringa1[x];
        stringa1[x]=stringa1[n];
        stringa1[n]=app[x];
    }

    printf("La stringa invertita è: %s\n", stringa1);
    printf("La stringa originale è: %s\n", app);
}