import { Outlet } from 'react-router-dom'
import MainNavbar from '../navbar/MainNavbar'
import HamburgerMenu from '../navbar/HamburgerMenu'

export default function MainLayout() {
  return (
    <>
      <MainNavbar />
      <HamburgerMenu />
      <main className="bg-background dark h-screen ">
        <Outlet />
      </main>
    </>
  )
}
