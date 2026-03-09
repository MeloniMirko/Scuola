public class Corso {

    //attributi tutti privati 
    private String nome;
    private String istruttore;
    private int durata;
    private double costoMensile;
    private int numeroIscritti;
    private int capMaxIscritti;

    //Costruttore
    public Corso(String nome, String istruttore, int durata, double costoMensile,int numeroIscritti, int capMaxIscritti){
        this.nome=nome;
        this.istruttore=istruttore;
        this.durata=durata;
        this.costoMensile=costoMensile;
        this.numeroIscritti=numeroIscritti;
        this.capMaxIscritti=capMaxIscritti;
    }

    //Costruttore di Copia
    public Corso(Corso altro){
        this.nome=altro.nome;
        this.istruttore=altro.istruttore;
        this.durata=altro.durata;
        this.costoMensile=altro.costoMensile;
        this.numeroIscritti=altro.numeroIscritti;
        this.capMaxIscritti=altro.capMaxIscritti;
    }


    //getter 
    private String getNome(){
        return nome;
    }

    private String getIstruttore(){
        return istruttore;
    }

    private int getDurata(){
        return durata;
    }

    private double getCostoMensile(){
        return costoMensile;
    }

    private int getNumeroIscritti(){
        return numeroIscritti;
    }

    private int getCapMaxIscritti(){
        return capMaxIscritti;
    }

    //setter

    public void setNome(String  nome){
        this.nome=nome;
    }

    public void setIstruttore(String istruttore){
        this.istruttore=istruttore;
    }

    public void setDurata(int durata){
        this.durata=durata;
    }

    public void setCostoMensile(int costoMensile){
        this.costoMensile=costoMensile;
    }

    public void setNumeroIscritti(int numeroIscritti){
        this.numeroIscritti=numeroIscritti;
    }

    public void setCapMaxIscritti(int capMaxIscritti){
        this.capMaxIscritti=capMaxIscritti;
    }

    public String toString(){
        return  "Nome"+ nome + 
                "istruttore"+ istruttore +
                "durata" +durata+
                "CostoMensile" +costoMensile +
                "NumeroIscritti" + numeroIscritti +
                "CapMaxIscritti" + capMaxIscritti;
    }

    public void applicaScontoSePocoFrequentato(double percentuale){
        if (numeroIscritti < 10) {
            costoMensile=costoMensile - (costoMensile * percentuale /100);   
        }
    }

    public boolean isCompleto(){
        return numeroIscritti >= capMaxIscritti;
    }
    
    public boolean aggiungiIscritti(int numero){
        if ( numeroIscritti + numero <= capMaxIscritti){
            numeroIscritti += numero;
            return true;
        }else{
            return false;
        }
    }

    public boolean corsoAffollato(){
        return numeroIscritti > 20;
    }
}
