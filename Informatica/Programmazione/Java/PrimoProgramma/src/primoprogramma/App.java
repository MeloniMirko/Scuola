//Realizzare un programma che dati due valori interi memorizzati nelle variabili varA e varB.
// In seguito, scambi il valore di tali variabili e stampi a schermo il nuovo contenuto.

package primoprogramma;
public class App {
    public static void main(String[] args) {
        int varA = 5;
        int varB = 10;
        int temp;

        System.out.println("Valore iniziale di varA: " + varA);
        System.out.println("Valore iniziale di varB: " + varB);

        // Scambio dei valori
        temp = varA;
        varA = varB;
        varB = temp;

        System.out.println("Nuovo valore di varA: " + varA);
        System.out.println("Nuovo valore di varB: " + varB);
    }
}
