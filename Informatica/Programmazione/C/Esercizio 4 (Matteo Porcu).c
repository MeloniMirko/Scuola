#include <stdio.h>
int main(){
	int a,b;
	float x;

	
	//input dei due numeri
	printf("Inserisci il primo numero: ");
	scanf("%d", &a);
	printf("Inserisci il secondo numero: ");
	scanf("%d", &b);
	
	//risolve l'equazione
	
	if (a!=0){
		x=-b/a;
	}
	else {
		printf("a=0 l'equazione e impossibile");
		
	}
	printf("Il risultato dell' equazione e: %.2f \n",x);
	
	return 0;
}