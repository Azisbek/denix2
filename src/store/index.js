import { configureStore } from '@reduxjs/toolkit'
import { toggleSlice } from './toggleSlice'
import { addNewProductSlice } from './addNewProductSlice'
import { newCardProduct } from './newCardProductSlice'
import { favoritesSlice } from './favoritesSlice'
import { addNewsSlice } from './addNewsSlice'
import { useParamsSlice } from './useParamsSlice'
import { navBarSlice } from './navBarSlice'
import { noticeSlice } from './noticeSlice'

export const store = configureStore({
   reducer: {
      product: addNewProductSlice.reducer,
      toggle: toggleSlice.reducer,
      newPage: newCardProduct.reducer,
      favorites: favoritesSlice.reducer,
      news: addNewsSlice.reducer,
      params: useParamsSlice.reducer,
      navBar: navBarSlice.reducer,
      notice: noticeSlice.reducer,
   },
})
