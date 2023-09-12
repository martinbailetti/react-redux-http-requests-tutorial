import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'
import {getAllUsers} from "../../api/users"

export const getUsers = createAsyncThunk('users/getUsers', async (page) => {
  const response = await getUser(page)
  return response.data
})

export const userSlice = createSlice({
  name: 'users',
  initialState: {
    data: [],
    loading: 'idle',
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getUsers.pending, (state, action) => {
      if (state.loading === 'idle') {
        state.loading = 'pending'
      }
    })

    builder.addCase(getUsers.fulfilled, (state, action) => {
      if (state.loading === 'pending') {
        state.data = action.payload
        state.loading = 'idle'
      }
    })

    builder.addCase(getUsers.rejected, (state, action) => {
      if (state.loading === 'pending') {
        state.loading = 'idle'
        state.error = 'Error occured'
      }
    })


  },
})

export default userSlice.reducer
