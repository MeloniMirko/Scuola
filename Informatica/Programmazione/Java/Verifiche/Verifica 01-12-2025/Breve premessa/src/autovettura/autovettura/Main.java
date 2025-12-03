package autovettura;

import java.util.Scanner;

public class Main {
    public static void main(String[] args){
        Scanner s=new Scanner(System.in);
        Motore M1;
        String tipo;
        System.out.println("Inserisci il tipo di motore (Benzina,diesel,elettrico,ibrido)");
        tipo=s.nextLine();
        int potenzaCV;
        System.out.println("Inserisci la potenza del motore in CV");
        potenzaCV=s.nextInt();
        s.nextLine();
        int consumoMedio;
        System.out.println("Inserisci il consumo medio della tua macchina");
        consumoMedio=s.nextInt();
        s.nextLine();
        double emissioniCO2;
        System.out.println("Inserisci le emissioni CO2");
        emissioniCO2=s.nextDouble();
        s.nextLine();
        double costoManutenzioneAnnua;
        System.out.println("Inserisci il costo di manutenzione annua");
        costoManutenzioneAnnua=s.nextDouble();
        s.nextLine();
        M1=new Motore(tipo,potenzaCV,consumoMedio,emissioniCO2,costoManutenzioneAnnua);

        Veicolo V1;
        System.out.println("Inserisci la marca del veicolo");
        String marca=s.nextLine();
        System.out.println("Inserisci il modello del veicolo");
        String modello=s.nextLine();
        System.out.println("Inserisci l'anno di immatricolazione del veicolo");
        int annoImmatricolazione=s.nextInt();
        s.nextLine();
        System.out.println("Inserisci il prezzo del veicolo");
        double prezzo=s.nextDouble();
        s.nextLine();
        System.out.println("Inserisci la capienza serbatoio del veicolo");
        double capienzaSerbatoioOrBatteryKWh = s.nextDouble();
        s.nextLine();

        



    }
}
