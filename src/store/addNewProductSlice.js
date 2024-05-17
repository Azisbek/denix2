import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { BASE_URL } from '../utils/constants'

export const postProduct = createAsyncThunk(
   'products/postProduct',
   async function asyncPostProduct(value, { rejectWithValue }) {
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
         return data
      } catch (error) {
         return rejectWithValue(error.message)
      }
   }
)

export const getProducts = createAsyncThunk(
   'productsGet/getProducts',
   async function asyncGetProducts(_, { rejectWithValue }) {
      try {
         const response = await fetch(`${BASE_URL}/products.json`)
         if (!response.ok) {
            throw new Error('Server error')
         }
         const data = await response.json()

         const transformDataProducts = []

         Object.keys(data).forEach((key) => {
            transformDataProducts.push({
               id: key,
               comment: data[key].comment,
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
               inStock: data[key].inStock,
               discount: data[key].discount,
               runflat: data[key].runflat,
               offRoad: data[key].offRoad,
            })
         })

         return transformDataProducts
      } catch (error) {
         return rejectWithValue(error.message)
      }
   }
)

export const setFavoritesInCatalog = createAsyncThunk(
   'name/setFavoritesInCatalog',
   async function asyncSetFavorites(
      id,
      { rejectWithValue, dispatch, getState }
   ) {
      try {
         const state = getState()
         const product = state.product.products.find((el) => el.id === id)
         const response = await fetch(`${BASE_URL}/products/${id}.json`, {
            method: 'PATCH',
            headers: {
               'Content-Type': 'application/json',
            },
            body: JSON.stringify({
               isFavorites: !product.isFavorites,
            }),
         })

         if (!response.ok) {
            throw new Error('Неожиданная ошибка! Повторите еще раз!')
         }
         dispatch(setFavoritesLocal(id))
         const data = await response.json()
         return data
      } catch (error) {
         return rejectWithValue(error.message)
      }
   }
)

export const DeleteProduct = createAsyncThunk(
   'deleteProduct/DeleteProduct',
   async function deleteItemProduct(id, { rejectWithValue, dispatch }) {
      try {
         const response = await fetch(`${BASE_URL}/products/${id}.json`, {
            method: 'DELETE',
         })
         if (!response.ok) {
            throw new Error('Server error')
         }
         dispatch(deleteItem(id))
         return response
      } catch (error) {
         return rejectWithValue(error.message)
      }
   }
)

export const addNewProductSlice = createSlice({
   name: 'products',
   initialState: {
      products: [],
      selectedProduct: null,
      loading: false,
      error: null,
   },

   reducers: {
      setFavoritesLocal(state, action) {
         const favoritesItem = state.products.find(
            (el) => el.id === action.payload
         )
         favoritesItem.isFavorites = !favoritesItem.isFavorites
      },
      deleteItem(state, action) {
         state.products = state.products.filter(
            (el) => el.id !== action.payload
         )
      },
   },

   extraReducers(builder) {
      builder
         .addCase(postProduct.pending, (state) => {
            state.error = null
            state.loading = 'loading'
         })
         .addCase(postProduct.fulfilled, (state) => {
            state.error = null
            state.loading = 'fulfilled'
         })
         .addCase(getProducts.pending, (state) => {
            state.error = null
            state.loading = 'loading'
         })
         .addCase(getProducts.fulfilled, (state, action) => {
            state.loading = false
            state.products = action.payload
         })
         .addCase(getProducts.rejected, (state, action) => {
            state.loading = false
            state.error = action.payload
         })

         .addCase(setFavoritesInCatalog.pending, (state) => {
            state.error = null
         })
         .addCase(setFavoritesInCatalog.fulfilled, (state) => {
            state.error = null
         })
         .addCase(setFavoritesInCatalog.rejected, (state, action) => {
            state.error = action.payload
         })
   },
})

export const { setFavoritesLocal, deleteItem } = addNewProductSlice.actions
