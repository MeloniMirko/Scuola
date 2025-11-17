package Catena;
class Veicolo {
    private String targa;
    private String marca;
    private String modello;
    private int cilindrata;
    private int annoAcquisto;
    private int numeroPosti;

    // Costruttore principale
    public Veicolo(String targa, String marca, String modello, int cilindrata, int annoAcquisto, int numeroPosti) {
        this.targa = targa;
        this.marca = marca;
        this.modello = modello;
        this.cilindrata = cilindrata;
        this.annoAcquisto = annoAcquisto;
        this.numeroPosti = numeroPosti;
    }

    // Costruttore di copia 
    public Veicolo(Veicolo altro) {
        this.targa = altro.targa;
        this.marca = altro.marca;
        this.modello = altro.modello;
        this.cilindrata = altro.cilindrata;
        this.annoAcquisto = altro.annoAcquisto;
        this.numeroPosti = altro.numeroPosti;
    }

    // Getter 
    public String getTarga() { 
        return targa;
     }
    public String getMarca() {
         return marca; 
        }
    public String getModello() { 
        return modello; 
    }
    public int getCilindrata() {
         return cilindrata; 
        }
    public int getAnnoAcquisto() {
         return annoAcquisto;
         }
    public int getNumeroPosti() {
         return numeroPosti; 
        }

    // Setter 
    private void setTarga(String targa) {
         this.targa = targa; 
        }
    private void setMarca(String marca) { 
        this.marca = marca;
     }
    public void setModello(String modello) {
         this.modello = modello; 
        }
    private void setCilindrata(int cilindrata) {
         this.cilindrata = cilindrata; 
        }
    private void setAnnoAcquisto(int annoAcquisto) { 
        this.annoAcquisto = annoAcquisto; 
    }
    public void setNumeroPosti(int numeroPosti) { 
        this.numeroPosti = numeroPosti;
     }

    // toString
    @Override
    public String toString() {
        return "Targa: " + targa + " - Marca: " + marca + "  Modello: " + modello +"  Cilindrata: " + cilindrata + "  Anno Acquisto: " + annoAcquisto +"  Numero Posti: " + numeroPosti;
    }

    // Confronta potenza
    public String confrontaPotenza(Veicolo altro) {
        if (this.cilindrata > altro.cilindrata) return "Questo veicolo è più potente";
        else if (this.cilindrata < altro.cilindrata) return "L'altro veicolo è più potente";
        else return "Entrambi i veicoli hanno la stessa potenza";
    }

   
    public boolean noleggio(int persone) {
        return persone <= numeroPosti;
    }

    
    

    
}