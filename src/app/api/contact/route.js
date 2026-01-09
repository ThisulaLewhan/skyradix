// src/app/api/contact/route.js
import nodemailer from 'nodemailer';
import { render } from '@react-email/render';
import EmailTemplate from '@/components/MiscComponents/EmailTemplate';

export async function POST(request) {
  const { email, message } = await request.json();

  // Create a transporter object using Gmail SMTP
  const transporter = nodemailer.createTransport({
    service: 'Gmail',
    auth: {
      user: process.env.GMAIL_USER,
      pass: process.env.GMAIL_PASS,
    },
  });

  // Render the email template to HTML
  const emailHtml = await render(<EmailTemplate senderEmail={email} message={message} />);

  // Define the email options
  const mailOptions = {
    from: process.env.GMAIL_USER,
    to: 'wasurayehan@gmail.com',
    subject: `New Contact Form Submission from ${email}`,
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
