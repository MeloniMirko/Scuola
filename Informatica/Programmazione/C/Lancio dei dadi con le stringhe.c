/*Ci sono 3 giocatori che devono lanciare un dado.
Memorizza i nomi di ciascun giocatore e il relativo risultato.
Dopo aver stampato i risultati, scrivi chi è il giocatore vincitore (vince chi ha ottenuto il risultato maggiore).
Gestisci i casi di pareggio. e scirvi pareggio tra i giocatori.")
*/
//porcodioo
#include <stdio.h>
#include <stdlib.h> 
#include <time.h>
#include <string.h>
#include <math.h>

int main(){
    srand(time(NULL)); // Inizializza il generatore di numeri casuali
    int i,lanci[3], max = 0, vincitore = 0;
    char nomi[3][20]; // Array per memorizzare i nomi dei giocatori
    for (i = 0; i < 3; i++) {
        printf("Inserisci il nome del giocatore %d: ", i + 1);
        scanf("%s", nomi[i]); // Legge il nome del giocatore
        lanci[i] = rand() % 6 + 1; // Lancia il dado (numeri da 1 a 6)
        printf("%s ha lanciato: %d\n", nomi[i], lanci[i]); // Stampa il risultato del lancio
        }
    // Trova il massimo risultato e il vincitore
    for (i = 0; i < 3; i++) {
        if (lanci[i] > max) {
            max = lanci[i];
            vincitore = i; // Memorizza l'indice del vincitore
            }
            }
    // Controlla se ci sono pareggi
    int contatore = 0;
    for (i = 0; i < 3; i++) {
        if (lanci[i] == max) {
            contatore++; // Conta quanti giocatori hanno ottenuto il punteggio massimo
            }
        }
    // Stampa il risultato finale
    if (contatore == 1) {
        printf("Il vincitore e' %s con un punteggio di %d!\n", nomi[vincitore], max);
        } else {
        printf("Pareggio tra i giocatori: ");
        for (i = 0; i < 3; i++) {
            if (lanci[i] == max) {
                printf("%s ", nomi[i]); // Stampa i nomi dei giocatori in pareggio
                }
            }
        printf("con un punteggio di %d!\n", max);
        }
    return 0; // Termina il programma
    }