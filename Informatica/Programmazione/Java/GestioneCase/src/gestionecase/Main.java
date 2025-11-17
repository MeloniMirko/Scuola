package gestionecase;

public class Main {
    public static void main(String[] args) {
        casa casa1 = new casa("Via Roma 1", 3, 100, 150000);
        casa casa2 = new casa("Via Milano 2", 4, 120, 180000);

        
        casa casa3 = new casa(casa1);//costruttore di copia


        casa3.setIndirizzo("Via Napoli 3"); //modifico l'indirizzo della copia
        casa3.setNumeroStanze(5);//modifico il numero di stanze della copia
        casa3.setSuperficie(140);//modifico la superficie della copia
        casa3.setPrezzo(160000);//modifico il prezzo della copia
        
        System.out.println("--------------");
        System.out.println("Stampa delle case:");
        System.out.println("--------------");
        System.out.println(casa1);
        System.out.println(casa2);
        System.out.println(casa3);

        System.out.println("--------------");
        System.out.println("Confronti tra case:");
        System.out.println("--------------");
        System.out.println("ha superficie maggiore ? " + casa1.haSuperficieMaggioreDi(casa2));
        System.out.println("ha prezzo maggiore ? " + casa2.haPrezzoMaggioreDi(casa3));


       
        Proprietario proprietario1 = new Proprietario("Mario", "Rossi", "MRARSS80A01H501U", casa1, true);
        Proprietario proprietario2 = new Proprietario("Luigi", "Bianchi", "LGBNCH85B02F205Y", casa2, false);  
        
    
        Proprietario proprietario3 = new Proprietario(proprietario1);


        proprietario3.setNome("Giovanni");//modifico il nome del proprietario3
        proprietario3.getCasaPosseduta().setIndirizzo("Via Firenze 4");    //modifico l'indirizzo della casa del proprietario3 
        proprietario3.getCasaPosseduta().setNumeroStanze(6);//modifico il numero di stanze della casa del proprietario3
        proprietario3.getCasaPosseduta().setSuperficie(200);//modifico la superficie della casa del proprietario3
        proprietario3.getCasaPosseduta().setPrezzo(250000);//modifico il prezzo della casa del proprietario3
        System.out.println("--------------");
        System.out.println("Stampa dei proprietari:");
        System.out.println("--------------");
        System.out.println(proprietario1);
        System.out.println(proprietario2);
        System.out.println(proprietario3);

        




    }
}
