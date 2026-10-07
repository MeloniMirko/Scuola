/*Scrivere un programma che dato in input il raggio di un cerchio ne stampi l'area utilizzando due funzioni:
- area1(float r) che riceve il raggio dal programma principale attraverso un passaggio per valore.
- area2(float *r) la seconda che lo riceva col passaggio per indirizzo*/

#include <stdio.h>
#define PI 3.14159

// Funzione con passaggio per valore
float area1(float r) {
    return PI * r * r;
}

// Funzione con passaggio per indirizzo
float area2(float *r) {
    return PI * (*r) * (*r);
}

int main() {
    float raggio;

    // Input del raggio
    printf("Inserisci il raggio del cerchio: ");
    scanf("%f", &raggio);

    // Uso della funzione area1 (passaggio per valore)
    float risultato1 = area1(raggio);
    printf("Area calcolata con passaggio per valore: %.2f\n", risultato1);

    // Uso della funzione area2 (passaggio per indirizzo)
    float risultato2 = area2(&raggio);
    printf("Area calcolata con passaggio per indirizzo: %.2f\n", risultato2);

    return 0;
}
