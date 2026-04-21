public class Main {
    public static void main(String[] args) {
        Magazzino magazzino = new Magazzino(50);

        try {
            magazzino.scaricaMerce(60);
        } catch (ProdottoEsauritoException e) {
            System.out.println(e.toString());
        } finally {
            System.out.println("Aggiornamento database terminato");
        }
    }
}