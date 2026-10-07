/*Carica un array contenente il voto di informatica di NUM alunni, con NUM compreso tra 10 e 20 e visualizza la tabella in ordine decrescente di voto (i voti devono essere inseriti casualmente).
Quindi calcola la media generale m della classe e conta quanti voti sono >=6.*/

#include <stdio.h>
#include <stdlib.h>
#include <time.h>
int main(){
    int i, j, k, m, n, num, voti[20], media;
    srand(time(NULL));
    printf("Inserisci il numero di alunni: ");
    scanf("%d", &num);
    if (num < 10 || num > 20) {
        printf("Il numero di alunni deve essere compreso tra 10 e 20.\nIl programma si chiude.");
            return 0;
            }
            for (i = 0; i < num; i++) {
                voti[i] = rand() % 10 + 1;
                for (j = 0; j < i; j++) {
                    if (voti[i] < voti[j]) {
                        k = voti[i];
                        voti[i] = voti[j];
                        voti[j] = k;
                        }
                        }
                        for (i = 0; i < num; i++) {
                            printf("%d ", voti[i]);
                            }
                            printf("\n");
                            media = 0;
                            for (i = 0; i < num; i++) {
                                media += voti[i];
                                }
                                media /= num;
                                printf("La media generale della classe e': %.2f\n", media);
                                for (i = 0; i < num; i++) {
                                    if (voti[i] >= 6) {
                                        printf("Il voto di %d e' >= 6.\n", i +1);
                                            }
                                            return 0;


}
            }
        }