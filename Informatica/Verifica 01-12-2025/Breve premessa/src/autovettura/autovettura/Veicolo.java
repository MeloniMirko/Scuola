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

    public void setmarca(String marca){
        this.marca= marca;
    }

    public String getmodello(){
        return modello;
    }

    public void setmodello(String modello){
        this.modello=modello;
    }

     public int getannoImmatricolazione(){
        return annoImmatricolazione;
    }

    public void setannoImmatricolazione(int annoImmatricolazione){
       this.annoImmatricolazione= annoImmatricolazione;
    }

    public double getprezzo(){
        return prezzo;
    }

    public void setprezzo(double prezzo){
        this.prezzo=prezzo;
    }

    public double getcapienzaSerbatoioOrBatteryKWh(){
        return capienzaSerbatoioOrBatteryKWh;
    }

    public void setcapienzaSerbatoioOrBatteryKWh(double capienzaSerbatoioOrBatteryKWh){
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


    

    


    
}
