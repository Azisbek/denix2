import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { BASE_URL } from '../utils/constants'

export const postNews = createAsyncThunk(
   'news/postNews',
   async function asyncPostNews(news, { rejectWithValue }) {
      try {
         const response = await fetch(`${BASE_URL}/news.json`, {
            method: 'POST',
            headers: {
               'Content-Type': 'application/json',
            },
            body: JSON.stringify(news),
         })

         if (!response.ok) {
            throw new Error('Server not Found')
         }

         const data = await response.json()
         return data
      } catch (error) {
         return rejectWithValue(error.message)
      }
   }
)

export const getNews = createAsyncThunk(
   'news/getNews',
   async function asyncGetNews(_, { rejectWithValue }) {
      try {
         const response = await fetch(`${BASE_URL}/news.json`)

         if (!response.ok) {
            throw new Error('Server not Found')
         }

         const data = await response.json()
         const transformedData = []
         Object.keys(data).forEach((key) => {
            transformedData.push({
               id: key,
               title: data[key].title,
               description: data[key].description,
               tags: data[key].tags,
               url: data[key].url,
               image: data[key].image,
               gallery: data[key].gallery,
            })
         })
         return transformedData
      } catch (error) {
         return rejectWithValue(error.message)
      }
   }
)

export const addNewsSlice = createSlice({
   name: 'news',
   initialState: {
      news: [],
      isLoading: null,
      error: null,
   },
   extraReducers(builder) {
      builder
         .addCase(getNews.pending, (state) => {
            state.isLoading = true
            state.error = null
         })
         .addCase(getNews.fulfilled, (state, action) => {
            state.isLoading = false
            state.news = action.payload
         })
         .addCase(getNews.rejected, (state, action) => {
            state.isLoading = false
            state.error = action.payload
         })
   },
})
