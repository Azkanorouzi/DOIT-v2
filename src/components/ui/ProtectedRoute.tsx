import useCurrentUser from '@/hooks/useCurrentUser'
import { ReactNode } from 'react'
import { Navigate } from 'react-router-dom'

export default function ProtectedRoute({
  children,
  placeholder,
  navigateTo,
}: {
  children: ReactNode
  navigateTo: string
  placeholder: ReactNode
}) {
  const { isAuthenticated, email, isLoading } = useCurrentUser()
  console.log(isAuthenticated, email, 'isauthenticate')

  // Redirection
  if (!isAuthenticated && !isLoading) return <Navigate to={navigateTo} />

  return (
    <>
      {!isAuthenticated && !isLoading && placeholder}
      {isAuthenticated && children}
    </>
  )
}
