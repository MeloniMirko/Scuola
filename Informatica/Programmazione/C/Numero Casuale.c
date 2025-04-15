#include <stdio.h>
#include <stdlib.h>
#include <time.h>

int main() {
	
	int num;
	
    // Inizializza il generatore di numeri casuali con il tempo attuale
    srand(time(NULL));

    // Genera un numero casuale tra 0 e RAND_MAX
     num= rand()%6+1;

    // Stampa il numero casuale
    printf("%d\n", num);

    return 0;
}
