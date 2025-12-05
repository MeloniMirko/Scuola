package veicoli;

public class Motore {

	//Attributi privati
	private String tipo;
	private int potenzaCV;
	private double consumoMedio ;
	private double emissioniCO2 ;
	private double costoManutenzioneAnnua;

	//Costruttore
	public Motore(String tipo, int potenzaCV, double consumoMedio, double emissioniCO2,double costoManutenzioneAnnua){
		this.tipo=tipo;
		this.potenzaCV=potenzaCV;
		this.consumoMedio=consumoMedio;
		this.emissioniCO2=emissioniCO2;
		this.costoManutenzioneAnnua=costoManutenzioneAnnua;
	}
	// costruttore di copia
	public Motore(Motore A) {
		this.tipo=A.getTipo();
		this.potenzaCV=A.getPotenzaCV();
		this.consumoMedio=A.getConsumoMedio();
		this.emissioniCO2=A.getEmissioniCO2();
		this.costoManutenzioneAnnua=A.getCostoManutenzioneAnnua();
	}
	//setter
	public void setTipo(String tipo) {
		this.tipo=tipo;
	}
			
	private void setPotenzaCV(int potenzaCV) {
		this.potenzaCV=potenzaCV;
	}
			
	public void setConsumoMedio (double consumoMedio) {
		this.consumoMedio=consumoMedio;
	}
			
	public void setEmissioniCO2 (double emissioniCO2) {
		this.emissioniCO2=emissioniCO2;
	}
	public void setCostoManutenzioneAnnua (double costoManutenzioneAnnua) {
		this.costoManutenzioneAnnua=costoManutenzioneAnnua;
	}
	//getter
	public String getTipo() {
		return this.tipo;
	}
			
	public int getPotenzaCV() {
		return this.potenzaCV;
	}
			
	public double getConsumoMedio() {
		return this.consumoMedio;
	}
			
	public double getEmissioniCO2() {
		return this.emissioniCO2;
	}
	public double getCostoManutenzioneAnnua() {
		return this.costoManutenzioneAnnua;
	}
	//metodo toString
	public String toString() {
		return "\ntipo"+tipo+"\npotenzaCV"+potenzaCV+"\nconsumomedeio"+consumoMedio+"\nemissioniCO2"+emissioniCO2+"\ncostoManutenzioneAnnua"+costoManutenzioneAnnua;
	}
	//metodi aggiuntivi
	public boolean aggiornaCostoManutenzione(double percentuale) {
	if(percentuale>0) {
		costoManutenzioneAnnua=costoManutenzioneAnnua+percentuale*100;
		return true;
	}
	else {
		return false;
	}
	
	
	
	}
	
}
