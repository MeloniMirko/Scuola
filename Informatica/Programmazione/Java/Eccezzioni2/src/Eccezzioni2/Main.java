package Eccezzioni2;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;

public class Main {

    public static void main(String[] args) {

        try (BufferedReader reader = new BufferedReader(new InputStreamReader(System.in))) {
            // --- Esercizio 5: Gestione Età con Ripetizione ---
            int eta = -1; 
            do {
                try {
                    System.out.print("Inserisci la tua eta: ");
                    String input = reader.readLine();
                    eta = Integer.parseInt(input);
    
                    if (eta < 0) {
                        System.out.println("Errore: l'età non può essere minore di zero!");
                        eta = -1; // Forza la ripetizione del ciclo
                    } else {
                        System.out.println("Età registrata: " + eta);
                    }
    
                } catch (NumberFormatException e) {
                    System.out.println("Errore: l'input non è numerico. Riprova.");
                    eta = -1; // Forza la ripetizione in caso di testo
                }
            } while (eta < 0);

            // --- Esercizio 6: Media di 3 numeri ---
            double somma = 0;
            int numeriInseriti = 0;

            System.out.println("\n--- Calcolo della Media di 3 numeri ---");

            while (numeriInseriti < 3) {
                try {
                    System.out.print("Inserisci il numero " + (numeriInseriti + 1) + ": ");
                    String inputMedia = reader.readLine();
                    
                    double valore = Double.parseDouble(inputMedia);
                    somma += valore;
                    numeriInseriti++;

                } catch (NumberFormatException e) {
                    System.out.println("Errore: Formato numerico non valido. Riprova.");
                }
            }

            double media = somma / 3;
            System.out.println("La media finale è: " + media);

        } catch (IOException e) {
            System.out.println("Errore critico di input/output: " + e.getMessage());
        }
    }
}
