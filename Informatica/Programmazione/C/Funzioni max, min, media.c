#include <stdio.h>

// Funzione per trovare il massimo tra tre numeri interi
int max(int a, int b, float c) {
    int max_val = a;  // Inizializzo il massimo con il primo numero (int)
    if (b > max_val) {
        max_val = b;  // Se il secondo numero (int) è maggiore, lo aggiorno
    }
    if (c > max_val) {
        max_val = (int)c;  // Converto il terzo numero (float) in int, se maggiore
    }
    return max_val;
}

// Funzione per trovare il minimo tra tre numeri interi
int min(int a, int b, float c) {
    int min_val = a;  // Inizializzo il minimo con il primo numero (int)
    if (b < min_val) {
        min_val = b;  // Se il secondo numero (int) è minore, lo aggiorno
    }
    if (c < min_val) {
        min_val = (int)c;  // Converto il terzo numero (float) in int, se minore
    }
    return min_val;
}

// Funzione per calcolare la media di tre numeri (due interi e uno decimale)
float media(int a, int b, float c) {
    return (a + b + c) / 3.0;  // Media tra i numeri interi e il numero decimale
}

int main() {
    int num1, num2;
    float num3;
    int scelta;

    // Ciclo per permettere all'utente di ripetere l'operazione
    do {
        // Chiedi all'utente di inserire i primi due numeri (interi)
        printf("Inserisci il primo numero (intero): ");
        scanf("%d", &num1);
        printf("Inserisci il secondo numero (intero): ");
        scanf("%d", &num2);

        // Chiedi all'utente di inserire il terzo numero (decimale)
        printf("Inserisci il terzo numero (decimale): ");
        scanf("%f", &num3);

        // Mostra il menu e chiedi la scelta dell'utente
        printf("\nScegli cosa vuoi calcolare:\n");
        printf("1. Massimo\n");
        printf("2. Minimo\n");
        printf("3. Media\n");
        printf("Inserisci la tua scelta (1/2/3): ");
        scanf("%d", &scelta);

        // Esegui l'operazione scelta
        switch (scelta) {
            case 1:
                printf("Il massimo tra %d, %d e %.2f è: %d\n", num1, num2, num3, max(num1, num2, num3));
                break;
            case 2:
                printf("Il minimo tra %d, %d e %.2f è: %d\n", num1, num2, num3, min(num1, num2, num3));
                break;
            case 3:
                printf("La media tra %d, %d e %.2f è: %.2f\n", num1, num2, num3, media(num1, num2, num3));
                break;
            default:
                printf("Scelta non valida!\n");
        }

        // Chiedi all'utente se vuole ripetere l'operazione
        printf("\nVuoi ripetere l'operazione? (1 per sì, 0 per no): ");
        scanf("%d", &scelta);

    } while (scelta == 1);

    printf("Arrivederci!\n");
    return 0;
}
