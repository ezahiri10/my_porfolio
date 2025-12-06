import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: NextRequest) {
  try {
    const { email, subject, message } = await request.json();

    // Validate input
    if (!email || !subject || !message) {
      return NextResponse.json(
        { message: "Missing required fields" },
        { status: 400 }
      );
    }

    // Validate environment variables
    if (!process.env.RESEND_API_KEY) {
      console.error("Missing RESEND_API_KEY");
      return NextResponse.json(
        { message: "Email service not configured" },
        { status: 500 }
      );
    }

    // Send email using Resend
    const result = await resend.emails.send({
      from: "onboarding@resend.dev",
      to: process.env.EMAIL_RECIPIENT || email,
      replyTo: email,
      subject: `Contact Form: ${subject}`,
      text: `From: ${email}\n\n${message}`,
    });

    return NextResponse.json(
      { message: "Email sent successfully", result },
      { status: 200 }
    );
  } catch (error: any) {
    console.error("Email error:", error.message);
    return NextResponse.json(
      { message: "Failed to send email", error: error.message },
      { status: 500 }
    );
  }
}
