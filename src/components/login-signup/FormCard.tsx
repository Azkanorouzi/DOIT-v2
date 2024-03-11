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
import { motion } from 'framer-motion'

const MotionCard = motion(Card, { forwardMotionProps: true })

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
    <MotionCard
      className="dark bg-secondary text-primary border-primary shadow-primary flex  flex-col border-t-0 card-shadow w-[450px] relative "
      initial={{ scaleX: 0 }}
      animate={{ scaleX: 1 }}
      key={Math.random()}
    >
      {authLoading && <LoaderMin />}
      <CardHeader>
        <CardTitle className="text-primary text-3xl">{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      <CardContent>{form}</CardContent>
    </MotionCard>
  )
}
