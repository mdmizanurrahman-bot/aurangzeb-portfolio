@echo off
REM Portfolio Website - Quick Setup Script for Windows

echo.
echo ╔════════════════════════════════════════════════════════════════════╗
echo ║                                                                    ║
echo ║      🚀 Aurangzeb Portfolio Website - Quick Setup Script          ║
echo ║                                                                    ║
echo ╚════════════════════════════════════════════════════════════════════╝
echo.

REM Check if Node.js is installed
where node >nul 2>nul
if %errorlevel% neq 0 (
    echo ❌ Node.js is not installed. Please install Node.js first.
    pause
    exit /b 1
)

echo ✅ Node.js version:
node --version
echo ✅ npm version:
npm --version

REM Install dependencies
echo.
echo 📦 Installing dependencies...
call npm install

if %errorlevel% neq 0 (
    echo ❌ Failed to install dependencies
    pause
    exit /b 1
)
echo ✅ Dependencies installed successfully

REM Create .env.local if it doesn't exist
if not exist ".env.local" (
    echo.
    echo 📝 Creating .env.local file...
    copy .env.example .env.local
    echo ✅ .env.local created. Please update with your Supabase credentials.
) else (
    echo ✅ .env.local already exists
)

REM Build the project
echo.
echo 🔨 Building the project...
call npm run build

if %errorlevel% neq 0 (
    echo ❌ Build failed
    pause
    exit /b 1
)
echo ✅ Build completed successfully

echo.
echo ╔════════════════════════════════════════════════════════════════════╗
echo ║                                                                    ║
echo ║                   ✅ Setup Complete!                              ║
echo ║                                                                    ║
echo ║  Next steps:                                                       ║
echo ║  1. Run 'npm run dev' to start development server                 ║
echo ║  2. Visit http://localhost:3001                                   ║
echo ║  3. Read GITHUB_DEPLOYMENT_GUIDE.md for deployment instructions  ║
echo ║                                                                    ║
echo ╚════════════════════════════════════════════════════════════════════╝
echo.

pause
