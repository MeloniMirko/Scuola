package playlist;

import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner input = new Scanner(System.in);
        PlaylistManager p = new PlaylistManager();

        int scelta;

        do {
            System.out.println("\n--- MENU PLAYLIST ---");
            System.out.println("1. Aggiungi canzone");
            System.out.println("2. Visualizza playlist");
            System.out.println("3. Controlla presenza canzone");
            System.out.println("4. Rimuovi canzone per titolo");
            System.out.println("5. Cerca per durata");
            System.out.println("6. Rimuovi prima canzone");
            System.out.println("7. Modifica durata");
            System.out.println("8. Cerca per artista");
            System.out.println("0. Esci");
            System.out.print("Scelta: ");

            scelta = input.nextInt();
            input.nextLine();

            switch (scelta) {
                case 1:
                    System.out.print("Titolo: ");
                    String titolo = input.nextLine();

                    System.out.print("Artista: ");
                    String artista = input.nextLine();

                    System.out.print("Durata in secondi: ");
                    int durata = input.nextInt();
                    input.nextLine();

                    p.aggiungi(new Canzone(titolo, artista, durata));
                    break;

                case 2:
                    p.visualizza();
                    break;

                case 3:
                    System.out.print("Titolo: ");
                    titolo = input.nextLine();

                    System.out.print("Artista: ");
                    artista = input.nextLine();

                    Canzone c = new Canzone(titolo, artista, 0);

                    if (p.presente(c)) {
                        System.out.println("Canzone presente!");
                    } else {
                        System.out.println("Canzone non presente!");
                    }
                    break;

                case 4:
                    System.out.print("Titolo da rimuovere: ");
                    titolo = input.nextLine();
                    p.rimuovi(titolo);
                    break;

                case 5:
                    System.out.print("Durata minima in secondi: ");
                    int min = input.nextInt();

                    System.out.print("Durata massima in secondi: ");
                    int max = input.nextInt();
                    input.nextLine();

                    p.cercaDurata(min, max);
                    break;

                case 6:
                    p.rimuoviPrima();
                    break;

                case 7:
                    System.out.print("Titolo della canzone: ");
                    titolo = input.nextLine();

                    System.out.print("Nuova durata in secondi: ");
                    durata = input.nextInt();
                    input.nextLine();

                    p.modificaDurata(titolo, durata);
                    break;

                case 8:
                    System.out.print("Nome artista: ");
                    artista = input.nextLine();
                    p.cercaArtista(artista);
                    break;

                case 0:
                    System.out.println("Uscita dal programma.");
                    break;

                default:
                    System.out.println("Scelta non valida!");
            }

        } while (scelta != 0);

        input.close();
    }
}