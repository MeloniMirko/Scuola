package Gestione;
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

    public String getTitolo(){
        return titolo;
    }

    public String getGenere(){
        return genere;    
    }

    public int getAnnoUscita(){
        return annoUscita;
    }

    public double getPrezzo(){
        return prezzo;
    }

    public boolean getMultiplayer(){
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

    // riduce il prezzo del videogame della percentuale indicata (es. 20 => riduce del 20%).
    public void applicaSconto(double percentuale){
        if (percentuale > 0 && percentuale<=100){
                prezzo = prezzo - (prezzo* percentuale / 100);
        }
    } 

    //restituisce true se annoUscita > 2020
    public boolean isRecente(){
        return annoUscita>2020;
    }

    public boolean isMultiplayer()
    {
        return this.multiplayer;
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
