'use client'

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { useState, useEffect } from "react"
import { useRouter, useSearchParams } from "next/navigation"

export default function OnboardingPage() {
  const [otp, setOtp] = useState(['', '', '', '', '', ''])
  const [error, setError] = useState<string | null>(null)
  const [isResending, setIsResending] = useState(false)
  const router = useRouter()
  const searchParams = useSearchParams()
  const email = searchParams?.get('email')

  useEffect(() => {
    if (email) {
      sendOtp(email)
    }
  }, [email])

  const handleChange = (element: HTMLInputElement, index: number) => {
    if (isNaN(Number(element.value))) return false

    setOtp([...otp.map((d, idx) => (idx === index ? element.value : d))])

    // Focus next input
    if (element.value !== '') {
      const nextElement = element.nextElementSibling as HTMLInputElement
      if (nextElement) {
        nextElement.focus()
      }
    }
  }

  const sendOtp = async (email: string) => {
    try {
      const response = await fetch(`/api/verify-otp?email=${encodeURIComponent(email)}`)
      if (!response.ok) {
        throw new Error('Failed to send OTP')
      }
    } catch (error) {
      console.error('Error sending OTP:', error)
      setError('Failed to send OTP. Please try again.')
    }
  }

  const handleResendOtp = async () => {
    if (!email) return

    setIsResending(true)
    await sendOtp(email)
    setIsResending(false)
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setError(null)

    const otpValue = otp.join('')
    
    try {
      const response = await fetch('/api/verify-otp', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, otp: otpValue }),
      })

      if (response.ok) {
        router.push('/dashboard')
      } else {
        const data = await response.json()
        setError(data.error || 'Invalid OTP')
      }
    } catch (error) {
      console.error('OTP verification error:', error)
      setError('An error occurred during OTP verification')
    }
  }

  return (
    <div className="flex-1 flex items-center justify-center p-8">
      <Card className="w-full max-w-md border-none shadow-none">
        <CardHeader className="space-y-1">
          <CardTitle className="text-2xl font-bold text-center">Verify your email</CardTitle>
          <CardDescription className="text-center">
            We've sent a code to your email. Please enter it below.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit}>
            <div className="flex justify-center gap-2 mb-6">
              {otp.map((data, index) => (
                <Input
                  key={index}
                  type="text"
                  maxLength={1}
                  className="w-12 h-12 text-center text-2xl"
                  value={data}
                  onChange={(e) => handleChange(e.target, index)}
                  onFocus={(e) => e.target.select()}
                />
              ))}
            </div>
            {error && <p className="text-sm text-red-500 text-center mb-4">{error}</p>}
            <Button type="submit" className="w-full">
              Verify Email
            </Button>
          </form>

          <div className="mt-4 text-center text-sm text-muted-foreground">
            Didn't receive the code?{" "}
            <Button 
              variant="link" 
              className="p-0 h-auto"
              onClick={handleResendOtp}
              disabled={isResending}
            >
              {isResending ? 'Resending...' : 'Resend'}
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

