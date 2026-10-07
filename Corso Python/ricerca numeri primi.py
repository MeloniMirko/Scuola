primi=[]

# trova e stampa i numeri primi da 1 a 100
for i in  range(2,100000):
    cont = 0
    for j in primi:
        if i%j==0:
            cont +=1
            break
    if cont == 0:
        print(i)
        primi.append(i)
                
                