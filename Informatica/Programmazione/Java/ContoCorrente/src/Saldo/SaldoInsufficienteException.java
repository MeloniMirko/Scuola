package Saldo;
public class SaldoInsufficienteException extends Exception {


    public SaldoInsufficienteException() {
    }

    @Override
    public String toString() {
        return "Il saldo è insufficiente";
    }
}