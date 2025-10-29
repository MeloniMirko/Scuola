public class Main {
    public static void main(String[] args) {
        // stringa per creare oggetti Software
        Software s1 = new Software("Photoshop", "Adobe", "2025.1", "Windows", 2025);
        Software s2 = new Software("Visual Studio", "Microsoft", "2022", "Windows", 2022);
        Software s3 = new Software("Blender", "Blender Org", "3.6", "Windows, macOS", 2023);

        // Stampa delle informazioni con toString
        System.out.println(s1.toString());
        System.out.println(s2.toString());
        System.out.println(s3.toString());

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
