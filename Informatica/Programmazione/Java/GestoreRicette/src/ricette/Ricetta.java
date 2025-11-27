public class Ricetta {

    private String nome;
    private int tempoPreparazione;
    private String difficolta;
    private int porzioni;

    private Ingrediente ingrediente1;
    private Ingrediente ingrediente2;
    private Ingrediente ingrediente3;

    
    public Ricetta(String nome, int tempoPreparazione, String difficolta, int porzioni,
                   Ingrediente ingrediente1, Ingrediente ingrediente2, Ingrediente ingrediente3) {
        this.nome = nome;
        this.tempoPreparazione = tempoPreparazione;
        this.difficolta = difficolta;
        this.porzioni = porzioni;
        this.ingrediente1 = ingrediente1;
        this.ingrediente2 = ingrediente2;
        this.ingrediente3 = ingrediente3;
    }

    
    public Ricetta(Ricetta altra) {
        this.nome = altra.nome;
        this.tempoPreparazione = altra.tempoPreparazione;
        this.difficolta = altra.difficolta;
        this.porzioni = altra.porzioni;
        this.ingrediente1 = new Ingrediente(altra.ingrediente1);
        this.ingrediente2 = new Ingrediente(altra.ingrediente2);
        this.ingrediente3 = new Ingrediente(altra.ingrediente3);
    }

    
    public String getNome() { return nome; }
    public void setNome(String nome) { this.nome = nome; }

    public int getTempoPreparazione() { return tempoPreparazione; }
    public void setTempoPreparazione(int tempoPreparazione) { this.tempoPreparazione = tempoPreparazione; }

    public String getDifficolta() { return difficolta; }
    public void setDifficolta(String difficolta) { this.difficolta = difficolta; }

    public int getPorzioni() { return porzioni; }
    public void setPorzioni(int porzioni) { this.porzioni = porzioni; }

    public Ingrediente getIngrediente1() { return ingrediente1; }
    public Ingrediente getIngrediente2() { return ingrediente2; }
    public Ingrediente getIngrediente3() { return ingrediente3; }

    @Override
    public String toString() {
        return  "Ricetta: " + nome + "\n" +
                "Porzioni: " + porzioni + "\n" +
                "Tempo: " + tempoPreparazione + " min\n" +
                "Difficoltà: " + difficolta + "\n" +
                "Ingredienti:\n" +
                " - " + ingrediente1 + "\n" +
                " - " + ingrediente2 + "\n" +
                " - " + ingrediente3;
    }

    
    public void scalaDosi(int nuovePorzioni) {
        if (porzioni <= 0) return; 
        double fattore = (double) nuovePorzioni / porzioni;
        ingrediente1.scalaQuantita(fattore);
        ingrediente2.scalaQuantita(fattore);
        ingrediente3.scalaQuantita(fattore);
        porzioni = nuovePorzioni;
    }

    
    public double calcolaCalorieTotali() {
        return ingrediente1.calorieTotali()
             + ingrediente2.calorieTotali()
             + ingrediente3.calorieTotali();
    }

    
    public double stimaCostoTotale() {
        return ingrediente1.costoTotale()
             + ingrediente2.costoTotale()
             + ingrediente3.costoTotale();
    }

    
    public boolean isVegetariana() {
        return ingrediente1.isVegetariano()
            && ingrediente2.isVegetariano()
            && ingrediente3.isVegetariano();
    }

    
    public boolean sostituisciIngrediente(int n, Ingrediente nuovo) {
        if (n == 1) { ingrediente1 = nuovo; return true; }
        if (n == 2) { ingrediente2 = nuovo; return true; }
        if (n == 3) { ingrediente3 = nuovo; return true; }
        return false;
    }

    
    public String confrontaDifficolta(Ricetta altra) {
        int d1 = difficoltaToNum(this.difficolta);
        int d2 = difficoltaToNum(altra.difficolta);
        if (d1 > d2) return "Più difficile";
        if (d1 < d2) return "Meno difficile";
        return "Stessa difficoltà";
    }

    
    private int difficoltaToNum(String d) {
        if (d == null) return 2; 
        return switch (d) {w
            case "Facile" -> 1;
            case "Media" -> 2;
            case "Difficile" -> 3;
            default -> 2;
        }; 
    }

    
    public Ricetta adattaRicettaPerOspiti(int numOspiti) {
        Ricetta copia = new Ricetta(this); 
        copia.scalaDosi(numOspiti);
        return copia;
    }
}
