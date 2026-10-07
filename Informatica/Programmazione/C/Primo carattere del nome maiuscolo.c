#include <stdio.h>
#include <ctype.h> // Include la libreria ctype.h per le funzioni di carattere
#include <string.h> // Include la libreria string.h per le funzioni di stringa

int main(){
    char nome[100];
    printf("Inserisci il tuo nome: ");
    scanf(" %s", nome);
    // Converti il primo carattere in maiuscolo
    if (nome[0] >= 97 && nome[0] <= 122) { // Verifica se è minuscolo
        nome[0] = toupper(nome[0]); // Converte il primo carattere in maiuscolo
        printf("Il tuo nome e :%s\n", nome);
    }
    else  { // Verifica se è maiuscolo
        printf("Il tuo nome e :%s\n", nome);
    }
    return 0;
}