

import java.io.IOException;
import java.io.PrintWriter;
import java.net.ServerSocket;
import java.net.Socket;
import java.util.Scanner;

public class MyServer {
    public static void main(String[] args) throws IOException {

        Scanner tastiera = new Scanner(System.in);

        ServerSocket serverSocket = new ServerSocket(50017);

        System.out.println("Server in esecuzione...");

        Socket socket = serverSocket.accept();

        System.out.println("Client connesso!");

        PrintWriter output = new PrintWriter(
                socket.getOutputStream(), true);

       
        output.println("Benvenuto nel server");

       
        System.out.print("Inserisci il secondo messaggio: ");
        String messaggio = tastiera.nextLine();
        output.println(messaggio);

        
        output.println("Arrivederci");

        output.close();
        socket.close();
        serverSocket.close();
        tastiera.close();
    }
}