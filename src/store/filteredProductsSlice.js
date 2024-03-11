import { createSlice } from '@reduxjs/toolkit'

export const filteredProducts = createSlice({
   name: 'filtered',
   initialState: {
      filtered: [],
      showFilteredProducts: null,
   },
   reducers: {
      setFilteredProducts(state, action) {
         state.filtered = action.payload
      },
      setShowFiltered(state, action) {
         state.showFilteredProducts = action.payload
      },
   },
})

export const { setFilteredProducts, setShowFiltered } = filteredProducts.actions
