package it.fermi.asproni.reti.socket_base;

import java.io.IOException;
import java.io.OutputStream;
import java.net.Socket;
import java.net.UnknownHostException;

public class MyClient {
	public static void main(String[] args) throws UnknownHostException, IOException {
		Socket socket = new Socket("localhost", 50000);
		
		OutputStream out = socket.getOutputStream();
		
		
		String messaggio = "ciao";
		
		out.write(messaggio.getBytes());
	
		
		out.close();
		socket.close();
	}
}
