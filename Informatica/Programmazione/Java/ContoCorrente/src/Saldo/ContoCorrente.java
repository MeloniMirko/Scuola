package Saldo;
public class ContoCorrente {

    private double saldo;

    // Costruttore
    public ContoCorrente(double saldo) {
        this.saldo = saldo;
    }

    // Metodo di verifica
    public void verificaSaldo(double importo) throws SaldoInsufficienteException {
        if (importo > saldo) {
            throw new SaldoInsufficienteException();
        }
    }

    // Metodo per effettuare il prelievo
    public void effettuaOperazione(double importo) throws SaldoInsufficienteException {
        verificaSaldo(importo);
        saldo -= importo;
        System.out.println("Operazione completata. Nuovo saldo: " + saldo + "€");
    }
}