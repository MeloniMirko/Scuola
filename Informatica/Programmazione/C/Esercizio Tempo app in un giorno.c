 #include <stdio.h>
 #include <stdlib.h>
 #define N 7
 int main () {
	int giorni[N],minuti[N];
	int i,totale;
	float media;
	int maggiore, minore, giornimax, giornimin;
	
	
	for(i=0; i<N; i++) {
		printf("Quanti minuti hai trascorso nell'app il giorno %d\n", i+1);
		do{
			scanf("%d",&minuti[i]);	
			if(minuti[i]<0){
				printf("il valore inserito e errato: reinserisci");
			}
		}while(minuti<0);	
	}
	
	
	for(i=0; i<N; i++){
		printf("Giorno %d: %d minuti\n", i+1, minuti[i]);
	}
	
	
	totale=0;
	for(i=0; i<N; i++){
		totale=minuti[i]+totale;		
	}
	
	
	media=0;
	
	media=totale/N;
		
	
	maggiore=minuti[0];
	minore=minuti[0];
	
	
	for(i=1; i<N; i++){
		if(minuti[i]>maggiore){
			maggiore=minuti[i];
			giornimax=i;
		}
	}
	
	
	for(i=1; i<N; i++){
		if(minuti[i]<minore){
			minore=minuti[i];
			giornimin=i;
		}
	}
	
	
	
	printf("\nLa media dei minuti trascorsi e' di %.2f", media);

	printf("\nIl giorno in cui hai usato di piu l'app e' il giorno %d di %d  minuti", giornimax+1, maggiore);

	printf("\nIl giorno in cui hai usato di meno l'app e' il giorno %d di %d  minuti", giornimin+1, minore);

	printf("\n Il totale e': %d", totale);
	
 }

 