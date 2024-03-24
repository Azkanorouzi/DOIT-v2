import toast from 'react-hot-toast'
import { apiSlice } from '../apiSlice'
import supabase from '@/config/supabase'

export const extendedApiSlice = apiSlice.injectEndpoints({
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
                // Default background
                background:
                  'https://bajredxtbeceozencuse.supabase.co/storage/v1/object/sign/profile/default-bg.jpg?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJwcm9maWxlL2RlZmF1bHQtYmcuanBnIiwiaWF0IjoxNzExMjk0NzQwLCJleHAiOjQ4NjQ4OTQ3NDB9.075o3ll_45PNrDUYxK80KKnCdbX7McTOo96hryKYKE8&t=2024-03-24T15%3A39%3A00.546Z',
                // Profile picture
                profile: '',
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
export default apiSlice.reducer
