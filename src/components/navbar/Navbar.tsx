import React, { ReactNode } from 'react'

export default function Navbar({
  leftNavbar,
  centerNavbar,
  rightNavbar,
}: {
  leftNavbar: ReactNode
  centerNavbar: ReactNode
  rightNavbar: ReactNode
}) {
  return (
    <nav className="w-screen p-8 fixed flex justify-between">
      <section className="flex-1 flex justify-center">{leftNavbar}</section>
      <section className="flex flex-row items-center gap-3 text-primary text-4xl flex-1 justify-center">
        {centerNavbar}
      </section>
      <section className="flex-1 flex justify-center">{rightNavbar}</section>
    </nav>
  )
}
