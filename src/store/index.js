import { configureStore } from '@reduxjs/toolkit'
import { toggleSlice } from './toggleSlice'
import { addNewProductSlice } from './addNewProductSlice'
import { newCardProduct } from './newCardProductSlice'

export const store = configureStore({
   reducer: {
      product: addNewProductSlice.reducer,
      toggle: toggleSlice.reducer,
      newPage: newCardProduct.reducer,
   },
})
