/*Dopo aver chiesto all'utente di inserire una parola o una frase (senza spazi), verifica se questa è palindroma.
es: anna, osso, otto, itopinonavevanonipoti, angolobarabologna.*/

#include <stdio.h>
#include <string.h>
#include <ctype.h>

int main() {
    const int l=100;
    char s1[l], s2[l];
    int i,n;

    // introduzione al programma
    printf ("Benvenuto nel programma che verifica se una parola o una frase e' palindroma.\n");

    // acquisisce una stringa
    printf ("Inserisci una parola o una frase senza spazi: ");
    gets (s1);

    // trasforma la stringa in minuscolo
    n = strlen(s1);
    for (i=0 ; i<n ; i++) {
        s2[i]=s1[n-1-i];
    }
    s2[n]= '\0';

    // verifica se la stringa e' palindroma
    if (strcmp(s1,s2) == 0) {
        printf ("La parola o la frase e' palindroma.\n");
    }
    else { 
        printf ("La parola o la frase non e' palindroma.\n");
    }

    return 0;
}