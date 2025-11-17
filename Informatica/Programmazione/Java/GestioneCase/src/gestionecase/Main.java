package gestionecase;

public class Main {

    public static void main(String[] args) {

        Casa c1 = new Casa("Via Roma 1", 3, 100, 150000, false, 1990);
        Casa c2 = new Casa("Via Milano 2", 4, 120, 180000, true, 2005);

        Casa c3 = new Casa(c1); // copia
        c3.setIndirizzo("Via Napoli 3");
        c3.setAnnoCostruzione(2010);

        System.out.println("----- Case -----");
        System.out.println(c1);
        System.out.println(c2);
        System.out.println(c3);

        System.out.println("\n----- Confronti -----");
        System.out.println("Casa con superficie maggiore: " + c1.superficieMaggiore(c2));
        System.out.println("Casa più costosa: " + c1.prezzoMaggiore(c2));

        Proprietario p1 = new Proprietario("Mario", "Rossi", "RSSMRA80A01H501U", c1);
        Proprietario p2 = new Proprietario("Lucia", "Bianchi", "BNCLCU75A41F205K", c2);

        Proprietario p3 = new Proprietario(p1);
        p3.setNome("Giovanni");
        p3.getCasa().setIndirizzo("Via Firenze 4");
        p3.getCasa().setAnnoCostruzione(2015);

        System.out.println("\n----- Proprietari -----");
        System.out.println(p1);
        System.out.println(p2);
        System.out.println(p3);
    }
}
