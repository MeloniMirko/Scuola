package flotta;

public class Camion extends Veicolo implements Motorizzato, Ricaricabile {
    private double capacitaCaricoMassimo;
    private double caricoAttuale;
    private boolean motoreAcceso;
    private double carburante;

    public Camion(String marca, String modello, int velocitaMassima, double capacitaCaricoMassimo, double carburanteIniziale) {
        super(marca, modello, velocitaMassima);
        this.capacitaCaricoMassimo = capacitaCaricoMassimo;
        this.caricoAttuale = 0; // Il camion parte vuoto
        this.motoreAcceso = false;
        this.carburante = Math.max(0, Math.min(100, carburanteIniziale));
    }

    public void caricaMerci(double peso) {
        if (caricoAttuale + peso <= capacitaCaricoMassimo) {
            caricoAttuale += peso;
            System.out.println("Caricate " + peso + " kg di merci. Carico attuale: " + caricoAttuale + " kg.");
        } else {
            System.out.println("Errore: Il peso supera la capacità di carico massimo del camion!");
        }
    }

    @Override
    public void muovi() {
        if (motoreAcceso) {
            System.out.println("Il camion sta trasportando " + caricoAttuale + " kg di merci.");
        } else {
            System.out.println("Impossibile muoversi: il motore del camion è spento.");
        }
    }

    @Override
    public void accendiMotore() {
        if (carburante > 0) {
            this.motoreAcceso = true;
            System.out.println("Motore camion acceso.");
        } else {
            System.out.println("Impossibile accendere il camion: carburante insufficiente.");
        }
    }

    @Override
    public void spegniMotore() {
        this.motoreAcceso = false;
        System.out.println("Motore camion spento.");
    }

    @Override
    public double getLivelloCarburante() {
        return this.carburante;
    }

    @Override
    public void effettuaRifornimento(double quantita) {
        this.carburante += quantita;
        if (this.carburante > 100) this.carburante = 100;
        System.out.println("Camion rifornito. Livello attuale: " + this.carburante + "%");
    }
}
