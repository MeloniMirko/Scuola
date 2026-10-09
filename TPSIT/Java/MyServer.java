package it.fermi.asproni.reti.socket_base;

import java.io.IOException;
import java.io.InputStream;
import java.net.ServerSocket;
import java.net.Socket;

public class MyServer {
	public static void main(String[] args) throws IOException {
		ServerSocket serverSocket = new ServerSocket(50000);
		
		System.out.println("Server in esecuzione...");
		
		Socket socket = serverSocket.accept();
		
		System.out.println("Client connesso!");
		
		InputStream input = socket.getInputStream();
		
		byte[] buffer = new byte[1024];
		
		int dimensioneDati = input.read(buffer);
		
		String messaggio = new String(buffer, 0, dimensioneDati);
		System.out.println(messaggio);
		
		input.close();
		serverSocket.close();
		
	}
}
