#include <stdio.h>

int main() {
    int brani_ascoltati, brani_playlist, playlist_create;

    // Richiesta dei dati in input
    printf("Inserisci il numero di brani ascoltati nell'ultimo mese: ");
    scanf("%d", &brani_ascoltati);

    printf("Inserisci il numero di brani aggiunti alle playlist: ");
    scanf("%d", &brani_playlist);

    printf("Inserisci il numero di playlist create: ");
    scanf("%d", &playlist_create);

    // Verifica se l'utente è attivo
    if ((brani_ascoltati >= 100 && brani_playlist >= 10) || (brani_ascoltati > 50 && playlist_create >= 1)) {
        printf("L'utente è attivo!\n");
    } else {
        printf("L'utente non è attivo.\n");
    }

    return 0;
}
