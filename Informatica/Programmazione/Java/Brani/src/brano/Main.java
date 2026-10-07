package brano;

public class Main {
  public static void main(String[] args){
     Canzone A = new Canzone( "Bad Guy",  "Billie Eilish",  194,  "Elettronica");
     Canzone B = new Canzone( "Shape of You",   "Ed Sheeran",  233,  "Pop");
     Canzone C = new Canzone( "Bohemian Rhapsody",  "queen",  354,  "Rock");

    

    //stampa
    System.out.println(A.stampaDettagli());
    System.out.println(B.stampaDettagli());
    System.out.println(C.stampaDettagli());

    //riproduci

    System.out.println(A.riproduci());
    System.out.println(B.riproduci());
    System.out.println(A.riproduci());
    System.out.println(B.riproduci());
    System.out.println(C.riproduci());
    System.out.println(C.riproduci());


    //test getter
      System.out.println("\n--- TEST GETTER ---");
      System.out.println("Durata di A (secondi): " + A.getDurata());
      System.out.println("Genere di B: " + B.getGenere());
      System.out.println("Riproduzioni di C: " + C.getRiproduzioni());

    //test setter
    System.out.println("\n--- MODIFICA GENERE ---");
    C.setGenere("Opera Rock");
    System.out.println("Nuovo genere di C: " + C.getGenere());
    
    //categoria durata
    System.out.println("\n--- CATEGORIA DURATA ---");
    System.out.println(A.getTitolo() + ": " + A.getCategoriaDurata());
    System.out.println(B.getTitolo() + ": " + B.getCategoriaDurata());
    System.out.println(C.getTitolo() + ": " + C.getCategoriaDurata());

    //tostring finale
      System.out.println("\n--- DETTAGLI COMPLETI ---");
      System.out.println(A);
      System.out.println("\n" + B);
      System.out.println("\n" + C);
  }
}
