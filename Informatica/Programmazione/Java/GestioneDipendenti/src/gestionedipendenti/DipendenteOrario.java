package gestionedipendenti;

class DipendenteOrario extends Dipendente {

    private int oreLavorate;
    private double salarioOrario;

    // Costruttore
    public DipendenteOrario(String nome, int oreLavorate, double salarioOrario) {
        super(nome);
        this.oreLavorate = oreLavorate;
        this.salarioOrario = salarioOrario;
    }

    // Costruttore di copia
    public DipendenteOrario(DipendenteOrario d) {
        super(d);
        this.oreLavorate = d.oreLavorate;
        this.salarioOrario = d.salarioOrario;
    }

    // Getter
    public int getOreLavorate() {
        return oreLavorate;
    }

    public double getSalarioOrario() {
        return salarioOrario;
    }

    // Setter
    public void setOreLavorate(int oreLavorate) {
        this.oreLavorate = oreLavorate;
    }

    public void setSalarioOrario(double salarioOrario) {
        this.salarioOrario = salarioOrario;
    }

    @Override
    public double calcolaStipendio() {
        return oreLavorate * salarioOrario;
    }
}