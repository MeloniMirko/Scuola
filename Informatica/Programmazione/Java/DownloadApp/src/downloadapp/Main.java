public class Main {
    public static void main(String[] args){


          // Array con il numero di download delle app
        int[] download = {
            1500000, 3000000, 800000, 250000, 4000000,600000, 700000, 900000, 100000, 1200000
        };

        // Contatori delle categorie
        int categoriaA = 0;
        int categoriaB = 0;
        int categoriaC = 0;

                // Analisi dei download
        for (int i = 0; i < download.length; i++) {

            if (download[i] > 2000000) {
                categoriaA++;
            } else if (download[i] >= 500000) {
                categoriaB++;
            } else {
                categoriaC++;
            }
        }

        // Stampa dei risultati
        System.out.println("Categoria A (> 2 milioni): " + categoriaA);
        System.out.println("Categoria B (500 mila - 2 milioni): " + categoriaB);
        System.out.println("Categoria C (< 500 mila): " + categoriaC);
    }

}
