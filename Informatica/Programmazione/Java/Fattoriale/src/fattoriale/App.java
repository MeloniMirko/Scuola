package fattoriale;
public class App {

    public static void main(String[] args) {
        int numero = 5; // Numero di cui calcolare il fattoriale
        int fattoriale = 1;

        for (int i = 1; i <= numero; i++) {
            fattoriale *= i; // Moltiplica fattoriale per i
        }

        System.out.println("Il fattoriale di " + numero + " è: " + fattoriale);
    }
}
