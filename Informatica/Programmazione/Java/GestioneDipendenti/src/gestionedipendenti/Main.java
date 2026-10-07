package gestionedipendenti;

public class Main {

    public static void main(String[] args) {

        // Creazione dipendenti
        DipendenteStipendiato d1 =
                new DipendenteStipendiato(
                        "Mario Rossi",
                        2000
                );

        DipendenteOrario d2 =
                new DipendenteOrario(
                        "Luigi Bianchi",
                        160,
                        15
                );

        DipendenteCommissione d3 =
                new DipendenteCommissione(
                        "Anna Verdi",
                        10000,
                        0.05
                );

        // Creazione gestore
        GestoreDipendenti gestore =
                new GestoreDipendenti(10);

        // Aggiunta dipendenti
        gestore.aggiungiDipendente(d1);
        gestore.aggiungiDipendente(d2);
        gestore.aggiungiDipendente(d3);

        // Stampa dipendenti
        gestore.stampaTuttiIDipendenti();

        // Stampa costo totale
        System.out.println(
                "\nCosto totale azienda: "
                + gestore.calcolaStipendioTotale()
                + " €"
        );

        // Calcolo stipendi
        gestore.calcolaStipendi();
    }
}