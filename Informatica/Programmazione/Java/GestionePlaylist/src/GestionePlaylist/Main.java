
package playliststreaming;

import java.util.Scanner;

public class Main {

    public static void main(String[] args) {

        Scanner sc = new Scanner(System.in);
        PlaylistManager playlist = new PlaylistManager();

        
        playlist.aggiungiCanzone(new Canzone("Cenere", "Lazza", 208));
        playlist.aggiungiCanzone(new Canzone("Brividi", "Mahmood e Blanco", 199));
        playlist.aggiungiCanzone(new Canzone("Sinceramente", "Annalisa", 215));


        int scelta;

        do {
            System.out.println("\n--- MENU PLAYLIST ---");
            System.out.println("1. Aggiungi canzone");
            System.out.println("2. Controlla presenza");
            System.out.println("3. Rimuovi canzone");
            System.out.println("4. Cerca per durata");
            System.out.println("5. Rimuovi prima canzone");
            System.out.println("6. Modifica durata");
            System.out.println("7. Cerca per artista");
            System.out.println("8. Mostra playlist");
            System.out.println("0. Esci");
            System.out.print("Scelta: ");

            scelta = Integer.parseInt(sc.nextLine());

            switch (scelta) {

                case 1: {
                    System.out.print("Titolo: ");
                    String titolo = sc.nextLine();

                    System.out.print("Artista: ");
                    String artista = sc.nextLine();

                    System.out.print("Durata in secondi: ");
                    int durata = Integer.parseInt(sc.nextLine());

                    playlist.aggiungiCanzone(new Canzone(titolo, artista, durata));
                    break;
                }

                case 2: {
                    System.out.print("Titolo: ");
                    String titolo = sc.nextLine();

                    System.out.print("Artista: ");
                    String artista = sc.nextLine();

                    Canzone c = new Canzone(titolo, artista, 0);

                    if (playlist.contieneCanzone(c)) {
                        System.out.println("Canzone presente!");
                    } else {
                        System.out.println("Canzone non presente!");
                    }
                    break;
                }

                case 3: {
                    System.out.print("Titolo da rimuovere: ");
                    String titolo = sc.nextLine();

                    playlist.rimuoviCanzone(titolo);
                    break;
                }

                case 4: {
                    System.out.print("Durata minima in secondi: ");
                    int min = Integer.parseInt(sc.nextLine());

                    System.out.print("Durata massima in secondi: ");
                    int max = Integer.parseInt(sc.nextLine());

                    playlist.cercaDurata(min, max);
                    break;
                }

                case 5: {
                    playlist.rimuoviPrima();
                    break;
                }

                case 6: {
                    System.out.print("Titolo: ");
                    String titolo = sc.nextLine();

                    System.out.print("Artista: ");
                    String artista = sc.nextLine();

                    System.out.print("Nuova durata: ");
                    int durata = Integer.parseInt(sc.nextLine());

                    playlist.modificaDurata(titolo, artista, durata);
                    break;
                }

                case 7: {
                    System.out.print("Artista da cercare: ");
                    String artista = sc.nextLine();

                    playlist.cercaArtista(artista);
                    break;
                }

                case 8: {
                    playlist.mostraPlaylist();
                    break;
                }

                case 0: {
                    System.out.println("Programma terminato!");
                    break;
                }

                default: {
                    System.out.println("Scelta non valida!");
                }
            }

        } while (scelta != 0);

        sc.close();
    }
}
