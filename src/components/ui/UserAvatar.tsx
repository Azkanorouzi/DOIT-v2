import useCurrentUser from '@/hooks/useCurrentUser'
import { FaUserCircle } from 'react-icons/fa'

export default function UserAvatar({ customStyle }: { customStyle?: string }) {
  const { data } = useCurrentUser()
  return data?.profile?.length ? (
    <div
      className={`w-20 h-20 rounded-full ${customStyle} `}
      style={{
        backgroundImage: `url(${data?.profile})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    ></div>
  ) : (
    <FaUserCircle
      className={`w-20 h-20 rounded-full text-primary hover:text-primary-foreground transition-colors cursor-pointer ${customStyle}`}
    />
  )
}
