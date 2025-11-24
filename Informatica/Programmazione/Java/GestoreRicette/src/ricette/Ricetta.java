public class Ricetta {
   
   private String nome;
   private int tempoPreparazione;
   private String difficolta;
   private int porzioni;


   //costruttore principale


   //costruttore di copia 
   
   
    // --- Getter e Setter ---
public String getNome() {
    return nome;
}

public void setNome(String nome) {
    this.nome = nome;
}

public int getTempoPreparazione() {
    return tempoPreparazione;
}

public void setTempoPreparazione(int tempoPreparazione) {
    this.tempoPreparazione = tempoPreparazione;
}

public String getDifficolta() {
    return difficolta;
}

public void setDifficolta(String difficolta) {
    this.difficolta = difficolta;
}

public int getPorzioni() {
    return porzioni;
}

public void setPorzioni(int porzioni) {
    this.porzioni = porzioni;
}


// --- toString ---
@Override
public String toString() {
    return "Ricetta" + "nome=" + nome + ", " + "tempoPreparazione=" + tempoPreparazione + ", " + "difficolta=" + difficolta + ", " + "porzioni=" + porzioni + "]";
}
}
