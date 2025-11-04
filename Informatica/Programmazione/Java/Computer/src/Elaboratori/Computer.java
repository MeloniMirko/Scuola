package Elaboratori;

public class Computer {
    private String marca;
    private String modello;
    private double  prezzo;
    private String cpu;
    private int ram;
    private int storage;

    //costruttore
    public Computer(String marca, String modello, double prezzo, String cpu, int ram, int storage) {
        this.setMarca(marca);
        this.setModello(modello);
        this.setPrezzo(prezzo);
        this.setCpu(cpu);
        this.setRam(ram);
        this.setStorage(storage);
}

//getter
public String getMarca(){
    return marca;
}
public String getModello(){
    return modello;
}
public double getPrezzo(){
    return prezzo;
}
public String getCpu(){
    return cpu;
}
public int getRam(){
    return ram;
}
public int getStorage(){
    return storage;
}

//setter
private void setMarca(String marca){
    this.marca = marca;
}
private void setModello(String modello){
    this.modello = modello;
}
private void setPrezzo(double prezzo){
    this.prezzo = prezzo;
}
private void setCpu(String cpu){
    this.cpu = cpu;
}
private void setRam(int ram){
    this.ram = ram;
}
private void setStorage(int storage){
    this.storage = storage;
}

//toString
    @Override
    public String toString(){
    return "Marca: " + marca + 
    " | Modello: " + modello + 
    " | Prezzo: " + prezzo + 
    " | CPU: " + cpu + 
    " | RAM: " + ram + "GB" +
    " | Storage: " + storage + "GB";
}


//metodo ottieniFasciaDiPrezzo()
public String ottieniFasciaDiPrezzo(){
    if(prezzo > 1200){
        return "fascia Alta";
    } else if(prezzo >= 700 && prezzo < 1200){
        return "fascia Media";
    } else {
        return "fascia Bassa";
    }
}

//metodi aggiuntivi

//metodo aggiornaprezzo(double scontoPercentuale) per aggiornare il prezzo del computer applicando uno sconto
public String aggiornaPrezzo(double scontoPercentuale){
    double sconto;
    if(scontoPercentuale <0 || scontoPercentuale>50){
        return "Percentuale di sconto non valida.";
    }
    else {
        sconto = (scontoPercentuale / 100) * prezzo;
        prezzo -= sconto;
        return "Prezzo aggiornato: " + prezzo;
    }
}

//metodo upgradeRam(int nuovaRam) per aggiornare la RAM del computer
public void upgradeRam(int nuovaRam){
    if(nuovaRam > ram){
        ram = nuovaRam;
    }
    else {
        System.out.println("La nuova RAM deve essere maggiore di quella attuale.");
    }
}

//metodo confrontaComputer(Computer altroComputer) per confrontare due computer in base al prezzo
public int confrontaComputer(Computer altroComputer) {
    return Double.compare(this.prezzo, altroComputer.getPrezzo());
    }

// Metodo ottieniInfoDettagliata() per ottenere una descrizione dettagliata del computer
public String ottieniInfoDettagliata() {
    String stringa = "";
    stringa += toString();
    stringa += " | Fascia di Prezzo: " + ottieniFasciaDiPrezzo();
    if (ram >= 32 && prezzo >= 1500) {
        stringa += " | Idoneo per gaming avanzato";
    }
    else {
        stringa += " | Non idoneo per gaming avanzato";
    }
    return stringa;
}

      


    
}


