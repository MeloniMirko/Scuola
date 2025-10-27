package brano;

public class Main {
  public static void main(String[] args){
     Canzone A = new Canzone( "Bad Guy",  "Billie Eilish",  194,  "Elettronica");
     Canzone B = new Canzone( "Shape of You",   "Ed Sheeran",  233,  "Pop");
     Canzone C = new Canzone( "Bohemian Rhapsody",  "queen",  354,  "Rock");

    

    //stampa
    System.out.println(A.stampaDettagli());

    System.out.println("\n");

    System.out.println(B.stampaDettagli());

    System.out.println("\n");

    System.out.println(C.stampaDettagli());

    System.out.println("\n");

    //riproduci

    System.out.println(A.riproduci());

    System.out.println(B.riproduci());

    System.out.println(A.riproduci());

    System.out.println(B.riproduci());

    System.out.println(C.riproduci());

    System.out.println(C.riproduci());


  }
}
