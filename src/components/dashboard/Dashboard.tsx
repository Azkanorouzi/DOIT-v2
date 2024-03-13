import useIsAuthenticated from '@/hooks/useCurrentUser'
import { Navigate } from 'react-router-dom'

export default function Dashboard() {
  const { isAuthenticated, email, isLoading } = useIsAuthenticated()

  console.log(isAuthenticated, email, 'isauthenticate')
  if (!isAuthenticated && !isLoading) return <Navigate to={'/login'} />
  return (
    <div className="flex justify-center flex-col items-center">
      <h1>You're now logged in with {email}</h1>
    </div>
  )
}
