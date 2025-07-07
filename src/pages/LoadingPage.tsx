import { Loader2 } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export const LoadingPage = () => {
    return (
        <div className="min-h-screen bg-gradient-to-br from-blue-50 to-gray-100 flex items-center justify-center p-4">
            <div className="w-full max-w-md">
                <div className="text-center mb-8">
                    <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-600 rounded-full mb-4">
                        <Loader2 className="w-8 h-8 text-white animate-spin" />
                    </div>
                    <h1 className="text-3xl font-bold text-gray-900">Loading...</h1>
                    <p className="text-gray-600 mt-2">Please wait while we load your content</p>
                </div>

                <Card className="border-0 shadow-xl">
                    <CardHeader className="space-y-1 pb-6">
                        <CardTitle className="text-2xl font-semibold text-center text-gray-900">Loading</CardTitle>
                        <CardDescription className="text-center text-gray-600">
                            We are preparing everything for you
                        </CardDescription>
                    </CardHeader>
                    <CardContent>
                        <div className="space-y-4">
                            <p className="text-center text-gray-600">
                                This may take a few moments. Please don't close this window.
                            </p>
                            <div className="flex justify-center">
                                <div className="w-8 h-8 border-4 border-blue-200 border-t-blue-600 rounded-full animate-spin"></div>
                            </div>
                        </div>
                    </CardContent>
                </Card>
            </div>
        </div>
    )
}
