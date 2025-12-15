public class ConversioniSemplice {

    public static void main(String[] args) {
        int num1 = 10;
        int num2 = 20;

        Integer objNum1 = num1;
        Integer objNum2 = num2;

        System.out.println("PARTE 1: Autoboxing e Unboxing");
        System.out.println("Integer objNum1 = " + objNum1);
        System.out.println("Integer objNum2 = " + objNum2);

      
        String str1 = "123";
        String str2 = "45.67";

        System.out.println("\nPARTE 2: Conversione da Stringa a Numero");

      
        Integer intFromStr = Integer.valueOf(str1);
        System.out.println("Integer da str1: " + intFromStr);

        
        Double doubleFromStr = Double.valueOf(str2);
        System.out.println("Double da str2: " + doubleFromStr);


        Integer numeroInt = 789;
        Double numeroDouble = 12.34;

        String strInt = numeroInt.toString();
        String strDouble = numeroDouble.toString();

        System.out.println("\nPARTE 3: Conversione da Numero a Stringa");
        System.out.println("String da Integer: " + strInt);
        System.out.println("String da Double: " + strDouble);
    }
}
