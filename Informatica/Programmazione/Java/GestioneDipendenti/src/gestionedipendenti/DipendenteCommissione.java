package gestionedipendenti;

class DipendenteCommissione extends Dipendente {

    private double vendite;
    private double percentualeCommissione;

    // Costruttore
    public DipendenteCommissione(String nome, double vendite, double percentualeCommissione) {
        super(nome);
        this.vendite = vendite;
        this.percentualeCommissione = percentualeCommissione;
    }

    // Costruttore di copia
    public DipendenteCommissione(DipendenteCommissione d) {
        super(d);
        this.vendite = d.vendite;
        this.percentualeCommissione = d.percentualeCommissione;
    }

    // Getter
    public double getVendite() {
        return vendite;
    }

    public double getPercentualeCommissione() {
        return percentualeCommissione;
    }

    // Setter
    public void setVendite(double vendite) {
        this.vendite = vendite;
    }

    public void setPercentualeCommissione(double percentualeCommissione) {
        this.percentualeCommissione = percentualeCommissione;
    }

    @Override
    public double calcolaStipendio() {
        return vendite * percentualeCommissione;
    }
}