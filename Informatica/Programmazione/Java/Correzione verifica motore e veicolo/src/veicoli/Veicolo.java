package veicoli;

public class Veicolo {
	//Attributi privati
	private String marca;
	private String modello;
	private int annoImmatricolazione;
	private double  prezzo;
	private double capienzaSerbatoioOrBatteryKWh ;
	private Motore motore;
	
	//Costruttore
	public Veicolo(String marca, String modello, int annoImmatricolazione, double emissioniCO2,double capienzaSerbatoioOrBatteryKWh,Motore motore){
		this.marca=marca;
		this.modello=modello;
		this.annoImmatricolazione=annoImmatricolazione;
		this.prezzo=prezzo;
		this.capienzaSerbatoioOrBatteryKWh=capienzaSerbatoioOrBatteryKWh;
		this.motore=motore;
	}
	// costruttore di copia
	public Veicolo(Veicolo A) {
		this.marca=A.getMarca();
		this.modello=A.getModello();
		this.annoImmatricolazione=A.getAnnoImmatricolazione();
		this.prezzo=A.getPrezzo();
		this.capienzaSerbatoioOrBatteryKWh=A.getCapienzaSerbatoioOrBatteryKWh();
		this.motore=A.getMotore();
	}
	//setter
	public String getMarca() {
		return marca;
	}
	public void setMarca(String marca) {
		this.marca = marca;
	}
	public String getModello() {
		return modello;
	}
	public void setModello(String modello) {
		this.modello = modello;
	}
	public int getAnnoImmatricolazione() {
		return annoImmatricolazione;
	}
	public void setAnnoImmatricolazione(int annoImmatricolazione) {
		this.annoImmatricolazione = annoImmatricolazione;
	}
	public double getPrezzo() {
		return prezzo;
	}
	public void setPrezzo(double prezzo) {
		this.prezzo = prezzo;
	}
	public double getCapienzaSerbatoioOrBatteryKWh() {
		return capienzaSerbatoioOrBatteryKWh;
	}
	public void setCapienzaSerbatoioOrBatteryKWh(double capienzaSerbatoioOrBatteryKWh) {
		this.capienzaSerbatoioOrBatteryKWh = capienzaSerbatoioOrBatteryKWh;
	}
	public Motore getMotore() {
		return motore;
	}
	public void setMotore(Motore motore) {
		this.motore = motore;
	}
	//metodi aggiuntivi
	public double costoManutenzioneAnnuaTotale() {
		return motore.getCostoManutenzioneAnnua();
}
	public String confrontaConsumo(Veicolo altro) {
		if(motore.getConsumoMedio>altro.motore.getConsumoMedio) {
			return "il consumo migliore e del veicolo"+this.modello;
		}
		else if (motore.getConsumoMedio<altro.motore.getConsumoMedio) {
			return "il consumo migliore e del veicolo"+altro.modello;
		}
		else {
			return "consumo uguale";
		}
	}
}
