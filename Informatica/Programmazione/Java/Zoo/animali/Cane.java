package animali;

public class Cane extends Animali{
		private String razza;
		private String colore;
		
		public Cane(String nome, float peso, float lunghezza, int eta , String razza, String colore) {
			super(nome, peso, lunghezza, eta);
			this.razza=razza;
			this.colore=colore;
		}
		
		public Cane(Animali A, String razza, String colore) {
			super(A);
			this.razza=razza;
			this.colore=colore;
		}
		
		
		public Cane(Cane C) {
			super(C.getNome(), C.getPeso(), C.getLunghezza(), C.getEta());
			this.razza=C.getRazza();
			this.colore=C.getColore();
		}
		

		public String getRazza() {
			return razza;
		}


		public void setRazza(String razza) {
			this.razza = razza;
		}


		public String getColore() {
			return colore;
		}


		public void setColore(String colore) {
			this.colore = colore;
		}


		@Override
		public String toString() {
			return super.toString()+ "Cane [razza=" + razza + ", colore=" + colore + "]";
		}
		
		@Override
		public String verso() {
			return "il cane abbaia" ;
			}
		
		
		
}
