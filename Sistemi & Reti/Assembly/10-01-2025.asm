org 100h

mov ah,01h
int 21h

mov bl,al

mov ah,01h
int 21h
 
 ;--------------------------------------------------------
 
cmp bl,al;confronta valore1 con valore2

ja labell;condizione vera se op1>op2 

 ;--------------------------------------------------------

 labell:
    
mov dl,bl
mov ah,02h
int 21h
       
       
ret
