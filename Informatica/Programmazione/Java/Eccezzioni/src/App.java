public class App {
    public static void main(String[] args){
        /*
        1) Divisione per zero
        Obiettivo: Dividere due numeri interi e gestire il caso in cui il divisore sia zero.
        Eccezione da catturare: ArithmeticException
        2) Array Index Out Of Bounds
        Obiettivo: Creare un array e tentare di accedere a un indice fuori limiti; gestire l'eccezione.
        Eccezione da catturare: ArrayIndexOutOfBoundsException
        3) Null Pointer Exception
        Obiettivo: Provare a chiamare un metodo su un oggetto null e gestire l'eccezione.
        Eccezione da catturare: NullPointerException
        4) Number Format Exception
        Obiettivo: Convertire una stringa non numerica in int e gestire l'errore.
        Eccezione da catturare: NumberFormatException 
        */
       
                int a = 10;
                int b = 0;
        
                try {
                    int risultato = a / b;
                    System.out.println("Risultato: " + risultato);
                } catch (ArithmeticException e) {
                    System.out.println("Errore: divisione per zero non consentita!");
                }
                

                int[] numeri = {1, 2, 3};
                
                try {
                    System.out.println(numeri[5]); // indice fuori limite
                } catch (ArrayIndexOutOfBoundsException e) {
                    System.out.println("Errore: indice fuori dai limiti dell'array!");
                }

              
                
                String testo = null;  
                try {
                    System.out.println(testo.length()); // metodo su oggetto null
                } catch (NullPointerException e) {
                        System.out.println("Errore: oggetto null utilizzato!");
                }

                String valore = "abc";
                
                try {
                    int numero = Integer.parseInt(valore);
                    System.out.println("Numero: " + numero);
                } catch (NumberFormatException e) {
                        System.out.println("Errore: stringa non convertibile in numero!");
                }
                    
                
                
        
    }
}
