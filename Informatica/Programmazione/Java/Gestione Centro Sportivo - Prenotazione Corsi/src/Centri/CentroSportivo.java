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

        for(int i=0; i < this.numeroCorsi; i++){
            this.corsi[i]=new Corso(altro.corsi[i]);
        }
    }
        
}
