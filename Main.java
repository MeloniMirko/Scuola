public class Main {

    public static void main(String[] args) {

        ParcoAuto parco = new ParcoAuto();

        Auto a1 = new Auto("AA111AA", "Fiat", "Panda", 2020, 20000, true, 40);
        Auto a2 = new Auto("BB222BB", "Ford", "Focus", 2019, 35000, false, 55);
        Auto a3 = new Auto("CC333CC", "BMW", "Serie1", 2022, 10000, true, 90);
        Auto a4 = new Auto("DD444DD", "Fiat", "500", 2021, 15000, true, 50);

        parco.aggiungiAuto(a1);
        parco.aggiungiAuto(a2);
        parco.aggiungiAuto(a3);
        parco.aggiungiAuto(a4);

        System.out.println("PARCO AUTO:");
        System.out.println(parco.visualizzaParco());

        System.out.println("Disponibili: " + parco.contaDisponibili());

        System.out.println("Rimozione posizione 2");
        parco.rimuoviAuto(2);

        System.out.println(parco.visualizzaParco());

        System.out.println("Rimozione targa BB222BB");
        parco.rimuoviAuto("BB222BB");

        System.out.println(parco.visualizzaParco());

        Auto trovata = parco.cercaAuto("AA111AA");

        if (trovata != null)
            System.out.println("Auto trovata: " + trovata);
        else
            System.out.println("Auto non trovata");
    }
}
