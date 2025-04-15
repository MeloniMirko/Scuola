#include <stdio.h>
int main(){
	const int N=10;
	int vettore[N];
	int i,minimo,massimo,a;
	
	//intoduzione al programma
	printf("Hey!Questo programma serve per stampare dei numeri casuali e poi calcolare il massimo e il minimo\n");
	
	srand(time(0));
	
	//genera numeri casuali
	for (i=0;i<N;i++){
		vettore[i] = rand() % 100 +1;
	}
	
	//stampa i numeri generati
	for (i=0;i<N;i++){
		printf("\v[%d]=%d\n",i+1,vettore[i]);
	}
	
	// inizializziamo massimo e minimo con il primo numero generato
    massimo =vettore[0];
	minimo = vettore[0];

        // aggiorniamo massimo e minimo
    for(i=0;i<N;i++){
    	if (vettore[i] > massimo) {
            massimo = vettore[i];
        }
	}
     for(i=0;i<N;i++){
     	if (vettore[i] < minimo) {
            minimo = vettore[i];
        }
	 }   
        

    // stampiamo il massimo e il minimo
    printf("Il numero massimo e: %d\n", massimo);
    printf("Il numero minimo e: %d\n", minimo);

    return 0;
} 