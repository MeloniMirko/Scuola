#include <stdio.h>
int main(){
	
int dato[10],i ;

printf("Inserisci 10 valori:");
for( i=0; i<10; i++) 
scanf("%d", &dato[i]) ;

printf("Ecco i numeri inseriti stampati in ordine viceverso:");
for( i=9; i>=0; i--) 
printf("%d\n", dato[i]) ;

return 0;

}