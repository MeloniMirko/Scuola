//Crea un programma che, data una stringa s1 di N caratteri, la inverta e salvi la parola invertita nella stringa s2.

#include <stdio.h>
#include <string.h>

int main() {
    const int DIM= 25;
    int n, x;
    char s[DIM];
    char app[DIM]; // Deve essere un array per poter contenere la stringa originale

    printf("Inserisci il nome: ");
    scanf("%s", s);

    n = strlen(s);


    // Copia la stringa originale in app
    strcpy(app, s);

    // Inverte la stringa s
    for (x = 0; x < n / 2; x++) {
        char temp = s[x];
        s[x] = s[n - x - 1];
        s[n - x - 1] = temp;
    }

    printf("La parola invertita e' %s\n", s);
    printf(" La stringa originale e' %s\n", app);

    return 0;
}