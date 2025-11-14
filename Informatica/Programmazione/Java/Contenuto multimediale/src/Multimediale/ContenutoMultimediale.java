package Multimediale;
class ContenutoMultimediale {
    private String titolo;
    private String genere;
    private int durata; // in minuti
    private int annoUscita;
    private double valutazione; // 0.0 - 5.0

    // Costruttore principale
    public ContenutoMultimediale(String titolo, String genere, int durata, int annoUscita, double valutazione) {
        this.titolo = titolo;
        this.genere = genere;
        this.durata = durata;
        this.annoUscita = annoUscita;
        this.valutazione = valutazione;
    }

    // Costruttore di copia
    public ContenutoMultimediale(ContenutoMultimediale altro) {
        this.titolo = altro.titolo;
        this.genere = altro.genere;
        this.durata = altro.durata;
        this.annoUscita = altro.annoUscita;
        this.valutazione = altro.valutazione;
    }

    // Getter 
    public String getTitolo() {
         return titolo; 
        }
    public String getGenere() {
         return genere;
         }
    public int getDurata() {
         return durata; 
        }
    public int getAnnoUscita() { 
        return annoUscita; 
    }
    public double getValutazione() {
         return valutazione; 
        }

    // Setter 
    private void setTitolo(String titolo) {
         this.titolo = titolo; 
        }
    private void setGenere(String genere) {
         this.genere = genere; 
        }
    private void setDurata(int durata) {
         this.durata = durata; 
        }
    private void setAnnoUscita(int annoUscita) {
         this.annoUscita = annoUscita;
         }
    private void setValutazione(double valutazione) { 
        this.valutazione = valutazione;
     }

    // toString
    @Override
    public String toString() {
        return "Titolo: " + titolo +
               "  Genere: " + genere +
               "  Durata: " + durata + " minuti" +
               "  Anno: " + annoUscita +
               "  Valutazione: " + valutazione;
    }

    // Ottieni categoria
    public String ottieniCategoria() {
        int annoCorrente = 2025; 
        if (annoUscita == annoCorrente) return "Nuova Uscita";
        else if (annoUscita <= annoCorrente - 20) return "Classico";
        else return "Catalogo Standard";
    }

    // Durata in ore e minuti
    public String durataOreMinuti() {
        int ore = durata / 60;
        int minuti = durata % 60;
        return ore + " ore e " + minuti + " minuti";
    }

    // Aggiorna valutazione
    public boolean aggiornaValutazione(double nuovaValutazione) {
        if (nuovaValutazione >= 0.0 && nuovaValutazione <= 5.0) {
            setValutazione(nuovaValutazione);
            return true;
        }
        return false;
    }

    // Confronta valutazione
    public String confrontaValutazione(ContenutoMultimediale altro) {
        if (this.valutazione > altro.valutazione) return "Migliore";
        else if (this.valutazione < altro.valutazione) return "Peggiore";
        else return "Uguale";
    }

    // Metodi pubblici per modifiche 
    public void modificaTitolo(String nuovoTitolo) { 
        setTitolo(nuovoTitolo);
     }
    public void modificaGenere(String nuovoGenere) {
         setGenere(nuovoGenere); 
        }
    public void modificaDurata(int nuovaDurata) {
         setDurata(nuovaDurata); 
        }
    public void modificaAnnoUscita(int nuovoAnno) { 
        setAnnoUscita(nuovoAnno); 
    }
}