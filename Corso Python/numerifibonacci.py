def in_fibonacci(numero):
    piuquattro = (numero*numero *5) +4
    menoquattro = (numero*numero*5)-4
    if e_quadrato_perfetto(piuquattro):
        return True
    if e_quadrato_perfetto(menoquattro):
        return True
    return False