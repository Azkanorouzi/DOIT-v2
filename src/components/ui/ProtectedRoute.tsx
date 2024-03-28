import useCurrentUser from '@/hooks/useCurrentUser'
import { ReactNode } from 'react'
import toast from 'react-hot-toast'
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
  const { isAuthenticated, isLoading } = useCurrentUser()
  // Redirection
  if (!isAuthenticated && !isLoading) {
    toast('you need to login to access this page!', {
      icon: '🚫',
    })
    return <Navigate to={navigateTo} />
  }

  return (
    <>
      {!isAuthenticated && !isLoading && placeholder}
      {isAuthenticated && children}
    </>
  )
}
