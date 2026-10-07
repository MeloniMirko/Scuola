package gestionecase;

public class Casa {

    private String indirizzo;
    private int numeroStanze;
    private double superficie;
    private double prezzo;
    private boolean conGiardino;
    private int annoCostruzione;  

    // Costruttore principale
    public Casa(String indirizzo, int numeroStanze, double superficie, double prezzo, boolean conGiardino, int annoCostruzione) {
        this.indirizzo = indirizzo;
        this.numeroStanze = numeroStanze;
        this.superficie = superficie;
        this.prezzo = prezzo;
        this.conGiardino = conGiardino;
        this.annoCostruzione = annoCostruzione;
    }

    // Costruttore di copia
    public Casa(Casa altra) {
        this.indirizzo = altra.indirizzo;
        this.numeroStanze = altra.numeroStanze;
        this.superficie = altra.superficie;
        this.prezzo = altra.prezzo;
        this.conGiardino = altra.conGiardino;
        this.annoCostruzione = altra.annoCostruzione;
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
    public boolean getConGiardino() {
         return conGiardino; 
        }
    public int getAnnoCostruzione() {
         return annoCostruzione;
         }

    // Setter
    public void setIndirizzo(String indirizzo) {
         this.indirizzo = indirizzo;
         }
    public void setNumeroStanze(int numeroStanze) {
         if(numeroStanze>0) 
         this.numeroStanze=numeroStanze;
         }
    public void setSuperficie(double superficie) { 
        if(superficie>0) 
        this.superficie=superficie; }

    public void setPrezzo(double prezzo) {
         if(prezzo>=0) 
         this.prezzo=prezzo; 
        }
    public void setConGiardino(boolean conGiardino) {
         this.conGiardino = conGiardino;
         }
    public void setAnnoCostruzione(int anno) {
         if(anno>0) this.annoCostruzione = anno;
         }

    // Confronti tra case
    public String superficieMaggiore(Casa altra) {
        if (this.superficie > altra.superficie){
            return this.indirizzo;
        }else if (this.superficie < altra.superficie){
            return altra.indirizzo;
        }else{
            return "Le due case hanno la stessa superficie.";
        }
    }

    public String prezzoMaggiore(Casa altra) {
        if (this.prezzo > altra.prezzo){
           return this.indirizzo;
        }else if (this.prezzo < altra.prezzo){
            return altra.indirizzo;
        }else{
            return "Le due case hanno lo stesso prezzo.";
        }
    }

    // toString
    @Override
    public String toString() {
        return "Indirizzo: " + indirizzo +
               ", Stanze: " + numeroStanze +
               ", Superficie: " + superficie + " mq" +
               ", Prezzo: " + prezzo + "EUR" +
               ", Giardino: " + conGiardino +
               ", Anno Costruzione: " + annoCostruzione;
    }
}
