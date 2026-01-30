package evento;

import java.time.*;
import java.util.*;

public class Main {

   public static void main(String[] args) {
       Scanner s=new Scanner(System.in);
       LocalDate d= LocalDate.of(2026, 01, 10);
       System.out.println("Scrivi l'evento da programmare: ");
       String evento=s.nextLine();
       Evento e= new Evento(d, evento);
       System.out.println(e.toString());
       System.out.println("Il numero di caratteri dell'evento è: "+e.lunghezzaDescrizione());
       System.out.println("Aggiona con il nuovo evento: ");
       String nuovaDescrizione=s.nextLine();
       e.aggiornaDescrizione(nuovaDescrizione);
       System.out.println("La nuova descrizione è "+ e.getDescrizione());
       System.out.println("Di quanti giorni vuoi spostare l'evento? ");
       long giorni=s.nextLong();
       s.nextLine();
       e.spostaDiGiorni(giorni);
       System.out.println(e.toString());
       System.out.println("Evento passato? " + e.isPast());
       System.out.println("Evento futuro? " + e.isFuture());
       System.out.println("Giorni mancanti: " + e.daysUntil());

       System.out.println("Contiene la parola 'esame'? " + e.contieneKeyword("esame"));

        // secondo evento
       Evento e2 = new Evento(LocalDate.of(2026, 2, 5), "Interrogazione storia");

        // evento copiato
       Evento e3 = new Evento(e);

       System.out.println(e2);
       System.out.println(e3);
       s.close();
   }  
       
       
   }