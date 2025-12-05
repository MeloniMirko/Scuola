package Elaboratori;
import java.util.Scanner;

public class Main {
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
}
