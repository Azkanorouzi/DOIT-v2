import DoitLogo from '../ui/DoitLogo'
import Navbar from './Navbar'
import NavbarButton from './NavbarButton'
import useIsAuthenticated from '@/hooks/useIsAuthenticated'
import { FaRegPenToSquare } from 'react-icons/fa6'
import { SlLogin } from 'react-icons/sl'
import { IoHomeOutline } from 'react-icons/io5'
import { BsQuestionOctagon } from 'react-icons/bs'
import { MdSpaceDashboard } from 'react-icons/md'
import { MdLockOutline } from 'react-icons/md'

export default function MainNavbar() {
  const isAuthenticated = useIsAuthenticated()

  return (
    <Navbar
      leftContent={
        <>
          <NavbarButton
            to="/signup"
            text="Sign up"
            icon={<FaRegPenToSquare />}
          />
          <NavbarButton to="/login" text="Login" icon={<SlLogin />} />
        </>
      }
      centerContent={<DoitLogo></DoitLogo>}
      rightContent={
        <>
          <NavbarButton to="/home" text="Home" icon={<IoHomeOutline />} />
          <NavbarButton to="/about" text="About" icon={<BsQuestionOctagon />} />
          <NavbarButton
            to="/dashboard"
            text="Dashboard"
            disabled={!isAuthenticated}
            icon={!isAuthenticated ? <MdLockOutline /> : <MdSpaceDashboard />}
          />
        </>
      }
    />
  )
}
