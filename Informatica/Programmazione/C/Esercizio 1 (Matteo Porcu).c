#include <stdio.h>
int main() {
	int n1, n2;
	
	//input dei due numeri
	printf("Inserisci il primo numero:");
	scanf("%d", &n1);
	printf("Inserisci il secondo numero:");
	scanf("%d", &n2);
	
	//controllo se i numeri sono in oridine crescente
	if (n1<n2) {
		printf("I numeri sono gia ordinati");
	}
	else {
		printf("I numeri sono da ordinare");
	}
	return 0;
}