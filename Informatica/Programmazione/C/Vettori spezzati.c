#include <stdio.h>
#include <stdlib.h>
#include <time.h>
int main(){
	const int N=30;
	int vettore[N],pari[N],dispari[N];
	int i,pari_count=0,dispari_count=0;
	
	//intoduzione al programma
	printf("Hey!Questo programma serve per stampare 30 numeri casuali e memorizzarli in due vettori:dove il primo deve contenere numeri pari e il secondo numeri dispari\n");

	srand(time(0));
	
	//genera numeri casuali
	for (i=0;i<N;i++){
		vettore[i] = rand() % 100 +1;
	}
	
	//stampa i numeri generati
	for (i=0;i<N;i++){
		printf("\v[%d]=%d\n",i+1,vettore[i]);
		if (vettore[i]%2==0){
			pari[pari_count++]=vettore[i];
		}
		else {
			dispari[dispari_count++]=vettore[i];
		}
	}
	
	//stampa i numeri pari
	printf("I numeri pari sono:\n");
	for (i=0;i<pari_count;i++){
		printf("pari[%d]=%d\n",i+1,pari[i]);
	}
	
	//stampa i numeri dispari
	printf("I numeri dispari sono:\n");
	for (i=0;i<dispari_count;i++){
		printf("dispari[%d]=%d\n",i+1,dispari[i]);
	}
	


    return 0;
}