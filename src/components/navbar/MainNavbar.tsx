import DoitLogo from '../ui/DoitLogo'
import Navbar from './Navbar'
import NavbarButton from './NavbarButton'
import useCurrentUser from '@/hooks/useCurrentUser'
import { FaRegPenToSquare } from 'react-icons/fa6'
import { SlLogin } from 'react-icons/sl'
import { IoHomeOutline } from 'react-icons/io5'
import { BsQuestionOctagon } from 'react-icons/bs'
import { MdSpaceDashboard } from 'react-icons/md'
import { MdLockOutline } from 'react-icons/md'
import { FaInbox, FaUserCircle } from 'react-icons/fa'

export default function MainNavbar() {
  const { isAuthenticated, isLoading: isGettingCurrentUser } = useCurrentUser()

  return (
    <Navbar
      leftContent={
        !isAuthenticated || isGettingCurrentUser ? (
          <>
            <NavbarButton
              to="/signup"
              text="Sign up"
              icon={<FaRegPenToSquare />}
            />
            <NavbarButton to="/login" text="Login" icon={<SlLogin />} />
          </>
        ) : (
          <>
            <NavbarButton
              to="/profile"
              text="Profile"
              icon={<FaUserCircle />}
            />
            <NavbarButton to="/inbox" text="Inbox" icon={<FaInbox />} />
          </>
        )
      }
      centerContent={<DoitLogo></DoitLogo>}
      rightContent={
        <>
          <NavbarButton to="/" text="Home" icon={<IoHomeOutline />} />
          <NavbarButton to="/about" text="About" icon={<BsQuestionOctagon />} />
          <NavbarButton
            to="/dashboard"
            text="Dashboard"
            disabled={!isAuthenticated || isGettingCurrentUser}
            icon={
              !isAuthenticated || isGettingCurrentUser ? (
                <MdLockOutline />
              ) : (
                <MdSpaceDashboard />
              )
            }
          />
        </>
      }
    />
  )
}
