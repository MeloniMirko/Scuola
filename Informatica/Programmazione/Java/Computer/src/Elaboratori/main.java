package Elaboratori;
import java.util.Scanner;

import java.util.Scanner;

public class Main {
<<<<<<< HEAD
     public static void main(String[] args) {
        Scanner s= new Scanner(System.in);

        Computer c1;
        System.out.println();
        System.out.println();

        String marca;
        marca= s .nextLine();

        String modello;
        modello= s.nextLine();

        double prezzo;
        prezzo = s.nextDouble();
        s.nextLine();

        String cpu;
        cpu= s.nextLine();

        int ram;
        ram= s.nextInt();
        s.nextLine();

        int storage;
        storage= s.nextInt();
        s.nextLine();


        c1=new Computer (marca,modello,prezzo,cpu,ram,storage);
        System.out.println(c1.toString());
        s.close();
     }
=======
    public static void main(String[] args) {

        // Creazione dello Scanner per leggere input da tastiera
        Scanner s = new Scanner(System.in);

        // Oggetto Computer
        Computer c1;

        System.out.println("Ciao, questo programma serve per catalogare i computer.");

        // --- RACCOLTA DATI DALL'UTENTE ---
        System.out.println("Inserisci la marca del tuo pc: ");
        String marca = s.nextLine();

        System.out.println("Inserisci il modello del tuo pc: ");
        String modello = s.nextLine();

        System.out.println("Inserisci il prezzo del tuo pc: ");
        double prezzo = s.nextDouble();
        s.nextLine(); // pulizia buffer

        System.out.println("Inserisci la CPU del tuo pc: ");
        String cpu = s.nextLine();

        System.out.println("Inserisci la quantità di RAM del tuo pc: ");
        int ram = s.nextInt();
        s.nextLine(); // pulizia buffer

        System.out.println("Inserisci la quantità di memoria del tuo pc: ");
        int storage = s.nextInt();
        s.nextLine(); // pulizia buffer

        // Creazione dell'oggetto Computer
        c1 = new Computer(marca, modello, prezzo, cpu, ram, storage);

        // Stampa dell'oggetto
        System.out.println(c1.toString());

        // --- MENU DELLE OPERAZIONI ---
        System.out.println("Scegli l'operazione: ");
        System.out.println("1) ottieniFasciaDiPrezzo()");
        System.out.println("2) Stampa le caratteristiche");
        System.out.println("3) Aggiorna prezzo");

        int scelta = s.nextInt();
        s.nextLine(); // pulizia buffer

        // SWITCH CLASSICO
        switch (scelta) {

            case 1:
                // Caso 1: stampa la fascia di prezzo
                System.out.println(c1.ottieniFasciaDiPrezzo());
                break;

            case 2:
                // Caso 2: ristampa tutte le informazioni
                System.out.println(c1.toString());
                break;

            case 3:
                // Caso 3: aggiornamento del prezzo con sconto
                System.out.println("Scrivi lo sconto: ");
                double sconto = s.nextDouble();
                s.nextLine();
                System.out.println(c1.aggiornaPrezzo(sconto));
                break;

            default:
                // Caso di errore se l'utente inserisce un numero non valido
                System.out.println("Hai sbagliato inserendo il valore");
        }

        // CHIUSURA DELLO SCANNER
        s.close();
    }
>>>>>>> 4cae110f967fa46edcafc74c2f53e3cf07956af7
}
