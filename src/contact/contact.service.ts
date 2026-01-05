import { Injectable } from '@nestjs/common';
import * as nodemailer from 'nodemailer';
import { existsSync, mkdirSync, appendFileSync } from 'fs';
import { join } from 'path';

@Injectable()
export class ContactService {
  private createTransporter() {
    const port = Number(process.env.SMTP_PORT) || 25;
    const secure = process.env.SMTP_SECURE === 'true' || port === 465;

    return nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port,
      secure,
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
      tls: {
        rejectUnauthorized: false,
      },
    });
  }

  async sendEmail(data: {
    fullName: string;
    phone: string;
    email: string;
    company?: string;
    message: string;
  }) {
    const safe = (v?: string) => v?.trim() || '—';

    const mailOptions = {
      from: `"GPG Group Website" <${process.env.SMTP_USER}>`,
      to: process.env.CONTACT_EMAIL,
      replyTo: data.email,
      subject: 'GPG Group – New Contact Message',
      html: `
        <h2>📩 New message from GPG Group website</h2>

        <p><strong>Full name:</strong> ${safe(data.fullName)}</p>
        <p><strong>Email:</strong> ${safe(data.email)}</p>
        <p><strong>Phone:</strong> ${safe(data.phone)}</p>
        <p><strong>Company:</strong> ${safe(data.company)}</p>

        <p><strong>Message:</strong></p>
        <div style="background:#f4f6f8;padding:15px;border-left:4px solid #8bc34a;">
          ${safe(data.message)}
        </div>

        <hr />
        <small>Sent at: ${new Date().toLocaleString('en-GB')}</small>
      `,
    };

    const transporter = this.createTransporter();
    const info = await transporter.sendMail(mailOptions);
    transporter.close();

    return info;
  }

  async sendEmailAsync(data: {
    fullName: string;
    phone: string;
    email: string;
    company?: string;
    message: string;
  }) {
    const timestamp = new Date().toISOString();

    try {
      this.log('START', data, 'Email sending started');
      const info = await this.sendEmail(data);
      this.log('SUCCESS', data, `Email sent: ${info.messageId}`);
      return info;
    } catch (error) {
      this.log(
        'ERROR',
        data,
        `${error?.message || 'Unknown error'} | ${error?.code || 'NO_CODE'}`,
      );
      throw error;
    }
  }

  private log(status: 'START' | 'SUCCESS' | 'ERROR', data: any, message: string) {
    try {
      const dir = join(__dirname, '..', '..', 'logs');
      if (!existsSync(dir)) mkdirSync(dir, { recursive: true });

      const file = join(dir, `contact-${new Date().toISOString().slice(0, 10)}.log`);
      const line = `[${new Date().toISOString()}] [${status}] ${data.fullName} | ${data.email} | ${message}\n`;

      appendFileSync(file, line);
    } catch {}
  }
}
