import { fakeBaseQuery, createApi } from '@reduxjs/toolkit/query/react'

const authApiSlice = createApi({
  reducerPath: 'authApiSlice',
  baseQuery: fakeBaseQuery(),
  tagTypes: ['user'],
  endpoints: () => {
    return {}
  },
})

export { authApiSlice }
