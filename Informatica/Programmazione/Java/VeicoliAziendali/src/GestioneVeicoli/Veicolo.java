
package gestioneveicoli;

public abstract class Veicolo {
    protected String marca;
    protected String modello;
    protected int velocitaMassima;

    public Veicolo(String marca, String modello, int velocitaMassima) {
        this.marca = marca;
        this.modello = modello;
        this.velocitaMassima = velocitaMassima;
    }

    public String getMarca() {
        return marca;
    }

    public String getModello() {
        return modello;
    }

    public int getVelocitaMassima() {
        return velocitaMassima;
    }

    public abstract void muovi();
}
