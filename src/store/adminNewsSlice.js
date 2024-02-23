import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { BASE_URL } from '../utils/constants'

export const getNewsInAdmin = createAsyncThunk(
   'adminNews/getNewsInAdmin',
   async function asyncGetNewsInAdmin(_, { rejectWithValue }) {
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

export const adminNews = createSlice({
   name: 'adminNews',
   initialState: {
      news: [],
      status: null,
      isLoading: null,
   },
})
