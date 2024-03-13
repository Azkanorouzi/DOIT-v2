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
          const { data: session } = await supabase.auth.getSession()
          if (!session.session) return null
          const { data, error } = await supabase.auth.getUser()
          if (error) throw new Error(error.message)
          return { data }
        },
      }),
    }
  },
})

// returns the mutation result
export const selectSignUpResult =
  extendedApiSlice.endpoints.signUpWithEmail.select('auth')

export const { useSignUpWithEmailMutation, useGetCurUserQuery } =
  extendedApiSlice
export default authApiSlice.reducer
