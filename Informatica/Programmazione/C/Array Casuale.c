#include <stdio.h>
#include <stdlib.h>
#include <time.h>

int main () {
	const int N=10;
	int vettore[N];
	int i;
	
	//intoduzione al programma
	printf("Hey!Questo programma serve per definire un vettore e riempirlo con numeri casuali\n");
	
	srand(time(0));
	
	//genera numeri casuali
	for (i=0;i<N;i++){
		vettore[i] = rand() % 100 +1;
	}
	
	//stampa i numeri generati
	for (i=0;i<N;i++){
		printf("\v[%d]=%d\n",i+1,vettore[i]);
	}
	return 0;
}