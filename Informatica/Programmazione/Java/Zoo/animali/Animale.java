package animali;

public abstract class Animale {
    private String nome;

    public Animale(String nome) {
        this.nome = nome;
    }

    public String getNome() {
        return nome;
    }

    public abstract void verso();

    public void dormire() {
        System.out.println(nome + " sta dormendo... Zzz");
    }

    public abstract void emettiVerso();

    public interface Volante {
        void vola();
    }

    public interface Nuotatore {
        void nuota();
    }
}