#include <stdio.h>
int main(){
	int eta;
	printf("Quanti anni hai?");
	
	scanf("%d", &eta);
	
	if(eta>=18){
		printf("Sei Maggiorenne");
	}
		else{
		printf("Sei Minorenne");
	}
return 0;
}