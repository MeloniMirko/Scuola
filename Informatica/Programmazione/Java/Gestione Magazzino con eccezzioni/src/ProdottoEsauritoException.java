public class ProdottoEsauritoException extends Exception {
    public ProdottoEsauritoException() {
        super();
    }

    @Override
    public String toString() {
        return "Errore: La quantità richiesta non è disponibile in magazzino";
    }
}