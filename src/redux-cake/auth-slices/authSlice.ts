import toast from 'react-hot-toast'
import { authApiSlice } from './authApiSlice'
import supabase from '@/config/supabase'

export const extendedApiSlice = authApiSlice.injectEndpoints({
  endpoints: (builder) => {
    return {
      // Sign in with email =======================
      signUpWithEmail: builder.mutation({
        queryFn: async ({ email, password, username }) => {
          const { data, error } = await supabase.auth.signUp({
            email,
            password,
            options: {
              data: {
                username,
              },
            },
          })

          if (error) {
            // hot toast
            toast.error(`We had trouble signing you up, ${error.message}`)
            throw { error }
          }
          // Hot toast
          toast.success('Sign up was successful')
          return { data }
        },
        invalidatesTags: ['user'],
      }),
      // Getting the current user =======================
      getCurUser: builder.query({
        queryFn: async () => {
          const { data: session, error: sessionError } =
            await supabase.auth.getSession()
          if (!session.session) return { error: sessionError }
          const { data, error } = await supabase.auth.getUser()
          if (error) {
            throw new Error(error?.message)
          }

          return { data }
        },
        providesTags: ['user'],
      }),
      // Logging out the user =======================
      logoutUser: builder.mutation({
        queryFn: async () => {
          const { error } = await supabase.auth.signOut()
          if (error) {
            // hot toast
            toast.error(`We had trouble logging out, ${error.message}`)
            throw new Error(error?.message)
          }
          // hot toast
          toast.success(`You're now logged out`)
          return { data: {} }
        },
        invalidatesTags: ['user'],
      }),
      // Logging in the user =======================
      login: builder.mutation({
        queryFn: async ({ email, password }) => {
          const { error, data } = await supabase.auth.signInWithPassword({
            email,
            password,
          })
          if (error) {
            toast.error(
              `We had trouble logging into your account, ${error.message} `
            )
            throw new Error(error?.message)
          }

          toast.success('Login success')
          return { data, isSuccess: true }
        },
        invalidatesTags: ['user'],
      }),
      // Login with github =================
      loginWithGithub: builder.mutation({
        queryFn: async () => {
          const { error, data } = await supabase.auth.signInWithOAuth({
            provider: 'github',
          })

          if (error) {
            toast.error(
              `Failed to login with your github account ${error.message}`
            )
            throw new Error(error.message)
          }
          toast.success('Login success')
          return { data }
        },
      }),
    }
  },
})

// returns the mutation result
export const selectSignUpResult =
  extendedApiSlice.endpoints.signUpWithEmail.select('auth')

export const {
  useSignUpWithEmailMutation,
  useGetCurUserQuery,
  useLogoutUserMutation,
  useLoginMutation,
  useLoginWithGithubMutation,
} = extendedApiSlice
export default authApiSlice.reducer
