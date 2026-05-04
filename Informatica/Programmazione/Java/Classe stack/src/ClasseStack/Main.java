public class Main {
    public static void main(String[] args) {

        Stack s = new Stack(2);

        try {
            s.push(10);
            s.push(20);
            s.push(30);

        } catch (StackFullException e) {
            System.out.println("Errore: pila piena");

        } catch (StackEmptyException e) {
            System.out.println("Errore: pila vuota");

        } finally {
            System.out.println("Operazione terminata");
        }
    }
}