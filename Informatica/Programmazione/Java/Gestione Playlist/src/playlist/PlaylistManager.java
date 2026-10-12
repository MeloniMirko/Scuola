package playlist;

import java.util.ArrayList;

public class PlaylistManager {
    private ArrayList<Canzone> playlist = new ArrayList<>();

    
    public void aggiungi(Canzone c) {
        if (!playlist.contains(c)) {
            playlist.add(c);
            System.out.println("Canzone aggiunta!");
        } else {
            System.out.println("Canzone già presente!");
        }
    }

    // Controlla se una canzone è presente
    public boolean presente(Canzone c) {
        return playlist.contains(c);
    }

    // Rimuove una canzone tramite il titolo
    public void rimuovi(String titolo) {
        for (int i = 0; i < playlist.size(); i++) {
            if (playlist.get(i).getTitolo().equalsIgnoreCase(titolo)) {
                playlist.remove(i);
                System.out.println("Canzone rimossa!");
                return;
            }
        }
        System.out.println("Canzone non trovata!");
    }

    // Cerca le canzoni in un intervallo di durata
    public void cercaDurata(int min, int max) {
        for (Canzone c : playlist) {
            if (c.getDurata() >= min && c.getDurata() <= max) {
                System.out.println(c);
            }
        }
    }

    // Rimuove la prima canzone
    public void rimuoviPrima() {
        if (!playlist.isEmpty()) {
            playlist.remove(0);
            System.out.println("Prima canzone rimossa!");
        } else {
            System.out.println("Playlist vuota!");
        }
    }

    // Modifica la durata tramite il titolo
    public void modificaDurata(String titolo, int durata) {
        for (Canzone c : playlist) {
            if (c.getTitolo().equalsIgnoreCase(titolo)) {
                c.setDurata(durata);
                System.out.println("Durata modificata!");
                return;
            }
        }
        System.out.println("Canzone non trovata!");
    }

    // Cerca le canzoni di un artista
    public void cercaArtista(String artista) {
        for (Canzone c : playlist) {
            if (c.getArtista().equalsIgnoreCase(artista)) {
                System.out.println(c);
            }
        }
    }

    // Visualizza tutta la playlist
    public void visualizza() {
        if (playlist.isEmpty()) {
            System.out.println("Playlist vuota!");
        } else {
            for (Canzone c : playlist) {
                System.out.println(c);
            }
        }
    }
}