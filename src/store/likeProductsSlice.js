import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { BASE_URL } from '../utils/constants'

export const fetchFavorites = createAsyncThunk(
   'favorites/fetchFavorites',
   async function favorit(_, { rejectWithValue }) {
      try {
         const response = await fetch(`${BASE_URL}/like.json`)
         if (!response.ok) {
            throw new Error('Server error')
         }
         const data = await response.json()
         return data
      } catch (error) {
         return rejectWithValue(error.message)
      }
   }
)

export const toggleFavorite = createAsyncThunk(
   'favorites/toggleFavorite',
   async ({ itemId, isFavorite }) => {
      try {
         const response = await fetch(`${BASE_URL}/${itemId}.json`, {
            method: isFavorite ? 'POST' : 'DELETE',
            headers: {
               'Content-Type': 'application/json',
            },
            body: JSON.stringify({
               userId: itemId,
            }),
         })

         console.log('Response:', response)

         if (!response.ok) {
            console.error('Server error:', response.status, response.statusText)
            const errorData = await response.json()
            console.error('Error Data:', errorData)
            throw new Error('Server error')
         }

         const data = await response.json()
         console.log('Data:', data)

         return data
      } catch (error) {
         console.error('Error:', error.message)
         throw error
      }
   }
)

export const likeProductsSlice = createSlice({
   name: 'favorites',
   initialState: {
      items: [],
      status: 'idle',
      error: null,
   },
   reducers: {},
   extraReducers: (builder) => {
      builder
         .addCase(fetchFavorites.pending, (state) => {
            state.status = 'loading'
         })
         .addCase(fetchFavorites.fulfilled, (state, action) => {
            state.status = 'succeeded'
            state.items = action.payload
         })
         .addCase(fetchFavorites.rejected, (state, action) => {
            state.status = 'failed'
            state.error = action.payload
               ? action.payload
               : 'Fetch favorites failed'
         })
         .addCase(toggleFavorite.fulfilled, (state, action) => {
            state.status = 'succeeded'
            state.items = action.payload
         })
   },
})
