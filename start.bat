@echo off
echo ===============================================
echo    Sofy Cares Services - Setup Script
echo ===============================================
echo.

echo Installing dependencies...
call npm install

if %ERRORLEVEL% neq 0 (
    echo Error installing dependencies!
    pause
    exit /b 1
)

echo.
echo Dependencies installed successfully!
echo.

echo Starting development server...
echo Open http://localhost:3000 in your browser
echo.
echo Press Ctrl+C to stop the server
echo.

call npm run dev

pause