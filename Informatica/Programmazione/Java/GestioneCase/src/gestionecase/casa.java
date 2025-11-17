package gestionecase;

public class casa {
    // Attributi privati
    private String indirizzo;
    private int numeroStanze;
    private double superficie;
    private double prezzo;
    private boolean haGiardino;

    // Costruttore principale
    public casa(String indirizzo, int numeroStanze, double superficie, double prezzo) {
        this.indirizzo = indirizzo;
        this.numeroStanze = numeroStanze;
        this.superficie = superficie;
        this.prezzo = prezzo;
        this.haGiardino = false;
             
    }

    // Costruttore di copia
    public casa(casa altraCasa) {
        this.indirizzo = altraCasa.indirizzo;
        this.numeroStanze = altraCasa.numeroStanze;
        this.superficie = altraCasa.superficie;
        this.prezzo = altraCasa.prezzo;
        this.haGiardino = altraCasa.haGiardino;
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
    public boolean HaGiardino() {
        return haGiardino;
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
    public void setHaGiardino(boolean haGiardino) {
        this.haGiardino = haGiardino;
    }

    // Metodi di confronto
    public String haSuperficieMaggioreDi(casa altraCasa) {
        if (this.superficie > altraCasa.superficie) {
            return this.indirizzo;
        } else if (this.superficie < altraCasa.superficie) {
            return altraCasa.indirizzo;
        } else {
            return "Entrambe le case hanno la stessa superficie.";
        }
    }

    public String haPrezzoMaggioreDi(casa altraCasa) {
        if (this.prezzo > altraCasa.prezzo) {
            return this.indirizzo;
        } else if (this.prezzo < altraCasa.prezzo) {
            return altraCasa.indirizzo;
        } else {
            return "Entrambe le case hanno lo stesso prezzo.";
        }
    }


    

    // toString
    @Override
    public String toString() {
        return "[Indirizzo: " + indirizzo + ", Stanze: " + numeroStanze +
               ", Superficie: " + superficie + ", Prezzo: " + prezzo + " EUR" +
               ", Ha Giardino: " + haGiardino  +   "]";
    }

  

    
    
}