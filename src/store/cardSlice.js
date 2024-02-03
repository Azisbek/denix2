import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { BASE_URL } from '../utils/constants'

export const cardPostAsync = createAsyncThunk(
   'card/cardPostAsync',
   async function postCard(dataDB, { rejectWithValue }) {
      try {
         const response = await fetch(`${BASE_URL}/card.json`, {
            method: 'POST',
            headers: {
               'Content-Type': 'application/json',
            },
            body: JSON.stringify(dataDB),
         })

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

export const cardGetAsync = createAsyncThunk(
   'card/cardGetAsync',
   async function getCartAsync(_, { rejectWithValue }) {
      try {
         const response = await fetch(`${BASE_URL}/card.json`)

         if (!response.ok) {
            throw new Error('Server Error')
         }

         const data = await response.json()
         const transformDataCart = Object.keys(data).map((key) => ({
            id: key,
            ...data[key],
         }))

         return transformDataCart
      } catch (error) {
         return rejectWithValue(error.message)
      }
   }
)

export const cardDeleteAsync = createAsyncThunk(
   'card/cardDeleteAsync',
   async function deleteASync(id, { rejectWithValue, dispatch }) {
      try {
         const response = await fetch(`${BASE_URL}/card/${id}.json`, {
            method: 'DELETE',
            headers: {
               'Content-Type': 'application/json',
            },
         })

         if (!response.ok) {
            throw new Error('Server Error')
         }

         const data = await response.json()
         dispatch(removeItem(id))
         return data
      } catch (error) {
         return rejectWithValue(error.message)
      }
   }
)

export const cardSlice = createSlice({
   name: 'card',
   initialState: {
      items: [],
      status: 'idle',
      error: null,
   },
   reducers: {
      getCard: (state, action) => {
         state.items = action.payload
      },
      removeItem: (state, action) => {
         const itemIdToRemove = action.payload
         state.items = state.items.filter((item) => item.id !== itemIdToRemove)
      },
   },
   extraReducers: (builder) => {
      builder
         .addCase(cardPostAsync.pending, (state) => {
            state.status = 'loading'
         })
         .addCase(cardPostAsync.fulfilled, (state) => {
            state.status = 'succeeded'
            state.error = null
         })
         .addCase(cardPostAsync.rejected, (state, action) => {
            state.status = 'failed'
            state.error = action.error.message
         })
         .addCase(cardGetAsync.pending, (state) => {
            state.status = 'loading'
            state.error = null
         })
         .addCase(cardGetAsync.fulfilled, (state, action) => {
            state.items = action.payload
            state.status = 'succeeded'
            state.error = null
         })
         .addCase(cardGetAsync.rejected, (state, action) => {
            state.error = action.payload
            state.status = 'failed'
         })
   },
})

export const { removeItem } = cardSlice.actions
