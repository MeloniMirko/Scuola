package gestioneCD;

public class CD {

    private static int prossimoId = 1;

    private int id;
    private String titolo;
    private String casaEditrice;
    private int annoUscita;
    private Brano[] brani;
    private int numeroBrani;

    /* Costruttore vuoto */
    public CD() {
        id = prossimoId++;
        brani = new Brano[50];
        numeroBrani = 0;
    }

    /* Costruttore completo */
    public CD(String titolo, String casaEditrice, int annoUscita) {
        id = prossimoId++;
        brani = new Brano[50];
        numeroBrani = 0;

        setTitolo(titolo);
        setCasaEditrice(casaEditrice);
        setAnnoUscita(annoUscita);
    }

    /* Costruttore di copia */
    public CD(CD c) {
        id = prossimoId++;
        brani = new Brano[50];
        numeroBrani = c.numeroBrani;

        setTitolo(c.getTitolo());
        setCasaEditrice(c.getCasaEditrice());
        setAnnoUscita(c.getAnnoUscita());

        for (int i = 0; i < numeroBrani; i++) {
            brani[i] = new Brano(c.brani[i]); // copia profonda
        }
    }

    /* Getter e Setter */
    public int getId() {
        return id;
    }

    public String getTitolo() {
        return titolo;
    }

    public void setTitolo(String titolo) {
        this.titolo = titolo;
    }

    public String getCasaEditrice() {
        return casaEditrice;
    }

    public void setCasaEditrice(String casaEditrice) {
        this.casaEditrice = casaEditrice;
    }

    public int getAnnoUscita() {
        return annoUscita;
    }

    public void setAnnoUscita(int annoUscita) {
        this.annoUscita = annoUscita;
    }

    /* Metodi richiesti */
    public boolean inserisciBrano(Brano b) {
        if (numeroBrani >= 50)
            return false;

        brani[numeroBrani++] = new Brano(b); // copia del brano
        return true;
    }

    public Brano cercaBrano(int posizione) {
        if (posizione < 0 || posizione >= numeroBrani)
            return null;

        return brani[posizione];
    }

    public Brano cercaBrano(String titolo) {
        for (int i = 0; i < numeroBrani; i++) {
            if (brani[i].getTitolo().equalsIgnoreCase(titolo))
                return brani[i];
        }
        return null;
    }

    public boolean rimuoviBrano(int posizione) {
        if (posizione < 0 || posizione >= numeroBrani)
            return false;

        for (int i = posizione; i < numeroBrani - 1; i++) {
            brani[i] = brani[i + 1];
        }
        brani[--numeroBrani] = null;
        return true;
    }

    public boolean rimuoviBrano(String titolo) {
        for (int i = 0; i < numeroBrani; i++) {
            if (brani[i].getTitolo().equalsIgnoreCase(titolo))
                return rimuoviBrano(i);
        }
        return false;
    }

    public int durataTotale() {
        int somma = 0;
        for (int i = 0; i < numeroBrani; i++) {
            somma += brani[i].getDurata();
        }
        return somma;
    }

    public int braniSotto4Minuti() {
        int count = 0;
        for (int i = 0; i < numeroBrani; i++) {
            if (brani[i].getDurata() < 240)
                count++;
        }
        return count;
    }
}
