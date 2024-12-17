"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Shield } from "lucide-react"
import Link from "next/link"

export default function RegisterPage() {
  const [formData, setFormData] = useState({
    customer_email: "",
    full_name: "",
    company: "",
    phone_number: "",
    password_hash: "",
    // confirm_password: ""
  })
  const router = useRouter()

  const handleRegister = async (e: React.FormEvent) => {
    e.preventDefault();
    // if(formData.confirm_password !== formData.password_hash) {

    // }
    const userInfo = await fetch("http://localhost:8000/auth/register", {
      method: 'post',
      headers: {
          'Content-Type': 'application/json'
      },
      body: JSON.stringify(formData)
    })

    console.log("---userInfo", userInfo);
    // router.push("/onboarding")
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
      <Card className="w-[400px] shadow-xl bg-card/50 backdrop-blur-sm">
        <CardHeader className="space-y-1 flex flex-col items-center">
          <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center mb-4">
            <Shield className="w-6 h-6 text-primary-foreground" />
          </div>
          <CardTitle className="text-2xl font-bold">Create an Account</CardTitle>
          <CardDescription>Enter your details to get started</CardDescription>
        </CardHeader>
        <form onSubmit={handleRegister}>
          <CardContent className="space-y-4">
            <Input
              type="text"
              placeholder="User Name"
              value={formData.full_name}
              onChange={(e) => setFormData({ ...formData, full_name: e.target.value })}
              required
            />
            <Input
              type="email"
              placeholder="Email"
              value={formData.customer_email}
              onChange={(e) => setFormData({ ...formData, customer_email: e.target.value })}
              required
            />
            <Input
              type="text"
              placeholder="Company Name"
              value={formData.company}
              onChange={(e) => setFormData({ ...formData, company: e.target.value })}
              required
            />
            <Input
              type="text"
              placeholder="Phone Number"
              value={formData.phone_number}
              onChange={(e) => setFormData({ ...formData, phone_number: e.target.value })}
              required
            />
            <Input
              type="password"
              placeholder="Password"
              value={formData.password_hash}
              onChange={(e) => setFormData({ ...formData, password_hash: e.target.value })}
              required
            />
            <Input
              type="password"
              placeholder="Confirm Password"
              // value={formData.confirm_password}
              // onChange={(e) => setFormData({ ...formData, confirm_password: e.target.value })}
              required
            />
          </CardContent>
          <CardFooter className="flex flex-col space-y-4">
            <Button type="submit" className="w-full">Create Account</Button>
            <div className="text-sm text-muted-foreground text-center">
              Already have an account?{" "}
              <Link href="/login" className="text-primary hover:underline">
                Sign In
              </Link>
            </div>
          </CardFooter>
        </form>
      </Card>
    </div>
  )
}