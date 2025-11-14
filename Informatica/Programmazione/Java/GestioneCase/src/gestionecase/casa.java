package gestionecase;

public class casa {
    // Attributi privati
    private String indirizzo;
    private int numeroStanze;
    private double superficie;
    private double prezzo;

    // Costruttore principale
    public casa(String indirizzo, int numeroStanze, double superficie, double prezzo) {
        this.indirizzo = indirizzo;
        this.numeroStanze = numeroStanze;
        setSuperficie(superficie); // setter privato chiamato internamente
        setPrezzo(prezzo);         // setter privato chiamato internamente
    }

    // Costruttore di copia
    public casa(casa altraCasa) {
        this.indirizzo = altraCasa.indirizzo;
        this.numeroStanze = altraCasa.numeroStanze;
        this.superficie = altraCasa.superficie;
        this.prezzo = altraCasa.prezzo;
    }

    // Getter pubblici
    public String getIndirizzo() { return indirizzo; }
    public int getNumeroStanze() { return numeroStanze; }
    public double getSuperficie() { return superficie; }
    public double getPrezzo() { return prezzo; }

    // Setter privati
    private void setIndirizzo(String indirizzo) { this.indirizzo = indirizzo; }
    private void setNumeroStanze(int numeroStanze) { 
        if (numeroStanze > 0) this.numeroStanze = numeroStanze; 
    }
    private void setSuperficie(double superficie) { 
        if (superficie > 0) this.superficie = superficie; 
    }
    private void setPrezzo(double prezzo) { 
        if (prezzo >= 0) this.prezzo = prezzo; 
    }

    // Metodi di confronto
    public boolean haSuperficieMaggioreDi(casa altraCasa) {
        return this.superficie > altraCasa.superficie;
    }

    public boolean haPrezzoMaggioreDi(casa altraCasa) {
        return this.prezzo > altraCasa.prezzo;
    }

    // toString
    @Override
    public String toString() {
        return "Casa [Indirizzo: " + indirizzo + ", Stanze: " + numeroStanze +
               ", Superficie: " + superficie + " m², Prezzo: " + prezzo + " €]";
    }

    // Metodo pubblico per modificare gli attributi dall'esterno in modo controllato
    public void aggiornaCasa(String nuovoIndirizzo, int nuoveStanze, double nuovaSuperficie, double nuovoPrezzo) {
        setIndirizzo(nuovoIndirizzo);
        setNumeroStanze(nuoveStanze);
        setSuperficie(nuovaSuperficie);
        setPrezzo(nuovoPrezzo);
    }
}