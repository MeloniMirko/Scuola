 
import math

def e_numero_primo(numero):
    for i in range(2, int(numero/2)+1):
        if numero % i == 0:
            return False
        return True

 
def e_quadrato_perfetto (numero):
    radice=int(math.sqrt(numero))
    if radice**2==numero:
        return True
    else:
        return False

def in_fibonacci(numero):
    piuquattro = (numero*numero *5) +4
    menoquattro = (numero*numero*5)-4
    if e_quadrato_perfetto(piuquattro):
        return True
    if e_quadrato_perfetto(menoquattro):
        return True
    return False