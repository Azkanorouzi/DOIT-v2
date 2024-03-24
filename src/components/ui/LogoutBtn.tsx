import { useLogoutUserMutation } from '@/redux-cake/auth-slices/authSlice'
import { Button } from '../ui/button'
import LoaderSmall from './LoaderSmall'
import { useHandleSuccess } from '@/hooks/useHandleSuccess'
import { useNavigate } from 'react-router-dom'

export default function LogoutButton() {
  const [logout, { isLoading: isLoggingOut, isSuccess }] =
    useLogoutUserMutation()
  useHandleSuccess({ isSuccess, redirectUrl: '/login' })
  const navigate = useNavigate()

  async function handleClick() {
    await logout('')
    navigate('/login')
  }
  return (
    <Button
      variant="destructive"
      className="relative flex gap-2"
      onClick={handleClick}
      disabled={isLoggingOut}
    >
      <span> Logout </span>
      {isLoggingOut && <LoaderSmall />}
    </Button>
  )
}
