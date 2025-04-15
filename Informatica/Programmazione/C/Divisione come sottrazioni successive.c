/*Scrivi un programma che, leggendo due numeri, ne esegue la divisione mediante sottrazioni successive, 
visualizzando sullo schermo il risultato di ogni iterazione.*/

#include <stdio.h>

int main() {
    int dividendo, divisore,resto;
    int quoziente = 0;
    
    printf("Hey! Questo programma ha la funzione di eseguire la divisione di due numeri inseriti dall'utente esegue la divisione mediante sottrazioni successive");

    // Chiede all'utente di inserire i due numeri interi
  do {
   	printf("\nInserisci il primo numero: ");
  	scanf("%d", &dividendo);
    printf("\nInserisci il secondo numero: ");
    scanf("%d", &divisore);
   } 
   while(divisore==0);
	resto=dividendo;
	
	// Esegue la divisione come sottrazione sucessiva
    	while(resto>=divisore){
    		resto-=divisore;
    		quoziente++;
    		printf("\nIl quoziente parziale e:%d",quoziente);
		}
		
    // Stampa a schermo il quoziente e il resto    
    printf("\nIl risultato e:%d",quoziente);
    printf("\nIl resto e:%d",resto);

    
	return 0;
}