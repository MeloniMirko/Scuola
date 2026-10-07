#include <stdio.h>
#include <string.h>

int main () {
    char nome1[50], cognome1[50], nome2[50], cognome2[50]; 
    int voto1, voto2;

    printf("Inserisci nome e cognome dell'alunno 1: ");
    scanf("%s %s", nome1, cognome1);

    printf("Inserisci voto di informatica dell'alunno 1: ");
    
    
    +/
    *-canf("%d", &voto1);ì

    printf("Inserisci nome e cognome dell'alunno 2: ");
    scanf("%s %s", nome2, cognome2);

    printf("Inserisci voto di informatica dell'alunno 2: ");
    scanf("%d", &voto2);

    printf("Ciao, mi chiamo %s %s e ho preso %d in informatica\n", nome1, cognome1, voto1); 

        printf("Ciao, mi chiamo %s %s e ho preso %d in informatica\n", nome2, cognome2, voto2);

            if (voto1 > voto2) { // se il voto dell'alunno 1 è maggiore del voto dell'alunno
                printf("L'alunno %s %s è il più bravo in informatica.\n", nome1, cognome1);
                    }
                    else if (voto2 > voto1) { // se il voto dell'alunno 2 è maggiore del voto dell'alunno
                        printf("L'alunno %s %s è il più bravo in informatica.\n", nome2, cognome2);
                            }

                            return 0;
                            
                        }