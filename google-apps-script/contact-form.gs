/**
 * Contact Form (Talk to Us) - Google Apps Script
 * 
 * This script receives contact form submissions and saves them to a Google Sheet.
 * 
 * SETUP INSTRUCTIONS:
 * 1. Create a new Google Sheet for contact form submissions (or use the same sheet)
 * 2. In the Google Sheet, go to Extensions > Apps Script
 * 3. Create a new file or add this to your existing script
 * 4. Update the SHEET_NAME and NOTIFICATION_EMAIL variables below
 * 5. Click "Deploy" > "New deployment" (or manage existing deployment)
 *    - Choose type: "Web app"
 *    - Execute as: "Me"
 *    - Who has access: "Anyone"
 * 6. Copy the Web App URL and add it to your .env.local file as NEXT_PUBLIC_CONTACT_FORM_URL
 * 7. Click "Deploy"
 */

// Configuration
const CONTACT_SHEET_NAME = 'Contact Form'; // Change this to your sheet name
const TIMEZONE = 'Asia/Manila';
const CONTACT_EMAIL = 'your-email@gmail.com'; // Change this to your Gmail address
const ENABLE_CONTACT_NOTIFICATIONS = true; // Set to false to disable email notifications

// reCAPTCHA Configuration
const RECAPTCHA_SECRET_KEY = 'your_recaptcha_secret_key_here'; // Get this from Google reCAPTCHA admin console
const RECAPTCHA_SCORE_THRESHOLD = 0.5; // Minimum score to accept submission (0.0 to 1.0)

/**
 * Verify reCAPTCHA token
 */
function verifyRecaptcha(token) {
  if (!token) {
    throw new Error('reCAPTCHA token is missing');
  }
  
  const url = 'https://www.google.com/recaptcha/api/siteverify';
  const payload = {
    secret: RECAPTCHA_SECRET_KEY,
    response: token
  };
  
  const options = {
    method: 'post',
    payload: payload,
    muteHttpExceptions: true
  };
  
  try {
    const response = UrlFetchApp.fetch(url, options);
    const result = JSON.parse(response.getContentText());
    
    if (!result.success) {
      console.error('reCAPTCHA verification failed:', result);
      throw new Error('reCAPTCHA verification failed');
    }
    
    // Check score (reCAPTCHA v3 returns a score from 0.0 to 1.0)
    if (result.score < RECAPTCHA_SCORE_THRESHOLD) {
      console.error('reCAPTCHA score too low:', result.score);
      throw new Error('reCAPTCHA verification failed: score too low');
    }
    
    return result;
  } catch (error) {
    console.error('reCAPTCHA verification error:', error);
    throw new Error('reCAPTCHA verification failed');
  }
}

/**
 * Handle POST requests from the contact form
 */
