#include <stdio.h>

int main(){
	int n,k=8,f,i,giocatore_a,giocatore_b;
	
	printf("Hey!Questo programma serve per fare il gioco dei fiammiferi\n ");
	
	printf("Quanti fiammiferi vuoi inserire?");
	scanf("%d",&n);
	
	for(i=0;n>i;i++){
		printf("\nQuanti fiammiferi vuoi togliere?");
		scanf("%d",&f);
		if(f>k){
			printf("Il numero e troppo grande non puoi togliere altri fiammiferi");
		}
		else{
			n=n-f;
			printf("Rimangono %d fiammiferi",n);
		}
	}
	
}