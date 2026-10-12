

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.net.Socket;

public class MyClient {
    public static void main(String[] args) throws IOException {

        Socket socket = new Socket("192.168.5.117", 50000);

        BufferedReader input = new BufferedReader(
                new InputStreamReader(socket.getInputStream()));

        // Lettura dei tre messaggi
        String messaggio1 = input.readLine();
        String messaggio2 = input.readLine();
        String messaggio3 = input.readLine();

        // Visualizzazione in console
        System.out.println(messaggio1);
        System.out.println(messaggio2);
        System.out.println(messaggio3);

        input.close();
        socket.close();
    }
}