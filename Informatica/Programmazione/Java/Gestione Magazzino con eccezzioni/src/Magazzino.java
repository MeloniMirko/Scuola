public class Magazzino {
    private int quantitaDisponibile;

    public Magazzino(int quantitaDisponibile) {
        this.quantitaDisponibile = quantitaDisponibile;
    }

    public void scaricaMerce(int quantita) throws ProdottoEsauritoException {
        if (quantita > quantitaDisponibile) {
            throw new ProdottoEsauritoException();
        } else {
            quantitaDisponibile -= quantita;
            System.out.println("Merce scaricata. Quantità rimanente: " + quantitaDisponibile);
        }
    }


}   


