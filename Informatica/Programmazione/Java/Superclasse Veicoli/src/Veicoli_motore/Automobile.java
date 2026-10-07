package Veicoli_motore;

public class Automobile extends Veicolo {

    private int numeroPorte;
    private String alimentazione;

    // Costruttore principale
    public Automobile(String marca, String modello, int anno, double prezzoGiornaliero, int numeroPorte, String alimentazione) {
        super(marca, modello, anno, prezzoGiornaliero);
        this.numeroPorte = numeroPorte;
        this.alimentazione = alimentazione;

    }

    // Costruttore di copia
    public Automobile(Automobile a) {
        super(a);
        this.numeroPorte = a.numeroPorte;
        this.alimentazione = a.alimentazione;
    }

    public int getNumeroPorte() { return numeroPorte; }
    public String getAlimentazione() { return alimentazione; }

    public void setNumeroPorte(int numeroPorte) { this.numeroPorte = numeroPorte; }
    public void setAlimentazione(String alimentazione) { this.alimentazione = alimentazione; }

    @Override
    public double calcolaCosto(int giorni) {
        double costo = super.calcolaCosto(giorni);
        if (giorni > 7) {
            costo *= 0.9; // Applica uno sconto del 10%
        }
        return costo;
    }

    @Override
    public String stampaDettagli() {
        return super.stampaDettagli() + ", numeroPorte=" + this.numeroPorte + ", alimentazione=" + this.alimentazione;
    }
}
    
