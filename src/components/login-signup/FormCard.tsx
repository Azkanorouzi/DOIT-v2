import { ReactNode } from 'react'

import { Card, CardContent, CardHeader, CardTitle } from '../ui/card'
import { motion } from 'framer-motion'

const MotionCard = motion(Card, { forwardMotionProps: true })

export default function FormCard({
  title,
  description,
  form,
}: {
  title: string
  description: string | ReactNode
  form: ReactNode
}) {
  return (
    <MotionCard
      className="dark bg-secondary text-primary border-primary shadow-primary flex  flex-col border-t-0 card-shadow w-[450px] relative "
      initial={{ scaleX: 0 }}
      animate={{ scaleX: 1 }}
      key={Math.random()}
    >
      <CardHeader>
        <CardTitle className="text-primary text-3xl">{title} </CardTitle>
        <div>{description}</div>
      </CardHeader>
      <CardContent>{form}</CardContent>
    </MotionCard>
  )
}
