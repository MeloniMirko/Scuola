package immobiliare;

public class Abitazione {

    protected int stanze;
    protected double superficie;
    protected String indirizzo;
    protected String citta;

  
    public Abitazione(int stanze, double superficie,String indirizzo, String citta) {

        this.stanze = stanze;
        this.superficie = superficie;
        this.indirizzo = indirizzo;
        this.citta = citta;
    }

  
    public void mostraDati() {

        System.out.println("Stanze: " + stanze);
        System.out.println("Superficie: " + superficie);
        System.out.println("Indirizzo: " + indirizzo);
        System.out.println("Citta: " + citta);
    }

    @Override
    public String toString() {

        return stanze + " " + superficie + " " + indirizzo + " " + citta;
    }

   
    public boolean equals(Abitazione a) {

        return stanze == a.stanze && superficie == a.superficie && indirizzo.equals(a.indirizzo) &&citta.equals(a.citta);
    }
}