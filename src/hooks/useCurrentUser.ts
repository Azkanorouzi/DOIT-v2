import { useGetCurUserQuery } from '@/redux-cake/auth-slices/authSlice'

export default function useCurrentUser() {
  const { data, isLoading } = useGetCurUserQuery(null)

  console.log(data?.user?.role)

  return {
    isAuthenticated: data?.user?.role === 'authenticated',
    email: data?.user?.email,
    data: data?.user?.user_metadata,
    isLoading,
  }
}
