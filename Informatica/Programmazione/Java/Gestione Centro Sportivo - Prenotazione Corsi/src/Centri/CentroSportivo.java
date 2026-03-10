package Centri;

public class CentroSportivo {
    private Corso[] corsi;
    private int numeroCorsi;

    public CentroSportivo() {
        this.corsi = new Corso[10];
        this.numeroCorsi = 0;
    }

    public CentroSportivo(CentroSportivo altro) {
        this.corsi = new Corso[altro.corsi.length];
        this.numeroCorsi = altro.numeroCorsi;

        for(int i = 0; i < this.numeroCorsi; i++){
            this.corsi[i] = new Corso(altro.corsi[i]);
        }
    }

    public boolean aggiungiCorso(Corso c){
        if(numeroCorsi < corsi.length){
            corsi[numeroCorsi] = c;
            numeroCorsi++;
            return true;
        }
        return false;
    }

    public boolean rimuoviCorso(int posizione){
        if(posizione >= 0 && posizione < numeroCorsi){
    
            for(int i = posizione; i < numeroCorsi - 1; i++){
                corsi[i] = corsi[i + 1];
            }
    
            corsi[numeroCorsi - 1] = null;
            numeroCorsi--;
    
            return true;
        }
    
        return false;
    }

    public boolean rimuoviPerNome(String nome){
        
    }

}