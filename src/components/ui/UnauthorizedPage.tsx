import { FaLock } from 'react-icons/fa'
import { useNavigate } from 'react-router-dom'
import { Button } from './button'

// This page is shown whenever the user tries to go to an unauthorized page

export default function UnauthorizedPage({
  message = "You're not currently logged in, please head over to",
}: {
  message?: string
}) {
  const navigate = useNavigate()
  return (
    <section className="grid h-screen place-content-center">
      <div className="flex text-center justify-center flex-col gap-5 items-center">
        <FaLock className="text-7xl mb-6 text-muted-foreground" />
        <h1>{message}</h1>
        <div>
          <Button
            className="bg-foreground text-primary hover:bg-muted home-btn-3"
            onClick={() => navigate('/login')}
          >
            Login
          </Button>
          <h2> to login to your account or </h2>
        </div>
        <div>
          <Button className="home-btn-2" onClick={() => navigate('/signup')}>
            Sign up
          </Button>
          <h2> to create a new account </h2>
        </div>
      </div>
    </section>
  )
}
