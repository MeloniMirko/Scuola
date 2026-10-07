package Veicoli_motore;

public class Veicolo {
    // Attributi
     protected String marca;
     protected String modello;
     protected int anno;
     protected double prezzoGiornaliero;
  
    // Costruttore
    public Veicolo(String marca, String modello, int anno, double prezzoGiornaliero ) {
        this.marca = marca;
        this.modello = modello;
        this.anno = anno;
        this.prezzoGiornaliero = prezzoGiornaliero;
    }

    // Costruttore di copia 
    public Veicolo(Veicolo v) {
        this.marca = v.marca;
        this.modello = v.modello;
        this.anno = v.anno;
        this.prezzoGiornaliero = v.prezzoGiornaliero;
    }

    // Getter
    public String getMarca() { return marca; }
    public String getModello() { return modello; }
    public int getAnno() { return anno; }
    public double getPrezzoGiornaliero() { return prezzoGiornaliero; }

    // Setter
    public void setMarca(String marca) { this.marca = marca; }
    public void setModello(String modello) { this.modello = modello; }
    public void setAnno(int anno) { this.anno = anno; }
    public void setPrezzoGiornaliero(double prezzoGiornaliero) { this.prezzoGiornaliero = prezzoGiornaliero; }

    public String  stampaDettagli() {
        return "Veicolo [marca=" + marca + ", modello=" + modello + ", anno=" + anno + ", prezzoGiornaliero="
                + prezzoGiornaliero + "]";
    }
    
    public  double calcolaCosto(int giorni) {
         return giorni * prezzoGiornaliero;
     }
    
}
