import React from 'react'
import { Button } from '../ui/button'
import { Link } from 'react-router-dom'

export default function LoginSuccess() {
  return (
    <div className="flex justify-center items-center">
      <Button variant={'destructive'}>
        <Link to={'/dashboard'}>Go to dashboard</Link>
      </Button>
    </div>
  )
}
