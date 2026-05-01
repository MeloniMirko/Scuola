@echo off
cd /d C:\Users\cella\Documents\Scuola

:: controlla se ci sono modifiche
git add -A

git diff --cached --quiet
if %errorlevel%==0 exit /b

:: controllo anti-spam (evita commit troppo frequenti)
for /f %%i in ('git log -1 --format^=%%ct') do set LAST=%%i

for /f %%i in ('powershell -command "(Get-Date).ToUnixTimeSeconds()"') do set NOW=%%i

set /a DIFF=NOW-LAST

:: se ultimo commit è troppo recente (<120 sec) esci
if %DIFF% LSS 120 exit /b

echo === SMART SYNC START ===

git commit -m "auto sync (smart)"
git push

echo === DONE ===