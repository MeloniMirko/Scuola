package Saldo;
public class Main {
    public static void main(String[] args) {

        ContoCorrente conto = new ContoCorrente(100);

        try {
            conto.effettuaOperazione(150);
        } catch (SaldoInsufficienteException e) {
            System.out.println("Operazione negata: fondi non sufficienti");
            System.out.println(e); //stampa il messaggio dell'eccezione
        } finally {
            System.out.println("Grazie per aver utilizzato i nostri servizi");
        }
    }
}