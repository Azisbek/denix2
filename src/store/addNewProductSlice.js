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
   'productsGet/getProdicts',
   async function asycGetProducts(_, { rejectWithValue }) {
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
            })
         })

         return transformDataProducts
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

   extraReducers(builder) {
      builder
         .addCase(getProducts.pending, (state) => {
            state.error = null
            state.loading = true
         })
         .addCase(getProducts.fulfilled, (state, action) => {
            state.loading = false
            state.products = action.payload
         })
         .addCase(getProducts.rejected, (state, action) => {
            state.loading = false
            state.error = action.payload
         })
   },
})

export const { selectedProduct } = addNewProductSlice.actions
