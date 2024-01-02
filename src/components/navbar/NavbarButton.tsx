import React, { ReactNode } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Button } from '../ui/button'

export default function NavbarButton({
  to = '/',
  text,
  icon,
  disabled = false,
}: {
  to: string
  text: string
  icon: ReactNode
  disabled?: boolean
}) {
  const location = useLocation()
  const active = location.pathname === to && !disabled
  if (disabled)
    return (
      <Button
        variant={'ghost'}
        className={`hover:bg-transparent hover:text-primary rounded-none border-b-2 border-transparent flex gap-1 ${
          active ? 'border-primary text-primary' : ''
        }`}
        disabled
      >
        {icon}
        {text}
      </Button>
    )
  return (
    <Link to={to}>
      <Button
        variant={'ghost'}
        className={`hover:bg-transparent hover:text-primary rounded-none border-b-2 border-transparent flex gap-1 ${
          active ? 'border-primary text-primary' : ''
        }`}
      >
        {icon}
        {text}
      </Button>
    </Link>
  )
}
