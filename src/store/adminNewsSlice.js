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
               date: data[key].date,
            })
         })
         return transformedData
      } catch (error) {
         return rejectWithValue(error.message)
      }
   }
)

export const removeNewsInAdmin = createAsyncThunk(
   'adminNews/removeNewsInAdmin',
   async function asyncRemoveNewsInAdmin(id, { rejectWithValue, dispatch }) {
      try {
         const response = await fetch(`${BASE_URL}/news/${id}.json`, {
            method: 'DELETE',
         })

         if (!response.ok) {
            throw new Error('Server not Found')
         }

         const data = await response.json()
         dispatch(deletedNews(id))
         return data
      } catch (error) {
         return rejectWithValue(error.message)
      }
   }
)

export const adminNews = createSlice({
   name: 'adminNews',
   initialState: {
      adminNews: [],
      status: null,
      isLoading: null,
   },
   reducers: {
      deletedNews(state, action) {
         state.adminNews = state.adminNews.filter(
            (news) => news.id !== action.payload
         )
      },
   },
   extraReducers(builder) {
      builder.addCase(getNewsInAdmin.pending, (state) => {
         state.isLoading = true
      })
      builder.addCase(getNewsInAdmin.fulfilled, (state, action) => {
         state.isLoading = false
         state.status = null
         state.adminNews = action.payload
      })
      builder.addCase(getNewsInAdmin.rejected, (state, action) => {
         state.isLoading = false
         state.status = action.payload
      })

      builder.addCase(removeNewsInAdmin.pending, (state) => {
         state.isLoading = true
      })
      builder.addCase(removeNewsInAdmin.fulfilled, (state) => {
         state.isLoading = false
         state.status = null
      })
      builder.addCase(removeNewsInAdmin.rejected, (state, action) => {
         state.isLoading = false
         state.status = action.payload
      })
   },
})

export const { deletedNews } = adminNews.actions
