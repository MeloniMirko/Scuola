package elenco;
public class Persona {
    //attributi: nome , cognome,età,altezza

    private String nome;
    private String cognome;
    private int eta;
    private float altezza;

    //metodi
    
    //costruttore

    public Persona(String nome, String cognome, int eta, float altezza){
        this.nome=nome;
        this.cognome=cognome;
        this.eta=eta;
        this.altezza=altezza;

    }

    //setter: metodi che assegnano i valori ai singoli parametri 
    //Possono essere pubblici (attributi dinamici) o private (attributi statici)

    private void setNome(String nome){
        this.nome=nome;
    }

    private void setCognome(String cognome){
        this.cognome=cognome;
    }

    public void setEta(int eta){
        this.eta=eta;
    }

    public void setAltezza(float altezza){
        this.altezza=altezza;
    }

    //getter: metodi che servono per visualizzare i valori di ciascun attributo
    //sono sempre pubblici perche devono essere utilizzati anche all'esterno della classe 

    public String getNome(){
        return this.nome;
    }

    public String getCognome(){
        return this.cognome;
    }

    public int getEta(){
        return this.eta;
    }

    public float getAltezza(){
        return this.altezza;
    }
    
    //metodo toString: server per restituire i valori degli attributi
    
    public String toString(){
        return "Nome=" + this.nome+"\nCognome =" + this.cognome +"\nEta =" +this.eta +"\nAltezza =" + this.altezza;

    }


}
