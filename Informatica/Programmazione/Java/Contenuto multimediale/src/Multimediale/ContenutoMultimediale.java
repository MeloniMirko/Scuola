package Multimediale;

public class ContenutoMultimediale {

    // Attributi privati
    private String titolo;
    private String genere;
    private Double durata; // in minuti
    private int annouscita;
    private Double valutazione;

    // Costruttore
    public ContenutoMultimediale(String titolo, String genere, Double durata, int annouscita, Double valutazione) {
        this.titolo = titolo;
        this.genere = genere;
        this.durata = durata;
        this.annouscita = annouscita;
        this.valutazione = valutazione;
    }

    // Getter
    public String getTitolo(){
        return titolo; 
    }
    public String getGenere(){ 
        return genere; 
    }
    public Double getDurata(){
        return durata;
    }
    public int getAnnouscita(){
        return annouscita; 
    }
    public Double getValutazione(){
        return valutazione;
    }

    // Setter
    public void setTitolo(String titolo){ 
        this.titolo = titolo;
    }
    public void setGenere(String genere){ 
        this.genere = genere;
    }
    public void setDurata(Double durata){ 
        this.durata = durata; 
    }
    public void setAnnouscita(int annouscita){ 
        this.annouscita = annouscita; 
    }
    public void setValutazione(Double valutazione){ 
        this.valutazione = valutazione; 
    }

    // ottieniCategoria()
    public String ottieniCategoria() {
        int annoCorrente = 2025; // imposto manualmente
        if (annouscita == annoCorrente) {
            return "Nuova Uscita";
        } else if (annoCorrente - annouscita > 20) {
            return "Classico";
        } else {
            return "Catalogo Standard";
        }
    }

    // durataOreMinuti()
    public String durataOreMinuti() {
        int minutiTotali = durata.intValue();
        int ore = minutiTotali / 60;
        int minuti = minutiTotali % 60;
        return ore + " ore e " + minuti + " minuti";
    }

    // aggiornaValutazione(nuovaValutazione)
    public boolean aggiornaValutazione(Double nuovaValutazione) {
        if (nuovaValutazione >= 0.0 && nuovaValutazione <= 5.0) {
            this.valutazione = nuovaValutazione;
            return true;
        }
        return false;
    }

    // confrontaValutazione(altroContenuto)
    public String confrontaValutazione(ContenutoMultimediale altroContenuto) {
        if (this.valutazione > altroContenuto.getValutazione()) {
            return "Migliore";
        } else if (this.valutazione < altroContenuto.getValutazione()) {
            return "Peggiore";
        } else {
            return "Uguale";
        }
    }

    // Metodo toString()
    @Override
    public String toString() {
        return "Titolo: " + titolo +
               "\nGenere: " + genere +
               "\nDurata: " + durata + " minuti" +
               "\nAnno di uscita: " + annouscita +
               "\nValutazione: " + valutazione + "/5.0";
    }
}
