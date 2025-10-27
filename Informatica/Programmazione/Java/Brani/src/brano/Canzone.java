package brano;
public class Canzone {
   //attributi
   private String titolo;
   private String artista; 
   private int durata;
   private String genere; 
   private int riproduzioni = 0;
   

   //creazione del costruttore

   public Canzone(String titolo,String artista,int durata,String genere){
    this.titolo=titolo;
    this.artista=artista;
    this.durata=durata;
    this.genere=genere;
    
   }
   

   //getter

   public String getTitolo(){
    return this.titolo;
   }

   public String getArtista(){
    return this.artista;
   }

   public int getDurata(){
    return this.durata;
   }

   public String getGenere(){
    return this.genere;
   }

   public int getRiproduzioni(){
    return this.riproduzioni;
   }

   //setter

   private void setTitolo(String titolo){
    this.titolo=titolo;
   }

   private void setArtista(String artista){
    this.artista=artista;
   }

   private void setDurata(int durata){
    this.durata=durata;
   }

   private void setGenere(String genere){
    this.genere=genere;
   }

   private void setRiproduzioni(int riproduzioni){
    this.riproduzioni=riproduzioni;
   }

   //metodi 

   String riproduci(){
    this.riproduzioni ++;
    return"Aggiunta una canzone alla coda la canzone"+titolo+"artista"+artista+"e il totale di riproduzioni e "+riproduzioni;
   }
    
   String getDurataFormattata(){

        int minuti = durata / 60;
        int secondi = durata % 60;

       return "la durata del brano e "+minuti+"e"+secondi;
     
   }

   String stampaDettagli(){

    return"il titolo del brano e"+titolo+"l'artista e"+artista;
  

   }

   String getCategoriaDurata(){
       if (durata < 180){
         return"Canzone breve";
       }else if(durata >= 180 && durata <=300){
        return "Canzone media";
       }else{
        return "Canzone lunga";
       } 

   } 

   //tostring 

   public string toString(){
    return "Titolo=" + this.titolo+"\n artista =" + this.artista +"\n Durata =" + this.durata +"\nGenere =" + this.genere +"\nRiproduzioni ="+ this.riproduzionis;
   }



}
