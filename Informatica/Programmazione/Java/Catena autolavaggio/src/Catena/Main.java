package Catena;
public class Main {
   
    public static void main(String[] args) {
        // Creazione dei veicoli
        Veicolo v1 = new Veicolo("AB123CD", "Fiat", "Panda", 1100, 2020, 4);
        Veicolo v2 = new Veicolo("EF456GH", "Ford", "Focus", 1600, 2019, 5);

        // V3 copia solo il riferimento a V1
        Veicolo v3 = v1;

        // V4 copia i valori di V2
        Veicolo v4 = new Veicolo(v2);

        // Modifica attributi usando metodi della classe
        v3.modificaModello("Panda 4x4");
        v4.modificaNumeroPosti(2);

        // Stampa effetti
        System.out.println("V1: " + v1); 
        System.out.println("V2: " + v2); 
        System.out.println("V3: " + v3);
        System.out.println("V4: " + v4);

        // Test confronta potenza
        System.out.println("Confronto v1 vs v2: " + v1.confrontaPotenza(v2));

        // Test noleggio
        System.out.println("V1 noleggio per 3 persone: " + v1.noleggio(3));
        System.out.println("V2 noleggio per 6 persone: " + v2.noleggio(6));
    }
  }



