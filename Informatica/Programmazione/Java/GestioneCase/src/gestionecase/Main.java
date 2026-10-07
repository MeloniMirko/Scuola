package gestionecase;

import java.util.Scanner;

public class Main {

   public static void main(String[] args) {
       Scanner s=new Scanner(System.in);
       Casa C1;
       String   indirizzo;
       System.out.println("Scrivi l'indirizzo della casa: ");
       indirizzo=s.nextLine();
       int stanze;
       System.out.println("Quante stanze ha la casa? ");
       stanze=s.nextInt();
       s.nextLine();
       double a;
       System.out.println("Indica la superficie della casa: ");
       a=s.nextDouble();
       s.nextLine();
       double p;
       System.out.println("Quanto costa la casa? ");
       p=s.nextDouble();
       s.nextLine();
       boolean g;
       System.out.println("Ha il giardino? (true/false)");
       g=s.nextBoolean();
       s.nextLine();
       int anno;
       System.out.println("In che anno è stata costruita? ");
       anno=s.nextInt();
       s.nextLine();
       C1=new Casa(indirizzo, stanze, a, p, g, anno);
               
       Proprietario P1;
       System.out.println("Inserisci i dati del proprietario\nNome: ");
       String nome=s.nextLine();
       System.out.println("Cognome: ");
       String cognome=s.nextLine();
       System.out.println("Codice Fiscale: ");
       String codFiscale=s.nextLine();
       P1=new Proprietario(nome, cognome, codFiscale, C1);
       
       System.out.println(P1.toString());

       
       
   }

}