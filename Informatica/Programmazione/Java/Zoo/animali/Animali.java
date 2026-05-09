package animali;

public class Animali {
	protected String nome;
	protected float peso;
	protected float lunghezza;
	protected int eta;
	
	//costruttore
	public Animali(String nome, float peso, float lunghezza, int eta) {
		this.nome=nome;
		this.peso=peso;
		this.lunghezza=lunghezza;
		this.eta=eta;
	}
	
	public Animali(Animali A) {
		this.nome=A.getNome();
		this.peso=A.getPeso();
		this.lunghezza=A.getLunghezza();
		this.eta=A.getEta();
	}

	public String getNome() {
		return nome;
	}

	public void setNome(String nome) {
		this.nome = nome;
	}

	public float getPeso() {
		return peso;
	}

	public void setPeso(float peso) {
		this.peso = peso;
	}

	public float getLunghezza() {
		return lunghezza;
	}

	public void setLunghezza(float lunghezza) {
		this.lunghezza = lunghezza;
	}

	public int getEta() {
		return eta;
	}

	public void setEta(int eta) {
		this.eta = eta;
	}

	@Override
	public String toString() {
		return "Identità Animale: \nNome:" + this.nome + "\nPeso:" + this.peso + "\nLunghezza:" +
				this.lunghezza + "\nEta:" + this.eta ;
	}
	
	//stampa il verso che fa l'animale
	public String verso() {
		return "Non sappiamo che verso farà";
	}
}
