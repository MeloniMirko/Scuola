
package esercizio_albergo;

import java.util.Scanner;

public class Main {

	public static void main(String[] args) {
		 
		Portachiavi P1= new Portachiavi();
		Chiave C;
		Scanner Accesso = new Scanner(System.in);
		String risposta;
		int numero, scelta;
		String tipo;
		String nominativo;
		int i=0;
		
		do {
		
			System.out.println("Scrivi il numero della chiave della stanza");
			numero = Accesso.nextInt();
			Accesso.nextLine();
			System.out.println("Scrivi il tipo della chiave della stanza - Singola - Doppia - Tripla");
			tipo = Accesso.nextLine();
			System.out.println("Scrivi il nominativo dela prenotazione:");
			nominativo = Accesso.nextLine();
		
			
			P1.elencoChiavi[i] = new Chiave(numero, tipo, nominativo);
			i++;
			System.out.println("Vuoi inserire un'altra chiave?");
			risposta=Accesso.nextLine();
		} while (risposta.equalsIgnoreCase("s")||risposta.equalsIgnoreCase("y")||risposta.equalsIgnoreCase("si")||risposta.equalsIgnoreCase("yes")); 	 
		
			
		do {
			System.out.println("Scegli tra le seguenti operazioni:\n");
			System.out.println("\n1) Lascia la chiave;\n2)Prendere la chiave inserendo il numero;\n3)Prendere la chiave inserendo il nome;\n4) Stampa l'elenco delle chiavi presenti nel portachiavi\n0) Uscita");
			scelta=Accesso.nextInt();
			Accesso.nextLine();
			switch (scelta) {
				case 1:
					System.out.println("Scrivi il numero della stanza: ");
					numero=Accesso.nextInt();
					Accesso.nextLine();
					C=new Chiave(P1.richiediChiaveNum(numero));
					
					System.out.println(P1.resituisciChiave(C));
					break;
				case 2:
					break;
				case 3:
					break;
				case 4:
					System.out.println(P1.toString());
					break;
				case 0:
					System.out.println("Grazie per aver usato il nostro programma!");
					break;
				default:
					break;
			}
		
		
		} while (scelta!=0);
		
			
		}
		
	
		
				
	}

