import authSlice from '@/redux-cake/auth-slices/authSlice'
import productSlice from '@/redux-cake/doit-slices/productSlice'
import { configureStore } from '@reduxjs/toolkit'

const store = configureStore({
  reducer: {
    auth: authSlice,
    product: productSlice,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export default store
