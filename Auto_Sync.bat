@echo off
setlocal enabledelayedexpansion

:: ===========================================
:: Configurazione
:: ===========================================
set "REPO_PATH=D:\Mirko Meloni\Scuola"
set "INTERVAL=300"

:: Controllo se il percorso esiste
if not exist "%REPO_PATH%" (
    echo [ERRORE] Il percorso "%REPO_PATH%" non esiste!
    pause
    exit /b 1
)

cd /d "%REPO_PATH%" || (
    echo [ERRORE] Impossibile accedere a %REPO_PATH%
    pause
    exit /b 1
)

:loop
echo ==============================
echo [%date% %time%] Avvio sincronizzazione

:: ===========================================
:: 1. Pull di tutti i branch con autostash
:: ===========================================
for /f "tokens=1" %%b in ('git for-each-ref --format="%%(refname:short)" refs/heads/') do (
    echo [INFO] Eseguo git pull su branch %%b...
    git checkout %%b >nul 2>&1
    git pull --autostash
    if errorlevel 1 (
        echo [ERRORE] git pull su %%b fallito, verificare conflitti
    ) else (
        echo [OK] git pull su %%b completato
    )
)

:: ===========================================
:: 2. Controllo e commit automatico
:: ===========================================
set "CHANGES="
for /f %%i in ('git status --porcelain') do set "CHANGES=1"

if defined CHANGES (
    echo [INFO] Modifiche locali trovate, preparo commit...
    git add -A
    git commit -m "Commit automatico %date% %time%" >nul 2>&1
    if errorlevel 1 (
        echo [INFO] Nessuna nuova modifica da committare
    ) else (
        echo [OK] Commit completato
    )
) else (
    echo [INFO] Nessuna modifica locale da committare
)

:: ===========================================
:: 3. Push di tutti i branch locali
:: ===========================================
for /f "tokens=1" %%b in ('git for-each-ref --format="%%(refname:short)" refs/heads/') do (
    echo [INFO] Spingo branch %%b su origin...
    git push origin %%b
    if errorlevel 1 (
        echo [ERRORE] git push del branch %%b fallito
    ) else (
        echo [OK] Branch %%b pushato con successo
    )
)

:: ===========================================
:: 4. Push di tutti i tag locali
:: ===========================================
for /f "tokens=1" %%t in ('git tag') do (
    echo [INFO] Spingo tag %%t su origin...
    git push origin %%t
    if errorlevel 1 (
        echo [ERRORE] git push del tag %%t fallito
    ) else (
        echo [OK] Tag %%t pushato con successo
    )
)

echo [%date% %time%] Sincronizzazione COMPLETA
echo ==============================

:: ===========================================
:: 5. Attesa prima del prossimo ciclo
:: ===========================================
timeout /t %INTERVAL% >nul
goto loop

:: Fine script (non dovrebbe mai arrivare qui)
pause
