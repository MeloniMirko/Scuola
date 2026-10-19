package flotta;

public class Automobile extends Veicolo implements Motorizzato, Ricaricabile {
    private int numeroPorte;
    private boolean motoreAcceso;
    private double carburante; // Percentuale da 0 a 100

    public Automobile(String marca, String modello, int velocitaMassima, int numeroPorte, double carburante Iniziale) {
        super(marca, modello, velocitaMassima);
        this.numeroPorte = numeroPorte;
        this.motoreAcceso = false;
        // Limita il carburante iniziale tra 0 e 100
        this.carburante = Math.max(0, Math.min(100, carburanteIniziale));
    }

    @Override
    public void muovi() {
        if (motoreAcceso) {
            System.out.println("L'automobile " + marca + " " + modello + " sfreccia sull'autostrada.");
        } else {
            System.out.println("Impossibile muoversi: il motore dell'automobile è spento.");
        }
    }

    @Override
    public void accendiMotore() {
        if (carburante > 0) {
            this.motoreAcceso = true;
            System.out.println("Motore automobile acceso.");
        } else {
            System.out.println("Impossibile accendere il motore: serbatoio vuoto!");
        }
    }

    @Override
    public void spegniMotore() {
        this.motoreAcceso = false;
        System.out.println("Motore automobile spento.");
    }

    @Override
    public double getLivelloCarburante() {
        return this.carburante;
    }

    @Override
    public void effettuaRifornimento(double quantita) {
        this.carburante += quantita;
        if (this.carburante > 100) this.carburante = 100;
        System.out.println("Rifornimento effettuato. Livello attuale: " + this.carburante + "%");
    }
}
