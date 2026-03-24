
package esercizio_albergo;
/**
 * Classe Chiave
 * @author 4B Inf
 * @version 1.0
 */
public class Chiave {

	private int numero;
	private String tipo;
	private String nominativo;
	
	public Chiave(int numero, String tipo, String nominativo) {
		this.numero = numero;
		this.tipo = tipo;
		this.nominativo = nominativo;
	}
	
	public Chiave(Chiave C) {
		this.numero = C.getNumero();
		this.tipo = C.getTipo();
		this.nominativo = C.getNominativo();
	}
	
	//setter
	
	public void setNumero(int numero) {
		this.numero = numero;
	}
	
	public void setTipo(String tipo) {
		this.tipo = tipo;
	}
	
	public void setNominativo(String nominativo) {
		this.nominativo = nominativo;
	}
	
	//getter
	
	public int getNumero() {
		return this.numero;
	}
	
	public String getTipo() {
		return this.tipo;
	}
	
	public String getNominativo() {
		return this.nominativo;
	}
	
	public String toString() {
		return "Numero: " +this.numero+ "\nTipo: " +this.tipo+ "\nNominativo: " +this.nominativo;
	}
	
}