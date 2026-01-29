import java.util.Scanner;

public class ConsumiEnergetici {
    public static void main(String[] args) {

        Scanner input = new Scanner(System.in);

        int[] consumi = new int[10];
        int somma = 0;

        // Inserimento dei consumi
        for (int i = 0; i < consumi.length; i++) {
            System.out.print("Inserisci il consumo (kWh) dell'abitazione " + (i + 1) + ": ");
            consumi[i] = input.nextInt();
            somma += consumi[i];
        }

        // a) consumo totale
        System.out.println("\nConsumo totale: " + somma + " kWh");

        // b) consumo medio
        double media = (double) somma / consumi.length;
        System.out.println("Consumo medio: " + media + " kWh");

        // c) consumo massimo e minimo
        int max = consumi[0];
        int min = consumi[0];

        for (int i = 1; i < consumi.length; i++) {
            if (consumi[i] > max) {
                max = consumi[i];
            }
            if (consumi[i] < min) {
                min = consumi[i];
            }
        }

        System.out.println("Consumo massimo: " + max + " kWh");
        System.out.println("Consumo minimo: " + min + " kWh");

        // d) abitazioni con consumo superiore alla media
        int contatore = 0;

        for (int i = 0; i < consumi.length; i++) {
            if (consumi[i] > media) {
                contatore++;
            }
        }

        System.out.println("Numero di abitazioni con consumo superiore alla media: " + contatore);

        input.close();
    }
}

