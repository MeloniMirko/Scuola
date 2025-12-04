package autovettura;

public class Veicolo {
    private String marca;
    private String modello;
    private int annoImmatricolazione;
    private double prezzo;
    private double capienzaSerbatoioOrBatteryKWh;
    public Motore motore;

    //costruttore principale
    public Veicolo (String marca,String modello,int annoImmatricolazione,double prezzo, double capienzaSerbatoioOrBatteryKWh){
        this.marca= marca;
        this.modello=modello;
        this.annoImmatricolazione= annoImmatricolazione;
        this.prezzo=prezzo;
        this.capienzaSerbatoioOrBatteryKWh=capienzaSerbatoioOrBatteryKWh;
        this.motore=new Motore(motore);
        
        
    }

    //costruttore di copia
    public Veicolo (Veicolo altro){
        this.marca= altro.marca;
        this.modello=altro.modello;
        this.annoImmatricolazione= altro.annoImmatricolazione;
        this.prezzo=altro.prezzo;
        this.capienzaSerbatoioOrBatteryKWh=altro.capienzaSerbatoioOrBatteryKWh;
        this.motore=new Motore(altro.motore);
    }

    //getter e setter 

    public String getmarca(){
        return marca;
    }

    public void setmarca(){
        this.marca= marca;
    }

    public String getmodello(){
        return modello;
    }

    public void setmodello(){
        this.modello=modello;
    }

     public int getannoImmatricolazione(){
        return annoImmatricolazione;
    }

    public void setannoImmatricolazione(){
       this.annoImmatricolazione= annoImmatricolazione;
    }

    public double getprezzo(){
        return prezzo;
    }

    public void setprezzo(){
        this.prezzo=prezzo;
    }

    public double getcapienzaSerbatoioOrBatteryKWh(){
        return capienzaSerbatoioOrBatteryKWh;
    }

    public void setcapienzaSerbatoioOrBatteryKWh(){
        this.capienzaSerbatoioOrBatteryKWh=capienzaSerbatoioOrBatteryKWh;
    }

    public String aggiornaMotore(Motore motore) {
        this.motore=motore;
        return "Motore Aggiornato.";
    }

    public void setMotore(Motore motore)
     { 
        this.motore = motore; 
    }


    //toString

    @Override
    public String toString() {
       return "marca:"+marca+"modello"+modello+"annoimmatricolazione="+annoImmatricolazione+"prezzo="+prezzo+"capienzazerbatoioorbatterykwh="+capienzaSerbatoioOrBatteryKWh+" | Motore:"+ motore.toString();
        
    }

    //metodi

    double costoManutenzioneAnnuaTotale(){
        return motore.getcostoManutenzioneAnnua();
    }

    

    


    
}
