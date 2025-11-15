package gestionecase;

public class Main {
    public static void main(String[] args) {
        // Creo due oggetti Casa usando il costruttore principale
        casa casa1 = new casa("Via Roma 1", 3, 100, 150000);
        casa casa2 = new casa("Via Milano 2", 4, 120, 180000);

        // Creo un terzo oggetto Casa usando il costruttore di copia
        casa casa3 = new casa(casa1);

        // Modifico alcuni attributi della casa3 
        casa3.aggiornaCasa("Via Torino 3", 3, 100, 160000);

        // Stampo tutti gli oggetti 
        System.out.println(casa1);
        System.out.println(casa2);
        System.out.println(casa3);

        // Confronti
        System.out.println("Casa1 ha superficie maggiore di Casa2? " + casa1.haSuperficieMaggioreDi(casa2));
        System.out.println("Casa2 ha prezzo maggiore di Casa3? " + casa2.haPrezzoMaggioreDi(casa3));
    }
}
