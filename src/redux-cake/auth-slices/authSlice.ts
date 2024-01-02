import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { AuthError } from 'firebase/auth'
import { logIn, logOut, signUp } from './authThunks'

interface ProtectedUser {
  email: string | null
  emailVerified: boolean
  uid: string
}
export interface AuthState {
  user: ProtectedUser | null
  authErr: AuthError | null | unknown
  authLoading: boolean
}
const initialState: AuthState = {
  user: null,
  authErr: null,
  authLoading: false,
}

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setUser(state, action: PayloadAction<ProtectedUser | null>) {
      state.user = action.payload
    },
    setAuthErr(state, action: PayloadAction<AuthError | null | unknown>) {
      state.authErr = action.payload
    },
    setAuthLoading(state, action: PayloadAction<AuthError | null | unknown>) {
      state.authErr = action.payload
    },
  },
  extraReducers: (builder) => {
    builder
      // Handling actions for logIn thunk
      .addCase(signUp.pending, (state) => {
        state.authLoading = true
      })
      .addCase(signUp.fulfilled, (state, action) => {
        state.authLoading = false
        state.user = action?.payload ?? state.user
      })
      .addCase(signUp.rejected, (state, action) => {
        state.authLoading = false
        state.authErr = action.error.message
      })
      .addCase(logIn.fulfilled, (state, action) => {
        state.authLoading = false
        state.user = action?.payload ?? state.user
      })
      .addCase(logIn.rejected, (state, action) => {
        state.authLoading = false
        state.authErr = action.error.message
      })
      .addCase(logOut.pending, (state) => {
        state.authLoading = true
      })
      .addCase(logOut.fulfilled, (state) => {
        state.authLoading = false
        state.user = null
      })
      .addCase(logOut.rejected, (state, action) => {
        state.authLoading = false
        state.authErr = action.error.message
      })
  },
})

export const { setUser, setAuthErr } = authSlice.actions
export default authSlice.reducer
