package animali;

public class Drone implements Volante {
    private String modello;

    public Drone(String modello) {
        this.modello = modello;
    }

    @Override
    public void vola() {
        System.out.println("Il drone " + modello + " decolla con le eliche.");
    }
}