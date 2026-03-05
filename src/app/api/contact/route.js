// src/app/api/contact/route.js
import nodemailer from 'nodemailer';

export async function POST(request) {
  const { name, email, phone, details } = await request.json();

  // Create a transporter object using Gmail SMTP
  const transporter = nodemailer.createTransport({
    service: 'Gmail',
    auth: {
      user: process.env.GMAIL_USER,
      pass: process.env.GMAIL_PASS,
    },
    tls: {
      rejectUnauthorized: false
    }
  });

  // Create the email HTML content
  const emailHtml = `
    <h2>New Project Inquiry from Skyradix.com</h2>
    <p><strong>Name:</strong> ${name || 'Not provided'}</p>
    <p><strong>From:</strong> ${email || 'Not provided'}</p>
    <p><strong>Phone:</strong> ${phone || 'Not provided'}</p>
    <p><strong>Details:</strong></p>
    <p>${details ? details.replace(/\n/g, '<br>') : 'None'}</p>
  `;

  // Define the email options
  const mailOptions = {
    from: process.env.GMAIL_USER,
    to: process.env.GMAIL_USER,
    replyTo: email,
    subject: `New Lead from Skyradix Website - [${name || 'Anonymous'}]`,
    html: emailHtml,
  };

  try {
    // Send the email
    await transporter.sendMail(mailOptions);
    return new Response(JSON.stringify({ success: true }), { status: 200 });
  } catch (error) {
    console.error('Error sending email:', error);
    return new Response(JSON.stringify({ success: false, error: error.message }), { status: 500 });
  }
}
