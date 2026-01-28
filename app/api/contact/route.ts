import { NextRequest, NextResponse } from 'next/server'
import nodemailer from 'nodemailer'

export async function POST(request: NextRequest) {
  try {
    const { name, email, message } = await request.json()

    // Validate input
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: 'All fields are required' },
        { status: 400 }
      )
    }

    // Configure email transporter
    // For production, use environment variables for email credentials
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST || 'smtp.gmail.com',
      port: parseInt(process.env.SMTP_PORT || '587'),
      secure: false,
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASSWORD,
      },
    })

    // Email content
    const mailOptions = {
      from: process.env.SMTP_USER,
      to: process.env.CONTACT_EMAIL || 'tangella.d@northeastern.edu',
      subject: `Portfolio Contact: ${name}`,
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Message:</strong></p>
        <p>${message.replace(/\n/g, '<br>')}</p>
      `,
      replyTo: email,
    }

    // Check if SMTP credentials are configured
    if (!process.env.SMTP_USER || !process.env.SMTP_PASSWORD) {
      // Log the message for development
      console.log('Contact form submission (no SMTP configured):', { name, email, message })
      return NextResponse.json(
        { 
          message: 'Email sent successfully',
          warning: 'SMTP not configured - message logged to console only'
        },
        { status: 200 }
      )
    }

    // Verify transporter connection before sending
    try {
      await transporter.verify()
    } catch (verifyError: any) {
      console.error('SMTP connection verification failed:', verifyError)
      return NextResponse.json(
        { 
          error: 'Email service configuration error',
          details: verifyError.code === 'EAUTH' 
            ? 'Invalid email credentials. Please check your SMTP_USER and SMTP_PASSWORD. For Gmail, make sure you\'re using an App Password, not your regular password.'
            : 'Unable to connect to email server. Please check your SMTP configuration.'
        },
        { status: 500 }
      )
    }

    // Send email
    await transporter.sendMail(mailOptions)
    
    return NextResponse.json(
      { message: 'Email sent successfully' },
      { status: 200 }
    )
  } catch (error: any) {
    console.error('Error sending email:', error)
    
    // Provide specific error messages
    let errorMessage = 'Failed to send email'
    let errorDetails = 'Please try again later or contact me directly at tangella.d@northeastern.edu'
    
    if (error.code === 'EAUTH') {
      errorMessage = 'Email authentication failed'
      errorDetails = 'Invalid email credentials. For Gmail: 1) Enable 2-Step Verification, 2) Generate an App Password, 3) Use the App Password (not your regular password) in SMTP_PASSWORD'
    } else if (error.code === 'ECONNECTION') {
      errorMessage = 'Email server connection failed'
      errorDetails = 'Unable to connect to the email server. Please check your SMTP_HOST and SMTP_PORT settings.'
    }
    
    return NextResponse.json(
      { 
        error: errorMessage,
        details: errorDetails
      },
      { status: 500 }
    )
  }
}
