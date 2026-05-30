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
- **From Name:** `{{first_name}} {{last_name}}`
- **From Email:** Leave default or use `{{email}}`
- **To Email:** `{{to_email}}` (the form sends this; defaults to `sofycaressma@gmail.com`). You may instead hardcode `sofycaressma@gmail.com` if you prefer.

> **Important:** The variable names below are **snake_case** and must match
> exactly what the contact form sends (see the reference table at the bottom).
> If they don't match, emails arrive with blank fields.

### Template Content (paste this into the editor):

```
New Inquiry from Sofy Cares Website

Contact Information:
Name: {{first_name}} {{last_name}}
Email: {{email}}
Phone: {{phone}}

Service Details:
Service Type: {{service_type}}
Preferred Contact Method: {{preferred_contact}}

Subject: {{subject}}

Message:
{{message}}

---
This email was sent from the Sofy Cares contact form at sofycares.com
Reply directly to this email to respond to the inquiry.
```

4. Click **"Save"** and note your **Template ID** (something like `template_xxxxxxx`)

## Step 4: Get Your Public Key

1. Go to **"Account"** in the left sidebar
2. Under **"API Keys"**, copy your **Public Key** (something like `xxxxxxxxxxxxxxxx`) — this is all the form needs to send email.

> This setup is **fully client-side and uses only the public key**. Do **not**
> use the Private Key anywhere in this project — it must never be exposed in
> browser code.

## Step 5: Configure Environment Variables

Credentials are **not** hardcoded. `src/config/emailjs.ts` reads them from
environment variables. These use the `EMAILJS_` prefix, which `vite.config.ts`
exposes to the browser via `envPrefix: ["VITE_", "EMAILJS_"]` (Vite would
otherwise only expose `VITE_`-prefixed vars):

```typescript
export const EMAILJS_CONFIG = {
  serviceId: import.meta.env.EMAILJS_SERVICE_ID,
  templateId: import.meta.env.EMAILJS_TEMPLATE_ID,
  publicKey: import.meta.env.EMAILJS_PUBLIC_KEY,
};
```

**Local development:**
1. Copy `.env.example` to `.env` in the project root (`.env` is gitignored).
2. Fill in the three values from the steps above:

```
EMAILJS_SERVICE_ID=service_xxxxxxx     # From Step 2
EMAILJS_TEMPLATE_ID=template_xxxxxxx    # From Step 3
EMAILJS_PUBLIC_KEY=xxxxxxxxxxxxxxxx     # From Step 4
```

3. Restart `npm run dev` so Vite picks up the new values.

**Production (Netlify):** add the **same three variable names** under *Site
configuration → Environment variables*, then trigger **"Clear cache and deploy
site"** — Vite inlines env vars at build time, so a cached build keeps the old
values. See the README "Deployment → Netlify" section.

> **Security:** the `EMAILJS_` prefix exposes *any* matching var to the browser
> bundle. Never add `EMAILJS_PRIVATE_KEY` or any secret with this prefix — only
> the service ID, template ID, and public key (all safe to expose) belong here.

## Step 6: Test the Contact Form

1. Start your development server if it's not already running
2. Navigate to the Contact page
3. Fill out the form with test data
4. Click "Send Inquiry"
5. Check your email at **sofycaressma@gmail.com** for the test message

## Template Variables Reference

The following variables are sent from the contact form and can be used in your EmailJS template:

> These are the **exact keys the form sends** (snake_case). Your template
> variable names must match these character-for-character.

| Variable | Description | Example |
|----------|-------------|---------|
| `{{first_name}}` | User's first name | John |
| `{{last_name}}` | User's last name | Doe |
| `{{email}}` | User's email address | john@example.com |
| `{{phone}}` | User's phone number (falls back to "Not provided") | +1 234 567 8900 |
| `{{subject}}` | Inquiry subject | Question about services |
| `{{message}}` | User's message | I would like to know more about... |
| `{{service_type}}` | Selected service type (human-readable label) | Assisted Living |
| `{{preferred_contact}}` | Preferred contact method | Email |
| `{{to_email}}` | Recipient address sent by the form | sofycaressma@gmail.com |

## Troubleshooting

### Emails not being received?
- Check your EmailJS dashboard for sent emails and any error logs
- Verify your Gmail service is still connected
- Check spam/junk folder in Gmail
- Ensure the three `EMAILJS_*` env vars are set correctly (in `.env` locally, and in the Netlify dashboard for production)
- If fields arrive **blank**, your template variable names don't match — confirm they use the snake_case names in the reference table above

### Form shows "Failed to send email"?
- Open browser console (F12) to see detailed error messages
- Verify `EMAILJS_PUBLIC_KEY`, `EMAILJS_SERVICE_ID`, and `EMAILJS_TEMPLATE_ID` are set (a missing var shows up as `undefined` — the production symptom is "The public key is required")
- After changing env vars, restart `npm run dev` locally; on Netlify use **"Clear cache and deploy site"** (env values are inlined at build time)
- Check that you haven't exceeded the 200 emails/month limit
- Ensure your EmailJS account is active and verified

### Template variables not showing correctly?
- Double-check variable names in your template match exactly (case-sensitive)
- Use double curly braces: `{{variableName}}`
- Test the template using the "Test" feature in EmailJS dashboard

## Email Usage Tracking

> **Note for this client-only setup:** usage tracking requires a Private Key,
> which is intentionally **not used** here (it must never be exposed in the
> browser). With no private key, `src/hooks/useEmailUsage.ts` returns default
> values, so the warning banners below **never trigger** and the form stays
> enabled. Monitor your usage in the EmailJS dashboard instead. The UI and
> thresholds documented below remain in the code for reference only.

The contact form is designed to monitor email usage and display warnings to users:

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

- The **Public Key**, **Service ID**, and **Template ID** are all safe to expose in the browser — that is exactly how EmailJS client-side sending works.
- This project uses **no Private Key** and **no backend / serverless function**. Never put a Private Key in client-side code.
- `vite.config.ts` exposes the **`EMAILJS_` prefix** to the browser bundle, so *any* env var starting with `EMAILJS_` is shipped to clients. Never name a secret `EMAILJS_PRIVATE_KEY` (or similar) — only the service ID, template ID, and public key may use this prefix.
- Real values live in `.env` (gitignored) and in the Netlify dashboard — only `.env.example` (with placeholders) is committed.
- Keep your EmailJS account password secure.
- Monitor your usage to stay within the free tier limits.

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
