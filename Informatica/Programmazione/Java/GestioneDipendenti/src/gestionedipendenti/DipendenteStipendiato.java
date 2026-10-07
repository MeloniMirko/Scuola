package gestionedipendenti;

class DipendenteStipendiato extends Dipendente {

    private double stipendioFisso;

    // Costruttore
    public DipendenteStipendiato(String nome, double stipendioFisso) {
        super(nome);
        this.stipendioFisso = stipendioFisso;
    }

    // Costruttore di copia
    public DipendenteStipendiato(DipendenteStipendiato d) {
        super(d);
        this.stipendioFisso = d.stipendioFisso;
    }

    // Getter
    public double getStipendioFisso() {
        return stipendioFisso;
    }

    // Setter
    public void setStipendioFisso(double stipendioFisso) {
        this.stipendioFisso = stipendioFisso;
    }

    @Override
    public double calcolaStipendio() {
        return stipendioFisso;
    }
}