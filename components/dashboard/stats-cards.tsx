"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

interface StatsCardProps {
  title: string
  value: string | number
  subtitle?: string
}

function StatsCard({ title, value, subtitle }: StatsCardProps) {
  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-sm font-medium">{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="text-2xl font-bold">{value}</div>
        {subtitle && <p className="text-xs text-muted-foreground">{subtitle}</p>}
      </CardContent>
    </Card>
  )
}

export function DashboardStats() {
  return (
    <div className="grid gap-4 md:grid-cols-3">
      <StatsCard 
        title="Total Users"
        value={245}
        subtitle="+4 from last month"
      />
      <StatsCard 
        title="Active Policies"
        value={89}
        subtitle="+2 from last week"
      />
      <StatsCard 
        title="Security Alerts"
        value={3}
        subtitle="-2 from yesterday"
      />
    </div>
  )
}