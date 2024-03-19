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

          if (error) throw { error }

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
          if (error) throw new Error(error?.message)
          return { data }
        },
        providesTags: ['user'],
      }),
      // Logging out the user =======================
      logoutUser: builder.mutation({
        queryFn: async () => {
          const { error } = await supabase.auth.signOut()
          if (error) throw new Error(error?.message)
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
          if (error) throw new Error(error?.message)
          return { data }
        },
        invalidatesTags: ['user'],
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
} = extendedApiSlice
export default authApiSlice.reducer
