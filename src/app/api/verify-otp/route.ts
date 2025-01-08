import { NextResponse } from "next/server"
import { PrismaClient } from "@prisma/client"

const prisma = new PrismaClient()

// In a real-world scenario, you'd store OTPs securely, possibly in a separate table with expiration
const otpStore = new Map<string, { otp: string; expires: Date }>()
const otpRateLimit = new Map<string, { count: number; resetTime: Date }>();


export function rateLimit(email: string): boolean {
  const now = new Date();
  const entry = otpRateLimit.get(email);

  if (!entry) {
    otpRateLimit.set(email, { count: 1, resetTime: new Date(now.getTime() + 15 * 60 * 1000) }); // 15 minutes
    return false;
  }

  if (entry.resetTime < now) {
    otpRateLimit.set(email, { count: 1, resetTime: new Date(now.getTime() + 15 * 60 * 1000) });
    return false;
  }

  if (entry.count >= 5) {
    return true; // Rate limit exceeded
  }

  entry.count += 1;
  otpRateLimit.set(email, entry);
  return false;
}

export async function POST(req: Request) {
  try {
    const { email, otp } = await req.json()

    const storedOtpData = otpStore.get(email)

    if (!storedOtpData || storedOtpData.otp !== otp || storedOtpData.expires < new Date()) {
      return NextResponse.json({ error: "Invalid or expired OTP" }, { status: 400 })
    }

    // OTP is valid, mark the user's email as verified
    await prisma.user.update({
      where: { email },
      data: { emailVerified: new Date() },
    })

    // Clear the OTP from storage
    otpStore.delete(email)

    return NextResponse.json({ message: "Email verified successfully" })
  } catch (error) {
    console.error("OTP verification error:", error)
    return NextResponse.json({ error: "An error occurred during OTP verification" }, { status: 500 })
  }
}

export async function GET(req: Request) {
  const url = new URL(req.url)
  const email = url.searchParams.get('email')

  if (!email) {
    return NextResponse.json({ error: "Email is required" }, { status: 400 })
  }

  if (rateLimit(email)) {
    return NextResponse.json({ error: "Too many OTP requests. Try again later." }, { status: 429 });
  }

  // Generate a 6-digit OTP
  const otp = Math.floor(100000 + Math.random() * 900000).toString()

  // Store the OTP with a 15-minute expiration
  const expires = new Date(Date.now() + 15 * 60 * 1000)
  otpStore.set(email, { otp, expires })

  // In a real-world scenario, you'd send this OTP via email
  console.log(`OTP for ${email}: ${otp}`)

  return NextResponse.json({ message: "OTP sent successfully" })
}

