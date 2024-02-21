import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { BASE_URL } from '../utils/constants'

export const addToFavorites = createAsyncThunk(
   'name/addToFavorites',
   async function asyncAddToFavorites(item, { rejectWithValue }) {
      try {
         const response = await fetch(`${BASE_URL}/favorites.json`, {
            method: 'POST',
            headers: {
               'Content-Type': 'application/json',
            },
            body: JSON.stringify({
               ...item,
               isFavorites: !item.isFavorites,
            }),
         })

         if (!response.ok) {
            throw new Error('Server not found')
         }
         const data = await response.json()
         console.log(data)
         return data
      } catch (error) {
         return rejectWithValue(error.message)
      }
   }
)

export const getFavorites = createAsyncThunk(
   'name/getFavorites',
   async function asyncGetFavorites(_, { rejectWithValue }) {
      try {
         const response = await fetch(`${BASE_URL}/favorites.json`)

         if (!response.ok) {
            throw new Error('Server not found')
         }
         const data = await response.json()
         const transformedData = []
         Object.keys(data).forEach((key) => {
            transformedData.push({
               id: key,
               width: data[key].width,
               wetGrip: data[key].wetGrip,
               title: data[key].title,
               tireType: data[key].tireType,
               state: data[key].state,
               speedIndex: data[key].speedIndex,
               seasonality: data[key].seasonality,
               profile: data[key].profile,
               price: data[key].price,
               noiseLevel: data[key].noiseLevel,
               manufacturer: data[key].manufacturer,
               loadIndex: data[key].loadIndex,
               diameter: data[key].diameter,
               fuelEconomy: data[key].fuelEconomy,
               images: data[key].images,
               img: data[key].img,
               description: data[key].description,
               isFavorites: data[key].isFavorites,
            })
         })
         return transformedData
      } catch (error) {
         return rejectWithValue(error.message)
      }
   }
)

export const getFavoritesItem = createAsyncThunk(
   'name/getFavoritesItem',
   async function asyncGetFavoritesItem(id, { rejectWithValue }) {
      try {
         const response = await fetch(`${BASE_URL}/favorites/${id}.json`)

         if (!response.ok) {
            throw new Error('Server not found')
         }
         const data = await response.json()
         return data
      } catch (error) {
         return rejectWithValue(error.message)
      }
   }
)

export const removeFavorites = createAsyncThunk(
   'name/removeFavorites',
   async function asyncRemoveFavorites(id, { rejectWithValue, dispatch }) {
      try {
         const response = await fetch(`${BASE_URL}/favorites/${id}.json`, {
            method: 'DELETE',
         })

         if (!response.ok) {
            throw new Error('Server not found')
         }

         const data = await response.json()
         dispatch(deletedFavorites(id))
         return data
      } catch (error) {
         return rejectWithValue(error.message)
      }
   }
)

export const setFavorites = createAsyncThunk(
   'name/setFavorites',
   async function asyncSetFavorites(
      id,
      { rejectWithValue, getState, dispatch }
   ) {
      try {
         const state = getState()
         const favoritesItem = state.favorites.favorites.find(
            (el) => el.id === id
         )
         const response = await fetch(`${BASE_URL}/favorites/${id}.json`, {
            method: 'PATCH',
            headers: {
               'Content-Type': 'Application/json',
            },
            body: JSON.stringify({
               isFavorites: !favoritesItem.isFavorites,
            }),
         })

         if (!response.ok) {
            throw new Error('Server not found')
         }
         dispatch(setFavoritesLocal(id))
         const data = await response.json()
         return data
      } catch (error) {
         return rejectWithValue(error.message)
      }
   }
)

export const favoritesSlice = createSlice({
   name: 'favorites',
   initialState: {
      favorites: [],
      status: null,
      isLoading: null,
      isSelected: false,
      favoritesItem: null,
   },
   reducers: {
      deletedFavorites(state, action) {
         state.favorites = state.favorites.filter(
            (el) => el.id !== action.payload
         )
      },
      setFavoritesLocal(state, action) {
         const favoritesItem = state.favorites.find(
            (el) => el.id === action.payload
         )
         favoritesItem.isFavorites = !favoritesItem.isFavorites
      },
      setIsSelected(state, action) {
         state.isSelected = action.payload
      },
   },
   extraReducers(builder) {
      builder.addCase(addToFavorites.pending, (state) => {
         state.isLoading = true
         state.status = null
         state.isSelected = false
      })
      builder.addCase(addToFavorites.fulfilled, (state, action) => {
         state.isLoading = false
         state.status = null
         state.favorites.push(action.payload)
         state.isSelected = true
      })
      builder.addCase(addToFavorites.rejected, (state, action) => {
         state.isLoading = false
         state.status = action.payload
         state.isSelected = false
      })

      builder.addCase(getFavorites.pending, (state) => {
         state.isLoading = true
         state.status = null
      })
      builder.addCase(getFavorites.fulfilled, (state, action) => {
         state.isLoading = false
         state.status = null
         state.favorites = action.payload
      })
      builder.addCase(getFavorites.rejected, (state, action) => {
         state.isLoading = false
         state.status = action.payload
      })

      builder.addCase(getFavoritesItem.pending, (state) => {
         state.isLoading = true
         state.status = null
      })
      builder.addCase(getFavoritesItem.fulfilled, (state, action) => {
         state.isLoading = false
         state.status = null
         state.favoritesItem = action.payload
      })
      builder.addCase(getFavoritesItem.rejected, (state, action) => {
         state.isLoading = false
         state.status = action.payload
      })

      builder.addCase(removeFavorites.pending, (state) => {
         state.isLoading = true
         state.status = null
         state.isSelected = false
      })
      builder.addCase(removeFavorites.fulfilled, (state) => {
         state.isLoading = false
         state.status = null
         state.isSelected = true
      })
      builder.addCase(removeFavorites.rejected, (state, action) => {
         state.isLoading = false
         state.status = action.payload
         state.isSelected = false
      })
   },
})

export const { deletedFavorites, setFavoritesLocal, setIsSelected } =
   favoritesSlice.actions
