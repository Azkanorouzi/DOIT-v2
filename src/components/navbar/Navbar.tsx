import { useTheme } from '@/contexts/ThemeContext'
import { ReactNode } from 'react'

export default function Navbar({
  leftContent,
  centerContent,
  rightContent,
}: {
  leftContent: ReactNode
  centerContent: ReactNode
  rightContent: ReactNode
}) {
  const { theme } = useTheme()
  return (
    <nav
      className={`w-screen p-8 fixed flex justify-between backdrop-blur-sm z-40 navbar bg-opacity-5 ${theme}`}
    >
      <section className="flex-1 justify-center hidden lg:flex">
        {leftContent}
      </section>
      <section className="flex-row items-center gap-3 text-primary text-4xl flex-1 justify-center flex">
        {centerContent}
      </section>
      <section className="flex-1 justify-center hidden lg:flex">
        {rightContent}
      </section>
    </nav>
  )
}
