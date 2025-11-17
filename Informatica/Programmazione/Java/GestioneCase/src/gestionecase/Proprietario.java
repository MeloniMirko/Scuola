package gestionecase;

public class Proprietario {
    private String nome;
    private String cognome; 
    private String codiceFiscale;
    private casa casaPosseduta;


    //costruttore principale
    public Proprietario (String nome, String cognome, String codiceFiscale, casa casaPosseduta, boolean haCasaConGiardino) {
        this.nome = nome;
        this.cognome = cognome;
        this.codiceFiscale = codiceFiscale;
        this.casaPosseduta = new casa(casaPosseduta);
      

    }
    
    //costuttore di copia
     public Proprietario (Proprietario altroProprietario) {
        this.nome = altroProprietario.nome;
        this.cognome = altroProprietario.cognome;
        this.codiceFiscale = altroProprietario.codiceFiscale;
        this.casaPosseduta = new casa(altroProprietario.casaPosseduta);
      
    }

    //getter 
    public String getNome() {
        return nome;
    }
    public String getCognome() {
        return cognome;
    }
    public String getCodiceFiscale() {
        return codiceFiscale;
    }
    public casa getCasaPosseduta() {
        return new casa(casaPosseduta);
    }
    

    //setter
    /*I setter devono includere controlli minimi di validità (es. nome e cognome non vuoti, codiceFiscale non vuoto). */
    public void setNome(String nome) {
        if (nome != null && !nome.isEmpty()) {
            this.nome = nome;
        }
    }
    public void setCognome(String cognome) {
        if (cognome != null && !cognome.isEmpty()) {
            this.cognome = cognome;
        }
    }
    public void setCodiceFiscale(String codiceFiscale) {
        if (codiceFiscale != null && !codiceFiscale.isEmpty()) {
            this.codiceFiscale = codiceFiscale;
        }
    }
    public void setCasaPosseduta(casa casaPosseduta) {
        this.casaPosseduta = new casa(casaPosseduta);
    }


    
    @Override
    public String toString() {
        return "Proprietario: " + nome + " " + cognome + " - CF: " + codiceFiscale + " - Casa: [" + casaPosseduta.toString() + "]";
    }
  

    public String aggiornaCasa(casa c) {
        setCasaPosseduta(c);
        return "Casa aggiornata con successo.";
    }

    
    public boolean haCasaConGiardino() {
        if (this.casaPosseduta.HaGiardino()) {
            return true;
        } else {
            return false;
        }
    }

    




    








}
