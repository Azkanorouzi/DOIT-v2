import { auth } from '@/config/Firebase'
import { setUser } from '@/redux-cake/auth-slices/authSlice'
import { onAuthStateChanged } from 'firebase/auth'
import { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'

export default function useIsAuthenticated() {
  const [authenticated, setAuthenticated] = useState(true)
  const dispatch = useDispatch()
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setAuthenticated(true)
        const { email, uid, emailVerified } = user
        dispatch(setUser({ email, uid, emailVerified }))
      } else {
        setAuthenticated(false)
      }
    })
  }, [dispatch])
  return authenticated
}
