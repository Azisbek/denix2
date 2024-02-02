import { configureStore } from '@reduxjs/toolkit'
import { toggleSlice } from './toggleSlice'
import { addNewProductSlice } from './addNewProductSlice'
import { newCardProduct } from './newCardProductSlice'
import { likeProductsSlice } from './likeProductsSlice'

export const store = configureStore({
   reducer: {
      product: addNewProductSlice.reducer,
      toggle: toggleSlice.reducer,
      newPage: newCardProduct.reducer,
      favorites: likeProductsSlice.reducer,
   },
})
