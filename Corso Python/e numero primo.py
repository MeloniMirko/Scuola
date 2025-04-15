def e_numero_primo(numero):
    for i in range(2, int(numero/2)+1):
        if numero % i == 0:
            return False
        return True
print(e_numero_primo(18))