// commentsSlice.js

import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { BASE_URL } from '../utils/constants'

export const postComment = createAsyncThunk(
   'comment/postComment',
   async function ({ dataComments, id }, { rejectWithValue }) {
      try {
         const response = await fetch(
            `${BASE_URL}/products/${id}/comment.json`,
            {
               method: 'POST',
               headers: {
                  'Content-Type': 'application/json',
               },
               body: JSON.stringify(dataComments),
            }
         )

         if (!response.ok) {
            throw new Error('Error server')
         }

         const data = await response.json()
         console.log(data)
         return data
      } catch (error) {
         return rejectWithValue(error)
      }
   }
)

export const commentsSlice = createSlice({
   name: 'comments',
   initialState: {
      status: 'idle',
      error: null,
      comments: JSON.parse(localStorage.getItem('comments')) || {}, // Retrieve comments from localStorage
   },
   reducers: {
      // You can add other synchronous actions here if needed
   },
   extraReducers: (builder) => {
      builder
         .addCase(postComment.pending, (state) => {
            state.status = 'loading'
         })
         .addCase(postComment.fulfilled, (state, action) => {
            state.status = 'succeeded'
            state.error = null

            // Update comments and save to localStorage
            state.comments = {
               ...state.comments,
               [action.payload.id]: action.payload,
            }
            localStorage.setItem('comments', JSON.stringify(state.comments))
         })
         .addCase(postComment.rejected, (state, action) => {
            state.status = 'failed'
            state.error = action.payload
         })
   },
})
