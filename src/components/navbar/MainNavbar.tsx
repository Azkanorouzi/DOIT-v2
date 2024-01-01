import React from 'react'
import { Button } from '../ui/button'

export default function MainNavbar() {
  return (
    <nav className="w-screen p-8 fixed flex justify-between">
      <section className="flex-1 flex justify-center">
        <Button
          variant={'ghost'}
          className="hover:bg-transparent hover:text-primary rounded-none border-b-2 border-transparent hover:border-white"
        >
          Log in
        </Button>
        <Button
          variant={'ghost'}
          className="hover:bg-transparent hover:text-primary border-b-2 rounded-none border-primary text-primary"
        >
          Sign up
        </Button>
      </section>
      <section className="flex flex-row items-center gap-3 text-primary text-4xl flex-1 justify-center">
        <i className="fa fa-dragon"></i>
        <h1> DOIT</h1>
      </section>
      <section className="flex-1 flex justify-center">
        <Button
          variant={'ghost'}
          className="hover:bg-transparent hover:text-primary rounded-none border-b-2 border-transparent hover:border-white gap-2"
        >
          <i className="fa fa-home"></i>
          <p>Home</p>
        </Button>
        <Button
          variant={'ghost'}
          className="hover:bg-transparent hover:text-primary rounded-none border-b-2 border-transparent hover:border-white gap-1"
        >
          <i className="fa fa-question"></i>
          <p>About</p>
        </Button>
        <Button
          variant={'ghost'}
          className="hover:bg-transparent hover:text-primary rounded-none border-b-2 border-transparent hover:border-white gap-2"
        >
          <i className="fa fa-box"></i>
          <p>Dashboard</p>
        </Button>
      </section>
    </nav>
  )
}
