import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { BASE_URL } from '../utils/constants'

export const getNewsItem = createAsyncThunk(
   'newsItem/getNewsItem',
   async function asyncNewsItem(id, { rejectWithValue }) {
      try {
         const response = await fetch(`${BASE_URL}/news/${id}.json`)
         if (!response.ok) {
            throw new Error('Server Error')
         }
         const data = await response.json()
         return data
      } catch (error) {
         return rejectWithValue(error.message)
      }
   }
)

export const newsPage = createSlice({
   name: 'newsPage',

   initialState: {
      newsItem: null,
      isLoading: null,
      status: null,
   },
   extraReducers(builder) {
      builder.addCase(getNewsItem.pending, (state) => {
         state.isLoading = true
      })
      builder.addCase(getNewsItem.fulfilled, (state, action) => {
         state.isLoading = false
         state.status = null
         state.newsItem = action.payload
      })
      builder.addCase(getNewsItem.rejected, (state, action) => {
         state.isLoading = false
         state.status = action.payload
      })
   },
})
