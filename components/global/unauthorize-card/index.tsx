import { AlertTriangle } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import Link from 'next/link'

export function UnauthorizedAccess() {
  return (
    <Card className="p-8 max-w-md mx-auto bg-red-50 border-red-200">
      <div className="flex flex-col items-center text-center">
        <AlertTriangle className="w-16 h-16 text-red-500 mb-4" />
        <h2 className="text-2xl font-bold text-red-700 mb-4">Unauthorized Access</h2>
        <p className="text-gray-700 mb-6">
          {`Oops! It seems you don't have permission to access this page. If you've purchased our e-book, please use the download link provided in your email.`}
        </p>
        <div className="space-y-4">
          <Button asChild variant="outline" className="w-full">
            <Link href="/">Return to Homepage</Link>
          </Button>
          <Button asChild className="w-full">
            <Link href="mailto:hello.eboibd@gmail.com">Contact Support</Link>
          </Button>
        </div>
      </div>
    </Card>
  )
}

