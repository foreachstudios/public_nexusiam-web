"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { ResourcesOverview } from "@/components/monitoring/resources-overview"
import { ResourcesList } from "@/components/monitoring/resources-list"
import { ResourcesUsage } from "@/components/monitoring/resources-usage"

export default function ResourcesPage() {
  return (
    <div className="space-y-8">
      <h1 className="text-3xl font-bold">Resources Monitoring</h1>
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        <Card>
          <CardHeader>
            <CardTitle>EC2 Instances</CardTitle>
          </CardHeader>
          <CardContent>
            <ResourcesUsage type="ec2" />
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>S3 Buckets</CardTitle>
          </CardHeader>
          <CardContent>
            <ResourcesUsage type="s3" />
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>RDS Databases</CardTitle>
          </CardHeader>
          <CardContent>
            <ResourcesUsage type="rds" />
          </CardContent>
        </Card>
      </div>
      <Card>
        <CardHeader>
          <CardTitle>Resources Overview</CardTitle>
        </CardHeader>
        <CardContent>
          <ResourcesOverview />
        </CardContent>
      </Card>
      <Card>
        <CardHeader>
          <CardTitle>All Resources</CardTitle>
        </CardHeader>
        <CardContent>
          <ResourcesList />
        </CardContent>
      </Card>
    </div>
  )
}