
package gestioneveicoli;

public class Automobile extends Veicolo implements Motorizzato, Ricaricabile {
    private int numeroPorte;
    private boolean motoreAcceso;
    private double carburante;

    public Automobile(String marca, String modello, int velocitaMassima,
                      int numeroPorte, boolean motoreAcceso, double carburante) {
        super(marca, modello, velocitaMassima);
        this.numeroPorte = numeroPorte;
        this.motoreAcceso = motoreAcceso;
        this.carburante = carburante;
    }

    @Override
    public void muovi() {
        System.out.println("L'automobile " + marca + " " + modello + " viaggia sulla strada.");
    }

    @Override
    public void accendiMotore() {
        motoreAcceso = true;
        System.out.println("Motore dell'automobile acceso.");
    }

    @Override
    public void spegniMotore() {
        motoreAcceso = false;
        System.out.println("Motore dell'automobile spento.");
    }

    @Override
    public double getLivelloCarburante() {
        return carburante;
    }

    @Override
    public void effettuaRifornimento(double quantita) {
        if (quantita > 0) {
            carburante += quantita;
            if (carburante > 100) {
                carburante = 100;
            }
        }
    }
}
