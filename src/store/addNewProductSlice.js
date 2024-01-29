import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { BASE_URL } from '../utils/constants'

export const postProduct = createAsyncThunk(
   'products/postProduct',
   async function (value, { rejectWithValue }) {
      try {
         const response = await fetch(`${BASE_URL}/products.json`, {
            method: 'POST',
            headers: {
               'Content-Type': 'application/json',
            },
            body: JSON.stringify(value),
         })
         if (!response.ok) {
            throw new Error('server not found')
         }
         const data = await response.json()
         console.log(data)
         return data // Add this line to return a value
      } catch (error) {
         return rejectWithValue(error.message)
      }
   }
)

export const addNewProductSlice = createSlice({
   name: 'products',
   initialState: {},
   reducers: {},
   extraReducers() {},
})
