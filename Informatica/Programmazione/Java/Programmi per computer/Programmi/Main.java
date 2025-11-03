public class Main {
    public static void main(String[] args) {
        // stringa per creare oggetti Software
        Software s1 = new Software("Instagram", "meta", "2025", "Apple", 2010);
        Software s2 = new Software("Eclipse", "Eclipse Foundation", "2025", "Windows", 2001);

        // Stampa delle informazioni con toString
        System.out.println(s1.toString());
        System.out.println(s2.toString());

        // Confronto tra due programmi
        int risultato = s1.compareAnno(s2);
        if (risultato > 0) {
            System.out.println(s1.getDenominazione() + " è più recente di " + s2.getDenominazione());
        } else if (risultato < 0) {
            System.out.println(s1.getDenominazione() + " è più vecchio di " + s2.getDenominazione());
        } else {
            System.out.println("I due programmi sono dello stesso anno.");
        }
    }
}
