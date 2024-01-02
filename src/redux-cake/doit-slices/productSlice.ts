import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { getProductsData } from './productThunks'

interface Product {
  desc: string
  img: string
  name: string
  price: string
}
export interface ProductState {
  product: Product | null
  productErr: Error | null | unknown
  productLoading: boolean
}
const initialState: ProductState = {
  product: null,
  productErr: null,
  productLoading: false,
}

const productSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setProduct(state, action: PayloadAction<Product | null>) {
      state.product = action.payload
    },
    setProductErr(state, action: PayloadAction<Error | null | unknown>) {
      state.productErr = action.payload
    },
    setProductLoading(state, action: PayloadAction<Error | null | unknown>) {
      state.productErr = action.payload
    },
  },
  extraReducers: (builder) => {
    builder
      // Handling actions for logIn thunk
      .addCase(getProductsData.pending, (state) => {
        state.productLoading = true
      })
      .addCase(getProductsData.fulfilled, (state, action) => {
        state.productLoading = false
        state.product = action?.payload ?? state.product
      })
      .addCase(getProductsData.rejected, (state, action) => {
        state.productLoading = false
        state.productErr = action.error.message
      })
  },
})

export const { setProduct, setProductErr, setProductLoading } =
  productSlice.actions
export default productSlice.reducer
