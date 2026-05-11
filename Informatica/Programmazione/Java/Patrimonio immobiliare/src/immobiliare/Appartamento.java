package immobiliare;

public class Appartamento extends Abitazione {

    private int piano;
    private boolean ascensore;
    private int terrazzi;

    
    public Appartamento(int stanze, double superficie,String indirizzo, String citta,int piano, boolean ascensore,int terrazzi) {

    super(stanze, superficie, indirizzo, citta);

        this.piano = piano;
        this.ascensore = ascensore;
        this.terrazzi = terrazzi;
    }

    
    public void mostraDati() {

        super.mostraDati();

        System.out.println("Piano: " + piano);
        System.out.println("Ascensore: " + ascensore);
        System.out.println("Terrazzi: " + terrazzi);
    }

    
    public String toString() {

        return super.toString() + " "+ piano + " "+ ascensore + " "+ terrazzi;
    }

  
    public boolean equals(Appartamento a) {

        return super.equals(a) && piano == a.piano && ascensore == a.ascensore && terrazzi == a.terrazzi;
    }
}