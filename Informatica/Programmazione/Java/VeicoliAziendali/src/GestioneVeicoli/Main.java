
package gestioneveicoli;

import java.util.ArrayList;
import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        ArrayList<Veicolo> veicoli = new ArrayList<>();
        int scelta;

        do {
            System.out.println("\n--- MENU VEICOLI ---");
            System.out.println("1. Visualizza veicoli");
            System.out.println("2. Inserisci veicolo");
            System.out.println("3. Sposta veicolo");
            System.out.println("4. Rimuovi veicolo");
            System.out.println("0. Esci");
            System.out.print("Scelta: ");
            scelta = Integer.parseInt(sc.nextLine());

            switch (scelta) {
                case 1: {
                    if (veicoli.isEmpty()) {
                        System.out.println("Nessun veicolo presente.");
                    } else {
                        for (int i = 0; i < veicoli.size(); i++) {
                            Veicolo v = veicoli.get(i);
                            String tipo = "Bicicletta";
                            if (v instanceof Automobile) {
                                tipo = "Automobile";
                            } else if (v instanceof Camion) {
                                tipo = "Camion";
                            }
                            System.out.println((i + 1) + ". " + tipo + " - "
                                    + v.getMarca() + " " + v.getModello());
                        }
                    }
                    break;
                }

                case 2: {
                    System.out.println("1. Automobile");
                    System.out.println("2. Camion");
                    System.out.println("3. Bicicletta");
                    System.out.print("Tipo: ");
                    int tipo = Integer.parseInt(sc.nextLine());

                    if (tipo >= 1 && tipo <= 3) {
                        System.out.print("Marca: ");
                        String marca = sc.nextLine();
                        System.out.print("Modello: ");
                        String modello = sc.nextLine();
                        System.out.print("Velocita massima: ");
                        int velocita = Integer.parseInt(sc.nextLine());

                        if (tipo == 1) {
                            System.out.print("Numero porte: ");
                            int porte = Integer.parseInt(sc.nextLine());
                            System.out.print("Carburante (0-100): ");
                            double carburante = Double.parseDouble(sc.nextLine());
                            veicoli.add(new Automobile(marca, modello, velocita,
                                    porte, false, carburante));
                        } else if (tipo == 2) {
                            System.out.print("Capacita massima di carico (kg): ");
                            double capacita = Double.parseDouble(sc.nextLine());
                            System.out.print("Carburante (0-100): ");
                            double carburante = Double.parseDouble(sc.nextLine());
                            veicoli.add(new Camion(marca, modello, velocita,
                                    capacita, 0, false, carburante));
                        } else {
                            System.out.print("Numero rapporti: ");
                            int rapporti = Integer.parseInt(sc.nextLine());
                            veicoli.add(new Bicicletta(marca, modello, velocita, rapporti));
                        }
                        System.out.println("Veicolo aggiunto!");
                    } else {
                        System.out.println("Tipo non valido.");
                    }
                    break;
                }

                case 3: {
                    System.out.print("Posizione del veicolo: ");
                    int vecchia = Integer.parseInt(sc.nextLine());
                    System.out.print("Nuova posizione: ");
                    int nuova = Integer.parseInt(sc.nextLine());

                    if (vecchia >= 1 && vecchia <= veicoli.size()
                            && nuova >= 1 && nuova <= veicoli.size()) {
                        Veicolo v = veicoli.remove(vecchia - 1);
                        veicoli.add(nuova - 1, v);
                        System.out.println("Veicolo spostato!");
                    } else {
                        System.out.println("Posizione non valida.");
                    }
                    break;
                }

                case 4: {
                    System.out.print("Posizione da rimuovere: ");
                    int posizione = Integer.parseInt(sc.nextLine());
                    if (posizione >= 1 && posizione <= veicoli.size()) {
                        Veicolo v = veicoli.remove(posizione - 1);
                        System.out.println("Rimosso: " + v.getMarca() + " " + v.getModello());
                    } else {
                        System.out.println("Posizione non valida.");
                    }
                    break;
                }

                case 0:
                    System.out.println("Programma terminato.");
                    break;

                default:
                    System.out.println("Scelta non valida.");
            }
        } while (scelta != 0);

        sc.close();
    }
}
