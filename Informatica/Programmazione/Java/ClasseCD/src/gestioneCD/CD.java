package gestioneCD;

public class CD {

    private String titolo;
    private String casaEditrice;
    private int annoUscita;

    private Brano[] brani;
    private int nBrani;

    public CD(String titolo, String casaEditrice, int annoUscita) {
        setTitolo(titolo);
        setCasaEditrice(casaEditrice);
        setAnnoUscita(annoUscita);

        brani = new Brano[50];
        nBrani = 0;
    }

    public void setTitolo(String titolo) {
        this.titolo = titolo;
    }

    public void setCasaEditrice(String casaEditrice) {
        this.casaEditrice = casaEditrice;
    }

    public void setAnnoUscita(int annoUscita) {
        this.annoUscita = annoUscita;
    }

    /* inserisce un brano */
    public void aggiungiBrano(Brano b) {
        if (nBrani < 50) {
            brani[nBrani] = new Brano(b);
            nBrani++;
        }
    }

    /* cerca per posizione */
    public Brano cercaBrano(int posizione) {
        if (posizione >= 0 && posizione < nBrani)
            return brani[posizione];
        return null;
    }

    /* cerca per titolo */
    public Brano cercaBrano(String titolo) {
        for (int i = 0; i < nBrani; i++) {
            if (brani[i].getTitolo().equals(titolo))
                return brani[i];
        }
        return null;
    }

    /* rimuove per posizione */
    public void rimuoviBrano(int posizione) {
        if (posizione >= 0 && posizione < nBrani) {
            for (int i = posizione; i < nBrani - 1; i++) {
                brani[i] = brani[i + 1];
            }
            nBrani--;
        }
    }

    /* durata totale */
    public int durataTotale() {
        int somma = 0;
        for (int i = 0; i < nBrani; i++) {
            somma += brani[i].getDurata();
        }
        return somma;
    }

    /* brani sotto 4 minuti */
    public int sottoQuattroMinuti() {
        int cont = 0;
        for (int i = 0; i < nBrani; i++) {
            if (brani[i].getDurata() < 240)
                cont++;
        }
        return cont;
    }
}
