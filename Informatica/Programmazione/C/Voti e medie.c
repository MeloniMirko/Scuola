#include <stdio.h>

int main() {
    int alunni = 5; 
    int i = 0; 
    int numVoti,sommaVoti, insufficienze;
    float voto;
    float media;
    int totaleInsufficienze = 0; 
    int alunniUnder6 = 0; 
    
	printf("Ciao!Questo programma serve per calcolare la media e dire qunte insuficenze ha un alunno\n");

    // Ciclo per ogni alunno
    while (i < alunni) {
        printf("Inserisci i voti per l'alunno %d\n", i + 1);

        // Chiedi quanti voti ha l'alunno
        printf("Quanti voti ha l'alunno %d? ", i + 1);
        scanf("%d", &numVoti);

        sommaVoti = 0; 
        insufficienze = 0; 

        // Ciclo per inserire i voti dell'alunno
        int j = 0;
        while (j < numVoti) {
            printf("Inserisci il voto %d: ", j + 1);
            scanf("%f", &voto);

            // Somma i voti e conta le insufficienze
            sommaVoti += voto;
            if (voto < 6) {
                insufficienze++;
            }

            j++;
        }

        // Calcola la media
        media = (float)sommaVoti / numVoti;

        // Stampa la media e il numero di insufficienze
        printf("Media dell'alunno %d: %.2f\n", i + 1, media);
        printf("Insufficienze per l'alunno %d: %d\n", i + 1, insufficienze);

        // Aggiungi al totale delle insufficienze
        totaleInsufficienze += insufficienze;

        // Se l'alunno ha una media inferiore a 6, incrementa il contatore
        if (media < 6) {
            alunniUnder6++;
        }

        i++;
    }

    // Risultati finali
    printf("\nTotale insufficienze in tutta la classe: %d\n", totaleInsufficienze);
    printf("Numero di alunni con media inferiore a 6: %d\n", alunniUnder6);

    return 0;
}

