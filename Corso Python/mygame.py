import pygame,sys # importa la libreria pygame e sys

pygame.init() # inizializza pygame

pygame.display.set_caption('Shooter Game') # imposta il titolo della finestra
 

display_surface = pygame.display.set_mode((1280, 720)) # impostala la dimensione della finestra
display_surface .fill(('green')) # riempie la finestra con un colore

W,H= display_surface.get_size() # ottiene le dimensioni della finestra

background = pygame.Surface((W,H)) # crea una superficie per il background
background.fill ((20,20,80)) # riempie la superficie con un colore

#dimensione = (100 , 100) # definisce le dimensioni del quadrato
#quadrato_surf = pygame.Surface(dimensione) # crea un nuovo surf per il quadrato
#quadrato_surf .fill(('red')) # colore del quadrato
#L,A= quadrato_surf .get_size() # ottiene le dimensioni del surf del quadrato

ship_surf=pygame.image.load("Corso Python/sprites/ship.png") # carica l'immagine del quadrato
L,A= ship_surf.get_size() # ottiene le dimensioni del surf del quadrato

posizione= (W/2 - L/2 , H/2 - A /2) # calcola la posizione del quadrato al centro della finestra



while True: #faccio un ciclo infinito per mantenere la finestra aperta
    
    
    #Gestisco gli eventi
    for event in pygame.event.get(): # ciclo per gestire gli eventi
        if event.type == pygame.QUIT: # se l'utente chiude la finestra
            pygame.quit() # esce dal ciclo
            sys.exit() # termina il programma
            
    
    display_surface .blit (background, (0,0)) # disegna il background sulla finestra
    display_surface .blit(ship_surf ,posizione ) # disegna il surf del quadrato sulla finestra
    
    
    posizione = (posizione[0] + 0.1, posizione[1] +0.1) # muove il quadrato in basso a destra
    
           
            
            
    #gestire gli updates
    
    
    
    #fare il frame rendering
    
    
    
    
    
     
    pygame.display .update() # aggiorna la finestra

