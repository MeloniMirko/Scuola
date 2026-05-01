@echo off
cd /d C:\Users\cella\Documents\Scuola

echo === FINAL SYNC BEFORE SHUTDOWN ===

git add -A

git diff --cached --quiet
if %errorlevel%==0 (
    echo No changes to save
    exit /b
)

git commit -m "shutdown sync"
git push

echo === DONE ===