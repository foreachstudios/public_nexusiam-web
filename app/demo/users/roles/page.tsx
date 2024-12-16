"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { UserRoles } from "@/components/users/user-roles"

export default function RolesPage() {
  return (
    <div className="space-y-8">
      <h1 className="text-3xl font-bold">IAM Roles</h1>
      <Card>
        <CardHeader>
          <CardTitle>Roles Overview</CardTitle>
        </CardHeader>
        <CardContent>
          <UserRoles />
        </CardContent>
      </Card>
    </div>
  )
}