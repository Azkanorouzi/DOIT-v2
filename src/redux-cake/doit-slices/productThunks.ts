import { createAsyncThunk } from '@reduxjs/toolkit'
import { collection, getDocs } from 'firebase/firestore'
import { setProduct } from './productSlice'
import { db } from '@/config/Firebase'

// Reference to the "data" collection
const moviesCollectionRef = collection(db, 'data')

// Function to fetch data from the "products" document

export const getProductsData = createAsyncThunk(
  'auth/logOut',
  async (_, { dispatch }) => {
    try {
      // Use the getDocs function to retrieve the data
      const products = await getDocs(moviesCollectionRef)
      const filteredData = products.docs.map((doc) => ({
        ...doc.data(),
        doc: doc.id,
      }))
      dispatch(setProduct(filteredData))
    } catch (error) {
      console.error('Error getting products data:', error)
    }
  }
)
