import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { BASE_URL } from '../utils/constants'

export const postPromotion = createAsyncThunk(
   'promotion/postPromotion',
   async function postDataPromotion(data, { rejectWithValue }) {
      try {
         const response = await fetch(`${BASE_URL}/promotion.json`, {
            method: 'POST',
            headers: {
               'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
         })
         if (!response.ok) {
            throw new Error('SERVER ERROR')
         }
         return response
      } catch (error) {
         return rejectWithValue(error.message)
      }
   }
)

export const getPromotion = createAsyncThunk(
   'promotion/getPromotion',
   async function getDataPromotion(_, { rejectWithValue }) {
      try {
         const response = await fetch(`${BASE_URL}/promotion.json`)
         if (!response.ok) {
            throw new Error('SERVER ERROR')
         }
         const data = await response.json()
         const transformedData = []
         Object.keys(data).forEach((key) => {
            transformedData.push({
               id: key,
               image: data[key].image,
               images: data[key].images,
               title: data[key].title,
               text: data[key].text,
            })
         })
         return transformedData
      } catch (error) {
         return rejectWithValue(error.message)
      }
   }
)

export const deletePromotionItem = createAsyncThunk(
   'promotionDelete/deletePromotionItem',
   async function deleteItemPromotion(id, { rejectWithValue, dispatch }) {
      try {
         const response = await fetch(`${BASE_URL}/promotion/${id}.json`, {
            method: 'DELETE',
         })
         if (!response.ok) {
            throw new Error('Error message')
         }
         dispatch(deletePromotion(id))
         return response
      } catch (error) {
         return rejectWithValue(error.message)
      }
   }
)

export const addNewPromotionSlice = createSlice({
   name: 'promotion',
   initialState: {
      baseData: [],
      error: null,
      status: null,
   },
   reducers: {
      deletePromotion(state, action) {
         state.baseData = state.baseData.filter(
            (el) => el.id !== action.payload
         )
      },
   },
   extraReducers(builder) {
      builder
         .addCase(postPromotion.pending, (state) => {
            state.error = null
            state.status = 'loading'
         })
         .addCase(postPromotion.fulfilled, (state) => {
            state.error = null
            state.status = 'fulfilled'
         })
         .addCase(postPromotion.rejected, (state, action) => {
            state.error = action.payload
            state.status = 'rejected'
         })
         .addCase(getPromotion.pending, (state) => {
            state.status = 'loading'
         })
         .addCase(getPromotion.fulfilled, (state, action) => {
            state.baseData = action.payload
            state.status = 'fulfilled'
         })
         .addCase(getPromotion.rejected, (state, action) => {
            state.error = action.payload
            state.status = 'rejected'
         })
   },
})

export const { deletePromotion } = addNewPromotionSlice.actions
