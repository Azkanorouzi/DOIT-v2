import { createAsyncThunk } from '@reduxjs/toolkit'
import { setUser, setAuthErr } from './authSlice'
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  updateProfile,
} from 'firebase/auth'
import { auth } from '@/config/Firebase'
import { setError } from '@/utils/setError'
const data = {
  email: 'your@email.com',
  password: 'yourPassword',
}
const url = 'https://localhost:8081'
function signInWithEmailAndPassword() {
  fetch(`${url}/login`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  })
}

export const signUp = createAsyncThunk(
  'auth/signUp',
  async (
    credentials: {
      email: string
      password: string
      username: string
    },
    { dispatch }
  ) => {
    try {
      await signOut(auth)
      const response = await createUserWithEmailAndPassword(
        auth,
        credentials.email,
        credentials.password
      )
      await updateProfile(response.user, { displayName: credentials.username })

      return response.user
    } catch (err) {
      dispatch(setAuthErr(err))
    }
  }
)
export const logIn = createAsyncThunk(
  'auth/logIn',
  async (credentials: { email: string; password: string }, { dispatch }) => {
    try {
      const response = await signInWithEmailAndPassword(
        auth,
        credentials.email,
        credentials.password
      )
      const { email, uid, emailVerified } = response.user
      dispatch(setUser({ email, uid, emailVerified }))
      return response.user
    } catch (err) {
      setError(err, dispatch)
    }
  }
)
export const logOut = createAsyncThunk(
  'auth/logOut',
  async (_, { dispatch }) => {
    try {
      await signOut(auth)

      // Dispatch setUser action with null to clear the user data
      dispatch(setUser(null))

      return null
    } catch (err) {
      console.error(err)
      setError(err, dispatch)
    }
  }
)
