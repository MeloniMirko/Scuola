public class Ingrediente {
    private String nome;
    private double quantita;
    private String unita;
    private double caloriePerUnita;
    private double costoPerUnita;
    private boolean vegetariano;

    //costruttore principale
      public Ingrediente(String nome, double quantita, String unita,
                       double caloriePerUnita, double costoPerUnita, boolean vegetariano) {
        this.nome= nome;
        this.quantita=quantita;
        this.unita=unita;
        this.caloriePerUnita=caloriePerUnita;
        this.costoPerUnita=costoPerUnita;
        this.vegetariano=vegetariano;
    }

    //costruttore di copia
    public Ingrediente(Ingrediente altro){
        this.nome= nome;
        this.quantita=quantita;
        this.unita=unita;
        this.caloriePerUnita=caloriePerUnita;
        this.costoPerUnita=costoPerUnita;
        this.vegetariano=vegetariano;
    }

    //Metodi Getter e Setter

    public String getNome() {
    return nome;
    }

    public void setNome(String nome) {
        this.nome = nome;
    }

    public double getQuantita () {
        return quantita ;
    }

    public void setQuantita (double quantita ) {
        this.quantita  = quantita ;
    }

    public String getUnita() {
        return unita;
    }

    public void setUnita(String unita) {
        this.unita = unita;
    }

    public double getCaloriePerUnita() {
        return caloriePerUnita;
    }

    public void setCaloriePerUnita(double caloriePerUnita) {
        this.caloriePerUnita = caloriePerUnita;
    }

    public double getCostoPerUnita() {
        return costoPerUnita;
    }

    public void setCostoPerUnita(double costoPerUnita) {
        this.costoPerUnita = costoPerUnita;
    }

    public boolean getVegetariano () {
        return vegetariano ;
    }

    public void setVegetariano (boolean vegetariano ) {
        this.vegetariano  = vegetariano ;
    }

    //toString()
     @Override
    public String toString() {
        return quantita + " " + unita + " " + nome +
               " — " + caloriePerUnita + " kcal/unit — €" + costoPerUnita +
               "/unit — Vegetariano: " + vegetariano;
    }

    //scalaQuantita(double fattore)

    public void scalaQuantita(double fattore){
        if(fattore > 0){
            this.quantita*=fattore;
        }
    }

    public double calorieTotali(){
        return(this.quantita *= this.caloriePerUnita)/100.0;
    }

    public double costoTotale(){
        return(this.quantita *= this.costoPerUnita)/100.0;
    }

}
