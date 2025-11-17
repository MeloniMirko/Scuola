package Multimediale;
public class ContenutoMultimediale {
    private String titolo;
    private String genere;
    private int durata; 
    private int annoUscita;
    private double valutazione;

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

 //metodi getter
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

    //metodi setter
    public void setTitolo(String titolo) {
        this.titolo = titolo;
    }
    public void setGenere(String genere) {
        this.genere = genere;
    }
    public void setDurata(int durata) {
        this.durata = durata;
    }
    public void setAnnoUscita(int annoUscita) {
        this.annoUscita = annoUscita;
    }
    public void setValutazione(double valutazione) {
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
    public String ottieniCategoria(){
        int annoCorrente = 2025; 
        if (annoUscita == annoCorrente){
            return "Nuova Uscita";
        }else if (annoUscita <= annoCorrente - 20){
            return "Classico";
        }else 
            return "Catalogo Standard";
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
    if (this.valutazione > altro.valutazione){
        return "Migliore";
    }else if (this.valutazione < altro.valutazione){
        return "Peggiore";
    }else 
        return "Uguale";
    }
  
}