import React, { ReactNode } from 'react'

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '../ui/card'
import LoaderMin from '../ui/LoaderMin'
import { useSelector } from 'react-redux'
import { AuthState } from '@/redux-cake/auth-slices/authSlice'

export default function FormCard({
  title,
  description,
  form,
}: {
  title: string
  description: string
  form: ReactNode
}) {
  const { authLoading } = useSelector(({ auth }: { auth: AuthState }) => auth)

  return (
    <Card className="dark bg-secondary text-primary border-primary shadow-primary flex  flex-col border-t-0 card-shadow w-[450px] relative ">
      {authLoading && <LoaderMin />}
      <CardHeader>
        <CardTitle className="text-primary text-3xl">{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      <CardContent>{form}</CardContent>
    </Card>
  )
}
