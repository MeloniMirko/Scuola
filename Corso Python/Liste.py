#liste in python


frutta=['limoni','arance','mandarini',['ananas', 'banana'],324]

#unpacking
agrume1,agrume2,agrume3,altralista = frutta

frutta.append('kiwi')

print(dir(frutta))

#slicing
for frutto in altralista:
    print (frutto)