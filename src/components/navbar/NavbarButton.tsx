import React from 'react'
import { Link } from 'react-router-dom'
import { Button } from '../ui/button'

export default function NavbarButton({ to = '/' }: { to: string }) {
  return (
    <Link to={to}>
      <Button
        variant={'ghost'}
        className="hover:bg-transparent hover:text-primary rounded-none border-b-2 border-transparent hover:border-primary"
      >
        Log in
      </Button>
    </Link>
  )
}
