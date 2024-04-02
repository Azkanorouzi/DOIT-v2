import useCurrentUser from '@/hooks/useCurrentUser'
import { slide as Menu } from 'react-burger-menu'
import NavbarButton from './NavbarButton'
import { FaRegPenToSquare } from 'react-icons/fa6'
import { SlLogin } from 'react-icons/sl'
import { FaInbox, FaUserCircle } from 'react-icons/fa'
import { IoHomeOutline } from 'react-icons/io5'
import { BsQuestionOctagon } from 'react-icons/bs'
import { MdLockOutline, MdSpaceDashboard } from 'react-icons/md'
import { RiMenu4Line } from 'react-icons/ri'

export default function HamburgerMenu() {
  const { isAuthenticated, isLoading: isGettingCurrentUser } = useCurrentUser()

  const notAuthorized = !isAuthenticated || isGettingCurrentUser

  return (
    <div className=" z-50  h-[60px] w-[60px]  absolute top-0 left-0   lg:hidden bg-black  text-4xl ">
      <div className="w-full h-full grid place-content-center ">
        <RiMenu4Line />
      </div>
      <Menu
        isOpen={false}
        className="bg-secondary flex justify-center items-center pt-20 text-5xl h-[120vh]"
      >
        {notAuthorized ? (
          <>
            <>
              <NavbarButton
                to="/signup"
                text="Sign up"
                icon={<FaRegPenToSquare />}
                className="text-xl mb-5"
              />
              <NavbarButton
                to="/login"
                text="Login"
                icon={<SlLogin />}
                className="text-xl mb-5"
              />
            </>
          </>
        ) : (
          <>
            <NavbarButton
              to="/profile"
              text="Profile"
              icon={<FaUserCircle />}
              className="text-xl mb-5"
            />
            <NavbarButton
              to="/inbox"
              text="Inbox"
              icon={<FaInbox />}
              className="text-xl mb-5"
            />
          </>
        )}

        <NavbarButton
          to="/"
          text="Home"
          icon={<IoHomeOutline />}
          className="text-xl mb-5"
        />
        <NavbarButton
          to="/about"
          text="About"
          icon={<BsQuestionOctagon />}
          className="text-xl mb-5"
        />
        <NavbarButton
          to="/dashboard"
          text="Dashboard"
          disabled={notAuthorized}
          icon={notAuthorized ? <MdLockOutline /> : <MdSpaceDashboard />}
          className="text-xl mb-5"
        />
      </Menu>
    </div>
  )
}
