import { ReactNode } from 'react'
import { FaDragon } from 'react-icons/fa'
import { useNavigate } from 'react-router-dom'

export default function DashboardNavLink({
  hovered = true,
  icon = <FaDragon />,
  linkTo = '',
  text = 'Home',
}: {
  hovered?: boolean
  icon?: ReactNode
  linkTo: string
  text?: string
}) {
  const navigate = useNavigate()
  return (
    <div
      className={`text-2xl transition-none flex gap-9`}
      onClick={() => navigate(linkTo)}
    >
      {icon}
      <p
        className={`text-lg  transition-all ${
          hovered ? 'opacity-1 blur-none' : 'opacity-0 blur-md'
        }`}
      >
        {' '}
        {text}{' '}
      </p>
    </div>
  )
}
