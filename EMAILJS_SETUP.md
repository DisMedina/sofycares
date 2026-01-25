# EmailJS Setup Instructions

This guide will help you configure EmailJS for the Sofy Cares contact form.

## Overview
EmailJS allows your contact form to send emails directly without needing a backend server. The free tier includes 200 emails per month, which should be sufficient for your needs.

## Step 1: Create EmailJS Account

1. Go to [https://www.emailjs.com/](https://www.emailjs.com/)
2. Click **"Sign Up"** (top right)
3. Create your account with an email and password
4. Verify your email address

## Step 2: Add Email Service

1. Once logged in, go to **"Email Services"** in the left sidebar
2. Click **"Add New Service"**
3. Choose **Gmail** (recommended since your contact email is Gmail)
4. Click **"Connect Account"**
5. Sign in with your Gmail account: **sofycaressma@gmail.com**
6. Grant the necessary permissions
7. Your Service ID will be displayed (something like `service_xxxxxxx`) - **save this for later**

## Step 3: Create Email Template

1. Go to **"Email Templates"** in the left sidebar
2. Click **"Create New Template"**
3. Configure the template:

### Template Settings:
- **Template Name:** Sofy Cares Contact Form
- **Subject:** `New Inquiry: {{subject}}`
- **From Name:** `{{firstName}} {{lastName}}`
- **From Email:** Leave default or use `{{email}}`
- **To Email:** `sofycaressma@gmail.com` (your receiving email)

### Template Content (paste this into the editor):

```
New Inquiry from Sofy Cares Website

Contact Information:
Name: {{firstName}} {{lastName}}
Email: {{email}}
Phone: {{phone}}

Service Details:
Service Type: {{serviceType}}
Preferred Contact Method: {{preferredContact}}

Subject: {{subject}}

Message:
{{message}}

---
This email was sent from the Sofy Cares contact form at sofycares.com
Reply directly to this email to respond to the inquiry.
```

4. Click **"Save"** and note your **Template ID** (something like `template_xxxxxxx`)

## Step 4: Get Your API Keys

1. Go to **"Account"** in the left sidebar
2. Under **"API Keys"**, you'll see:
   - **Public Key** (something like `xxxxxxxxxxxxxxxx`) - Required for sending emails
   - **Private Key** (something like `xxxxxxxxxxxxxxxx`) - Optional, for usage tracking
3. Copy both keys (Private Key is optional but recommended for monitoring usage)

## Step 5: Update Configuration File

1. Open the file: `src/config/emailjs.ts`
2. Replace the placeholder values with your actual credentials:

```typescript
export const EMAILJS_CONFIG = {
  serviceId: 'service_xxxxxxx',      // From Step 2
  templateId: 'template_xxxxxxx',    // From Step 3
  publicKey: 'xxxxxxxxxxxxxxxx',     // From Step 4 (Required)
  privateKey: 'xxxxxxxxxxxxxxxx'     // From Step 4 (Optional - for usage tracking)
};
```

**Note:** The `privateKey` is optional but recommended. It allows the contact form to:
- Display your current email usage
- Show warnings when approaching the 200 email limit
- Automatically disable the form when the limit is reached
- Provide alternative contact methods to users

If you skip the private key, the form will still work but won't show usage warnings.

## Step 6: Test the Contact Form

1. Start your development server if it's not already running
2. Navigate to the Contact page
3. Fill out the form with test data
4. Click "Send Inquiry"
5. Check your email at **sofycaressma@gmail.com** for the test message

## Template Variables Reference

The following variables are sent from the contact form and can be used in your EmailJS template:

| Variable | Description | Example |
|----------|-------------|---------|
| `{{firstName}}` | User's first name | John |
| `{{lastName}}` | User's last name | Doe |
| `{{email}}` | User's email address | john@example.com |
| `{{phone}}` | User's phone number (optional) | +1 234 567 8900 |
| `{{subject}}` | Inquiry subject | Question about services |
| `{{message}}` | User's message | I would like to know more about... |
| `{{serviceType}}` | Selected service type | Assisted Living |
| `{{preferredContact}}` | Preferred contact method | Email |

## Troubleshooting

### Emails not being received?
- Check your EmailJS dashboard for sent emails and any error logs
- Verify your Gmail service is still connected
- Check spam/junk folder in Gmail
- Ensure all credentials in `src/config/emailjs.ts` are correct

### Form shows "Failed to send email"?
- Open browser console (F12) to see detailed error messages
- Verify your Public Key is correct
- Check that you haven't exceeded the 200 emails/month limit
- Ensure your EmailJS account is active and verified

### Template variables not showing correctly?
- Double-check variable names in your template match exactly (case-sensitive)
- Use double curly braces: `{{variableName}}`
- Test the template using the "Test" feature in EmailJS dashboard

## Email Usage Tracking

The contact form automatically monitors your email usage and displays warnings to users:

### Warning Levels:

1. **Normal (0-179 emails):** Form works normally with no warnings
2. **Warning Level (180-194 emails - 90%):** Yellow banner appears, form still works
   - Message: "We're experiencing high email volume"
   - Suggests calling for urgent matters
3. **Critical Level (195-199 emails - 97.5%):** Orange banner appears, form still works
   - Message: "High Email Usage Alert"
   - Strongly suggests calling instead
4. **Limit Reached (200+ emails):** Red banner appears, form is disabled
   - Message: "Contact Form Temporarily Unavailable"
   - Provides direct contact information (phone & email)
   - Submit button shows "Form Unavailable - Contact Us Directly"
   - All form inputs remain visible but cannot be submitted

### How It Works:

- The form checks your usage when the page loads using the Private Key
- If no Private Key is configured, tracking is skipped (form works normally)
- Usage data is fetched from EmailJS API: `https://api.emailjs.com/api/v1.0/account/usage`
- The check happens once per page load (not real-time)

### Customizing Limits:

You can adjust the thresholds in `src/config/emailjs.ts`:

```typescript
export const EMAIL_LIMITS = {
  FREE_TIER_LIMIT: 200,        // Total monthly limit
  WARNING_THRESHOLD: 180,      // Show warning at 90%
  CRITICAL_THRESHOLD: 195      // Show critical warning at 97.5%
};
```

## Security Notes

- The Public Key is safe to commit to your repository (it's meant to be public)
- The Private Key is used only for reading usage data (not sending emails)
- Never expose Private Key in client-side code visible to users
- Keep your EmailJS account password secure
- Monitor your usage to stay within the free tier limits

## Support

- EmailJS Documentation: [https://www.emailjs.com/docs/](https://www.emailjs.com/docs/)
- EmailJS Support: [https://www.emailjs.com/support/](https://www.emailjs.com/support/)

## Cost & Limitations

**Free Tier:**
- 200 emails per month
- 2 email services
- 2 email templates
- Email history (30 days)

**Paid Plans:** Available if you exceed the free tier limits. See [pricing](https://www.emailjs.com/pricing/).
