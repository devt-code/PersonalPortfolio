# Deployment Guide

Your portfolio is now on GitHub at: https://github.com/devt-code/PersonalPortfolio

## Quick Deploy to Vercel (Recommended)

Vercel is the easiest way to deploy Next.js applications. It's free and provides automatic deployments.

### Step 1: Deploy to Vercel

1. Go to [https://vercel.com](https://vercel.com)
2. Sign up/Login with your GitHub account
3. Click **"Add New Project"**
4. Import your repository: `devt-code/PersonalPortfolio`
5. Vercel will auto-detect Next.js settings
6. Click **"Deploy"**

### Step 2: Configure Environment Variables

After deployment, add your EmailJS environment variables:

1. Go to your project dashboard on Vercel
2. Navigate to **Settings** → **Environment Variables**
3. Add these variables:
   ```
   NEXT_PUBLIC_EMAILJS_SERVICE_ID=your_service_id
   NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=your_template_id
   NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=your_public_key
   ```
4. Click **"Save"**
5. Go to **Deployments** tab and click **"Redeploy"** on the latest deployment

### Step 3: Your Site is Live!

Your portfolio will be available at: `https://personal-portfolio-*.vercel.app`

You can also add a custom domain in Vercel settings.

## Alternative: Deploy to Netlify

### Step 1: Deploy to Netlify

1. Go to [https://netlify.com](https://netlify.com)
2. Sign up/Login with your GitHub account
3. Click **"Add new site"** → **"Import an existing project"**
4. Select your repository: `devt-code/PersonalPortfolio`
5. Configure build settings:
   - **Build command:** `npm run build`
   - **Publish directory:** `.next`
6. Click **"Deploy site"**

### Step 2: Configure Environment Variables

1. Go to **Site settings** → **Environment variables**
2. Add the EmailJS variables:
   ```
   NEXT_PUBLIC_EMAILJS_SERVICE_ID=your_service_id
   NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=your_template_id
   NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=your_public_key
   ```
3. Trigger a new deployment

## Other Hosting Options

### Railway
1. Go to [https://railway.app](https://railway.app)
2. Connect GitHub and select your repository
3. Railway auto-detects Next.js
4. Add environment variables
5. Deploy!

### Render
1. Go to [https://render.com](https://render.com)
2. Create a new Web Service
3. Connect your GitHub repository
4. Set build command: `npm install && npm run build`
5. Set start command: `npm start`
6. Add environment variables
7. Deploy!

## Post-Deployment Checklist

- [ ] Test the contact form
- [ ] Verify all links work
- [ ] Check mobile responsiveness
- [ ] Test resume download
- [ ] Verify EmailJS is working
- [ ] Add custom domain (optional)
- [ ] Set up analytics (optional)

## Troubleshooting

### Build Fails
- Check that all dependencies are in `package.json`
- Verify Node.js version compatibility
- Check build logs for specific errors

### Contact Form Not Working
- Verify EmailJS environment variables are set correctly
- Check browser console for errors
- Ensure EmailJS service is active

### Images Not Loading
- Make sure images are in the `public` folder
- Use relative paths starting with `/`

## Continuous Deployment

Both Vercel and Netlify automatically deploy when you push to GitHub:
- Push to `main` branch → Auto-deploy
- Create a pull request → Preview deployment

## Need Help?

- Vercel Docs: https://vercel.com/docs
- Netlify Docs: https://docs.netlify.com
- EmailJS Setup: See `EMAILJS_SETUP.md`
