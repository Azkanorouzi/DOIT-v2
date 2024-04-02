import { useLogoutUserMutation } from '@/redux-cake/auth-slices/authSlice'
import { Button } from '../ui/button'
import LoaderSmall from './LoaderSmall'
import { useHandleSuccess } from '@/hooks/useHandleSuccess'
import { useNavigate } from 'react-router-dom'
import DialogComplete from './DialogComplete'

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
    <DialogComplete
      text="Are you sure?"
      desc="Are you sure you want to log out from your account?"
      btnText="Ok"
      clickHandler={handleClick}
    >
      <Button
        variant="destructive"
        className="relative flex gap-2"
        disabled={isLoggingOut}
      >
        <span> Logout </span>
        {isLoggingOut && <LoaderSmall />}
      </Button>
    </DialogComplete>
  )
}
