package Veicoli_motore;

public class Motocicletta extends Veicolo{

    private int cilindrata;
    private boolean bauletto;

    // Costruttore principale
    public Motocicletta(String marca, String modello, int anno, double prezzoGiornaliero, int cilindrata, boolean bauletto) {
        super(marca, modello, anno, prezzoGiornaliero);
        this.cilindrata = cilindrata;
        this.bauletto = bauletto;
    }

    // Costruttore di copia
    public Motocicletta(Motocicletta m) {
        super(m);
        this.cilindrata = m.cilindrata;
        this.bauletto = m.bauletto;
    }

    public int getCilindrata() { return cilindrata; }
    public boolean isBauletto() { return bauletto; }

    public void setCilindrata(int cilindrata) { this.cilindrata = cilindrata; }
    public void setBauletto(boolean bauletto) { this.bauletto = bauletto; }

    //Override di calcolaCosto(int giorni) con sconto fisso di 20 € per noleggi > 5 giorni (verificare che il costo del noleggio sia comunque superiore a zero).


    @Override
    public String stampaDettagli() {
        return super.stampaDettagli() + ", cilindrata=" + this.cilindrata + ", bauletto=" + this.bauletto;
    }
}
