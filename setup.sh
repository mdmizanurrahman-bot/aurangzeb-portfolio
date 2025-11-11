#!/bin/bash

# Portfolio Website - Quick Setup Script
# This script sets up everything needed to run and deploy the project

echo "
╔════════════════════════════════════════════════════════════════════╗
║                                                                    ║
║      🚀 Aurangzeb Portfolio Website - Quick Setup Script          ║
║                                                                    ║
╚════════════════════════════════════════════════════════════════════╝
"

# Check if Node.js is installed
if ! command -v node &> /dev/null; then
    echo "❌ Node.js is not installed. Please install Node.js first."
    exit 1
fi

echo "✅ Node.js version: $(node --version)"
echo "✅ npm version: $(npm --version)"

# Install dependencies
echo ""
echo "📦 Installing dependencies..."
npm install

if [ $? -eq 0 ]; then
    echo "✅ Dependencies installed successfully"
else
    echo "❌ Failed to install dependencies"
    exit 1
fi

# Create .env.local if it doesn't exist
if [ ! -f ".env.local" ]; then
    echo ""
    echo "📝 Creating .env.local file..."
    cp .env.example .env.local
    echo "✅ .env.local created. Please update with your Supabase credentials."
else
    echo "✅ .env.local already exists"
fi

# Build the project
echo ""
echo "🔨 Building the project..."
npm run build

if [ $? -eq 0 ]; then
    echo "✅ Build completed successfully"
else
    echo "❌ Build failed"
    exit 1
fi

echo ""
echo "╔════════════════════════════════════════════════════════════════════╗
║                                                                    ║
║                   ✅ Setup Complete!                              ║
║                                                                    ║
║  Next steps:                                                       ║
║  1. Run 'npm run dev' to start development server                 ║
║  2. Visit http://localhost:3001                                   ║
║  3. Read GITHUB_DEPLOYMENT_GUIDE.md for deployment instructions  ║
║                                                                    ║
╚════════════════════════════════════════════════════════════════════╝
"
