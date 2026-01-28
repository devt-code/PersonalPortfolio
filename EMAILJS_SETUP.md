# EmailJS Setup Guide

EmailJS allows you to send emails directly from the frontend without needing a backend server or SMTP configuration. It's free for up to 200 emails per month.

## Step 1: Create EmailJS Account

1. Go to [https://www.emailjs.com/](https://www.emailjs.com/)
2. Click **Sign Up** and create a free account
3. Verify your email address

## Step 2: Add Email Service

1. In the EmailJS dashboard, go to **Email Services**
2. Click **Add New Service**
3. Choose your email provider (Gmail, Outlook, etc.)
4. Follow the setup instructions:
   - For Gmail: Connect your Gmail account
   - For other providers: Enter SMTP credentials
5. Note your **Service ID** (e.g., `service_abc123`)

## Step 3: Create Email Template

1. Go to **Email Templates** in the dashboard
2. Click **Create New Template**
3. Use this template structure:

**Template Name:** Portfolio Contact Form

**Subject:** Portfolio Contact: {{from_name}}

**Content:**
```
New Contact Form Submission

Name: {{from_name}}
Email: {{from_email}}

Message:
{{message}}
```

4. Click **Save**
5. Note your **Template ID** (e.g., `template_xyz789`)

## Step 4: Get Your Public Key

1. Go to **Account** → **General** in the EmailJS dashboard
2. Find your **Public Key** (e.g., `abcdefghijklmnop`)
3. Copy it

## Step 5: Configure Environment Variables

Update your `.env.local` file:

```env
NEXT_PUBLIC_EMAILJS_SERVICE_ID=your_service_id
NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=your_template_id
NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=your_public_key
```

**Important:** 
- Use `NEXT_PUBLIC_` prefix so these variables are available in the browser
- Replace the placeholder values with your actual IDs and keys
- Restart your dev server after updating `.env.local`

## Step 6: Test the Contact Form

1. Restart your Next.js dev server
2. Fill out the contact form on your portfolio
3. Submit the form
4. Check your email inbox (the email configured in EmailJS service)

## Template Variables

The form automatically sends these variables to EmailJS:
- `from_name` - User's name
- `from_email` - User's email
- `message` - User's message

Make sure your EmailJS template uses these exact variable names: `{{from_name}}`, `{{from_email}}`, and `{{message}}`.

## Troubleshooting

### Form not sending emails?
- Check that all three environment variables are set
- Verify the Service ID and Template ID are correct
- Check the browser console for errors
- Make sure you've restarted your dev server after updating `.env.local`

### Getting errors?
- Verify your EmailJS service is connected and active
- Check that your template variables match: `{{from_name}}`, `{{from_email}}`, `{{message}}`
- Ensure your Public Key is correct

### Need more emails?
- Free plan: 200 emails/month
- Paid plans start at $15/month for 1,000 emails

## Benefits of EmailJS

✅ No backend server needed  
✅ No SMTP configuration  
✅ Free tier available  
✅ Easy to set up  
✅ Works directly from frontend  
✅ Secure (API keys are public but rate-limited)

## Support

For EmailJS-specific issues, visit: https://www.emailjs.com/docs/

For portfolio setup help, contact: tangella.d@northeastern.edu
