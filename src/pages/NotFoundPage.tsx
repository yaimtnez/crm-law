import { Link } from "react-router"

import { Home, AlertTriangle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export const NotFoundPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-red-50 to-gray-100 flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        <div className="text-center mb-8">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-red-600 rounded-full mb-4">
            <AlertTriangle className="w-8 h-8 text-white" />
          </div>
          <h1 className="text-3xl font-bold text-gray-900">Error 404</h1>
          <p className="text-gray-600 mt-2">Page not found</p>
        </div>

        <Card className="border-0 shadow-xl">
          <CardHeader className="space-y-1 pb-6">
            <CardTitle className="text-2xl font-semibold text-center text-gray-900">Page not found</CardTitle>
            <CardDescription className="text-center text-gray-600">
              Sorry, the page you are looking for does not exist
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <p className="text-center text-gray-600">
                You can return to the login page or try navigating to another page
              </p>
              <div className="flex flex-col space-y-2">
                <Button asChild className="w-full">
                  <Link to="/login">
                    <Home className="w-4 h-4 mr-2" />
                    Back to login
                  </Link>
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}



