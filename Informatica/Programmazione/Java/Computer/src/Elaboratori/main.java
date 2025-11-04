package Elaboratori;

public class main {
    public static void main(String[] args) {
        Computer c1 = new Computer( "Dell", "XPS 15", 1500.00, "Intel i7", 16, 512 );
        Computer c2 = new Computer( "Apple", "MacBook Pro", 2000.00, "M1", 16, 1024 );

       System.out.println(c1.toString());
       System.out.println(c2.toString());


       //aggiorno il prezzo del primo computer con uno sconto del 10%
        c1.aggiornaPrezzo(10);
        System.out.println("Prezzo aggiornato del primo computer: " + c1.getPrezzo());
       //faccio un upgrade della RAM del secondo computer a 32GB
        c2.upgradeRam(32);
        System.out.println("RAM aggiornata del secondo computer: " + c2.getRam() + "GB");

        



        //stampo i dettagli dei computer
        System.out.println("Dettagli Computer 1:");
        System.out.println(c1.ottieniInfoDettagliata());
        System.out.println("Dettagli Computer 2:");
        System.out.println(c2.ottieniInfoDettagliata());

        //confronto i due computer per vedere quale è migliore
        int confronto = c1.confrontaComputer(c2);

        if (confronto > 0) {
            System.out.println("Computer 1 è migliore di Computer 2");
        } else if (confronto < 0) {
            System.out.println("Computer 2 è migliore di Computer 1");
        } else {
            System.out.println("I due computer sono equivalenti");
        }
    }                                                                                                                      
