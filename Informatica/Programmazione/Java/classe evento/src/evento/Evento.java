import java.time.LocalDate;

public class Evento {
    private LocalDate data;
    private String descrizione;

    // Costruttore principale
    public Evento(LocalDate data, String descrizione) {
        if (data != null) {
            this.data = data;
        } else {
            this.data = LocalDate.now(); // valore di default
        }

        if (descrizione != null && !descrizione.isEmpty()) {
            this.descrizione = descrizione;
        } else {
            this.descrizione = "Nessuna descrizione"; // valore di default
        }
    }

    // Costruttore di copia
    public Evento(Evento altro) {
        this.data = altro.data;
        this.descrizione = altro.descrizione;
    }

    // Getter e setter
    public LocalDate getData() {
        return data;
    }

    public void setData(LocalDate data) {
        if (data != null) {
            this.data = data;
        }
    }

    public String getDescrizione() {
        return descrizione;
    }

    public void setDescrizione(String descrizione) {
        if (descrizione != null && !descrizione.isEmpty()) {
            this.descrizione = descrizione;
        }
    }

    // toString
    @Override
    public String toString() {
        return "Evento: [" + data + "] - Descrizione: " + descrizione;
    }

    // Metodi su LocalDate
    public boolean isPast() {
        return data.isBefore(LocalDate.now());
    }

    public boolean isFuture() {
        return data.isAfter(LocalDate.now());
    }

    public long daysUntil() {
        return data.toEpochDay() - LocalDate.now().toEpochDay();
    }

    public void spostaDiGiorni(int giorni) {
        data = data.plusDays(giorni);
    }

    // Metodi su String
    public boolean contieneKeyword(String keyword) {
        if (keyword == null) return false;
        return descrizione.toLowerCase().contains(keyword.toLowerCase());
    }

    public int lunghezzaDescrizione() {
        return descrizione.length();
    }

    public void aggiornaDescrizione(String nuovaDescrizione) {
        setDescrizione(nuovaDescrizione);
    }
}
