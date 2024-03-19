import { IoArrowBack } from 'react-icons/io5'
import { Button } from './button'
import { useLocation, useNavigate } from 'react-router-dom'

export default function GoBack() {
  const { pathname } = useLocation()
  const navigate = useNavigate()

  function goBack() {
    const pathArr = pathname.slice(1).split('/')
    navigate(`/${pathArr.slice(0, -1).join('/')}`)
  }

  return (
    <Button onClick={goBack}>
      <IoArrowBack />
      Go Back
    </Button>
  )
}
