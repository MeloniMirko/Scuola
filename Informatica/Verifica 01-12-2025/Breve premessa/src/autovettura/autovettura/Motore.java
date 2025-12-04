package autovettura;

public class Motore {
    private String tipo;
    private int potenzaCV;
    private int consumoMedio;
    private double emissioniCO2;
    private double costoManutenzioneAnnua;


    //Costruttore principale

    public Motore(String tipo, int potenzaCV,int consumoMedio,double emissioniCO2,double costoManutenzioneAnnua){
        this.tipo=tipo;
        this.potenzaCV=potenzaCV;
        this.consumoMedio=consumoMedio;
        this.emissioniCO2=emissioniCO2;
        this.costoManutenzioneAnnua=costoManutenzioneAnnua;
    }

    //Costruttore copia

    public Motore(Motore altro){
        this.tipo=altro.tipo;
        this.potenzaCV=altro.potenzaCV;
        this.consumoMedio=altro.consumoMedio;
        this.emissioniCO2=altro.emissioniCO2;
        this.costoManutenzioneAnnua=altro.costoManutenzioneAnnua;
    }

    //setter e getter

    
    public String gettipo(){
        return tipo;
    }

    public void settipo(String tipo){
        this.tipo=tipo;
    }

    public int getpotenzaCV(){
        return potenzaCV;
    }

    public void setpotenzaCV(int potenzaCV){
        this.potenzaCV=potenzaCV;
    }

     public double getconsumoMedio(){
        return consumoMedio;
    }

    public void setconsumoMedio(int consumoMedio){
       this.consumoMedio= consumoMedio;
    }

    public double getemissioniCO2(){
        return emissioniCO2;
    }

    public void setemissioniCO2(double emissioniCO2){
        this.emissioniCO2=emissioniCO2;
    }

    public double getcostoManutenzioneAnnua(){
        return costoManutenzioneAnnua;
    }

    public void setcostoManutenzioneAnnua(double costoManutenzioneAnnua){
        this.costoManutenzioneAnnua=costoManutenzioneAnnua;
    }

    @Override
    public String toString() {
        return "tipo"+tipo+"potenzaCV"+potenzaCV+"consumoMedio"+consumoMedio+"emissioniCO2"+emissioniCO2+"costoManutenzioneAnnua"+costoManutenzioneAnnua;
    }
    //metodi





}
