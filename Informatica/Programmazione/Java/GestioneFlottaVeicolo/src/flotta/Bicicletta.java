package flotta;

public class Bicicletta extends Veicolo {
    private int numeroRapporti;

    public Bicicletta(String marca, String modello, int velocitaMassima, int numeroRapporti) {
        super(marca, modello, velocitaMassima);
        this.numeroRapporti = numeroRapporti;
    }

    @Override
    public void muovi() {
        System.out.println("La bicicletta avanza pedalando lungo la pista ciclabile.");
    }
}
