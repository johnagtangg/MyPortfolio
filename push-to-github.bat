@echo off
echo Setting up Git repository and pushing to GitHub...
echo.

REM Initialize Git repository
git init

REM Add all files
git add .

REM Create initial commit
git commit -m "Initial commit: React portfolio website"

REM You'll need to replace YOUR_GITHUB_USERNAME and YOUR_REPO_NAME with actual values
echo.
echo IMPORTANT: Before running the next command, you need to:
echo 1. Create a new repository on GitHub
echo 2. Replace YOUR_GITHUB_USERNAME and YOUR_REPO_NAME in the command below
echo 3. Run this command manually:
echo.
echo git remote add origin https://github.com/YOUR_GITHUB_USERNAME/YOUR_REPO_NAME.git
echo git branch -M main
echo git push -u origin main
echo.
pause
