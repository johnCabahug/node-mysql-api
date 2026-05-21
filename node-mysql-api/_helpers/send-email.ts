import config from "../config.json";
import nodemailer from "nodemailer";

export default async function sendEmail({
  to,
  subject,
  html,
  from = process.env.EMAIL_FROM || config.emailFrom,
}: any) {
  // Use Mailtrap API if available (works on Render free tier which blocks SMTP ports)
  const mailtrapToken = process.env.MAILTRAP_TOKEN;
  if (mailtrapToken) {
    const response = await fetch('https://send.api.mailtrap.io/api/send', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${mailtrapToken}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        from: { email: from, name: 'IPT 2026' },
        to: [{ email: to }],
        subject,
        html,
      }),
    });
    if (!response.ok) {
      const error = await response.text();
      throw new Error(`Mailtrap API error: ${error}`);
    }
    return;
  }

  // Fallback to SMTP
  const smtpOptions = {
    host: process.env.SMTP_HOST || config.smtpOptions.host,
    port: Number(process.env.SMTP_PORT) || config.smtpOptions.port,
    connectionTimeout: 5000,
    greetingTimeout: 5000,
    socketTimeout: 5000,
    auth: {
      user: process.env.SMTP_USER || config.smtpOptions.auth.user,
      pass: process.env.SMTP_PASS || config.smtpOptions.auth.pass,
    },
  };
  const transporter = nodemailer.createTransport(smtpOptions as any);
  await transporter.sendMail({ from, to, subject, html });
}
