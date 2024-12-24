'use client'

import { useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { Card, CardContent } from "@/components/ui/card"
import { CheckCircle } from 'lucide-react'
import { createClientComponentClient } from '@supabase/auth-helpers-nextjs'

export default function VerifySuccess() {
  const router = useRouter()
  const supabase = createClientComponentClient()

  useEffect(() => {
    const checkAndRedirect = async () => {
      const { data: { session } } = await supabase.auth.getSession()
      if (!session) {
        // If no session, redirect to login
        router.push('/auth/login')
        return
      }

      // Redirect to tasks after a short delay
      setTimeout(() => {
        router.push('/tasks')
      }, 2000)
    }

    checkAndRedirect()
  }, [router, supabase.auth])

  return (
    <div className="flex min-h-screen items-center justify-center">
      <Card className="w-full max-w-md">
        <CardContent className="pt-6 text-center space-y-4">
          <CheckCircle className="h-8 w-8 mx-auto text-green-500" />
          <h2 className="text-2xl font-bold">Email Verified!</h2>
          <p className="text-muted-foreground max-w-sm mx-auto">
            Your email has been verified successfully. Redirecting you to the app...
          </p>
        </CardContent>
      </Card>
    </div>
  )
} 