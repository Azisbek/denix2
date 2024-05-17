import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { BASE_URL } from '../utils/constants'

export const getPagePromotion = createAsyncThunk(
   'promotionPage/getPagePromotion',
   async function asyncNewPromotionPage(id, { rejectWithValue }) {
      try {
         const response = await fetch(`${BASE_URL}/promotion/${id}.json`)
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

export const promotionItemPageSlice = createSlice({
   name: 'promotionPage',
   initialState: {
      status: null,
      error: null,
      dataPage: null,
   },
   extraReducers(builder) {
      builder
         .addCase(getPagePromotion.pending, (state) => {
            state.error = null
            state.status = 'loading'
         })
         .addCase(getPagePromotion.fulfilled, (state, action) => {
            state.dataPage = action.payload
            state.error = null
            state.status = 'fulfilled'
         })
         .addCase(getPagePromotion.rejected, (state, action) => {
            state.error = action.payload
            state.status = 'rejected'
         })
   },
})
