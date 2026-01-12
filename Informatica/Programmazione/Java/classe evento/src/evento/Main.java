import java.time.LocalDate;

public class Main {
    public static void main(String[] args) {
        Evento e1 = new Evento(LocalDate.of(2026, 1, 11), "Riunione dipartimento");
        Evento e2 = new Evento(LocalDate.of(2025, 12, 25), "Festa di Natale");

        System.out.println(e1);
        System.out.println(e2);

        System.out.println("e1 è futura? " + e1.isFuture());
        System.out.println("Giorni fino a e2: " + e2.daysUntil());

        // Sposto e1 di 5 giorni
        System.out.println("Data e1 prima dello spostamento: " + e1.getData());
        e1.spostaDiGiorni(5);
        System.out.println("Data e1 dopo lo spostamento: " + e1.getData());
    }
}
