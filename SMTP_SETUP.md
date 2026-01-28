# SMTP Email Setup Guide

## Gmail Authentication Error Fix

If you're seeing the error: `535-5.7.8 Username and Password not accepted`, follow these steps:

### Step 1: Enable 2-Step Verification
1. Go to [Google Account Settings](https://myaccount.google.com/)
2. Click on **Security** in the left sidebar
3. Under "Signing in to Google", click **2-Step Verification**
4. Follow the prompts to enable it

### Step 2: Generate an App Password
1. Go back to [Google Account Settings](https://myaccount.google.com/)
2. Click on **Security** → **2-Step Verification**
3. Scroll down and click **App passwords**
4. Select **Mail** as the app
5. Select **Other (Custom name)** as the device
6. Enter "Portfolio Contact Form" as the name
7. Click **Generate**
8. Copy the 16-character password (it will look like: `abcd efgh ijkl mnop`)

### Step 3: Update .env.local
```env
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_USER=your-email@gmail.com
SMTP_PASSWORD=abcdefghijklmnop  # Use the 16-char App Password (no spaces)
CONTACT_EMAIL=tangella.d@northeastern.edu
```

**Important Notes:**
- Use your **Gmail address** (not Northeastern email) for `SMTP_USER`
- Use the **16-character App Password** (remove spaces) for `SMTP_PASSWORD`
- Do NOT use your regular Gmail password
- Restart your dev server after updating `.env.local`

### Step 4: Verify Setup
1. Restart your Next.js dev server
2. Try submitting the contact form
3. Check your email inbox at `tangella.d@northeastern.edu`

## Alternative: Using Northeastern Email

If you prefer to use your Northeastern email, you'll need to:
1. Contact Northeastern IT for SMTP server settings
2. Update `SMTP_HOST` and `SMTP_PORT` accordingly
3. Use your Northeastern email credentials

## Troubleshooting

### Still getting authentication errors?
- Make sure 2-Step Verification is enabled
- Verify you're using the App Password (16 characters, no spaces)
- Check that `SMTP_USER` matches the Gmail account where you generated the App Password
- Ensure there are no extra spaces in your `.env.local` file

### Connection timeout errors?
- Check your internet connection
- Verify `SMTP_HOST` and `SMTP_PORT` are correct
- Try using port 465 with `secure: true` (requires code change)

### Need help?
Contact me at tangella.d@northeastern.edu for assistance.
