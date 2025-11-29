package gestionecase;

import java.util.Scanner;

public class Main {

    public static void main(String[] args) {

        Scanner sc = new Scanner(System.in);

        System.out.println("----- Inserisci dati Casa 1 -----");
        Casa c1 = leggiCasa(sc);

        System.out.println("\n----- Inserisci dati Casa 2 -----");
        Casa c2 = leggiCasa(sc);

        // Copia casa
        Casa c3 = new Casa(c1);
        c3.setIndirizzo("Via Napoli 3");
        c3.setAnnoCostruzione(2010);

        // Stampa case
        System.out.println("\n----- Case -----");
        System.out.println(c1);
        System.out.println(c2);
        System.out.println(c3);

        // Confronti
        System.out.println("\n----- Confronti -----");
        System.out.println("Casa con superficie maggiore: " + c1.superficieMaggiore(c2));
        System.out.println("Casa più costosa: " + c1.prezzoMaggiore(c2));

        // Proprietari
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

        sc.close();
    }

    // --- Legge una casa da tastiera ---
    public static Casa leggiCasa(Scanner sc) {
        System.out.print("Indirizzo: ");
        String indirizzo = sc.nextLine();

        System.out.print("Numero stanze: ");
        int stanze = sc.nextInt();

        System.out.print("Superficie (mq): ");
        int superficie = sc.nextInt();

        System.out.print("Prezzo: ");
        double prezzo = sc.nextDouble();

        System.out.print("Garage (true/false): ");
        boolean garage = sc.nextBoolean();

        System.out.print("Anno costruzione: ");
        int anno = sc.nextInt();
        sc.nextLine(); // pulisce il buffer

        return new Casa(indirizzo, stanze, superficie, prezzo, garage, anno);
    }
}

