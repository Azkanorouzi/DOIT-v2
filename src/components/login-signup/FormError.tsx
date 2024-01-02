import React, { ReactNode } from 'react'
import { FormMessage } from '../ui/form'

export default function FormError({
  customErr,
}: {
  customErr?: string | ReactNode
}) {
  return (
    <div className="flex gap-2 bg-accent rounded-full items-center justify-center">
      <i className="fa fa-exclamation text-[10px]"></i>
      {customErr ? (
        <p className="text-destructive text-[0.8rem]">{customErr}</p>
      ) : (
        <FormMessage />
      )}
    </div>
  )
}
