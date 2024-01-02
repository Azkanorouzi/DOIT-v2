import DoitLogo from '../ui/DoitLogo'
import Navbar from './Navbar'
import NavbarButton from './NavbarButton'
import useIsAuthenticated from '@/hooks/useIsAuthenticated'

export default function MainNavbar() {
  const isAuthenticated = useIsAuthenticated()

  return (
    <Navbar
      leftContent={
        <>
          <NavbarButton
            to="/signup"
            text="Sign up"
            icon={<i className="fa fa-pen"></i>}
          />
          <NavbarButton
            to="/login"
            text="Login"
            icon={<i className="fa fa-door-open"></i>}
          />
        </>
      }
      centerContent={<DoitLogo></DoitLogo>}
      rightContent={
        <>
          <NavbarButton
            to="/"
            text="Home"
            icon={<i className="fa fa-home"></i>}
          />
          <NavbarButton
            to="/about"
            text="About"
            icon={<i className="fa fa-info"></i>}
          />
          <NavbarButton
            to="/dashboard"
            text="Dashboard"
            disabled={!isAuthenticated}
            icon={
              !isAuthenticated ? (
                <i className="fa fa-lock"></i>
              ) : (
                <i className="fa fa-box"></i>
              )
            }
          />
        </>
      }
    />
  )
}
