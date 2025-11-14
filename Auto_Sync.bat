@echo off
set "REPO_PATH=D:\Mirko Meloni\Scuola"
set INTERVAL=300

cd /d %REPO_PATH%

:loop
echo ==============================
echo [%date% %time%] Avvio sincronizzazione

:: 1. Scarico le modifiche da GitHub
git pull --autostash

:: 2. Aggiungo e commito eventuali modifiche locali
git add .
git commit -m "Commit automatico %date% %time%"

:: 3. Invio tutto su GitHub
git push

echo [%date% %time%] Sincronizzazione completata
echo ==============================

:: Aspetto INTERVAL secondi prima di ricominciare
timeout /t %INTERVAL% >nul
goto loop
