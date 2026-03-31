package Saldo;
public class ContoCorrente {

    private double saldo;

    public ContoCorrente(double saldo) {
        this.saldo = saldo;
    }

    public double getSaldo() {
        return saldo;
    }

    public void setSaldo(double saldo) {
        this.saldo = saldo;
    }

    public void verificaSaldo(double importo) throws SaldoInsufficienteException {
        if (importo > saldo) {
            throw new SaldoInsufficienteException();
        }
    }

    public void effettuaOperazione(double importo) throws SaldoInsufficienteException {
        verificaSaldo(importo);
        saldo -= importo;
    }
}