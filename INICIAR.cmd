@echo off
cd /d "%~dp0"
if exist ".tools\node.exe" (
  set "PATH=%~dp0.tools;%PATH%"
  ".tools\node.exe" "node_modules\vite\bin\vite.js" --host 127.0.0.1 --open
) else (
  where npm >nul 2>&1
  if errorlevel 1 (
    echo Instale o Node.js 22.14 ou superior em https://nodejs.org e tente novamente.
    pause
    exit /b 1
  )
  if not exist "node_modules" call npm ci
  if errorlevel 1 (
    pause
    exit /b 1
  )
  call npm run dev -- --open
)
pause
