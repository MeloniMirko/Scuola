#include <stdio.h>
int main(){
	int n;
	printf("Inserisci un numero:");
	scanf("%d",&n);
	
	n=n+1;
	printf("Il Numero successivo e:%d",n);
	
	n=n-2;
	printf("Il Numero precedente e:%d",n);
	
	return 0;
}