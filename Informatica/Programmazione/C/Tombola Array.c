#include <stdio.h> 
#include <stdlib.h> 
#include <time.h>  


int main() {

    const int NUM_CARTELLA = 5; // numero di cartelle
    const int NUM_ESTRAZIONI = 10; // numero di estrazioni

    int g1_cartella[NUM_CARTELLA];  // vettore per le cartelle del giocatore 1
    int g2_cartella[NUM_CARTELLA]; // vettore per le cartelle del giocatore 2
    int g1_risultati = 0, g2_risultati = 0; // contatori risultati
    int g1_punti = 0, g2_punti = 0; // punti
    int i, j; // indici
    int numero_estratto; // numero estratto

    //introduzione al programma
    printf("Ciao!Questo programma serve per simulare il gioco della tombola\n"); // introduzione al programma


     srand(time(0)); // inizializzazione del generatore di numeri casuali

    // Genera cartelle casuali per G1 e G2
    for (i = 0; i < NUM_CARTELLA; i++) { // ciclo per generare le cartelle
        g1_cartella[i] = rand() % 90 + 1; // genera un numero casuale tra 1 e 9
        g2_cartella[i] = rand() % 90 + 1; // genera un numero casuale tra 1 e 9
    }

    printf("Cartella G1: "); // stampa cartella G1
    for (i = 0; i < NUM_CARTELLA; i++) { // stampa cartella G1
        printf("%d ", g1_cartella[i]);   // stampa la cartella del giocatore 1
    }
    

    printf("Cartella G2: "); // stampa cartella G2
    for (i = 0; i < NUM_CARTELLA; i++) { // stampa la cartella del giocatore 2
        printf("%d ", g2_cartella[i]); // stampa la cartella del giocatore 2
    }
    

    // Estrae numeri casuali 
    for (i = 0; i < NUM_ESTRAZIONI; i++) { // ciclo per le estrazioni
        numero_estratto = rand() % 90 + 1; // genera un numero casuale tra 1 e 9
        printf("Numero estratto: %d\n", numero_estratto ); // stampa il numero estratto
        
        for (j = 0; j < NUM_CARTELLA; j++) { // scorre la cartella del giocatore 1
            if (g1_cartella[j] == numero_estratto) g1_risultati++; // controlla se il numero estratto è nella cartella del giocatore 1
            if (g2_cartella[j] == numero_estratto) g2_risultati++;  // controlla se il numero estratto è nella cartella del giocatore 2
        }

        // Verifica combinazioni vincenti
        if (g1_risultati == 2 && g1_punti < 1) { // se il giocatore 1 ha 2 numeri estratti e non ha ancora vinto
            g1_punti = 1; // assegna 1 punto al giocatore 1
            printf("G1 fa ambo! Vince 1 punto!\n"); // stampa il messaggio di vittoria del giocatore 1
        }
        if (g2_risultati == 2 && g2_punti < 1) { // se il giocatore 2 ha 2 numeri estratti e non ha ancora vinto
            g2_punti = 1; // assegna 1 punto al giocatore 2
            printf("G2 fa ambo! Vince 1 punto!\n"); // stampa il messaggio di vittoria del giocatore 2
        }
        if (g1_risultati == 3 && g1_punti < 3) { // se il giocatore 1 ha 3 numeri estratti e non ha ancora vinto
            g1_punti = 3; // assegna 3 punti al giocatore 1
            printf("G1 fa terno! Vince 3 punti!\n"); // stampa il messaggio di vittoria del giocatore 1
        }
        if (g2_risultati == 3 && g2_punti < 3) { // se il giocatore 2 ha 3 numeri estratti e non ha ancora vinto
            g2_punti = 3; // assegna 3 punti al giocatore 2
            printf("G2 fa terno! Vince 3 punti!\n"); // stampa il messaggio di vittoria del giocatore 2
        }
        if (g1_risultati == 4 && g1_punti < 6) { // se il giocatore 1 ha 4 numeri estratti e non ha ancora vinto
            g1_punti = 6; // assegna 6 punti al giocatore 1
            printf("G1 fa quaterna! Vince 6 punti!\n"); // stampa il messaggio di vittoria del giocatore 1
        }
        if (g2_risultati == 4 && g2_punti < 6) { // se il giocatore 2 ha 4 numeri estratti e non ha ancora vinto
            g2_punti = 6; // assegna 6 punti al giocatore 2
            printf("G2 fa quaterna! Vince 6 punti!\n"); // stampa il messaggio di vittoria del giocatore 2
        }
        if (g1_risultati == 5) { // se il giocatore 1 ha 5 numeri estratti
            g1_punti = 11;  // assegna 11 punti al giocatore 1
            printf("G1 fa cinquina! Vince 11 punti!\n"); // stampa il messaggio di vittoria del giocatore 1
            
        }
        if (g2_risultati == 5) { // se il giocatore 2 ha 5 numeri estratti
            g2_punti = 11; // stampa il messaggio di vittoria del giocatore 2
            printf("G2 fa cinquina! Vince 11 punti!\n"); // stampa il messaggio di vittoria del giocatore 2
            
        }
    }

    // Stampa il vincitore
    if (g1_punti > g2_punti) { // se il giocatore 1 ha più punti del giocatore 2
        printf("G1 vince con %d punti!\n", g1_punti); // stampa il messaggio di vittoria del giocatore 1
    } 
    else if (g2_punti > g1_punti) { // se il giocatore 2 ha più punti del giocatore 1
        printf("G2 vince con %d punti!\n", g2_punti); // stampa il messaggio di vittoria del giocatore 2
    }
     else { // se i due giocatori hanno lo stesso numero di punti
        printf("E un pareggio!\n"); // stampa il messaggio di pareggio
    }

    return 0; // fine del programma
}