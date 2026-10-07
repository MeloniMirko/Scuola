/*Due colleghi intendono fissare una riunione nel mese di Marzo,
pertanto devono identificare dei giorni nei quali
sono entrambi liberi da impegni. A tale scopo,
essi realizzano un programma C che permetta a
ciascuno di immettere le proprie disponibilità, e
che identifichi i giorni nei quali entrambi sono
liberi.
Manda a schermo i giorni disponibili o se non c'è nessun giorno disponibile.

(Suggerimento: crea due strutture che possano ospitare al massimo 31 giorni; fai inserire al primo e al secondo collega i giorni in 
cui è disponibile, devi prevedere l'interruzione quando ha finito di inserire i giorni; confronta via via i giorni del secondo 
collega con quelli del primo: man mano che ne trovi uno che coincide, dovrai contarlo e mandare la stampa del risultato)*/

#include <stdio.h>

int main(){
    const int N = 31;
    int a[N];
    int b[N];
    int i=-1;
    int j=-1;
    int k=0;
    int h;
    int f=0;
    
    printf("Scelta data per la prossima riunione \n\n");

    //carica i giorni del primo collega
    printf("Collega n.1:Inserisci i giorni in cui sei disponibile (1-31): \n");
    printf("Scrivi 0 per interrompere l'inserimento\n");
    do{
        i++;
        scanf("%d",&a[i]);
    } while (a[i]!=0);

    //carica i giorni del secondo collega
    printf("Collega n.2:Inserisci i giorni in cui sei disponibile (1-31): \n");
    printf("Scrivi 0 per interrompere l'inserimento\n");
    do{
        j++;
        scanf("%d",&b[j]);
    } while (b[j]!=0);

    printf("Giorni indicati dal primo collega");
    for (k=0; k<i; k++) {
        printf(" %d",a[k]);
    }

    printf("\nGiorni indicati dal secondo collega");
    for (k=0; k<j; k++) {
        printf(" %d",b[k]);
    }
    for(k=0;k<i;k++){
        for(h=0;h<j;h++){
            if(a[k]==b[k]){
                printf("\nGiorno disponibile: %d",a[k]);
                f=1;
            }
    }
}

if(f==0){
    printf("\nNon ci sono giorni disponibili per la prossima riunione");
}
return 0;


}