function doPost(e) {
  try {
    // Parse the incoming data
    const data = JSON.parse(e.postData.contents);
    
    // Verify reCAPTCHA token
    if (data.recaptchaToken) {
      verifyRecaptcha(data.recaptchaToken);
    } else {
      throw new Error('reCAPTCHA token is required');
    }
    
    // Get the active spreadsheet and sheet
    const ss = SpreadsheetApp.getActiveSpreadsheet();
    let sheet = ss.getSheetByName(CONTACT_SHEET_NAME);
    
    // Create the sheet if it doesn't exist
    if (!sheet) {
      sheet = ss.insertSheet(CONTACT_SHEET_NAME);
      
      // Add headers
      const headers = [
        'Timestamp',
        'Name',
        'Email',
        'Message'
      ];
      sheet.getRange(1, 1, 1, headers.length).setValues([headers]);
      
      // Format header row
      sheet.getRange(1, 1, 1, headers.length)
        .setFontWeight('bold')
        .setBackground('#000000')
        .setFontColor('#FFFFFF');
      
      // Freeze header row
      sheet.setFrozenRows(1);
    }
    
    // Prepare the row data
    const timestamp = new Date();
    const formattedTimestamp = Utilities.formatDate(timestamp, TIMEZONE, 'yyyy-MM-dd HH:mm:ss');
    
    const rowData = [
      formattedTimestamp,
      data.name || '',
      data.email || '',
      data.message || ''
    ];
    
    // Append the data to the sheet
    sheet.appendRow(rowData);
    
    // Auto-resize columns for better readability
    sheet.autoResizeColumns(1, rowData.length);
    
    // Send email notification if enabled
    if (ENABLE_CONTACT_NOTIFICATIONS && CONTACT_EMAIL) {
      try {
        sendContactNotification(data, formattedTimestamp);
      } catch (emailError) {
        console.error('Email notification error:', emailError);
        // Continue execution even if email fails
      }
    }
    
    // Send success response
    return ContentService
      .createTextOutput(JSON.stringify({
        success: true,
        message: 'Message sent successfully'
      }))
      .setMimeType(ContentService.MimeType.JSON);
      
  } catch (error) {
    // Log error
    console.error('Error:', error);
    
    // Send error response
    return ContentService
      .createTextOutput(JSON.stringify({
        success: false,
        message: 'Failed to send message',
        error: error.toString()
      }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}

/**
 * Handle GET requests (optional - for testing)
 */
function doGet(e) {
  return ContentService
    .createTextOutput(JSON.stringify({
      status: 'ok',
      message: 'Contact Form API is running'
    }))
    .setMimeType(ContentService.MimeType.JSON);
}

/**
 * Send email notification for contact form
 */
function sendContactNotification(data, timestamp) {
  const subject = '💬 New Contact Form Message from ' + data.name;
  
  const htmlBody = `
    <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
      <div style="background-color: #000000; color: #ffffff; padding: 20px; text-align: center;">
        <h1 style="margin: 0; font-size: 24px; font-weight: 300;">Rangkada</h1>
        <p style="margin: 10px 0 0 0; font-size: 14px; color: #999999;">Contact Form Message</p>
      </div>
      
      <div style="padding: 30px; background-color: #f9f9f9;">
        <p style="font-size: 16px; color: #333333; margin-top: 0;">
          You've received a new message from the Rangkada website.
        </p>
        
        <div style="background-color: #ffffff; padding: 20px; margin: 20px 0; border-left: 4px solid #000000;">
          <h2 style="margin-top: 0; font-size: 18px; font-weight: 400; color: #000000;">Contact Information</h2>
          <table style="width: 100%; border-collapse: collapse;">
            <tr>
              <td style="padding: 8px 0; color: #666666; width: 80px;">Name:</td>
              <td style="padding: 8px 0; color: #000000; font-weight: 500;">${data.name}</td>
            </tr>
            <tr>
              <td style="padding: 8px 0; color: #666666;">Email:</td>
              <td style="padding: 8px 0; color: #000000;"><a href="mailto:${data.email}" style="color: #000000; text-decoration: none;">${data.email}</a></td>
            </tr>
          </table>
        </div>
        
        <div style="background-color: #ffffff; padding: 20px; margin: 20px 0; border-left: 4px solid #000000;">
          <h2 style="margin-top: 0; font-size: 18px; font-weight: 400; color: #000000;">Message</h2>
          <p style="margin: 0; color: #333333; line-height: 1.6; white-space: pre-wrap;">${data.message}</p>
        </div>
        
        <div style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #dddddd;">
          <p style="font-size: 12px; color: #999999; margin: 0;">
            <strong>Submitted:</strong> ${timestamp}<br>
            <strong>View in Google Sheets:</strong> <a href="${SpreadsheetApp.getActiveSpreadsheet().getUrl()}" style="color: #000000;">Open Spreadsheet</a>
          </p>
        </div>
        
        <div style="margin-top: 20px; padding: 15px; background-color: #f0f0f0; border-radius: 4px;">
          <p style="margin: 0; font-size: 14px; color: #666666;">
            <strong>Quick Reply:</strong> <a href="mailto:${data.email}?subject=Re: Your inquiry to Rangkada" style="color: #000000;">Click here to reply</a>
          </p>
        </div>
      </div>
      
      <div style="background-color: #000000; color: #666666; padding: 20px; text-align: center; font-size: 12px;">
        <p style="margin: 0;">This is an automated notification from the Rangkada Contact Form.</p>
      </div>
    </div>
  `;
  
  const plainTextBody = `
New Contact Form Message

CONTACT INFORMATION
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Name:   ${data.name}
Email:  ${data.email}

MESSAGE
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
${data.message}

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Submitted: ${timestamp}
View in Google Sheets: ${SpreadsheetApp.getActiveSpreadsheet().getUrl()}
Reply to: ${data.email}

This is an automated notification from the Rangkada Contact Form.
  `;
  
  MailApp.sendEmail({
    to: CONTACT_EMAIL,
    subject: subject,
    body: plainTextBody,
    htmlBody: htmlBody
  });
}
