/*Leggi il raggio di una circonferenza e calcola il
perimetro e l'area del cerchio che essa delimita*/
/*creiamo tre funzioni e una prcedura:
la prima funzione serve per leggere il raggio
la seconda funzione calcola il perimetro
la terza funzione calcola l'area
infine creiamo una procedura per stampare i risultati*/

#include <stdio.h>
#define PI 3.14

int leggi_dato();
float perimetro(int r);
float area(int r);
void stampa(float p, float a);

int main() {
    int r;
    float p, a;
    printf("Questo progamma calcola circonferenza e area di un cerchio.\n");
    r=leggi_dato(); //chiamata della prima funzione
    p=perimetro(r); //chiamata della seconda funzione
    a=area(r); //chiamata della terza funzione
    stampa(p, a); //chiamata della procedura
}

//Definizione della funzione leggi_dato
int leggi_dato() {
    int r;
    do {
        printf("Scrivi il valore del raggio (maggiore di zero): ");
        scanf("%d", &r);
    } while (r<=0);
    return r;
}

//Definizione della funzione perimetro:

float perimetro(int r) {
    float p;
    p=2*PI*r;
    return p;
}

//Definizione della funzione area:

float area(int r) {
    float a;
    a=r*r*PI;
    return a;
}

//Definizione della procedura
void stampa(float p, float a) {
    printf("\nIl valore del perimetro del cerchio e' %.2f", p);
    printf("\nIl valore dell'area del cerchio e' %.2f", a);
   
}