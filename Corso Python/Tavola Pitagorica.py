#tavola Pitagorica

for i in range(1, 11):
    riga = ""
    for j in range(1, 11):
        
        if i*j <10:
            riga += " "
        if i*j <100: 
            riga += " "
        riga += str(i*j) + " "
    print(riga)