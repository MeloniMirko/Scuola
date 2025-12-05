def genera_campi(campi):
    risultato = ""
    for nome, tipo in campi:
        risultato += f"private {tipo} {nome};\n"
    return risultato


def genera_getter_setter(campi):
    risultato = ""

    for nome, tipo in campi:
        Nome = nome[0].upper() + nome[1:]

        getter = (
            f"public {tipo} get{Nome}() {{\n"
            f"    return {nome};\n"
            f"}}\n"
        )

        setter = (
            f"public void set{Nome}({tipo} {nome}) {{\n"
            f"    this.{nome} = {nome};\n"
            f"}}\n"
        )

        risultato += getter + "\n" + setter + "\n"

    return risultato


def genera_toString(campi, nome_classe):
    parti = [f'"{nome}=" + {nome}' for nome, _ in campi]
    corpo = ' + ", " + '.join(parti)

    return (
        f"@Override\n"
        f"public String toString() {{\n"
        f"    return \"{nome_classe}[\" + {corpo} + \"]\";\n"
        f"}}"
    )


def main():
    print("=== GENERATORE COMPLETO JAVA ===\n")

    nome_classe = input("Nome della classe: ")

    print("\nInserisci i campi (scrivi 'stop' per terminare)\n")
    campi = []

    while True:
        nome = input("Nome variabile: ")
        if nome.lower() == "stop":
            break
        tipo = input("Tipo variabile (es. int, String, boolean): ")
        campi.append((nome, tipo))
        print()

    print("\n=== RISULTATO ===\n")

    print("// --- Campi ---")
    print(genera_campi(campi))
    print("// --- Getter e Setter ---")
    print(genera_getter_setter(campi))
    print("// --- toString ---")
    print(genera_toString(campi, nome_classe))


if __name__ == "__main__":
    main()
