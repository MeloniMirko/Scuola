package Saldo;
public class Main {
    public static void main(String[] args) {

        ContoCorrente conto = new ContoCorrente(100);

        try {
            conto.effettuaOperazione(150);
            System.out.println("Prelievo effettuato. Saldo: " + conto.getSaldo() + "€");

        } catch (SaldoInsufficienteException e) {
            System.out.println("Operazione negata: fondi non sufficienti");
            System.out.println(e.toString());
            
        } finally {
            System.out.println("Grazie per aver utilizzato i nostri servizi");
        }
    }
}