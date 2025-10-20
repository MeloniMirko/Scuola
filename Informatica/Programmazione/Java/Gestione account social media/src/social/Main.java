package social;

public class Main {
    public static void main(String[] args){
        ProfiloSocial A = new ProfiloSocial("ilmaestro","mirko",20000,15);
        ProfiloSocial B = new ProfiloSocial("maestroboss","marco",9999,5);
        

        //stampa i profili 
        System.out.println("il profilo 1 ha:\n");
        System.out.println(A.toString());
        System.out.println(A.pubblica());
        System.out.println("è un influencer?");
        System.out.println(A.isInfluencer());
        System.out.println("\n il profilo 2 ha:\n");
        System.out.println(B.toString());
        System.out.println(B.pubblica());
        System.out.println("è un influencer?");
        System.out.println(B.isInfluencer());
      
        //aggiunge un follower ai profili 
        A.aggiungiFollower(); 
        B.aggiungiFollower(); 
        
        //stampa i profili dopo gli aggiornamenti 
        System.out.println("Dopo gli aggiornamenti il profilo 1 ha:\n");
        System.out.println(A.toString());
        System.out.println("è un influencer?");
        System.out.println(A.isInfluencer());
        System.out.println("\nDopo gli aggiornamenti il profilo 2 ha:\n");
        System.out.println(B.toString());
        System.out.println("è un influencer?");
        System.out.println(A.isInfluencer());


        
    }
}
