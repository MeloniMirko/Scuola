package Parcheggio;
public class ParcoAuto {

    private Auto[] parco;
    private int numeroAuto;

    // Costruttore
    public ParcoAuto() {
        parco = new Auto[20];
        numeroAuto = 0;
    }

    // Costruttore copia
    public ParcoAuto(ParcoAuto p) {
        parco = new Auto[20];
        numeroAuto = p.numeroAuto;

        for (int i = 0; i < numeroAuto; i++) {
            parco[i] = new Auto(p.parco[i]);
        }
    }

    // aggiungi auto
    public boolean aggiungiAuto(Auto a) {

        if (numeroAuto >= parco.length)
            return false;

        parco[numeroAuto] = a;
        numeroAuto++;
        return true;
    }

    // rimuovi per posizione
    public boolean rimuoviAuto(int posizione) {

        if (posizione < 0 || posizione >= parco.length)
            return false;

        if (parco[posizione] == null)
            return false;

        parco[posizione] = null;
        return true;
    }

    // rimuovi per targa
    public boolean rimuoviAuto(String targa) {

        for (int i = 0; i < parco.length; i++) {

            if (parco[i] != null && parco[i].getTarga().equals(targa)) {
                parco[i] = null;
                return true;
            }

        }

        return false;
    }

    // cerca auto
    public Auto cercaAuto(String targa) {

        for (int i = 0; i < parco.length; i++) {

            if (parco[i] != null && parco[i].getTarga().equals(targa)) {
                return parco[i];
            }

        }

        return null;
    }

    // visualizza parco
    public String visualizzaParco() {

        String s = "";

        for (int i = 0; i < parco.length; i++) {

            if (parco[i] != null) {
                s += parco[i].toString() + "\n";
            }

        }

        return s;
    }

    // conta disponibili
    public int contaDisponibili() {

        int count = 0;

        for (int i = 0; i < parco.length; i++) {

            if (parco[i] != null && parco[i].isDisponibile()) {
                count++;
            }

        }

        return count;
    }

    // conta per marca
    public int contaMarca(String marca) {

        int count = 0;

        for (int i = 0; i < parco.length; i++) {

            if (parco[i] != null && parco[i].getMarca().equals(marca)) {
                count++;
            }

        }

        return count;
    }

    // aggiorna prezzo
    public boolean aggiornaPrezzoTarga(String targa, double nuovoPrezzo) {

        if (nuovoPrezzo <= 0)
            return false;

        for (int i = 0; i < parco.length; i++) {

            if (parco[i] != null && parco[i].getTarga().equals(targa)) {

                parco[i].setPrezzoGiornaliero(nuovoPrezzo);
                return true;

            }

        }

        return false;
    }

    // filtra per marca (stringa)
    public String filtraPerMarca(String marca) {

        String s = "";

        for (int i = 0; i < parco.length; i++) {

            if (parco[i] != null && parco[i].getMarca().equals(marca)) {
                s += parco[i].toString() + "\n";
            }

        }

        return s;
    }

    // compatta array
    public void compattaParcoAuto() {

        Auto[] nuovo = new Auto[20];
        int j = 0;

        for (int i = 0; i < parco.length; i++) {

            if (parco[i] != null) {
                nuovo[j] = parco[i];
                j++;
            }

        }

        parco = nuovo;
        numeroAuto = j;
    }
}
