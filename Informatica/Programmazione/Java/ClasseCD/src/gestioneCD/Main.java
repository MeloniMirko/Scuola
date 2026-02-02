package gestioneCD;
public class Main {
    public static void main(String[] args) {

        CD cd = new CD("CD Prova", "Sony", 2024);

        Brano b1 = new Brano("Uno", "Autore A", 180, 1);
        Brano b2 = new Brano("Due", "Autore B", 300, 2);

        cd.aggiungiBrano(b1);
        cd.aggiungiBrano(b2);

        System.out.println("Durata totale: " + cd.durataTotale());
        System.out.println("Brani < 4 min: " + cd.sottoQuattroMinuti());
    }
}
