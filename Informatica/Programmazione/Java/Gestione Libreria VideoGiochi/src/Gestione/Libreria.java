package Gestione;
public class Libreria {

    private Videogioco[] giochi;
    private int numeroVideogiochi;

    // Costruttore senza parametri
    public Libreria() {
        giochi = new Videogioco[10];
        numeroVideogiochi = 0;
    }

    // Costruttore di copia (copia profonda)
    public Libreria(Libreria altra) {
        this.giochi = new Videogioco[10];
        this.numeroVideogiochi = altra.numeroVideogiochi;

        for (int i = 0; i < altra.numeroVideogiochi; i++) {
            // Si assume che Videogioco abbia un costruttore di copia
            this.giochi[i] = new Videogioco(altra.giochi[i]);
        }
    }

    // Aggiunge un videogioco nella prima posizione libera
    public boolean aggiungiVideogioco(Videogioco v) {
        if (numeroVideogiochi >= giochi.length) {
            return false; // Libreria piena
        }

        giochi[numeroVideogiochi] = v;
        numeroVideogiochi++;
        return true;
    }

    // Rimuove videogioco in una certa posizione
    public boolean rimuoviVideogioco(int posizione) {
        if (posizione < 0 || posizione >= giochi.length) {
            return false; // Indice non valido
        }

        if (giochi[posizione] == null) {
            return false; // Posizione vuota
        }

        // Shift a sinistra per mantenere compattezza
        for (int i = posizione; i < numeroVideogiochi - 1; i++) {
            giochi[i] = giochi[i + 1];
        }

        giochi[numeroVideogiochi - 1] = null;
        numeroVideogiochi--;

        return true;
    }

    // Rimuove il primo videogioco con il titolo specificato
    public boolean rimuoviTitolo(String titolo) {
        for (int i = 0; i < numeroVideogiochi; i++) {
            if (giochi[i].getTitolo().equals(titolo)) {
                return rimuoviVideogioco(i);
            }
        }
        return false; // Non trovato
    }
}