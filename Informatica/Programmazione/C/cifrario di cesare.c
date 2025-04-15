#include <stdio.h>

int main() {
    char messaggio[100];
    int shift;
    int i = 0;

    // Input: messaggio da cifrare
    printf("Inserisci il messaggio da cifrare (puoi includere spazi): ");
    gets(messaggio);  // Legge una linea intera di testo (inclusi gli spazi)

    // Input: spostamento
    printf("Inserisci lo spostamento (shift): ");
    scanf("%d", &shift);

    // Cifratura del messaggio
    for (i = 0; messaggio[i] != '\0'; i++) {
        if (messaggio[i] >= 'a' && messaggio[i] <= 'z') {
            // Cifratura per le lettere minuscole
            messaggio[i] = ((messaggio[i] - 'a' + shift) % 28) + 'a';
        } else if (messaggio[i] >= 'A' && messaggio[i] <= 'Z') {
            // Cifratura per le lettere maiuscole
            messaggio[i] = ((messaggio[i] - 'A' + shift) % 28) + 'A';
        }
    }
    // Output: messaggio cifrato
    printf("Messaggio cifrato: %s\n", messaggio);
    return 0;
}
