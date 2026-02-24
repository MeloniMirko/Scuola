public class Videogioco {   
    private String titolo;
    private String genere;
    private int annoUscita;
    private double prezzo;
    private boolean multiplayer;

    //Costruttore Principale

    public Videogioco(
        String titolo,String genere,int annoUscita,double prezzo,boolean multiplayer){
            this.titolo=titolo;
            this.genere=genere;
            this.annoUscita=annoUscita;
            this.prezzo=prezzo;
            this.multiplayer=multiplayer;
        }
    //Costruttore Di Copia

    public Videogioco(Videogioco altro){
            this.titolo=altro.titolo;
            this.genere=altro.genere;
            this.annoUscita=altro.annoUscita;
            this.prezzo=altro.prezzo;
            this.multiplayer=altro.multiplayer;
        }
    
    //Setter e Getter

    public String gettitolo(){
        return titolo;
    }

    public String genere(){
        return genere;    
    }

    public int annoUscita(){
        return annoUscita;
    }

    public double prezzo(){
        return prezzo;
    }

    public boolean getmultiplayer(){
        return multiplayer;
    }

    //================================

    public void setTitolo(String titolo){
        this.titolo = titolo;
    }
    
    public void setGenere(String genere){
        this.genere = genere;
    }
    
    public void setAnnoUscita(int annoUscita){
        this.annoUscita = annoUscita;
    }
    
    public void setPrezzo(double prezzo){
        this.prezzo = prezzo;
    }
    
    public void setMultiplayer(boolean multiplayer){
        this.multiplayer = multiplayer;
    }

    @Override
    public String toString() {
        return "Titolo: " + titolo +
               ", Genere: " + genere +
               ", AnnoUscita: " + annoUscita +
               ", Prezzo: " + prezzo +
               ", Multiplayer: " + multiplayer;
    }

    


}
