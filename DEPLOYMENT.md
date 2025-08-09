# Deployment Guide for Her Next Chapter

## Quick Start - Choose Your Platform

Both Vercel and Netlify offer excellent free tiers. **Vercel is recommended** for React apps.

---

## Option 1: Vercel (Recommended) 🚀

### Step 1: Push to GitHub
```bash
# Create new repo on GitHub first, then:
git add .
git commit -m "Ready for deployment"
git remote add origin https://github.com/yourusername/her-next-chapter.git
git push -u origin main
```

### Step 2: Deploy with Vercel
1. Go to [vercel.com](https://vercel.com)
2. Click "Sign up" → "Continue with GitHub"
3. Click "New Project"
4. Import your "her-next-chapter" repository
5. Vercel auto-detects Vite settings ✅
6. Click "Deploy"

**Live in 2 minutes at: `https://your-project.vercel.app`**

### Step 3: Add Environment Variables (if using Supabase)
1. Project Dashboard → Settings → Environment Variables
2. Add:
   - `VITE_SUPABASE_URL`
   - `VITE_SUPABASE_ANON_KEY`

---

## Option 2: Netlify

### Quick Deploy
1. Go to [netlify.com](https://netlify.com)
2. Sign up with GitHub
3. "New site from Git" → Select your repo
4. Build settings auto-detected ✅
5. Deploy!

**Live at: `https://random-name.netlify.app`**

---

## Troubleshooting

**Build fails?** Run `npm run build` locally first
**404 on refresh?** SPA routing is configured in vercel.json/netlify.toml
**Environment variables?** Must start with `VITE_`

## Next Steps
1. Test live site thoroughly
2. Consider custom domain
3. Share with your audience! 🎉

**Recommended: Start with Vercel for fastest deployment**