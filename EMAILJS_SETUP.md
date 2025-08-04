# EmailJS Setup Instructions

This guide will help you set up EmailJS to enable email functionality in your contact form.

## Step 1: Create EmailJS Account

1. Go to [EmailJS](https://www.emailjs.com/) and create a free account
2. Verify your email address

## Step 2: Create Email Service

1. In your EmailJS dashboard, go to **Email Services**
2. Click **Add New Service**
3. Choose your email provider (Gmail, Outlook, etc.)
4. Follow the setup instructions for your provider
5. Note down your **Service ID**

## Step 3: Create Email Template

1. Go to **Email Templates** in your dashboard
2. Click **Create New Template**
3. Use this template content:

```
Subject: New Contact Form Message from {{from_name}}

Hello {{to_name}},

You have received a new message from your portfolio contact form:

From: {{from_name}} ({{from_email}})
Message: 
{{message}}

You can reply directly to this email.

Best regards,
Your Portfolio Contact Form
```

4. Save the template and note down your **Template ID**

## Step 4: Get Public Key

1. Go to **Account** > **API Keys**
2. Copy your **Public Key**

## Step 5: Configure Your App

1. Copy `.env.example` to `.env.local`
2. Fill in your actual values:

```env
REACT_APP_EMAILJS_SERVICE_ID=your_service_id_here
REACT_APP_EMAILJS_TEMPLATE_ID=your_template_id_here  
REACT_APP_EMAILJS_PUBLIC_KEY=your_public_key_here
```

3. Restart your development server

## Step 6: Test

1. Go to your contact form
2. Fill out and submit the form
3. Check your email for the message

## Troubleshooting

- Make sure your environment variables are correctly set
- Check that your template variables match: `{{from_name}}`, `{{from_email}}`, `{{message}}`, `{{to_name}}`
- Verify your service is properly configured and active
- Check the browser console for any error messages

## Free Tier Limits

EmailJS free tier includes:
- 200 emails per month
- 2 email services
- EmailJS branding in emails

For higher limits, consider upgrading to a paid plan.
