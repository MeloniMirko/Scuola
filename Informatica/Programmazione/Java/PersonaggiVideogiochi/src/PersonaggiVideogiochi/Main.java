
package personaggivideogiochi;

interface Combattente {
    void attacca();
}

interface Curatore {
    void curaAlleato();
}

abstract class Personaggio {
    protected String nome;
    protected int puntiVita;

    public Personaggio(String nome, int puntiVita) {
        this.nome = nome;
        this.puntiVita = puntiVita;
    }

    abstract void usaAbilitaSpeciale();
}

class Guerriero extends Personaggio implements Combattente {

    public Guerriero(String nome, int puntiVita) {
        super(nome, puntiVita);
    }

    @Override
    public void attacca() {
        System.out.println(nome + " colpisce con la sua ascia!");
    }

    @Override
    public void usaAbilitaSpeciale() {
        System.out.println(nome + " urla per attirare i nemici!");
    }
}

class MagoBianco extends Personaggio implements Combattente, Curatore {

    public MagoBianco(String nome, int puntiVita) {
        super(nome, puntiVita);
    }

    @Override
    public void attacca() {
        System.out.println(nome + " lancia un attacco magico!");
    }

    @Override
    public void curaAlleato() {
        System.out.println(nome + " cura i suoi alleati!");
    }

    @Override
    public void usaAbilitaSpeciale() {
        System.out.println(nome + " crea una barriera di luce!");
    }
}

public class Main {
    public static void main(String[] args) {

        Guerriero g = new Guerriero("Gimli", 200);
        MagoBianco m = new MagoBianco("Yuna", 90);

        g.attacca();
        m.attacca();

        g.usaAbilitaSpeciale();
        m.usaAbilitaSpeciale();

        m.curaAlleato();
    }
}
