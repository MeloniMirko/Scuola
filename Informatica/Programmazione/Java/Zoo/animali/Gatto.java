package animali;

public class Gatto extends Animali {

    private String razza;
    private String colore;

    // Costruttore completo
    public Gatto(String nome, float peso, float lunghezza, int eta, String razza, String colore) {
        super(nome, peso, lunghezza, eta);
        this.razza = razza;
        this.colore = colore;
    }

    // Costruttore da oggetto Animali
    public Gatto(Animali A, String razza, String colore) {
        super(A);
        this.razza = razza;
        this.colore = colore;
    }

    // Costruttore di copia
    public Gatto(Gatto G) {
        super(G.getNome(), G.getPeso(), G.getLunghezza(), G.getEta());
        this.razza = G.getRazza();
        this.colore = G.getColore();
    }

    // Getter e Setter
    public String getRazza() {
        return razza;
    }

    public void setRazza(String razza) {
        this.razza = razza;
    }

    public String getColore() {
        return colore;
    }

    public void setColore(String colore) {
        this.colore = colore;
    }

    // toString
    @Override
    public String toString() {
        return super.toString() + "Gatto [razza=" + razza + ", colore=" + colore + "]";
    }

    // Metodo verso
    @Override
    public String verso() {
        return "il gatto miagola";
    }
}