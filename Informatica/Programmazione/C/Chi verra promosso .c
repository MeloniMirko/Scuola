/*Crea un programma che permetta di archiviare in un array i voti di informatica.
Posto che: l'alunno verrà promosso se la sua media sarà uguale o superiore a 6, dopo aver caricato l'elenco dei voti stampa un messaggio che comunichi all'alunno il suo risultato (promosso o bocciato).
Il programma deve proseguire chiedendo se l'utente vuole inserire i voti di un altro alunno.*/

#include <stdio.h>
#include <stdlib.h>
#include <time.h>

int main (){

    int voti[10], media, i, j, promosso = 0;
    int scelta = 1;

    
    while (scelta == 1) {
        for (i = 0; i < 10; i++) {
            printf("Inserisci il voto di informatica  %d: ",i);
            scanf("%d", &voti[i]);
            voti[i] = voti[i] % 10;
            if (voti[i] < 0 || voti[i] > 10) {
                printf("Il voto inserito non è valido.\n");
                i--;
                }
                }
                media = 0;
                for (j = 0; j < 10; j++) {
                    media += voti[j];
                    }
                    media = media / 10;
                    if (media >= 6) {
                        printf("L'alunno è stato promosso.\n");
                        promosso = 1;
                        }
                        else {
                            printf("L'alunno è stato bocciato.\n");
                            promosso = 0;
                            }
                            printf("Vuoi inserire i voti di un altro alunno? (1 =si, 0 = no)\n");
                            scanf("%d", &scelta);
                            }
    return 0;

}