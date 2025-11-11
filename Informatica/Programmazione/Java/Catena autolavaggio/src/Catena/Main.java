package Catena;
public class Main {
    public static void main(String[] args) {
        // Creazione di due veicoli
        Veicolo V1 = new Veicolo("AB123CD", "Fiat", "Panda", 1200, 2020, 5);
        Veicolo V2 = new Veicolo("EF456GH", "Ford", "Focus", 1600, 2021, 5);

        // Creazione di V3 (copia del riferimento di V1)
        Veicolo V3 = V1; // stessa istanza

        // Creazione di V4 (copia dei valori di V2)
        Veicolo V4 = new Veicolo(V2); // nuovo oggetto con stessi dati

        // Modifica di un attributo in V3 e V4
        V3.setModello("Panda Cross");
        V4.setModello("Focus Sport");

        // Stampa dei veicoli per verificare gli effetti
        System.out.println("V1: " + V1);
        System.out.println("V2: " + V2);
        System.out.println("V3: " + V3);
        System.out.println("V4: " + V4);

        // Confronto potenza
        Veicolo piuPotente = V1.confronta(V2);
        if (piuPotente == null)
            System.out.println("Le due auto hanno la stessa cilindrata.");
        else
            System.out.println("L'auto più potente è: " + piuPotente.getModello());

        // Verifica noleggio
        int personeRichieste = 6;
        System.out.println("Il veicolo V1 può trasportare " + personeRichieste + " persone? " + V1.noleggio(personeRichieste));
    }
}
