import os

# Cartella dello script
cartella_script = os.path.dirname(os.path.abspath(__file__))

# File txt con tutti i programmi
file_txt = os.path.join(cartella_script, "tutti_programmi.txt")

# Cartella di output
cartella_output = os.path.join(cartella_script, "programmi_c")
os.makedirs(cartella_output, exist_ok=True)

# Leggi il contenuto del file txt
with open(file_txt, "r", encoding="utf-8") as f:
    contenuto = f.read()

# Dividi i programmi usando ### PROGRAMMA ### come separatore
programmi = [p.strip() for p in contenuto.split("### PROGRAMMA ###") if p.strip()]

# Controllo numero programmi
if len(programmi) != 20:
    print(f"Attenzione! Ci sono {len(programmi)} programmi nel file, ma ci aspettavamo 20.")

# Crea i file .c senza nomi specifici, solo numerati
for i, prog in enumerate(programmi, start=1):
    percorso_file = os.path.join(cartella_output, f"{i}.c")
    with open(percorso_file, "w", encoding="utf-8") as f_out:
        f_out.write(prog)

print(f"Tutti i {len(programmi)} file .c sono stati creati correttamente nella cartella '{cartella_output}'")
