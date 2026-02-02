package gestioneCD;

public class Brano {

    private String titolo;
    private String autore;
    private int durata; // in secondi
    private int numeroTraccia;

    /* Costruttore completo */
    public Brano(String titolo, String autore, int durata, int numeroTraccia) {
        setTitolo(titolo);
        setAutore(autore);
        setDurata(durata);
        setNumeroTraccia(numeroTraccia);
    }

    /* Costruttore di copia */
    public Brano(Brano b) {
        setTitolo(b.getTitolo());
        setAutore(b.getAutore());
        setDurata(b.getDurata());
        setNumeroTraccia(b.getNumeroTraccia());
    }

    /* Getter e Setter */
    public String getTitolo() {
        return titolo;
    }

    public void setTitolo(String titolo) {
        this.titolo = titolo;
    }

    public String getAutore() {
        return autore;
    }

    public void setAutore(String autore) {
        this.autore = autore;
    }

    public int getDurata() {
        return durata;
    }

    public void setDurata(int durata) {
        this.durata = durata;
    }

    public int getNumeroTraccia() {
        return numeroTraccia;
    }

    public void setNumeroTraccia(int numeroTraccia) {
        this.numeroTraccia = numeroTraccia;
    }

    @Override
    public String toString() {
        return "Traccia " + numeroTraccia + " - " + titolo +
               " (" + autore + ") - " + durata + " sec";
    }
}
