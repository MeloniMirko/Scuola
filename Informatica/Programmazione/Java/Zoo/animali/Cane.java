package animali;

public class Cane extends Animale implements Nuotatore {
    public Cane(String nome) {
        super(nome);
    }

    @Override
    public void emettiVerso() {
        System.out.println(getNome() + " fa: Bau Bau!");
    }

    @Override
    public void nuota() {
        System.out.println(getNome() + " nuota a cagnolino.");
    }
}