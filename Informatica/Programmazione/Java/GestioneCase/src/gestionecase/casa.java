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
        this.superficie = superficie;
        this.prezzo = prezzo;
             
    }

    // Costruttore di copia
    public casa(casa altraCasa) {
        this.indirizzo = altraCasa.indirizzo;
        this.numeroStanze = altraCasa.numeroStanze;
        this.superficie = altraCasa.superficie;
        this.prezzo = altraCasa.prezzo;
    }

    // Getter 
    public String getIndirizzo() {
         return indirizzo; 
        }
    public int getNumeroStanze() {
         return numeroStanze;
         }
    public double getSuperficie() { 
        return superficie;
     }
    public double getPrezzo() {
         return prezzo; 
        }

    // Setter 
    public void setIndirizzo(String indirizzo) {
         this.indirizzo = indirizzo; 
        }
    public void setNumeroStanze(int numeroStanze) { 
        if (numeroStanze > 0) this.numeroStanze = numeroStanze; 
    }
    public void setSuperficie(double superficie) { 
        if (superficie > 0) this.superficie = superficie; 
    }
    public void setPrezzo(double prezzo) { 
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
               ", Superficie: " + superficie + ", Prezzo: " + prezzo + " €]";
    }

    
}