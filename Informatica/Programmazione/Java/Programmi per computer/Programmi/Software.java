
public class Software {
    //attributi 
    private String denominazione; //il nome del programma
    private String produttore; //chi lo ha realizzato  
    private String versione; //la versione attuale del programma
    private String sistemaOperativo; //l'OS che serve per il quale e compatibile il programma
    private int anno; // anno di rilascio del programma

    //creazione del costruttore

    public Software(String denominazione,String produttore,String versione,String sistemaoperativo, int anno){
        this.setDenominazione(denominazione);
        this.setProduttore(produttore);
        this.setVersione(versione);
        this.setSistemaoperativo(sistemaoperativo);
        this.setAnno(anno);
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

    public String getSistemaOperativo(){
        return this.sistemaOperativo;
    }

    public int getAnno(){
        return this.anno;
    }

    //setter

    private void setDenominazione(String denominazione){
        this.denominazione=denominazione;
    }

    private void setProduttore(String produttore){
        this.produttore=produttore;
    }

    private void setVersione(String versione){
        this.versione=versione;
    }
    
    private void setSistemaoperativo(String sistemaOperativo){
        this.sistemaOperativo=sistemaOperativo;
    }

    private void setAnno(int anno){
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
        return "Programma: " + denominazione +" | Produttore: " + produttore +" | Versione: " + versione +" | Sistema Operativo: " + sistemaOperativo +" | Anno: " + anno;
    }


}
