public class Auto {

    private String targa;
    private String marca;
    private String modello;
    private int anno;
    private int km;
    private boolean disponibile;
    private double prezzoGiornaliero;

    // Costruttore
    public Auto(String targa, String marca, String modello, int anno, int km, boolean disponibile, double prezzoGiornaliero) {
        this.targa = targa;
        this.marca = marca;
        this.modello = modello;
        this.anno = anno;
        this.km = km;
        this.disponibile = disponibile;
        this.prezzoGiornaliero = prezzoGiornaliero;
    }

    // Costruttore di copia
    public Auto(Auto a) {
        this.targa = a.targa;
        this.marca = a.marca;
        this.modello = a.modello;
        this.anno = a.anno;
        this.km = a.km;
        this.disponibile = a.disponibile;
        this.prezzoGiornaliero = a.prezzoGiornaliero;
    }

    // Getter e Setter

    public String getTarga() { return targa; }
    public void setTarga(String targa) { this.targa = targa; }

    public String getMarca() { return marca; }
    public void setMarca(String marca) { this.marca = marca; }

    public String getModello() { return modello; }
    public void setModello(String modello) { this.modello = modello; }

    public int getAnno() { return anno; }
    public void setAnno(int anno) { this.anno = anno; }

    public int getKm() { return km; }
    public void setKm(int km) { this.km = km; }

    public boolean isDisponibile() { return disponibile; }
    public void setDisponibile(boolean disponibile) { this.disponibile = disponibile; }

    public double getPrezzoGiornaliero() { return prezzoGiornaliero; }
    public void setPrezzoGiornaliero(double prezzoGiornaliero) { this.prezzoGiornaliero = prezzoGiornaliero; }

    // toString
    public String toString() {
        return targa + " - " + marca + " " + modello +
                " (" + anno + ") Km:" + km +
                " Prezzo:" + prezzoGiornaliero +
                " Disponibile:" + disponibile;
    }

    // restituisci auto
    public void restituisci(int kmAggiunti) {
        if (kmAggiunti >= 0) {
            km += kmAggiunti;
            disponibile = true;
        }
    }

    // calcolo costo
    public double calcolaCosto(int giorni) {
        if (giorni > 0) {
            return giorni * prezzoGiornaliero;
        }
        return 0;
    }
}
