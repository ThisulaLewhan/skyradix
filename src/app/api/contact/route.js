// src/app/api/contact/route.js
import nodemailer from 'nodemailer';

const MAX_LENGTHS = { name: 100, email: 254, phone: 30, details: 5000 };
const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

// Basic per-IP rate limit (per server instance)
const RATE_LIMIT_WINDOW_MS = 10 * 60 * 1000;
const RATE_LIMIT_MAX = 5;
const requestLog = new Map();

function isRateLimited(ip) {
  const now = Date.now();
  const recent = (requestLog.get(ip) || []).filter((t) => now - t < RATE_LIMIT_WINDOW_MS);
  recent.push(now);
  requestLog.set(ip, recent);

  // Drop stale entries so the map doesn't grow forever
  if (requestLog.size > 1000) {
    for (const [key, times] of requestLog) {
      if (times.every((t) => now - t >= RATE_LIMIT_WINDOW_MS)) requestLog.delete(key);
    }
  }
  return recent.length > RATE_LIMIT_MAX;
}

function escapeHtml(value) {
  return value
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
}

function json(body, status) {
  return Response.json(body, { status });
}

// Create a transporter object using Gmail SMTP
const transporter = nodemailer.createTransport({
  service: 'Gmail',
  auth: {
    user: process.env.GMAIL_USER,
    pass: process.env.GMAIL_PASS,
  },
});

export async function POST(request) {
  const ip = request.headers.get('x-forwarded-for')?.split(',')[0].trim() || 'unknown';
  if (isRateLimited(ip)) {
    return json({ success: false, error: 'Too many requests. Please try again later.' }, 429);
  }

  let body;
  try {
    body = await request.json();
  } catch {
    return json({ success: false, error: 'Invalid request.' }, 400);
  }

  // Normalise and validate the fields
  const fields = {};
  for (const key of Object.keys(MAX_LENGTHS)) {
    const value = body?.[key];
    if (value !== undefined && value !== null && typeof value !== 'string') {
      return json({ success: false, error: 'Invalid request.' }, 400);
    }
    fields[key] = (value || '').trim();
    if (fields[key].length > MAX_LENGTHS[key]) {
      return json({ success: false, error: `The ${key} field is too long.` }, 400);
    }
  }

  const { name, email, phone, details } = fields;
  if (!name || !details || !EMAIL_REGEX.test(email)) {
    return json({ success: false, error: 'Please provide your name, a valid email address and a message.' }, 400);
  }

  // Create the email HTML content (all user input is escaped)
  const emailHtml = `
    <h2>New Project Inquiry from Skyradix.com</h2>
    <p><strong>Name:</strong> ${escapeHtml(name)}</p>
    <p><strong>From:</strong> ${escapeHtml(email)}</p>
    <p><strong>Phone:</strong> ${phone ? escapeHtml(phone) : 'Not provided'}</p>
    <p><strong>Details:</strong></p>
    <p>${escapeHtml(details).replace(/\n/g, '<br>')}</p>
  `;

  // Define the email options
  const mailOptions = {
    from: process.env.GMAIL_USER,
    to: process.env.GMAIL_USER,
    replyTo: email,
    subject: `New Lead from Skyradix Website - [${name.replace(/[\r\n]+/g, ' ')}]`,
    text: `Name: ${name}\nFrom: ${email}\nPhone: ${phone || 'Not provided'}\n\n${details}`,
    html: emailHtml,
  };

  try {
    await transporter.sendMail(mailOptions);
    return json({ success: true }, 200);
  } catch (error) {
    console.error('Error sending email:', error);
    return json({ success: false, error: 'Failed to send message.' }, 500);
  }
}
