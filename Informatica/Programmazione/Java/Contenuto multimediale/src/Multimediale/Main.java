package Multimediale;

public class Main {
    public static void main(String[] args) {

        ContenutoMultimediale film1 = new ContenutoMultimediale("Inception", "Fantascienza", 148.0, 2010, 4.8);
        ContenutoMultimediale film2 = new ContenutoMultimediale("Oppenheimer", "Storico", 180.0, 2025, 4.9);

        System.out.println("=== Film 1 ===");
        System.out.println(film1);
        System.out.println("\nCategoria: " + film1.ottieniCategoria());
        System.out.println("Durata: " + film1.durataOreMinuti());

        System.out.println("\n=== Film 2 ===");
        System.out.println(film2);
        System.out.println("\nCategoria: " + film2.ottieniCategoria());
        System.out.println("Durata: " + film2.durataOreMinuti());

        System.out.println("\nAggiorno valutazione film1 con 4.3: " + film1.aggiornaValutazione(4.3));
        System.out.println("Nuova valutazione: " + film1.getValutazione());

        System.out.println("\nConfronto valutazioni: " + film1.confrontaValutazione(film2));
    }
}
