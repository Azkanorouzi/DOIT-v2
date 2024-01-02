import React from 'react'
import { Link } from 'react-router-dom'

export default function TextLink({
  text = '',
  link = '',
  to,
}: {
  text?: string
  link: string
  to: string
}) {
  return (
    <p className="text-muted-foreground">
      {text}{' '}
      <Link to={to} className="text-foreground hover:text-primary">
        {link}
      </Link>
    </p>
  )
}
