
public class Software {
    //attributi 
    private String denominazione; //il nome del programma
    private String produttore; //chi lo ha realizzato  
    private String versione; //la versione attuale del programma
    private String sistemaoperativo; //l'OS che serve per il quale e compatibile il programma
    private int anno; // anno di rilascio del programma

    //creazione del costruttore

    public Software(String denominazione,String produttore,String versione,String sistemaoperativo, int anno){
        this.denominazione=denominazione;
        this.produttore=produttore;
        this.versione=versione;
        this.sistemaoperativo=sistemaoperativo;
        this.anno=anno;
    }

    //getter

    public String getDenominazione(){
        return this.denominazione;
    }
    
    public String getProduttore(){
        return this.produttore;
    }

    public String getVersione(){
        return this.versione;
    }

    public String getSistemaoperativo(){
        return this.sistemaoperativo;
    }

    public int getAnno(){
        return this.anno;
    }

    //setter

    private void setDenominazione(){
        this.denominazione=denominazione;
    }

    private void setProduttore(){
        this.produttore=produttore;
    }

    private void setVersione(){
        this.versione=versione;
    }
    
    private void setSistemaoperativo(){
        this.sistemaoperativo=sistemaoperativo;
    }

    private void setAnno(){
        this.anno=anno;
    }


    
    //metodi 

    //metodo comprareanno controlla gli anni di uscita dei programmi e ti dice
    // positivo e recente 
    //zero e dello stesso anno 
    //negativo e piu vecccio
    public int compareAnno(Software altro) {
    return this.anno - altro.getAnno();
}


    //toString

      public String toString() {
        return "Programma: " + denominazione +
               " | Produttore: " + produttore +
               " | Versione: " + versione +
               " | Sistema Operativo: " + sistemaoperativo +
               " | Anno: " + anno;
    }


}
