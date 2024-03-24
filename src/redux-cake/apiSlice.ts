import { fakeBaseQuery, createApi } from '@reduxjs/toolkit/query/react'

const apiSlice = createApi({
  reducerPath: 'apiSlice',
  baseQuery: fakeBaseQuery(),
  tagTypes: ['user'],
  endpoints: () => {
    return {}
  },
})

export { apiSlice }
