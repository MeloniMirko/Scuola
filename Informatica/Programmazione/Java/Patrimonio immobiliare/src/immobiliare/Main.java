package immobiliare;

public class Main {

    public static void main(String[] args) {

        Abitazione a1 = new Abitazione(4,120,"Via Roma","Cagliari");

        Villa v1 = new Villa(8,300,"Via Mare","Olbia",2,500,true);

        Appartamento ap1 = new Appartamento(3,90,"Via Dante","Sassari",4,true,2);

        a1.mostraDati();

        System.out.println();

        v1.mostraDati();

        System.out.println();

        ap1.mostraDati();

        System.out.println(a1);

        Abitazione a2 = new Abitazione(4,120,"Via Roma","Cagliari");

        System.out.println(a1.equals(a2));
    }
}