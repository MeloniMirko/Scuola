package evento;
import java.time.*;
import java.time.temporal.ChronoUnit;

public class Evento {
//attributi
private LocalDate data;
private String descrizione;

//Costruttore

public Evento(LocalDate d, String descrizione) {
setData(d);
setDescrizione(descrizione);
}

//Costruttore di copia
public Evento (Evento altro) {
this.data=altro.getData();
this.descrizione=altro.getDescrizione();
}



//getter
public LocalDate getData() {
return data;
}

public String getDescrizione() {
return descrizione;
}

//setter

public void setData(LocalDate d) {
if (d!=null) {
this.data=LocalDate.of(d.getYear(), d.getMonth(),d.getDayOfMonth());
}
else {
this.data=LocalDate.now();
}
}

public void setDescrizione(String s) {
if(s!=null) {
this.descrizione=s;
}
else {
this.descrizione="";
}
}

//toString "Evento: [2026-01-11] - Descrizione: Riunione dipartimento"


@Override
public String toString() {
return "Evento: ["+ this.data.toString()+"] - Descrizione: "+this.descrizione;
}

//Metodo: public boolean isPast()
// true se data è precedente alla data odierna (LocalDate.now()), altrimenti false.
public boolean isPast() {
return data.isBefore(LocalDate.now());
}

//public boolean isFuture()
//true se data è successiva alla data odierna.

public boolean isFuture() {
return data.isAfter(LocalDate.now());
}

/*public long daysUntil()
Se data è nel futuro, restituisce il numero di giorni da oggi fino a data;
se è oggi o nel passato può restituire 0 o un valore negativo
(documentare il comportamento).
Suggerimento: import java.time.temporal.ChronoUnit e
usare ChronoUnit.DAYS.between.
*/
public long daysUntil() {
return ChronoUnit.DAYS.between(LocalDate.now(), data);

}

/*public void spostaDiGiorni(long giorni)
Sposta la data aggiungendo giorni (positivo o negativo).*/

public void spostaDiGiorni(long giorni) {
if(data!=null) {
data=data.plusDays(giorni);
}
}

/*Metodi su String
* public boolean contieneKeyword(String keyword)
true se descrizione contiene (case-insensitive) la parola keyword;
verificare keyword non nullo.*/

public boolean contieneKeyword(String keyword) {
    if (keyword != null) {
        return descrizione.toLowerCase().contains(keyword.toLowerCase());
    }
    return false;
}


/*public int lunghezzaDescrizione()
   Restituisce il numero di caratteri della descrizione.*/

public int lunghezzaDescrizione() {
   return this.descrizione.length();
}

/*public void aggiornaDescrizione(String nuovaDescrizione)
   Imposta la nuova descrizione dopo opportuna validazione.*/

public void aggiornaDescrizione(String nuovaDescrizione) {
   if(nuovaDescrizione!=null) {
       this.descrizione=nuovaDescrizione;
   }
}

/*public long giorniTra(Evento altro)
   Restituisce i giorni tra this.data e altro.data
   (valore positivo/negativo secondo ordine).*/
public long giorniTra(Evento altro) {
   return ChronoUnit.DAYS.between(altro.getData(), this.data);
}



public Evento copiaConNuovaData(LocalDate nuovaData) {
    return new Evento(nuovaData, this.descrizione);
}

}
