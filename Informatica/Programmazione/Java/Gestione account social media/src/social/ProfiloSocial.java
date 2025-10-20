package social;

public class ProfiloSocial {
     //attributi
    private String username;
    private String nome;
    private int follower;
    private int post;

    //creazione del costruttore

    public ProfiloSocial(String username, String nome,int follower,int post){
        this.username=username;
        this.nome=nome;
        this.follower=follower;
        this.post=post;
    }


    //setter 

    private void setUsername(String username){
        this.username=username;
    }

    private void setNome(String nome){
        this.nome=nome;
    }

    private void setFollower(int follower){
        this.follower=follower;
    }

    private void setPost(int post){
        this.post=post;
    }

    //getter

    public String getUsername(){
        return this.username;
    }

    public String getNome(){
        return this.nome;
    }

    public int getFollower(){
        return this.follower;
    }

    public int getPost(){
        return this.post;
    } 
    
    
    //Metodi

    String pubblica(){
       this.post++;
        return "Nuovo post pubblicato";
    }
    
    void aggiungiFollower(){
        this.follower++;
    }

    void rimuoviFollower(){
      
        if(follower > 0){
           this.follower--;
        }
    }

    boolean isInfluencer(){
        if(follower > 10000){
            return true;
        }else{
            return false;
        }
    }

    //tooString

    public String toString(){
        return "Username=" + this.username+"\nNome =" + this.nome +"\nFollower =" +this.follower +"\nPost =" + this.post;

    }

}
