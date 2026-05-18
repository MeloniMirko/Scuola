package immobiliare;

public class ArrayAbitazioni {
    Abitazione[] Abitazioni = new Abitazione[20];

    public void inserisci(Abitazione abitazione) {  
        for (int i = 0; i < Abitazioni.length; i++) {
            if (Abitazioni[i] == null) {
                Abitazioni[i] = abitazione;
                return;
            }
        }
        System.out.println("Array pieno, impossibile inserire l'abitazione.");
    }

    public void elimina(int posizione) {
        if (posizione < 0 || posizione >= Abitazioni.length) {
            System.out.println("Posizione non valida.");
            return;
        }
        Abitazioni[posizione] = null;
    }

    public Abitazione cercaAbitazione(String indirizzo) {
        for (Abitazione abitazione : Abitazioni) {
            if (abitazione != null && abitazione.getIndirizzo().equals(indirizzo)) {
                return abitazione;
            }
        }
        return null; // Abitazione non trovata
    }

    @Override
    public String toString() {
        StringBuilder sb = new StringBuilder();
        for (Abitazione abitazione : Abitazioni) {
            if (abitazione != null) {
                sb.append(abitazione.toString()).append("\n");
            }
        }
        return sb.toString();
    }

    

    





    
}
