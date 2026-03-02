package Gestione;
public class Libreria {

    private Videogioco[] giochi;
    private int numeroVideogiochi;

    // Costruttore senza parametri
    public Libreria() {
        giochi = new Videogioco[10];
        numeroVideogiochi = 0;
    }

    // Costruttore di copia (copia profonda)
    public Libreria(Libreria altra) {
        this.giochi = new Videogioco[10];
        this.numeroVideogiochi = altra.numeroVideogiochi;

        for (int i = 0; i < altra.numeroVideogiochi; i++) {
            if (altra.giochi[i]!=null)
            this.giochi[i] = new Videogioco(altra.giochi[i]);
        }
    }
    
    // Metodo Aggiungi Videogioco

    public boolean aggiungiVideogioco(Videogioco v){
   
        //controlla se il videogioco immesso e vuoto se non e vuoto prosegue

        if (v == null) {
            return false;
        } 

       if(numeroVideogiochi == giochi.length){
        return false;
       }
       
       //scorre l'array e controlla la posizione aggiunge il gioco e incrementa il contatore e restituisce true

       for(int i = 0; i < giochi.length; i++){
        if (giochi[i] == null){
            giochi[i] = v;
            numeroVideogiochi ++;
            return true;
        }
       }
       return false;
    }

    public boolean rimuoviVideogioco(int posizione){
        if(posizione < 0 || posizione >= giochi.length){
            return false;
        }

        if(giochi[posizione] == null){
            return false;
        }       

        giochi[posizione] = null; 
        numeroVideogiochi--;       
        return true;     
        
    }

    //Rimuovi Titolo 

    public boolean rimuoviTitolo(String titolo){
        if(titolo == null){
            return false;
        }

        for(int i = 0; i < giochi.length; i++){
            if(giochi[i] != null && titolo.equals(giochi[i].getTitolo())){
                giochi[i] = null;
                numeroVideogiochi--;
                return true;
            }
        }
        return false;
    }

    //Cerca VideoGioco

    public Videogioco cercaVideogioco(String titolo){
        if(titolo == null){
            return null;
        }

        for(int i = 0; i < giochi.length; i++){
            if(giochi[i] != null && titolo.equals(giochi[i].getTitolo())){
                return giochi[i]; // ritorna il gioco trovato
            }
        }

        return null;
    }

    public String visualizzaLibreria(){
        
        if(numeroVideogiochi==0)
            return "La libreria è vuota.";
        else{
            String stringa="";    
            for(int i = 0; i < giochi.length; i++) {
                if(giochi[i]!=null)
                    stringa+=giochi[i].toString();
            }
            return stringa;
        }
    }

    compattaLibreria(){
        
    }
        
    



    

    

}