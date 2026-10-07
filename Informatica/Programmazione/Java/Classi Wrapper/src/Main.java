public class Main {
    public static void main(String[] args) {

        int a = 10;
        int b = 20;

        Integer integerA = a;
        Integer integerB = b;

        System.out.println("PARTE 1 - Autoboxing");
        System.out.println("Primo Integer: " + integerA);
        System.out.println("Secondo Integer: " + integerB);
        
        String s1 = "123";
        String s2 = "45.67";
        String s3 = "abc"; 

        Integer numeroIntero = Integer.valueOf(s1);
        Double numeroDecimale = Double.valueOf(s2);

        System.out.println("\nPARTE 2 - Conversioni");
        System.out.println("Integer ottenuto: " + numeroIntero);
        System.out.println("Double ottenuto: " + numeroDecimale);

        Integer intero = 789;
        Double decimale = 12.34;

        String interoStringa = intero.toString();
        String decimaleStringa = decimale.toString();

        System.out.println("\nPARTE 3 - Numero a String");
        System.out.println("Stringa da Integer: " + interoStringa);
        System.out.println("Stringa da Double: " + decimaleStringa);
    }
}
