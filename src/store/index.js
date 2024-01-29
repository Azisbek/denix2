import { configureStore } from '@reduxjs/toolkit'
import { toggleSlice } from './toggleSlice'
import { addNewProductSlice } from './addNewProductSlice'

export const store = configureStore({
   reducer: {
      product: addNewProductSlice.reducer,
      toggle: toggleSlice.reducer,
   },
})
