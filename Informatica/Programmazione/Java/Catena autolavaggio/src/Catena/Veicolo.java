package Catena;
public class Veicolo {
    // Attributi
    private String targa;
    private String marca;
    private String modello;
    private int cilindrata;
    private int annoAcquisto;
    private int numPosti;

    // Costruttore
    public Veicolo(String targa, String marca, String modello, int cilindrata, int annoAcquisto, int numPosti) {
        this.targa = targa;
        this.marca = marca;
        this.modello = modello;
        this.cilindrata = cilindrata;
        this.annoAcquisto = annoAcquisto;
        this.numPosti = numPosti;
    }

    // Costruttore di copia
    public Veicolo(Veicolo v) {
        this.targa = v.targa;
        this.marca = v.marca;
        this.modello = v.modello;
        this.cilindrata = v.cilindrata;
        this.annoAcquisto = v.annoAcquisto;
        this.numPosti = v.numPosti;
    }

    // Getter e Setter
    public String getTarga() { 
        return targa;
     }
    public void setTarga(String targa) { 
        this.targa = targa; 
    }

    public String getMarca() {
         return marca;
         }
    public void setMarca(String marca) {
         this.marca = marca;
         }

    public String getModello() {
         return modello; 
        }
    public void setModello(String modello) {
         this.modello = modello; 
        }

    public int getCilindrata() {
         return cilindrata; 
        }
    public void setCilindrata(int cilindrata) {
         this.cilindrata = cilindrata;
         }

    public int getAnnoAcquisto() {
         return annoAcquisto; 
        }
    public void setAnnoAcquisto(int annoAcquisto) {
         this.annoAcquisto = annoAcquisto;
         }

    public int getNumPosti() {
         return numPosti; 
        }
    public void setNumPosti(int numPosti) {
         this.numPosti = numPosti; 
        }

    // toString
    @Override
    public String toString() {
        return "Veicolo{" +
                "targa='" + targa + '\'' +
                ", marca='" + marca + '\'' +
                ", modello='" + modello + '\'' +
                ", cilindrata=" + cilindrata +
                ", annoAcquisto=" + annoAcquisto +
                ", numPosti=" + numPosti +
                '}';
    }

    // Metodo confronta: restituisce il veicolo più potente
    public Veicolo confronta(Veicolo altro) {
        if (this.cilindrata > altro.cilindrata)
            return this;
        else if (this.cilindrata < altro.cilindrata)
            return altro;
        else
            return null; // stessa potenza
    }

    public boolean noleggio(int personeRichieste) {
    if (personeRichieste <= numeroPosti) {
        System.out.println("Noleggio possibile: posti sufficienti.");
        return true;
    } else {
        System.out.println("Noleggio non possibile: posti insufficienti.");
        return false;
    }
}

}










