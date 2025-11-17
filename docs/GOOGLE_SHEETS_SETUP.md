# Google Sheets Integration Setup Guide

This guide will help you set up both the Alpha Partner application form and the Contact Form (Talk to Us) to save data directly to Google Sheets using Google Apps Script.

## Overview

You'll be setting up two forms:
1. **Alpha Partner Application Form** (`/alpha-partners/apply`) - Full application with 9 fields
2. **Contact Form** (Talk to Us section on homepage) - Simple contact form with 3 fields

You can use the **same Google Sheet** with different tabs, or create separate sheets. This guide covers both options.

## Step 1: Create a Google Sheet

1. Go to [Google Sheets](https://sheets.google.com)
2. Create a new blank spreadsheet
3. Name it "Rangkada Alpha Partner Applications" (or any name you prefer)
4. Keep this tab open - you'll need it in the next steps

## Step 2: Set Up Google Apps Script

1. In your Google Sheet, click **Extensions** → **Apps Script**
2. You'll see a default `Code.gs` file with some code
3. **Delete all the existing code**
4. Copy the entire code from `google-apps-script/alpha-partner-form.gs` in this project
5. Paste it into the Apps Script editor
6. **Update the configuration variables** at the top of the script:
   ```javascript
   const SHEET_NAME = 'Alpha Partners'; // Change this if needed
   const NOTIFICATION_EMAIL = 'your-email@gmail.com'; // Change to YOUR Gmail address
   const ENABLE_EMAIL_NOTIFICATIONS = true; // Set to false to disable emails
   ```
7. Click the **Save** icon (💾) or press `Cmd+S` / `Ctrl+S`
8. Give your project a name (e.g., "Alpha Partner Form Handler")

## Step 3: Deploy the Script as a Web App

1. In the Apps Script editor, click **Deploy** → **New deployment**
2. Click the gear icon (⚙️) next to "Select type"
3. Choose **Web app**
4. Configure the deployment:
   - **Description**: "Alpha Partner Form API" (or any description)
   - **Execute as**: Select **"Me" (your email)**
   - **Who has access**: Select **"Anyone"**
5. Click **Deploy**
6. You may be asked to authorize the script:
   - Click **Review permissions**
   - Choose your Google account
   - Click **Advanced** → **Go to [Your Project Name] (unsafe)**
   - Click **Allow**
7. **Copy the Web App URL** - it should look like:
   ```
   https://script.google.com/macros/s/AKfycbz.../exec
   ```
8. **Important**: Keep this URL safe and private!

## Step 4: Configure Your Website

1. In your project root directory, create a `.env.local` file (if it doesn't exist)
2. Add the Google Apps Script URL:
   ```bash
   NEXT_PUBLIC_GOOGLE_APPS_SCRIPT_URL=https://script.google.com/macros/s/YOUR_SCRIPT_ID/exec
   ```
   Replace `YOUR_SCRIPT_ID` with the URL you copied in Step 3

3. Save the file
4. Restart your development server:
   ```bash
   npm run dev
   ```

## Step 5: Configure reCAPTCHA (Required)

Both forms now include Google reCAPTCHA v3 protection to prevent spam and bot submissions. You must configure reCAPTCHA for the forms to work.

### Get reCAPTCHA Keys

1. Visit [Google reCAPTCHA Admin Console](https://www.google.com/recaptcha/admin)
2. Click the **+** button to register a new site
3. Fill in the registration form:
   - **Label**: "Rangkada Forms" (or any name)
   - **reCAPTCHA type**: Select **reCAPTCHA v3**
   - **Domains**: 
     - Add `localhost` (for development)
     - Add your production domain (e.g., `rangkada.com`)
   - Check **"Accept the reCAPTCHA Terms of Service"**
4. Click **Submit**

You'll receive two keys:
- **Site Key** (public) - Used in your frontend
- **Secret Key** (private) - Used in Google Apps Script

### Configure Frontend

Add the site key to your `.env.local` file:

```bash
# Google Apps Script URLs
NEXT_PUBLIC_GOOGLE_APPS_SCRIPT_URL=https://script.google.com/macros/s/YOUR_SCRIPT_ID/exec
NEXT_PUBLIC_CONTACT_FORM_URL=https://script.google.com/macros/s/YOUR_CONTACT_SCRIPT_ID/exec

# Google reCAPTCHA v3
NEXT_PUBLIC_RECAPTCHA_SITE_KEY=your_recaptcha_site_key_here
```

### Configure Backend (Google Apps Script)

#### For Alpha Partner Form:

In `google-apps-script/alpha-partner-form.gs`, update the reCAPTCHA configuration:

```javascript
// reCAPTCHA Configuration
const RECAPTCHA_SECRET_KEY = 'your_recaptcha_secret_key_here'; // Paste your SECRET key
const RECAPTCHA_SCORE_THRESHOLD = 0.5; // Adjust if needed (0.0 to 1.0)
```

#### For Contact Form:

In `google-apps-script/contact-form.gs`, update the same configuration:

```javascript
// reCAPTCHA Configuration
const RECAPTCHA_SECRET_KEY = 'your_recaptcha_secret_key_here'; // Use the SAME secret key
const RECAPTCHA_SCORE_THRESHOLD = 0.5;
```

**Important**: Use the **same secret key** for both scripts.

### Redeploy Scripts

After updating the reCAPTCHA keys:

1. In Apps Script editor, click **Deploy** → **Manage deployments**
2. Click the **pencil icon** (✏️) next to your deployment
3. Change **Version** to **"New version"**
4. Click **Deploy**
5. Repeat for the contact form script if using separate files

### Understanding reCAPTCHA Score Threshold

- **0.5** (default): Moderate security - good balance
- **0.7**: Higher security - may reject some legitimate users
- **0.3**: Lower security - more lenient, fewer false positives

Monitor your [reCAPTCHA Dashboard](https://www.google.com/recaptcha/admin) to see submission scores and adjust the threshold as needed.

## Step 6: Test the Form

1. **Restart your development server**:
   ```bash
   npm run dev
   ```

2. Navigate to `http://localhost:3000/alpha-partners/apply`
3. Fill out the form with test data
4. Click "Submit Application"
5. You should see "Submitting..." while the form processes
6. Check your Google Sheet - you should see the data appear in a new row!
7. Check your email for the notification (if enabled)

## Sheet Structure

The script will automatically create a sheet with the following columns:

| Timestamp | Full Name | Email | Phone | Role | Company Name | Country | Industry | Fleet Size | Message |
|-----------|-----------|-------|-------|------|--------------|---------|----------|------------|---------|

- The header row will be **bold** with a **black background** and **white text**
- The header row will be **frozen** so it stays visible when scrolling
- Columns will **auto-resize** for better readability
- Timestamps will be in **Asia/Manila timezone** (configurable in the script)

## Email Notifications

Email notifications are **enabled by default**! Every time someone submits the Alpha Partner application form, you'll receive a beautifully formatted email with:

### Email Features:
- 🎨 **Professional HTML design** with Rangkada branding
- 📋 **Complete applicant information** organized in sections
- 📧 **Clickable email links** to respond directly
- 📊 **Direct link to Google Sheet** to view all applications
- ⏰ **Timestamp** of submission
- 📱 **Mobile-friendly** layout

### Email Preview:
The email includes:
- **Personal Information**: Name, Email, Phone, Role
- **Company Information**: Company Name, Country, Industry, Fleet Size
- **Additional Information**: Custom message (if provided)
- **Metadata**: Submission timestamp and link to spreadsheet

### Customize Email Settings:

To change the notification email or disable notifications:

1. Open your Apps Script editor
2. Find the configuration section at the top:
   ```javascript
   const NOTIFICATION_EMAIL = 'your-email@gmail.com'; // Change this
   const ENABLE_EMAIL_NOTIFICATIONS = true; // Set to false to disable
   ```
3. Update the values as needed
4. Save and redeploy the script (Deploy → Manage deployments → Edit → New version)

### Troubleshooting Email Issues:

**Not receiving emails?**
1. Check your spam/junk folder
2. Verify the `NOTIFICATION_EMAIL` is set correctly in the script
3. Make sure `ENABLE_EMAIL_NOTIFICATIONS` is set to `true`
4. Check Apps Script execution logs for errors

**Email appears as plain text?**
- Most email clients will display the HTML version automatically
- Gmail, Outlook, and other modern clients support HTML emails
- The script includes both HTML and plain-text versions for compatibility

## Troubleshooting

### Issue: "Google Apps Script URL not configured" error

**Solution**: Make sure you've added `NEXT_PUBLIC_GOOGLE_APPS_SCRIPT_URL` to your `.env.local` file and restarted your dev server.

### Issue: Form submits but no data appears in Google Sheet

**Solution**: 
1. Check the Apps Script execution logs:
   - Go to Apps Script editor
   - Click **Executions** (⏱️ icon on the left)
   - Look for errors
2. Make sure the script is deployed as a **Web app** with **"Anyone"** access
3. Verify the `SHEET_NAME` variable matches your sheet name

### Issue: "Script requires authorization" error

**Solution**: 
1. In Apps Script, click **Run** → **doPost**
2. Complete the authorization process
3. Then redeploy the script

### Issue: CORS errors in browser console

**Solution**: This is normal! The form uses `mode: 'no-cors'` which is required for Google Apps Script. The form will still work correctly.

## Security Notes

- The Web App URL should be kept private (don't commit it to public repositories)
- Only deploy with **"Execute as: Me"** to use your permissions
- The script only accepts POST requests with form data
- Consider adding additional validation in the Apps Script if needed

## Updating the Script

If you need to make changes to the script:

1. Edit the code in the Apps Script editor
2. Click **Save**
3. Click **Deploy** → **Manage deployments**
4. Click the **pencil icon** (✏️) next to your deployment
5. Change "Version" to **"New version"**
6. Click **Deploy**
7. The URL will stay the same, so you don't need to update your `.env.local`

---

## Setting Up the Contact Form (Talk to Us)

The Contact Form is a simpler form (Name, Email, Message) that appears on the homepage. You can add it to the **same Google Sheet** as a separate tab, or use a different sheet.

### Option A: Same Sheet (Recommended)

1. In your existing Apps Script editor, click the **+** next to Files
2. Choose **Script** and name it `ContactForm`
3. Copy the code from `google-apps-script/contact-form.gs`
4. Paste it into the new file
5. **Update the configuration**:
   ```javascript
   const CONTACT_SHEET_NAME = 'Contact Form'; // Different tab name
   const CONTACT_EMAIL = 'your-email@gmail.com'; // Same or different email
   const ENABLE_CONTACT_NOTIFICATIONS = true;
   ```
6. Click **Deploy** → **Manage deployments**
7. Click **New deployment**
8. Add description: "Contact Form API"
9. Copy the new Web App URL
10. Add to your `.env.local`:
    ```bash
    NEXT_PUBLIC_CONTACT_FORM_URL=https://script.google.com/macros/s/YOUR_CONTACT_SCRIPT_ID/exec
    ```

### Option B: Separate Sheet

1. Create a new Google Sheet for Contact Form submissions
2. Go to Extensions → Apps Script
3. Follow the same steps as the Alpha Partner form setup
4. Use the `contact-form.gs` script instead

### Contact Form Sheet Structure

| Timestamp | Name | Email | Message |
|-----------|------|-------|---------|

### Contact Form Email Notifications

The contact form also sends beautiful HTML emails with:
- 💬 **Contact Information**: Name and Email (clickable)
- 📝 **Full Message**: Preserves formatting
- 🔗 **Quick Reply Button**: One-click to respond
- 📊 **Link to Spreadsheet**: View all messages

### Testing the Contact Form

1. Navigate to `http://localhost:3000/#contact`
2. Scroll to the "Transform your fleet" section
3. Fill out the form (Name, Email, Message)
4. Click "Submit Application"
5. Check your Google Sheet - the message appears in the Contact Form tab!
6. Check your email for the notification

---

## Data Privacy

- Data is stored in your personal Google Sheet
- Only you (the sheet owner) have access to the data
- Google Apps Script runs under your Google account permissions
- Consider Google's data retention and privacy policies

## Support

For issues specific to Google Apps Script, refer to:
- [Google Apps Script Documentation](https://developers.google.com/apps-script)
- [Spreadsheet Service Reference](https://developers.google.com/apps-script/reference/spreadsheet)

For issues with the form or website, check the browser console for errors.
