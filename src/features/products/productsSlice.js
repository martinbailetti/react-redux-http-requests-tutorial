import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import {getAllProducts} from "../../api/products"

export const getProducts = createAsyncThunk('products/getProducts', async (page) => {
  const response = await getAllProducts()
  return response.data
})

export const productsSlice = createSlice({
  name: 'products',
  initialState: {
    data: [],
    loading: 'idle',
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getProducts.pending, (state, action) => {
      if (state.loading === 'idle') {
        state.loading = 'pending'
      }
    })

    builder.addCase(getProducts.fulfilled, (state, action) => {
      if (state.loading === 'pending') {
        state.data = action.payload.data
        state.loading = 'idle'
      }
    })

    builder.addCase(getProducts.rejected, (state, action) => {
      if (state.loading === 'pending') {
        state.loading = 'idle'
        state.error = 'Error occured'
      }
    })


  },
})

export default productsSlice.reducer
