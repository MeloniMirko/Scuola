package animali;

public class Aquila extends Animale implements Volante {
    public Aquila(String nome) {
        super(nome);

    }

    @Override
    public void emettiVerso() {
        System.out.println(getNome() + " fa: SCREEECH!");
    }

    @Override
    public void vola() {
        System.out.println(getNome() + " vola ad alta quota.");
    }
}