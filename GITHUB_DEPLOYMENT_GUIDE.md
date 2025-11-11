# 🚀 GitHub Repository & Deployment Guide

This guide will help you push your project to GitHub and deploy it live.

## 📋 Prerequisites

- GitHub account (https://github.com)
- Vercel account (https://vercel.com) OR Netlify account (https://netlify.com)
- Git installed on your machine
- SSH key added to GitHub (optional but recommended)

---

## Step 1: Create a New Repository on GitHub

1. Go to https://github.com/new
2. Enter repository name: `aurangzeb-portfolio` (or your preferred name)
3. Add description: "Luxury portfolio website with AI chatbot and admin panel"
4. Choose: **Public** or **Private** (your choice)
5. DO NOT initialize with README, .gitignore, or license (we have these)
6. Click **Create repository**

---

## Step 2: Push Your Project to GitHub

Run these commands in your terminal:

```bash
cd "/Users/mdsunny/Downloads/Aurangzeb sunny Portfolio Website  "

# Add all files to git
git add .

# Create initial commit
git commit -m "Initial commit: Add portfolio website with AI chatbot and admin panel"

# Add remote repository (replace USERNAME and REPO_NAME)
git remote add origin https://github.com/USERNAME/REPO_NAME.git

# Rename branch to main (if not already)
git branch -M main

# Push to GitHub
git push -u origin main
```

---

## Step 3: Deploy to Vercel (Recommended)

### Option A: Deploy via Vercel Dashboard

1. Go to https://vercel.com/new
2. Click **Import Git Repository**
3. Select your GitHub repository
4. Configure project:
   - **Framework**: Vite
   - **Build Command**: `npm run build`
   - **Output Directory**: `build`
5. Add Environment Variables:
   - `VITE_SUPABASE_URL` = Your Supabase URL
   - `VITE_SUPABASE_ANON_KEY` = Your Supabase Anon Key
   - `VITE_API_URL` = Your Supabase API URL
6. Click **Deploy**

### Option B: Deploy via Netlify

1. Go to https://netlify.com
2. Click **Add new site** → **Import an existing project**
3. Connect to GitHub
4. Select your repository
5. Configure:
   - **Build command**: `npm run build`
   - **Publish directory**: `build`
6. Add Environment Variables (in Site settings):
   - `VITE_SUPABASE_URL`
   - `VITE_SUPABASE_ANON_KEY`
   - `VITE_API_URL`
7. Click **Deploy site**

---

## Step 4: Configure Database Connection

### For Supabase (Current Setup)

Your database is already connected via Supabase. The API endpoints are configured in `/src/utils/api.ts`

**Current Database Configuration:**
- **Project ID**: `okodhvecyelxvpnxcids`
- **API URL**: `https://okodhvecyelxvpnxcids.supabase.co`
- **Functions**: Deployed at `/functions/v1/make-server-abd2a1f4/*`

### For GitHub as Database Alternative (Advanced)

If you want to use GitHub as a data store (not recommended for production):

1. Create a `data` branch
2. Store JSON files in `/data/` directory
3. Use GitHub API to read/write data
4. This requires additional setup (not included in this project)

---

## Step 5: Set Up GitHub Secrets for CI/CD

1. Go to your repository on GitHub
2. Navigate to **Settings** → **Secrets and variables** → **Actions**
3. Add these secrets:

| Secret Name | Value |
|-------------|-------|
| `VITE_SUPABASE_URL` | Your Supabase URL |
| `VITE_SUPABASE_ANON_KEY` | Your Supabase Anon Key |
| `VITE_API_URL` | Your Supabase API URL |
| `VERCEL_TOKEN` | (if using Vercel) Get from Vercel dashboard |
| `VERCEL_ORG_ID` | (if using Vercel) Get from Vercel dashboard |
| `VERCEL_PROJECT_ID` | (if using Vercel) Get from Vercel dashboard |

---

## Step 6: Automated Deployment Setup

### GitHub Actions Workflow

The project includes `.github/workflows/deploy.yml` which:
- Runs on every push to `main` branch
- Installs dependencies
- Builds the project
- Deploys to Vercel (if configured)

**To enable:**
1. Add GitHub Secrets (from Step 5)
2. Push code to main branch
3. GitHub Actions automatically triggers deployment
4. Check Actions tab to see deployment progress

---

## Step 7: Verify Deployment

After deployment:

1. ✅ Visit your deployed URL
2. ✅ Test all features:
   - Navigation and scrolling
   - Contact form submission
   - Appointment booking
   - Aura AI chatbot
   - Admin panel login (if enabled)
3. ✅ Check browser console for errors
4. ✅ Test on mobile devices

---

## Step 8: Custom Domain Setup

### For Vercel:
1. Go to Project Settings
2. Navigate to **Domains**
3. Add custom domain
4. Follow DNS setup instructions

### For Netlify:
1. Go to Site settings
2. Navigate to **Domain management**
3. Add custom domain
4. Follow DNS setup instructions

---

## 🔒 Security Best Practices

1. **Never commit secrets**: Use `.env.local` (in `.gitignore`)
2. **Use GitHub Secrets**: For sensitive data
3. **Enable 2FA**: On your GitHub account
4. **Review dependencies**: Regularly run `npm audit`
5. **Disable direct access**: To admin panel in production
6. **Use HTTPS only**: Ensure all endpoints use HTTPS

---

## 📊 Repository Structure for Deployment

```
/
├── .github/
│   └── workflows/
│       └── deploy.yml          # CI/CD configuration
├── .env.example                # Template for env vars
├── .env.local                  # Local env (git ignored)
├── .gitignore                  # Files to exclude from git
├── netlify.toml               # Netlify configuration
├── vite.config.ts             # Vite build config
├── package.json               # Dependencies
├── src/
│   ├── utils/
│   │   └── api.ts             # API client
│   └── ...
└── build/                     # Output directory (git ignored)
```

---

## 🚀 Continuous Deployment Workflow

```
1. Make changes locally
   ↓
2. Commit: git commit -m "Your message"
   ↓
3. Push: git push origin main
   ↓
4. GitHub Actions runs tests
   ↓
5. Automatic deployment to Vercel/Netlify
   ↓
6. Your site is live! 🎉
```

---

## 🆘 Troubleshooting

### Build fails on deployment
- Check environment variables are set
- Verify all dependencies are in package.json
- Review build logs on deployment platform

### Database connection errors
- Verify Supabase credentials
- Check API endpoints in `src/utils/api.ts`
- Ensure Supabase functions are deployed

### Domain not working
- Wait 24-48 hours for DNS propagation
- Check DNS records in domain provider
- Verify SSL certificate is installed

---

## 📚 Additional Resources

- [Vercel Documentation](https://vercel.com/docs)
- [Netlify Documentation](https://docs.netlify.com)
- [Supabase Documentation](https://supabase.com/docs)
- [Vite Documentation](https://vitejs.dev)
- [GitHub Actions Documentation](https://docs.github.com/en/actions)

---

## ✅ Checklist

- [ ] GitHub repository created
- [ ] Code pushed to GitHub
- [ ] Deployment platform connected
- [ ] Environment variables configured
- [ ] GitHub Secrets added
- [ ] CI/CD workflow enabled
- [ ] First deployment successful
- [ ] Custom domain configured (optional)
- [ ] Security settings reviewed
- [ ] HTTPS enabled

---

**Questions?** Check the main README.md or troubleshooting guide.

Happy deploying! 🚀
