import secrets
import string

def menu_password():
    print("=== GENERATORE PASSWORD CON LUNGHEZZA PERSONALIZZABILE ===\n")
    
    while True:
        print("\nScegli il tipo di password:")
        print("1. Personalizza tutto")
        print("2. Password corta (8-10 caratteri)")
        print("3. Password media (12-14 caratteri)")
        print("4. Password lunga (16-20 caratteri)")
        print("5. Password super lunga (24+ caratteri)")
        print("6. Esci")
        
        scelta = input("\nScelta: ").strip()
        
        if scelta == "1":
            # Chiede la lunghezza esatta
            lunghezza = int(input("Inserisci lunghezza (es: 12, 16, 20): "))
            
            # Chiede se includere simboli
            simboli = input("Includere simboli? (s/n): ").lower()
            
            # Costruisce i caratteri
            caratteri = string.ascii_letters + string.digits
            if simboli == 's':
                caratteri += "!@#$%&*+-=?"
            
            # Genera
            password = ''.join(secrets.choice(caratteri) for _ in range(lunghezza))
            print(f"\n✅ Password di {lunghezza} caratteri: {password}")
            
        elif scelta == "2":
            # Password corta
            password = genera_password(10)
            print(f"\n✅ Password corta (10 caratteri): {password}")
            
        elif scelta == "3":
            # Password media
            password = genera_password(14)
            print(f"\n✅ Password media (14 caratteri): {password}")
            
        elif scelta == "4":
            # Password lunga
            password = genera_password(18)
            print(f"\n✅ Password lunga (18 caratteri): {password}")
            
        elif scelta == "5":
            # Password super lunga
            password = genera_password(24)
            print(f"\n✅ Password super lunga (24 caratteri): {password}")
            
        elif scelta == "6":
            print("Arrivederci!")
            break
            
        else:
            print("Scelta non valida!")

def genera_password(lunghezza):
    caratteri = string.ascii_letters + string.digits + "!@#$%&*+-=?"
    return ''.join(secrets.choice(caratteri) for _ in range(lunghezza))

# Avvia il menu
menu_password()