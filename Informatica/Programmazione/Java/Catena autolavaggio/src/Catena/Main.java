package Catena;

public class Main {
    public static void main(String[] args) {

        // Creazione dei veicoli originali
        Veicolo v1 = new Veicolo("AB123CD", "Fiat", "Panda", 1100, 2020, 4);
        Veicolo v2 = new Veicolo("EF456GH", "Ford", "Focus", 1600, 2019, 5);

        // V3 copia solo il riferimento a V1
        Veicolo v3 = v1;

        // V4 copia i valori di V2 (copia profonda)
        Veicolo v4 = new Veicolo(v2);

        // Modifica su V3 (modifica anche V1 perché è lo stesso oggetto)
        v3.setModello("Panda 4x4");

        // Modifico TUTTO in V4 così è completamente diverso da V2
        v4.setTarga("ZZ999XX");
        v4.setMarca("BMW");
        v4.setModello("M3");
        v4.setCilindrata(3000);
        v4.setAnnoAcquisto(2024);
        v4.setNumeroPosti(2);

        // Stampa effetti
        System.out.println("V1: " + v1);
        System.out.println("V2: " + v2);
        System.out.println("V3: " + v3);
        System.out.println("V4: " + v4);

        // Test confronta potenza
        System.out.println("Confronto tra v1 e v2: " + v1.confrontaPotenza(v2));
         System.out.println("Confronto tra v3 e v4: " + v3.confrontaPotenza(v4));

        // Test noleggio
        System.out.println("V1 noleggio per 3 persone: " + v1.noleggio(3));
        System.out.println("V2 noleggio per 6 persone: " + v2.noleggio(6));
    }
}
