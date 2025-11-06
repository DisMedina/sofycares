@echo off
echo ===============================================
echo    Sofy Cares Services - Build Script
echo ===============================================
echo.

echo Building project for production...
call npm run build

if %ERRORLEVEL% neq 0 (
    echo Error building project!
    pause
    exit /b 1
)

echo.
echo Build completed successfully!
echo Files are ready in the 'dist' folder
echo.

echo Starting preview server...
call npm run preview

pause