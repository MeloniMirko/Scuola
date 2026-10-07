package Veicoli_motore;

public class Main {
    public static void main(String[] args) throws Exception {
        Automobile automobile = new Automobile("Fiat", "Panda", 2020, 35.0, 5, "Benzina");
        Motocicletta motocicletta = new Motocicletta("Yamaha", "MT-07", 2022, 28.0, 689, true);

        System.out.println(automobile.stampaDettagli());
        System.out.println("Costo automobile per 8 giorni: " + automobile.calcolaCosto(8));

        System.out.println(motocicletta.stampaDettagli());
        System.out.println("Costo motocicletta per 6 giorni: " + motocicletta.calcolaCosto(6));
    }
}
