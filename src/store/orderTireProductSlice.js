import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { BASE_URL } from '../utils/constants'

export const postOrderProduct = createAsyncThunk(
   'order/postOrderProduct',
   async function (dataOrder, { rejectWithValue }) {
      try {
         const response = await fetch(`${BASE_URL}/order.json`, {
            method: 'POST',
            headers: {
               'Content-Type': 'application/json',
            },
            body: JSON.stringify(dataOrder),
         })
         if (!response.ok) {
            throw new Error('server error')
         }
         const data = await response.json()
         console.log(data)
         return data
      } catch (error) {
         return rejectWithValue(error.message)
      }
   }
)

export const getOrderProduct = createAsyncThunk(
   'order/getOrderProduct',
   async function (_, { rejectWithValue }) {
      try {
         const response = await fetch(`${BASE_URL}/order.json`)
         if (!response.ok) {
            throw new Error('server get error')
         }
         const data = await response.json()
         return data
      } catch (error) {
         return rejectWithValue(error.message)
      }
   }
)

export const orderTireProductSlice = createSlice({
   name: 'postOrder',
   initialState: {
      status: null,
      data: [],
      error: null,
   },
   reducers: {},
   extraReducers(builder) {
      builder
         .addCase(postOrderProduct.pending, (state) => {
            state.status = 'loading'
            state.error = null
         })
         .addCase(postOrderProduct.fulfilled, (state) => {
            state.status = 'fulfilled'
         })
         .addCase(postOrderProduct.rejected, (state, action) => {
            state.status = 'rejected'
            state.error = action.payload
         })
         .addCase(getOrderProduct.pending, (state) => {
            state.status = 'loading'
            state.error = null
         })
         .addCase(getOrderProduct.fulfilled, (state, action) => {
            state.status = 'fulfilled'
            state.data = action.payload
         })
         .addCase(getOrderProduct.rejected, (state, action) => {
            state.status = 'rejected'
            state.error = action.payload
         })
   },
})
