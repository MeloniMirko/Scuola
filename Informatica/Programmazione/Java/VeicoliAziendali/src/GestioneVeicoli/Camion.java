
package gestioneveicoli;

public class Camion extends Veicolo implements Motorizzato, Ricaricabile {
    private double capacitaCaricoMassimo;
    private double caricoAttuale;
    private boolean motoreAcceso;
    private double carburante;

    public Camion(String marca, String modello, int velocitaMassima,
                  double capacitaCaricoMassimo, double caricoAttuale,
                  boolean motoreAcceso, double carburante) {
        super(marca, modello, velocitaMassima);
        this.capacitaCaricoMassimo = capacitaCaricoMassimo;
        this.caricoAttuale = caricoAttuale;
        this.motoreAcceso = motoreAcceso;
        this.carburante = carburante;
    }

    public void caricaMerci(double peso) {
        if (peso > 0 && caricoAttuale + peso <= capacitaCaricoMassimo) {
            caricoAttuale += peso;
            System.out.println("Merci caricate.");
        } else {
            System.out.println("Impossibile caricare le merci.");
        }
    }

    @Override
    public void muovi() {
        System.out.println("Il camion " + marca + " " + modello
                + " trasporta " + caricoAttuale + " kg di merci.");
    }

    @Override
    public void accendiMotore() {
        motoreAcceso = true;
        System.out.println("Motore del camion acceso.");
    }

    @Override
    public void spegniMotore() {
        motoreAcceso = false;
        System.out.println("Motore del camion spento.");
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
