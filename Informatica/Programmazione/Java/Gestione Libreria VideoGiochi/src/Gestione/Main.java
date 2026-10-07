package Gestione;
public class Main {
    public static void main(String[] args) throws Exception {
        Videogioco v1 = new Videogioco("Resident Evil Requiem" ,"Horror", 2026,89.99,false);
        Videogioco v2 = new Videogioco("FIFA 26" ,"Sport", 2026,69.99,true);
        Videogioco v3 = new Videogioco("Zelda: Breath of Sky","Avventura",2025,79.99,false);
        Videogioco v4 = new Videogioco("Call of Battle", "Sparatutto", 2024, 59.99, true);
        Videogioco v5 = new Videogioco("Minecraft 2", "Sandbox", 2023, 49.99, true);
        Videogioco v6 = new Videogioco("Mario Kart Ultimate", "Corse", 2025, 69.99, true);

        Libreria libreria = new Libreria();

        Videogioco[] giochi = {v1, v2, v3, v4, v5, v6};

        for (Videogioco v : giochi) {
            libreria.aggiungiVideogioco(v);
        }

        System.out.println(libreria.visualizzaLibreria());

        libreria.rimuoviVideogioco(2);

        System.out.println(libreria.visualizzaLibreria());

        libreria.rimuoviTitolo("FIFA 26");
        System.out.println(libreria.visualizzaLibreria());

        libreria.applicaScontoATutti(20);
        System.out.println(libreria.visualizzaLibreria());

        Videogioco caro = libreria.trovaPiuCostoso();
        System.out.println("Videogioco più costoso:");
        System.out.println(caro);

        libreria.ordinaPerPrezzoCrescente();
        System.out.println("Libreria ordinata per prezzo crescente:");
        System.out.println(libreria.visualizzaLibreria());

    }
}
