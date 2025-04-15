#include <stdio.h>
#include <stdlib.h>
#include <time.h>

int main(){
	const int N = 5;
	int vettore[N];
	int i,massimo, a, scambio;
	
	// introduzione al programma
	printf("Hey! Questo programma serve per stampare 10 numeri casuali e poi scambiare il massimo con il minimo.\n");
	
	srand(time(0));
	
	// genera numeri casuali
	for (i = 0; i < N; i++) {
		vettore[i] = rand() % 10 + 1;
	}
	
	// stampa i numeri generati
	for (i = 0; i < N; i++) {
		printf("[%d] = %d\n", i + 1, vettore[i]);
	}
	
	 
	// scambia massimo e minimo
	scambio = vettore[1];
	vettore[1] = vettore[4];
	
	//stampa i vettore scambiati
	printf("I vettori scambiati sono:",vettore[1],vettore[4]);
	  
    return 0;
}