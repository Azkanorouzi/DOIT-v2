import { Outlet } from 'react-router-dom'
import MainNavbar from '../navbar/MainNavbar'
import HamburgerMenu from '../navbar/HamburgerMenu'
import { useTheme } from '@/contexts/ThemeContext'

export default function MainLayout() {
  const { theme } = useTheme()
  return (
    <>
      <MainNavbar />
      <HamburgerMenu />
      <main className={`bg-background h-screen ${theme}`}>
        <Outlet />
      </main>
    </>
  )
}
