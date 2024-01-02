import React, { ReactNode } from 'react'

export default function Navbar({
  leftContent,
  centerContent,
  rightContent,
}: {
  leftContent: ReactNode
  centerContent: ReactNode
  rightContent: ReactNode
}) {
  return (
    <nav className="w-screen p-8 fixed flex justify-between bg-[hsla(0,0%,3.9%,0.2)] backdrop-blur-sm z-40">
      <section className="flex-1 flex justify-center">{leftContent}</section>
      <section className="flex flex-row items-center gap-3 text-primary text-4xl flex-1 justify-center">
        {centerContent}
      </section>
      <section className="flex-1 flex justify-center">{rightContent}</section>
    </nav>
  )
}
