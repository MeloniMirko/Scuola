package immobiliare;

public class Villa extends Abitazione {

    private int piani;
    private double giardino;
    private boolean piscina;

    // costruttore
    public Villa(int stanze, double superficie,String indirizzo, String citta,int piani, double giardino,boolean piscina) {

        super(stanze, superficie, indirizzo, citta);

        this.piani = piani;
        this.giardino = giardino;
        this.piscina = piscina;
    }

    
    public void mostraDati() {

        super.mostraDati();

        System.out.println("Piani: " + piani);
        System.out.println("Giardino: " + giardino);
        System.out.println("Piscina: " + piscina);
    }

    @Override
    public String toString() {

        return super.toString() + " "+ piani + " "+ giardino + " "+ piscina;
    }

    public boolean equals(Villa v) {

        return super.equals(v) && piani == v.piani && giardino == v.giardino &&piscina == v.piscina;
    }
}