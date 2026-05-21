package gestionedipendenti;

class GestoreDipendenti {

    private Dipendente[] dipendenti;
    private int contatore;

    // Costruttore
    public GestoreDipendenti(int capacitaMassima) {
        dipendenti = new Dipendente[capacitaMassima];
        contatore = 0;
    }

    // Metodo aggiungiDipendente
    public void aggiungiDipendente(Dipendente d) {

        if (contatore < dipendenti.length) {
            dipendenti[contatore] = d;
            contatore++;
        } else {
            System.out.println("Array pieno!");
        }
    }

    // Metodo stampa dipendenti
    public void stampaTuttiIDipendenti() {

        System.out.println("=== ELENCO DIPENDENTI ===");

        for (int i = 0; i < contatore; i++) {

            System.out.println(
                    "Nome: " + dipendenti[i].getNome()
                    + " | Stipendio: "
                    + dipendenti[i].calcolaStipendio()
                    + " €"
            );
        }
    }

    // Metodo calcola stipendio totale
    public double calcolaStipendioTotale() {

        double totale = 0;

        for (int i = 0; i < contatore; i++) {
            totale += dipendenti[i].calcolaStipendio();
        }

        return totale;
    }

    // Metodo calcola stipendi
    public void calcolaStipendi() {

        System.out.println("\n=== STIPENDI ===");

        for (int i = 0; i < contatore; i++) {

            System.out.println(
                    dipendenti[i].getNome()
                    + ": "
                    + dipendenti[i].calcolaStipendio()
                    + " €"
            );
        }
    }
}