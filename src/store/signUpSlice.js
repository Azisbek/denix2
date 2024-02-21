import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { SIGNUP } from '../utils/constants'
import { SECRET_KEY } from '../utils/helper'

export const postSignUp = createAsyncThunk(
   'signUpPost/postSignUp',
   async function (itemUserData) {
      const response = await fetch(`${SIGNUP}${SECRET_KEY}`, {
         method: 'POST',
         headers: {
            'Content-Type': 'application/json',
         },
         body: JSON.stringify({ ...itemUserData, returnSecureToken: false }),
      })

      if (!response.ok) {
         throw new Error('SERVER ERROR')
      }

      const data = await response.json()
      console.log(data)
      return data
   }
)

export const signUpSlice = createSlice({
   name: 'signUp',
   initialState: {
      status: null,
      error: null,
      someData: null,
   },
   reducers: {},
   extraReducers: (builder) => {
      builder
         .addCase(postSignUp.pending, (state) => {
            state.status = 'loading'
         })
         .addCase(postSignUp.fulfilled, (state, action) => {
            state.someData = action.payload
            state.status = 'fulfilled'
            state.data = action.payload
            state.error = null
         })
         .addCase(postSignUp.rejected, (state, action) => {
            state.status = 'rejected'
            state.error = action.error.message
         })
   },
})
