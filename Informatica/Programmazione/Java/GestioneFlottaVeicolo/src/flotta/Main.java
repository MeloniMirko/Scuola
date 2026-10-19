package flotta;

import java.util.ArrayList;
import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        // Grazie all'upcasting, memorizziamo oggetti diversi in una lista di tipo comune 'Veicolo'
        ArrayList<Veicolo> flotta = new ArrayList<>();

        // Istanze iniziali
        Automobile auto = new Automobile("Fiat", "500", 160, 3, 50.0);
        Camion camion = new Camion("Volvo", "FH16", 90, 15000.0, 40.0);
        Bicicletta bici = new Bicicletta("Rockrider", "ST120", 30, 9);

        // Aggiunta alla lista (Upcasting automatico)
        flotta.add(auto);
        flotta.add(camion);
        flotta.add(bici);

        Scanner scanner = new Scanner(System.in);
        int scelta;

        do {
            System.out.println("\n--- MENU GESTIONE FLOTTA ---");
            System.out.println("1. Visualizza e fai muovere tutti i veicoli");
            System.out.println("2. Inserisci un nuovo veicolo");
            System.out.println("3. Rimuovi un veicolo per indice");
            System.out.println("4. Accendi motori ed effettua rifornimento (Interfacce)");
            System.out.println("5. Esci");
            System.out.print("Scegli un'opzione: ");
            scelta = scanner.nextInt();
            scanner.nextLine(); // Consuma il fine linea

            switch (scelta) {
                case 1:
                    if (flotta.isEmpty()) {
                        System.out.println("La lista è vuota.");
                    } else {
                        for (int i = 0; i < flotta.size(); i++) {
                            System.out.print("[" + i + "] " + flotta.get(i).getMarca() + " " + flotta.get(i).getModello() + " -> ");
                            // Polimorfismo: chiama il metodo muovi() specifico della sottoclasse corretta
                            flotta.get(i).muovi();
                        }
                    }
                    break;

                case 2:
                    System.out.println("Quale veicolo vuoi inserire? (1: Auto, 2: Camion, 3: Bici)");
                    int tipo = scanner.nextInt();
                    scanner.nextLine();
                    System.out.print("Marca: ");
                    String marca = scanner.nextLine();
                    System.out.print("Modello: ");
                    String modello = scanner.nextLine();
                    System.out.print("Velocità Massima: ");
                    int vel = scanner.nextInt();

                    if (tipo == 1) {
                        System.out.print("Numero porte: ");
                        int porte = scanner.nextInt();
                        flotta.add(new Automobile(marca, modello, vel, porte, 50.0));
                    } else if (tipo == 2) {
                        System.out.print("Capacità carico max (kg): ");
                        double cap = scanner.nextDouble();
                        flotta.add(new Camion(marca, modello, vel, cap, 50.0));
                    } else if (tipo == 3) {
                        System.out.print("Numero rapporti: ");
                        int rap = scanner.nextInt();
                        flotta.add(new Bicicletta(marca, modello, vel, rap));
                    }
                    System.out.println("Veicolo aggiunto con successo!");
                    break;

                case 3:
                    if (flotta.isEmpty()) {
                        System.out.println("Nessun veicolo da rimuovere.");
                    } else {
                        System.out.print("Inserisci l'indice del veicolo da rimuovere: ");
                        int index = scanner.nextInt();
                        if (index >= 0 && index < flotta.size()) {
                            Veicolo rimosso = flotta.remove(index);
                            System.out.println("Rimosso: " + rimosso.getMarca() + " " + rimosso.getModello());
                        } else {
                            System.out.println("Indice non valido.");
                        }
                    }
                    break;

                case 4:
                    // Verifichiamo quali veicoli implementano le interfacce usando instanceof (Downcasting sicuro)
                    System.out.println("Operazioni sui veicoli motorizzati nella flotta:");
                    for (Veicolo v : flotta) {
                        System.out.println("\nAnalisi veicolo: " + v.getMarca() + " " + v.getModello());
                        if (v instanceof Motorizzato) {
                            Motorizzato m = (Motorizzato) v; // Downcasting ad interfaccia
                            m.accendiMotore();
                            System.out.println("Livello carburante iniziale: " + m.getLivelloCarburante() + "%");
                            
                            if (v instanceof Ricaricabile) {
                                Ricaricabile r = (Ricaricabile) v;
                                r.effettuaRifornimento(20.0);
                            }
                        } else {
                            System.out.println("Questo veicolo non ha un motore (es. Bicicletta).");
                        }
                    }
                    break;

                case 5:
                    System.out.println("Uscita dal programma.");
                    break;

                default:
                    System.out.println("Opzione non valida.");
            }
        } while (scelta != 5);

        scanner.close();
    }
}
