
package playliststreaming;

import java.util.ArrayList;

public class PlaylistManager {

    private ArrayList<Canzone> playlist = new ArrayList<>();

    // Aggiunge una canzone senza duplicati
    public void aggiungiCanzone(Canzone c) {
        if (playlist.contains(c)) {
            System.out.println("Canzone gia presente!");
        } else {
            playlist.add(c);
            System.out.println("Canzone aggiunta!");
        }
    }

    // Controlla se una canzone esiste
    public boolean contieneCanzone(Canzone c) {
        return playlist.contains(c);
    }

    // Rimuove una canzone dal titolo
    public void rimuoviCanzone(String titolo) {
        for (int i = 0; i < playlist.size(); i++) {
            if (playlist.get(i).getTitolo().equalsIgnoreCase(titolo)) {
                playlist.remove(i);
                System.out.println("Canzone rimossa!");
                return;
            }
        }
        System.out.println("Canzone non trovata!");
    }

    // Cerca canzoni per durata
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

    // Modifica la durata di una canzone
    public void modificaDurata(String titolo, String artista, int durata) {
        for (Canzone c : playlist) {
            if (c.getTitolo().equalsIgnoreCase(titolo)
                    && c.getArtista().equalsIgnoreCase(artista)) {
                c.setDurata(durata);
                System.out.println("Durata modificata!");
                return;
            }
        }
        System.out.println("Canzone non trovata!");
    }

    // Cerca canzoni per artista
    public void cercaArtista(String artista) {
        for (Canzone c : playlist) {
            if (c.getArtista().equalsIgnoreCase(artista)) {
                System.out.println(c);
            }
        }
    }

    // Mostra tutte le canzoni
    public void mostraPlaylist() {
        if (playlist.isEmpty()) {
            System.out.println("Playlist vuota!");
        } else {
            for (Canzone c : playlist) {
                System.out.println(c);
            }
        }
    }
}
