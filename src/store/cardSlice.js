import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { BASE_URL } from '../utils/constants'

export const cardPostAsync = createAsyncThunk(
   'card/cardPostAsync',
   async function postCard() {
      const response = await fetch(`${BASE_URL}/card.json`)
      if (!response.ok) {
         throw new Error('Server error')
      }

      const data = await response.json()
      return data
   }
)

const cardSlice = createSlice({
   name: 'card',
   initialState: {
      items: [],
      status: 'idle',
      error: null,
   },
   reducers: {
      addItem: (state, action) => {
         state.items.push(action.payload)
      },
      removeItem: (state, action) => {
         state.items = state.items.filter(
            (item) => item.id !== action.payload.id
         )
      },
      clearCard: (state) => {
         state.items = []
      },
   },
   extraReducers: (builder) => {
      builder
         .addCase(cardPostAsync.pending, (state) => {
            state.status = 'loading'
         })
         .addCase(cardPostAsync.fulfilled, (state, action) => {
            state.status = 'succeeded'
         })
         .addCase(cardPostAsync.rejected, (state, action) => {
            state.status = 'failed'
            state.error = action.error.message
         })
   },
})

export const { addItem, removeItem, clearCard } = cardSlice.actions
export default cardSlice.reducer
