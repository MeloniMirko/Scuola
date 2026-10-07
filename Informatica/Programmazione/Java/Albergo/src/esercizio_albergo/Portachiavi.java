
package esercizio_albergo;

/**
 * Classe di array Portachiavi
 * @author 4B Inf
 * @version 1.0
 */

public class Portachiavi {
	
	private static final int NUM_MAX = 30;
	
	Chiave elencoChiavi[];
	
	/**
	 * Costruttore
	 */

	public Portachiavi() {
		elencoChiavi = new Chiave[NUM_MAX];
	}
	
	/**
	 * Costruttore di copia
	 */
	
	public Portachiavi(Portachiavi altroPortachiavi) {
		elencoChiavi = new Chiave[NUM_MAX];
		for(int i=0; i<NUM_MAX; i++) {
			if(altroPortachiavi.elencoChiavi[i] != null) {
				elencoChiavi[i] = new Chiave(altroPortachiavi.elencoChiavi[i]);
			}
		}
	}
	
	public String setElencoChiavi(Chiave C1, int posizione) {
		try{
			elencoChiavi[posizione] = new Chiave (C1);
			return "Chiave registrata con successo";
		}
		catch( ArrayIndexOutOfBoundsException e ) {
			return "Errore nella registrazione";
		}
		catch(NullPointerException c){
			return "Errore nella registrazione";
		} 
	}
	
	//per numero
	
	public Chiave richiediChiaveNum(int nCamera) {
		try{
			for(int i=0; i<NUM_MAX; i++) {
				if(elencoChiavi[i].getNumero() == nCamera) {
					return elencoChiavi[i];
				}
			}return null;
		}
			catch(ArrayIndexOutOfBoundsException e){
				return null;
			}
		}
	
		
	
	//per nominativo
	
	public Chiave richiediChiaveNome(String nome) {
		for(int i=0; i<NUM_MAX; i++) {
			if(elencoChiavi[i].getNominativo().equalsIgnoreCase(nome)) {
				return elencoChiavi[i];
			}
		}
		return null;
	}
	
	public String resituisciChiave(Chiave c) {
		if(c != null) {
			for(int i=0; i<NUM_MAX; i++) {
				if(elencoChiavi[i] != null) {
					elencoChiavi[i]=null;
					return "Chiave restituita con successo.";
				}
			}
			return "Tutte le posizioni sono occupate";	
		} else {
			return "Chiave non valida";
		}
		
	}
	
	public String toString() {
		String stringa = "";
		for (int i = 0; i < NUM_MAX; i++) {
			if (elencoChiavi[i] != null) {
				stringa += elencoChiavi[i].toString()+"\n\n";
			}
		}
		return stringa;
	}
	
	
	
	
}