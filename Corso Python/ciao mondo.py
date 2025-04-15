nome = input ("Come ti chiami?")
anno = input (f"Ciao {nome}, in che anno sei nato?")

eta = 2025 - int(anno)


if eta > 40:
	print(f"mi scusi {nome} visto che lei ha {eta} anni avrei dovuto darti del lei")
else: 
    print(f"ciao {nome} tu hai {eta} anni")

input ("premi enter")

