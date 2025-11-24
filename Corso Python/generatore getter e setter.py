def genera_getter_setter(campi):
    risultato = ""

    for nome, tipo in campi:
        # Prima lettera maiuscola per i metodi
        Nome = nome[0].upper() + nome[1:]

        # Getter
        getter = f"public {tipo} get{Nome}() {{\n    return {nome};\n}}\n"

        # Setter
        setter = f"public void set{Nome}({tipo} {nome}) {{\n    this.{nome} = {nome};\n}}\n"

        risultato += getter + "\n" + setter + "\n"

    return risultato


def main():
    print("=== Generatore Getter e Setter Java ===")
    print("Inserisci i campi (scrivi 'stop' per terminare)\n")

    campi = []

    while True:
        nome = input("Nome variabile: ")
        if nome.lower() == "stop":
            break
        tipo = input("Tipo variabile (es. int, String, boolean): ")
        campi.append((nome, tipo))
        print()

    print("\n=== RISULTATO ===\n")
    print(genera_getter_setter(campi))


if __name__ == "__main__":
    main()
