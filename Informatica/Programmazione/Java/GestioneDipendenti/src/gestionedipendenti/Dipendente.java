package gestionedipendenti;

abstract class Dipendente {

    private String nome;

    // Costruttore
    public Dipendente(String nome) {
        this.nome = nome;
    }

    // Costruttore di copia
    public Dipendente(Dipendente d) {
        this.nome = d.nome;
    }

    // Getter
    public String getNome() {
        return nome;
    }

    // Setter
    public void setNome(String nome) {
        this.nome = nome;
    }

    // Metodo astratto
    public abstract double calcolaStipendio();
}