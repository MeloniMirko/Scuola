public class Main {

    public static void main(String[] args) {

        int[] download = {
            1500000, 3000000, 800000, 250000, 4000000,600000, 700000, 900000, 100000, 1200000
        };

        int categoriaA = 0; // > 2 milioni
        int categoriaB = 0; // tra 500 mila e 2 milioni
        int categoriaC = 0; // < 500 mila

        for (int i = 0; i < download.length; i++) {

            if (download[i] > 2000000) {
                categoriaA++;
            } else if (download[i] >= 500000) {
                categoriaB++;
            } else {
                categoriaC++;
            }
        }

        System.out.println("App con più di 2 milioni di download: " + categoriaA);
        System.out.println("App tra 500 mila e 2 milioni di download: " + categoriaB);
        System.out.println("App con meno di 500 mila download: " + categoriaC);
    }
}

