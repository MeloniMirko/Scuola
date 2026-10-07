package gestionecase;

public class Proprietario {

    private String nome;
    private String cognome;
    private String codiceFiscale;
    private Casa casa;

    // Costruttore principale
    public Proprietario(String nome, String cognome, String codiceFiscale, Casa casa) {
        this.nome = nome;
        this.cognome = cognome;
        this.codiceFiscale = codiceFiscale;
        this.casa = new Casa(casa); 
    }

    // Costruttore di copia
    public Proprietario(Proprietario altro) {
        this.nome = altro.nome;
        this.cognome = altro.cognome;
        this.codiceFiscale = altro.codiceFiscale;
        this.casa = new Casa(altro.casa);
    }

    // Getter
    public String getNome() { 
        return nome; 
    }
    public String getCognome() {
        return cognome;
    }
    public String getCodiceFiscale() {
        return codiceFiscale; 
        }
    public Casa getCasa() {
        return casa; 
    }
    public boolean haCasaConGiardino() { 
        return casa.getConGiardino();
    }

    public String aggiornaCasa(Casa c) {
        this.casa = c;
        return "Casa aggiornata.";
    }


    // Setter
    public void setNome(String nome) {  
        this.nome = nome; 
    }
    public void setCognome(String cognome) {
         this.cognome = cognome; 
        }
    public void setCodiceFiscale(String codiceFiscale) { 
        this.codiceFiscale = codiceFiscale; 
    }
    public void setCasa(Casa casa)
     { 
        this.casa = casa; 
    }

  

    @Override
    public String toString() {
        return "Proprietario: " + nome + " " + cognome +
               " | CF: " + codiceFiscale +
               " | Casa: [" + casa.toString() + "]";
    }
}
