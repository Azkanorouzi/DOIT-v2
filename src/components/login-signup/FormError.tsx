import React, { ReactNode } from 'react'
import { FormMessage } from '../ui/form'
import { BsShieldFillExclamation } from 'react-icons/bs'
import { motion } from 'framer-motion'

export default function FormError({
  customErr,
}: {
  customErr?: string | ReactNode
}) {
  return (
    <motion.div
      className="flex gap-2 bg-accent rounded-full items-center justify-center"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
    >
      <BsShieldFillExclamation />
      {customErr ? (
        <p className="text-destructive text-[0.8rem]">{customErr}</p>
      ) : (
        <FormMessage />
      )}
    </motion.div>
  )
}
