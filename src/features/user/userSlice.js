import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import {getUserById} from "../../api/user"

export const getUser = createAsyncThunk('user/getUser', async (id) => {
  const response = await getUserById(id)
  return response.data
})

export const userSlice = createSlice({
  name: 'user',
  initialState: {
    data: [],
    loading: 'idle',
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getUser.pending, (state, action) => {
      if (state.loading === 'idle') {
        state.loading = 'pending'
      }
    })

    builder.addCase(getUser.fulfilled, (state, action) => {
      if (state.loading === 'pending') {
        state.data = action.payload.data
        state.loading = 'idle'
      }
    })

    builder.addCase(getUser.rejected, (state, action) => {
      if (state.loading === 'pending') {
        state.loading = 'idle'
        state.error = 'Error occured'
      }
    })


  },
})

export default userSlice.reducer
