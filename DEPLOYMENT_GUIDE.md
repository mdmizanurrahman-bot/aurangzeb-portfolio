# 🚀 GitHub & Deployment Guide

## 📋 Prerequisites

Before deploying, make sure you have:
- GitHub account
- Vercel or Netlify account
- Supabase project configured
- Git installed locally

---

## 🔧 Step 1: Push to GitHub

### 1.1 Create a Repository on GitHub

1. Go to [GitHub.com](https://github.com/new)
2. Create a new repository named `portfolio-website` (or your preferred name)
3. **Do NOT** initialize with README (we already have one)
4. Copy the repository URL

### 1.2 Push Your Local Repository

```bash
# Navigate to your project
cd "/Users/mdsunny/Downloads/Aurangzeb sunny Portfolio Website  "

# Add remote origin
git remote add origin https://github.com/YOUR_USERNAME/portfolio-website.git

# Rename branch if needed (optional)
git branch -M main

# Push to GitHub
git push -u origin main
```

Replace `YOUR_USERNAME` with your actual GitHub username.

---

## 🌐 Step 2: Deploy to Vercel (Recommended)

### 2.1 Connect to Vercel

1. Go to [Vercel.com](https://vercel.com)
2. Click **"New Project"**
3. Select **"Import Git Repository"**
4. Authorize GitHub and select your repository
5. Click **"Import"**

### 2.2 Configure Environment Variables

In the Vercel dashboard:

1. Go to **Settings** → **Environment Variables**
2. Add the following variables:

```
VITE_SUPABASE_URL = https://okodhvecyelxvpnxcids.supabase.co
VITE_SUPABASE_ANON_KEY = eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...
VITE_API_BASE_URL = https://okodhvecyelxvpnxcids.supabase.co/functions/v1
VITE_ENV = production
```

### 2.3 Deploy

1. Click **"Deploy"**
2. Wait for the build to complete
3. Your site will be available at `https://your-project.vercel.app`

---

## 🎨 Step 3: Deploy to Netlify (Alternative)

### 3.1 Connect to Netlify

1. Go to [Netlify.com](https://app.netlify.com)
2. Click **"Add new site"** → **"Import an existing project"**
3. Select **"GitHub"**
4. Authorize and select your repository

### 3.2 Configure Build Settings

- **Build command**: `npm run build`
- **Publish directory**: `dist`

### 3.3 Add Environment Variables

In Netlify dashboard:

1. Go to **Site settings** → **Build & deploy** → **Environment**
2. Add the same environment variables as Vercel

### 3.4 Deploy

1. Click **"Deploy"**
2. Your site will be available at `https://your-site.netlify.app`

---

## 🗄️ Step 4: Configure Supabase Database

### 4.1 Verify Supabase Connection

Your Supabase project is already configured at:
- **Project URL**: `https://okodhvecyelxvpnxcids.supabase.co`
- **Anon Key**: (see `.env.local`)

### 4.2 Create Tables (if needed)

The backend server uses key-value storage. To add tables:

1. Go to [Supabase Dashboard](https://app.supabase.com)
2. Select your project
3. Go to **SQL Editor**
4. Create tables for:
   - Projects
   - Posts
   - Videos
   - Certificates
   - Jobs
   - Reviews
   - Q&A
   - Messages

(Sample SQL provided in `/src/supabase/functions/server/index.tsx`)

### 4.3 Enable RLS (Row Level Security)

For production, enable RLS on all tables to protect data.

---

## 🔄 Step 5: GitHub Actions CI/CD (Optional)

Create `.github/workflows/deploy.yml`:

```yaml
name: Deploy to Vercel

on:
  push:
    branches: [main]

jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      
      - name: Install dependencies
        run: npm install
      
      - name: Build
        run: npm run build
      
      - name: Deploy to Vercel
        run: npx vercel --prod --token ${{ secrets.VERCEL_TOKEN }}
```

---

## 🔐 Security Checklist

- [ ] Never commit `.env.local` to GitHub (it's in `.gitignore`)
- [ ] Rotate Supabase keys before making the repo public
- [ ] Enable Supabase RLS (Row Level Security)
- [ ] Set up CORS properly in Supabase
- [ ] Use strong admin passwords
- [ ] Enable 2FA on GitHub and Vercel/Netlify
- [ ] Monitor Supabase usage and rate limits

---

## 📝 Making Updates

### Push Updates to GitHub

```bash
# Make changes to your code
git add .
git commit -m "Update: Add new features"
git push origin main
```

Vercel/Netlify will automatically redeploy on every push to `main`.

---

## 🐛 Troubleshooting

### Build Fails on Deployment

1. Check build logs in Vercel/Netlify dashboard
2. Ensure all environment variables are set
3. Run `npm run build` locally to test

### Environment Variables Not Working

- Ensure they start with `VITE_` for frontend access
- Check variable names match exactly
- Redeploy after changing variables

### Supabase Connection Issues

1. Verify keys are correct in `.env.local`
2. Check Supabase project is active
3. Verify CORS settings in Supabase

### API Endpoints Not Working

- Check Supabase Edge Functions are deployed
- Verify API URL in environment variables
- Check browser console for errors

---

## 📞 Support

For issues with:
- **GitHub**: See [GitHub Docs](https://docs.github.com)
- **Vercel**: See [Vercel Docs](https://vercel.com/docs)
- **Netlify**: See [Netlify Docs](https://docs.netlify.com)
- **Supabase**: See [Supabase Docs](https://supabase.com/docs)

---

## ✨ Next Steps

1. Push to GitHub
2. Deploy to Vercel/Netlify
3. Configure custom domain
4. Monitor performance
5. Keep code updated
6. Regular security audits

Happy deploying! 🚀
