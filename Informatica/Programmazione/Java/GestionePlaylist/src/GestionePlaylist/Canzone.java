
package playliststreaming;

public class Canzone {

    private String titolo;
    private String artista;
    private int durata;

    public Canzone(String titolo, String artista, int durata) {
        this.titolo = titolo;
        this.artista = artista;
        this.durata = durata;
    }

    public String getTitolo() {
        return titolo;
    }

    public void setTitolo(String titolo) {
        this.titolo = titolo;
    }

    public String getArtista() {
        return artista;
    }

    public void setArtista(String artista) {
        this.artista = artista;
    }

    public int getDurata() {
        return durata;
    }

    public void setDurata(int durata) {
        this.durata = durata;
    }

    @Override
    public boolean equals(Object obj) {
        if (obj instanceof Canzone) {
            Canzone c = (Canzone) obj;

            return titolo.equalsIgnoreCase(c.titolo)
                    && artista.equalsIgnoreCase(c.artista);
        }
        return false;
    }

    @Override
    public String toString() {
        return titolo + " - " + artista + " - " + durata;
    }
}
