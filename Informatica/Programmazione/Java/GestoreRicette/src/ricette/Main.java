public class Main {
    public static void main(String[] args) {

        // Creo 3 ingredienti
        Ingrediente farina = new Ingrediente("Farina", 200, "g", 3.6, 0.01, true);
        Ingrediente uova = new Ingrediente("Uova", 2, "pz", 70, 0.3, false);
        Ingrediente latte = new Ingrediente("Latte", 250, "ml", 0.6, 0.002, true);

        // Creo la ricetta
        Ricetta pancake = new Ricetta(
                "Pancake",
                15,
                "Facile",
                2,
                farina,
                uova,
                latte
        );

        // Stampa informazioni originali
        System.out.println("=== Ricetta originale ===");
        System.out.println(pancake);
        System.out.println("Calorie totali: " + pancake.calcolaCalorieTotali());
        System.out.println("Costo totale: " + pancake.stimaCostoTotale());
        System.out.println("Vegetariana? " + pancake.isVegetariana());

        // Scala dosi a 4 porzioni
        pancake.scalaDosi(4);
        System.out.println("\n=== Ricetta scalata a 4 porzioni ===");
        System.out.println(pancake);
        System.out.println("Calorie totali: " + pancake.calcolaCalorieTotali());
        System.out.println("Costo totale: " + pancake.stimaCostoTotale());

        // Creo una nuova ricetta adattata per 8 ospiti (senza modificare l'originale)
        Ricetta per8 = pancake.adattaRicettaPerOspiti(8);
        System.out.println("\n=== Ricetta per 8 porzioni (copia) ===");
        System.out.println(per8);
        System.out.println("Calorie totali: " + per8.calcolaCalorieTotali());
        System.out.println("Costo totale: " + per8.stimaCostoTotale());
    }
}
