import { Calculator, TrendingUp } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import Link from "next/link"

export default function BudgetingPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <header className="border-b border-gray-200 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <Link href="/" className="flex items-center">
                <Calculator className="h-8 w-8 text-blue-600" />
                <span className="ml-2 text-xl font-bold text-gray-900">FinnaCalc</span>
              </Link>
            </div>
            <Link href="/">
              <Button variant="outline">Back to Home</Button>
            </Link>
          </div>
        </div>
      </header>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center">
          <TrendingUp className="h-16 w-16 text-blue-600 mx-auto mb-6" />
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Advanced Budgeting Tools</h1>
          <p className="text-xl text-gray-600 mb-8">Coming Soon</p>

          <Card className="max-w-2xl mx-auto">
            <CardHeader>
              <CardTitle>What's Coming</CardTitle>
              <CardDescription>Revolutionary budgeting tools and expense tracking features</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="text-left space-y-3">
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                  <span>Automated Expense Tracking</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                  <span>Smart Budget Categories</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                  <span>Real-time Spending Alerts</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                  <span>Goal-Based Savings Plans</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                  <span>Bill Payment Reminders</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                  <span>Financial Health Score</span>
                </div>
              </div>

              <div className="pt-4 border-t">
                <p className="text-sm text-gray-600 mb-4">Be the first to access our budgeting platform!</p>
                <div className="flex gap-2">
                  <Input placeholder="Enter your email" className="flex-1" />
                  <Button className="bg-blue-600 hover:bg-blue-700">Notify Me</Button>
                </div>
              </div>
            </CardContent>
          </Card>

          <div className="mt-8">
            <p className="text-gray-600 mb-4">Start managing your finances with our current calculators:</p>
            <Link href="/">
              <Button variant="outline" className="mr-4">
                View All Calculators
              </Button>
            </Link>
            <Link href="/emergency-fund-calculator">
              <Button className="bg-blue-600 hover:bg-blue-700">Try Emergency Fund Calculator</Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
