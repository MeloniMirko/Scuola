package Eccezzioni2;
public class ConsoleInput {
    import java.io.*;

/**
 * @author 4B INF
 * @version 1.0
 * Classe che useremo per gli input con la classe BufferedReader
 */
public class ConsoleInput {
	BufferedReader input;
	
/**
 * Costruttore	
 */
	public ConsoleInput() {
		input= new BufferedReader(new InputStreamReader(System.in));
	}
	
/**
 * Metodo che serve per acquisire i numeri interi
 * @return numero intero acquisito con l'input	
 */
	
	public int readInt() throws IOException {
		return Integer.parseInt(input.readLine());
	}
	
	
/**
 * Metodo che serve per acquisire i numeri double
 * @return numero double acquisito con l'input	
 */
	public double readDouble() throws IOException {
		return Double.parseDouble(input.readLine());
	}	
	
}
}
