#include <stdio.h>
#include <stdlib.h>
#include <time.h>

int main() {
    const int N = 10;
    const int MIN_TEMPO = 90;
    const int MAX_TEMPO = 190;

    int tempi[N];
    int velocita_media = 0;
    int  atleta_veloce = 0;
    int tempo_veloce;
    int i;
    char nomi_atleti[N];
    char risposta;

    srand(time(NULL)); // inizializza il generatore di numeri casuali

    do {
        // genera tempi casuali per gli atleti
        for ( i = 0; i < N; i++) {
            tempi[i] = rand() % (MAX_TEMPO - MIN_TEMPO + 1) + MIN_TEMPO;
        }

        // trova l'atleta più veloce
        tempo_veloce = tempi[0];
        for ( i = 1; i < N; i++) {
            if (tempi[i] < tempo_veloce) {
                tempo_veloce = tempi[i];
                atleta_veloce = i;
            }
        }

        // calcola la velocità media
        for ( i = 0; i < N; i++) {
            velocita_media += tempi[i];
        }
        velocita_media /= N;

        // stampa i risultati
        printf("Risultati della gara:\n");
        for ( i = 0; i < N; i++) {
            printf("%s: %d decimi di secondo\n", nomi_atleti[i], tempi[i]);
        }
        printf("Atleta più veloce: %s con un tempo di %d decimi di secondo\n", nomi_atleti[atleta_veloce], tempo_veloce);
        printf("Velocità media: %d decimi di secondo\n", velocita_media);

        // chiede all'utente se vuole fare un'altra gara
        printf("Vuoi fare un'altra gara? (s/n): ");
        scanf(" %c", &risposta);
    } while (risposta == 's' || risposta == 'S');

    return 0;
}