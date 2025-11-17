/**
 * Alpha Partner Application Form - Google Apps Script
 * 
 * This script receives form submissions from your website and saves them to a Google Sheet.
 * 
 * SETUP INSTRUCTIONS:
 * 1. Create a new Google Sheet for Alpha Partner applications
 * 2. In the Google Sheet, go to Extensions > Apps Script
 * 3. Delete any existing code and paste this entire script
 * 4. Update the SHEET_NAME and NOTIFICATION_EMAIL variables below
 * 5. Click "Deploy" > "New deployment"
 *    - Choose type: "Web app"
 *    - Execute as: "Me"
 *    - Who has access: "Anyone"
 * 6. Copy the Web App URL and add it to your .env.local file as GOOGLE_APPS_SCRIPT_URL
 * 7. Click "Deploy"
 */

// Configuration
const SHEET_NAME = 'Alpha Partners'; // Change this to your sheet name
const TIMEZONE = 'Asia/Manila';
const NOTIFICATION_EMAIL = 'your-email@gmail.com'; // Change this to your Gmail address
const ENABLE_EMAIL_NOTIFICATIONS = true; // Set to false to disable email notifications

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
 * Handle POST requests from the form
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
    let sheet = ss.getSheetByName(SHEET_NAME);
    
    // Create the sheet if it doesn't exist
    if (!sheet) {
      sheet = ss.insertSheet(SHEET_NAME);
      
      // Add headers
      const headers = [
        'Timestamp',
        'Full Name',
        'Email',
        'Phone',
        'Role',
        'Company Name',
        'Country',
        'Industry',
        'Fleet Size',
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
    
    // Prepare the row data (exclude recaptchaToken from storage)
    const timestamp = new Date();
    const formattedTimestamp = Utilities.formatDate(timestamp, TIMEZONE, 'yyyy-MM-dd HH:mm:ss');
    
    const rowData = [
      formattedTimestamp,
      data.fullName || '',
      data.email || '',
      data.phone || '',
      data.role || '',
      data.companyName || '',
      data.country || '',
      data.industry || '',
      data.fleetSize || '',
      data.message || ''
    ];
    
    // Append the data to the sheet
    sheet.appendRow(rowData);
    
    // Auto-resize columns for better readability
    sheet.autoResizeColumns(1, rowData.length);
    
    // Send email notification if enabled
    if (ENABLE_EMAIL_NOTIFICATIONS && NOTIFICATION_EMAIL) {
      try {
        sendEmailNotification(data, formattedTimestamp);
      } catch (emailError) {
        console.error('Email notification error:', emailError);
        // Continue execution even if email fails
      }
    }
    
    // Send success response
    return ContentService
      .createTextOutput(JSON.stringify({
        success: true,
        message: 'Application submitted successfully'
      }))
      .setMimeType(ContentService.MimeType.JSON);
      
  } catch (error) {
    // Log error
    console.error('Error:', error);
    
    // Send error response
    return ContentService
      .createTextOutput(JSON.stringify({
        success: false,
        message: 'Failed to submit application',
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
      message: 'Alpha Partner Application Form API is running'
    }))
    .setMimeType(ContentService.MimeType.JSON);
}

/**
 * Send email notification
 */
function sendEmailNotification(data, timestamp) {
  const subject = '🚀 New Alpha Partner Application: ' + data.companyName;
  
  const htmlBody = `
    <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
      <div style="background-color: #000000; color: #ffffff; padding: 20px; text-align: center;">
        <h1 style="margin: 0; font-size: 24px; font-weight: 300;">Rangkada</h1>
        <p style="margin: 10px 0 0 0; font-size: 14px; color: #999999;">Alpha Partner Application</p>
      </div>
      
      <div style="padding: 30px; background-color: #f9f9f9;">
        <p style="font-size: 16px; color: #333333; margin-top: 0;">
          A new Alpha Partner application has been submitted.
        </p>
        
        <div style="background-color: #ffffff; padding: 20px; margin: 20px 0; border-left: 4px solid #000000;">
          <h2 style="margin-top: 0; font-size: 18px; font-weight: 400; color: #000000;">Personal Information</h2>
          <table style="width: 100%; border-collapse: collapse;">
            <tr>
              <td style="padding: 8px 0; color: #666666; width: 120px;">Name:</td>
              <td style="padding: 8px 0; color: #000000; font-weight: 500;">${data.fullName}</td>
            </tr>
            <tr>
              <td style="padding: 8px 0; color: #666666;">Email:</td>
              <td style="padding: 8px 0; color: #000000;"><a href="mailto:${data.email}" style="color: #000000;">${data.email}</a></td>
            </tr>
            <tr>
              <td style="padding: 8px 0; color: #666666;">Phone:</td>
              <td style="padding: 8px 0; color: #000000;">${data.phone}</td>
            </tr>
            <tr>
              <td style="padding: 8px 0; color: #666666;">Role:</td>
              <td style="padding: 8px 0; color: #000000;">${data.role}</td>
            </tr>
          </table>
        </div>
        
        <div style="background-color: #ffffff; padding: 20px; margin: 20px 0; border-left: 4px solid #000000;">
          <h2 style="margin-top: 0; font-size: 18px; font-weight: 400; color: #000000;">Company Information</h2>
          <table style="width: 100%; border-collapse: collapse;">
            <tr>
              <td style="padding: 8px 0; color: #666666; width: 120px;">Company:</td>
              <td style="padding: 8px 0; color: #000000; font-weight: 500;">${data.companyName}</td>
            </tr>
            <tr>
              <td style="padding: 8px 0; color: #666666;">Country:</td>
              <td style="padding: 8px 0; color: #000000;">${data.country}</td>
            </tr>
            <tr>
              <td style="padding: 8px 0; color: #666666;">Industry:</td>
              <td style="padding: 8px 0; color: #000000;">${data.industry}</td>
            </tr>
            <tr>
              <td style="padding: 8px 0; color: #666666;">Fleet Size:</td>
              <td style="padding: 8px 0; color: #000000;">${data.fleetSize}</td>
            </tr>
          </table>
        </div>
        
        ${data.message ? `
        <div style="background-color: #ffffff; padding: 20px; margin: 20px 0; border-left: 4px solid #000000;">
          <h2 style="margin-top: 0; font-size: 18px; font-weight: 400; color: #000000;">Additional Information</h2>
          <p style="margin: 0; color: #333333; line-height: 1.6;">${data.message.replace(/\n/g, '<br>')}</p>
        </div>
        ` : ''}
        
        <div style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #dddddd;">
          <p style="font-size: 12px; color: #999999; margin: 0;">
            <strong>Submitted:</strong> ${timestamp}<br>
            <strong>View in Google Sheets:</strong> <a href="${SpreadsheetApp.getActiveSpreadsheet().getUrl()}" style="color: #000000;">Open Spreadsheet</a>
          </p>
        </div>
      </div>
      
      <div style="background-color: #000000; color: #666666; padding: 20px; text-align: center; font-size: 12px;">
        <p style="margin: 0;">This is an automated notification from the Rangkada Alpha Partner Application Form.</p>
      </div>
    </div>
  `;
  
  const plainTextBody = `
New Alpha Partner Application Received

PERSONAL INFORMATION
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Name:     ${data.fullName}
Email:    ${data.email}
Phone:    ${data.phone}
Role:     ${data.role}

COMPANY INFORMATION
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Company:     ${data.companyName}
Country:     ${data.country}
Industry:    ${data.industry}
Fleet Size:  ${data.fleetSize}

${data.message ? `ADDITIONAL INFORMATION
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
${data.message}

` : ''}━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Submitted: ${timestamp}
View in Google Sheets: ${SpreadsheetApp.getActiveSpreadsheet().getUrl()}

This is an automated notification from the Rangkada Alpha Partner Application Form.
  `;
  
  MailApp.sendEmail({
    to: NOTIFICATION_EMAIL,
    subject: subject,
    body: plainTextBody,
    htmlBody: htmlBody
  });
}
