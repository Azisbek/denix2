import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { SIGNIN, SIGNUP } from '../utils/constants'
import { SECRET_KEY } from '../utils/helper'

export const postSignIn = createAsyncThunk(
   'signIn/postSignIn',
   async function (itemData, { rejectWithValue }) {
      try {
         const response = await fetch(`${SIGNIN}${SECRET_KEY}`, {
            method: 'POST',
            headers: {
               'Content-Type': 'application/json',
            },
            body: JSON.stringify(itemData),
         })

         if (!response.ok) {
            return rejectWithValue('Authentication failed')
         }

         const data = await response.json()
         console.log(data)

         return data
      } catch (error) {
         return rejectWithValue(error.message)
      }
   }
)

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

export const signInSlice = createSlice({
   name: 'signIn',
   initialState: {
      status: false,
      data: null,
      error: null,
   },
   reducers: {},
   extraReducers: (builder) => {
      builder
         .addCase(postSignIn.pending, (state) => {
            state.status = 'loading'
         })
         .addCase(postSignIn.fulfilled, (state, action) => {
            state.status = 'fulfilled'
            state.data = action.payload
            state.error = null
         })
         .addCase(postSignIn.rejected, (state, action) => {
            state.status = 'rejected'
            state.error = action.error.message
         })
         .addCase(postSignUp.pending, (state) => {
            state.status = 'loading'
         })
         .addCase(postSignUp.fulfilled, (state, action) => {
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
