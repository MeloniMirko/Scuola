#include <stdio.h>
#include <stdlib.h>
#include <time.h>

int main () {
	const int N=10;
	int vettore[N];
	int i;
	
	//introduzione al programma
	printf("Hey!Questo programma serve per definire un vettore e riempirlo con numeri casuali e stampare i numeri con indice pari e i numeri pari\n");
	
	srand(time(0));
	
	//genera numeri casuali
	for (i=0;i<N;i++){
		vettore[i] = rand() % 100 +1;
	}
	
	//stampa i numeri generati
	for (i=0;i<N;i++){
		printf("\v[%d]=%d\n",i+1,vettore[i]);
	}
	
	//stampa i numeri di indice pari
	printf("Stampa dei numeri con indice pari\n");
	for (i=0;i<N;i++){
		if (i % 2 != 0)
		printf("\v[%d]=%d\n",i+1,vettore[i]);
	}
	
	//stampa solo i numeri pari
	printf("Stampa dei numeri pari\n");
	for (i=0;i<N;i++){
		if (vettore[i] % 2 == 0)
		printf("\v[%d]=%d\n",i+1,vettore[i]);
	}
	
	return 0;
}