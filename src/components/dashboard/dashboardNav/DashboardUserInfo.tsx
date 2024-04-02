import useCurrentUser from '@/hooks/useCurrentUser'
import UserAvatar from '../../ui/UserAvatar'

export default function DashboardUserInfo() {
  const { data } = useCurrentUser()
  return (
    <div className="flex gap-3 justify-center items-center">
      <p>{data?.username}</p>
      <UserAvatar customStyle="w-8 h-8" />
    </div>
  )
}
