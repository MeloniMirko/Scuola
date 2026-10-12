package animali;

public class Main {
    public static void main(String[] args) {
        Cane cane = new Cane("Fido");
        Aquila aquila = new Aquila("Maverick");
        Drone drone = new Drone("DJI Phantom");

        // 1. Polimorfismo con Classe Astratta (Solo animali)
        Animale[] animali = { cane, aquila };
        for (Animale a : animali) {
            a.emettiVerso(); // Ognuno fa il suo verso
            a.dormire(); // Usano il metodo concreto ereditato da Animale

        }
        // 2. Polimorfismo con Interfaccia (Oggetti disomogenei con lo stesso ruolo)
        Volante[] oggettiCheVolano = { aquila, drone };
        for (Volante v : oggettiCheVolano) {
            v.vola(); // Non importa se sia un animale o un robot!
        }
    }
}