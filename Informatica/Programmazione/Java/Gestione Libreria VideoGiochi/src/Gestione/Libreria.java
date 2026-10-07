package Gestione;

public class Libreria {

    private final Videogioco[] giochi;
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

    public void compattaLibreria() {

        int indice = 0;
    
        for (int i = 0; i < giochi.length; i++) {
            if (giochi[i] != null) {
                giochi[indice] = giochi[i];
                if (indice != i) {
                    giochi[i] = null;
                }
                indice++;
            }
        }
    
        numeroVideogiochi = indice;
    }

    public int contaMultiplayer() {

        int contatore = 0;
    
        for (int i = 0; i < giochi.length; i++) {
            if (giochi[i] != null && giochi[i].isMultiplayer()) {
                contatore++;
            }
        }
    
        return contatore;
    }

    public double calcolaValoreTotale() {

        double totale = 0;
    
        for (int i = 0; i < giochi.length; i++) {
            if (giochi[i] != null) {
                totale += giochi[i].getPrezzo();
            }
        }
    
        return totale;
    }

    public double mediaPrezzi() {

        if (numeroVideogiochi == 0) {
            return 0;
        }
    
        return calcolaValoreTotale() / numeroVideogiochi;
    }

    public Videogioco trovaPiuCostoso() {

        if (numeroVideogiochi == 0) {
            return null;
        }
    
        Videogioco max = null;
    
        for (int i = 0; i < giochi.length; i++) {
            if (giochi[i] != null) {
                if (max == null || giochi[i].getPrezzo() > max.getPrezzo()) {
                    max = giochi[i];
                }
            }
        }
    
        return max;
    }

    public Videogioco[] filtraPerGenere(String genere) {

        if (genere == null) {
            return new Videogioco[0];
        }
    
        int count = 0;
    
        // Conta prima quanti giochi del genere richiesto
        for (int i = 0; i < giochi.length; i++) {
            if (giochi[i] != null && genere.equals(giochi[i].getGenere())) {
                count++;
            }
        }
    
        Videogioco[] risultato = new Videogioco[count];
        int j = 0;
    
        for (int i = 0; i < giochi.length; i++) {
            if (giochi[i] != null && genere.equals(giochi[i].getGenere())) {
                risultato[j] = giochi[i];
                j++;
            }
        }
    
        return risultato;
    }

    public void applicaScontoATutti(double percentuale) {

        if (percentuale < 0) {
            return;
        }
    
        for (int i = 0; i < giochi.length; i++) {
            if (giochi[i] != null) {
    
                double prezzo = giochi[i].getPrezzo();
                double sconto = prezzo * percentuale / 100;
                giochi[i].setPrezzo(prezzo - sconto);
            }
        }
    }

    public void ordinaPerPrezzoCrescente(){
        for (int i = 0; i < giochi.length - 1; i++) {
            int minimo = i;
            for (int j = i + 1; j < giochi.length; j++) {
                if (giochi[j].getPrezzo() < giochi[minimo].getPrezzo()){
                    minimo = j;
                }
            }
            if (minimo != i) {
                // scambio degli oggetti Gioco
                Videogioco temp = giochi[i];
                giochi[i] = giochi[minimo];
                giochi[minimo] = temp;
            }
        } 
    }

    public void ordinaPerAnnoDecrescente(){
        for (int i = 0; i < giochi.length - 1; i++) {
            int minimo = i;
            for (int j = i + 1; j < giochi.length; j++) {
                if (giochi[j].getAnnoUscita() > giochi[minimo].getAnnoUscita()){
                    minimo = j;
                }
            }
            if (minimo != i) {
                // scambio degli oggetti Gioco
                Videogioco temp = giochi[i];
                giochi[i] = giochi[minimo];
                giochi[minimo] = temp;
            }
        } 
    }
}

    

        
    



    

    

