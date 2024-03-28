import supabase from '@/config/supabase'
import { apiSlice } from '../apiSlice'
import toast from 'react-hot-toast'

export const extendedApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => {
    return {
      uploadBackground: builder.mutation({
        queryFn: async ({ id, file }) => {
          const randomNum = Math.random()
          //   Uploading profile
          const { data, error } = await supabase.storage
            .from('background')
            .upload(`background-${id}-${randomNum}`, file)

          const { error: error2 } = await supabase.auth.updateUser({
            data: {
              background: `https://bajredxtbeceozencuse.supabase.co/storage/v1/object/public/background/background-${id}-${randomNum}`,
            },
          })

          const err = error && error2

          if (err) {
            toast.error(`We had trouble uploading the picture: ${err.message}`)
            throw err
          }

          toast.success('File uploaded successfully')
          return { data }
        },
        invalidatesTags: ['user'],
      }),
      uploadProfile: builder.mutation({
        queryFn: async ({ id, file }) => {
          const randomNum = Math.random()
          //   Uploading profile
          const { data, error } = await supabase.storage
            .from('profile')
            .upload(`profile-${id}-${randomNum}`, file)

          const { error: error2 } = await supabase.auth.updateUser({
            data: {
              profile: `https://bajredxtbeceozencuse.supabase.co/storage/v1/object/public/profile/profile-${id}-${randomNum}`,
            },
          })

          const err = error && error2

          if (err) {
            toast.error(`We had trouble uploading the picture: ${err.message}`)
            throw err
          }

          toast.success('File uploaded successfully')
          return { data }
        },
        invalidatesTags: ['user'],
      }),
    }
  },
})

export const { useUploadProfileMutation, useUploadBackgroundMutation } =
  extendedApiSlice
export default apiSlice.reducer
