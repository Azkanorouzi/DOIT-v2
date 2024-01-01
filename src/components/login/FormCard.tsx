import React, { ReactNode } from 'react'

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '../ui/card'

export default function FormCard({
  title,
  description,
  form,
}: {
  title: string
  description: string
  form: ReactNode
}) {
  return (
    <Card className="dark bg-secondary text-card-foreground border-primary shadow-primary flex  flex-col border-t-0 card-shadow">
      <CardHeader>
        <CardTitle className="text-primary text-3xl">{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      <CardContent>{form}</CardContent>
    </Card>
  )
}
