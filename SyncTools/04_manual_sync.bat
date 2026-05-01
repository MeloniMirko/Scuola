@echo off
cd /d C:\Users\cella\Documents\Scuola

echo === MANUAL SYNC START ===

git pull --rebase

git add -A

git diff --cached --quiet
if %errorlevel%==0 (
    echo Nessuna modifica da salvare
    pause
    exit /b
)

git commit -m "manual sync"
git push

echo === DONE ===
pause