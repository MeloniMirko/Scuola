package Multimediale;
public class Main {
    public static void main(String[] args) {
        // Creazione contenuti
        ContenutoMultimediale c1 = new ContenutoMultimediale("FilmA", "Azione", 135, 2025, 4.5);
        ContenutoMultimediale c2 = new ContenutoMultimediale("FilmB", "Commedia", 90, 2000, 3.8);

        // Copia riferimento e copia valori
        ContenutoMultimediale c3 = c1; // riferimento
        ContenutoMultimediale c4 = new ContenutoMultimediale(c2); // copia valori

        // Modifiche
        c3.setTitolo("mamma ho perso l'aereo");
        c4.setDurata(95);

        // Stampa
        System.out.println("C1: " + c1);
        System.out.println("C2: " + c2);
        System.out.println("C3: " + c3);
        System.out.println("C4: " + c4);

        // Test categoria
        System.out.println(c1.getTitolo() + " categoria: " + c1.ottieniCategoria());
        System.out.println(c2.getTitolo() + " categoria: " + c2.ottieniCategoria());

        // Test durata ore/minuti
        System.out.println(c1.getTitolo() + " durata: " + c1.durataOreMinuti());

        // Test aggiornamento valutazione
        System.out.println("Aggiorna valutazione c2 a 4.2: " + c2.aggiornaValutazione(4.2));

        // Confronto valutazioni
        System.out.println("Confronto c1 vs c2: " + c1.confrontaValutazione(c2));
    }
}