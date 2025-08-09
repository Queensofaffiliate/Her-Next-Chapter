# Simple Deployment Guide - No Tech Experience Needed!

Don't worry! I'll walk you through this step by step. You're doing great! 🌟

## What We're Going to Do
1. Put your code on GitHub (like Google Drive for code)
2. Connect GitHub to your Vercel project "Her Next Chapter"
3. Your website goes live automatically!

## Step 1: Create GitHub Account (if you don't have one)
1. Go to github.com
2. Click "Sign up" 
3. Choose a username and password

## Step 2: Create a New Repository on GitHub
1. Go to github.com (make sure you're logged in)
2. Click the green "New" button (or the "+" in top right)
3. Name it: `her-next-chapter`
4. Make sure "Public" is selected
5. Click "Create repository"

## Step 3: Connect Your Code to GitHub
**Open your terminal/command prompt where your project is:**

```bash
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/her-next-chapter.git
git push -u origin main
```

**Replace YOUR_USERNAME with your actual GitHub username!**

## Step 4: Connect to Vercel
1. Go to vercel.com and log in
2. Find your "Her Next Chapter" project
3. Click "Settings" → "Git"
4. Click "Connect Git Repository"
5. Select your `her-next-chapter` repository
6. Click "Connect"

## Step 5: Add Environment Variables
In Vercel project settings:
1. Go to "Environment Variables"
2. Add these (get values from your .env file):
   - `VITE_SUPABASE_URL`
   - `VITE_SUPABASE_ANON_KEY`

## That's It! 🎉
Your site will be live in 2-3 minutes at a URL like: `her-next-chapter.vercel.app`

**Need Help?** Just tell me which step you're stuck on!