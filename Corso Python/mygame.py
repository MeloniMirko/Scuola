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
#L,A= quadrato_surf.get_size() # ottiene le dimensioni del surf del quadrato

ship_surf=pygame.image.load("Corso Python/sprites/ship.png").convert_alpha() # carica l'immagine del quadrato
ship_rect= ship_surf.get_rect(center=(W/2,H/2)) # ottiene il rettangolo del quadrato

laser_surf = pygame.image.load("Corso Python/sprites/laser.png").convert_alpha() # carica l'immagine del laser
laser_rects = [] # lista per memorizzare i laser
laser_speed = 500 # velocità del laser



L,A= ship_surf.get_size() # ottiene le dimensioni del surf del quadrato

posx= W/2 - L/2     # posizione x del quadrato
posy= H/2 - A /2    # posizione y del quadrato

clock=pygame.time.Clock() # crea un oggetto clock per gestire il frame rate
ship_speed = 200 # velocità del quadrato



while True: #faccio un ciclo infinito per mantenere la finestra aperta
    
    
    #Gestisco gli eventi
    eventi= pygame.event.get() # ottiene gli eventi dalla coda degli eventi
    for event in eventi: # ciclo per gestire gli eventi
        if event.type == pygame.QUIT: # se l'utente chiude la finestra
            pygame.quit() # esce dal ciclo
            sys.exit() # termina il programma
        if event.type == pygame.KEYDOWN and event.key == pygame.K_SPACE:
            laser_rect = laser_surf.get_rect(midbottom= ship_rect.midtop) # ottiene il rettangolo del laser
            laser_rects.append(laser_rect) # aggiunge il laser alla lista dei laser
            print("tasto premuto") # stampa un messaggio quando un tasto viene premuto

        
           
    dt= clock.tick(60) /1000 # imposta il frame rate a 60 fps
    print(dt) # stampa il frame rate
    
            
    keys= pygame.key.get_pressed() # ottiene gli stati dei tasti
    if keys[pygame.K_w] and ship_rect.top>0: # se il tasto w è premuto
        posy -= ship_speed * dt # muove il quadrato a sinistra
    if keys[pygame.K_a] and ship_rect.left>0: # se il tasto a è premuto
        posx -= ship_speed * dt # muove il quadrato a sinistra
    if keys[pygame.K_s] and ship_rect.bottom<H: # se il tasto s è premuto
        posy += ship_speed * dt # muove il quadrato a sinistra
    if keys[pygame.K_d] and ship_rect.right<W: # se il tasto d è premuto
        posx += ship_speed * dt # muove il quadrato a sinistra
        
  
    ship_rect.center = (posx,posy) # aggiorna la posizione del quadrato
    
    
           
            
            
    #gestire gli updates
    
    display_surface .blit (background, (0,0)) # disegna il background sulla finestra
    display_surface .blit (ship_surf, ship_rect) # disegna il quadrato sulla finestra
    for rect in laser_rects: # ciclo per disegnare i laser
        display_surface .blit (laser_surf, laser_rect) # disegna il laser
        rect.y -= laser_speed * dt # muove il laser verso l'alto    
    
   
    
    
    #fare il frame rendering
    pygame.display .update() # aggiorna la finestra

