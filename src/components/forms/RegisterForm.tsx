'use client'

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { signIn } from "next-auth/react"
import Link from "next/link"
import { useState } from "react"
import { useRouter } from "next/navigation"

export default function RegisterForm() {
  const [error, setError] = useState<string | null>(null)
  const router = useRouter()

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setError(null)

    const formData = new FormData(e.currentTarget)
    const email = formData.get('email') as string
    const password = formData.get('password') as string
    const firstname = formData.get('firstname') as string
    const lastname = formData.get('lastname') as string

    try {
      const response = await fetch('/api/register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password, firstname, lastname }),
      })

      if (response.ok) {
        router.push('/onboarding?email=' + encodeURIComponent(email))
      } else {
        const data = await response.json()
        setError(data.error || 'An error occurred during registration')
      }
    } catch (error) {
      console.error('Registration error:', error)
      setError('An error occurred during registration')
    }
  }


  return (
   
     <div className="flex-1 flex items-center justify-center p-8">
     <Card className="w-full max-w-md border-none shadow-none">
       <CardHeader className="space-y-1">
         <CardTitle className="text-2xl font-bold text-center">Create an account</CardTitle>
         <CardDescription className="text-center">
           Enter your email below to create your account
         </CardDescription>
       </CardHeader>
       <CardContent>
         <form onSubmit={handleSubmit} className="space-y-4">
         <div className="space-y-2">
             <Label htmlFor="firstname">Firstname</Label>
             <Input id="firstname" name="firstname" type="text" required />
           </div>
           <div className="space-y-2">
             <Label htmlFor="lastname">Lastname</Label>
             <Input id="lastname" name="lastname" type="text" required />
           </div>
           <div className="space-y-2">
             <Label htmlFor="email">Email</Label>
             <Input id="email" name="email" type="email" required />
           </div>
           <div className="space-y-2">
             <Label htmlFor="password">Password</Label>
             <Input id="password" name="password" type="password" required />
           </div>
           {error && <p className="text-sm text-red-500">{error}</p>}
         
           <Button type="submit" className="w-full">
             Create account
           </Button>
         </form>

         <div className="relative my-4">
           <div className="absolute inset-0 flex items-center">
             <div className="w-full border-t border-gray-300" />
           </div>
           <div className="relative flex justify-center text-sm">
             <span className="px-2 bg-background text-muted-foreground">Or continue with</span>
           </div>
         </div>

         <Button
           type="button"
           variant="outline"
           className="w-full"
           onClick={() => signIn('google', { callbackUrl: '/' })}
         >
           <svg className="mr-2 h-4 w-4" viewBox="0 0 24 24">
             <path
               d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
               fill="#4285F4"
             />
             <path
               d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
               fill="#34A853"
             />
             <path
               d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
               fill="#FBBC05"
             />
             <path
               d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
               fill="#EA4335"
             />
           </svg>
           Sign up with Google
         </Button>

         <div className="mt-4 text-center text-sm">
           Already have an account?{" "}
           <Link href="/login" className="text-primary hover:underline">
             Sign in
           </Link>
         </div>
       </CardContent>
     </Card>
   </div>
  )
}

