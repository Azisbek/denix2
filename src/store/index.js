import { configureStore } from '@reduxjs/toolkit'
import { addNewPromotionSlice } from './addNewPromotionSlice'
import { toggleSlice } from './toggleSlice'
import { addNewProductSlice } from './addNewProductSlice'
import { newCardProduct } from './newCardProductSlice'
import { cardSlice } from './cardSlice'
import { signInSlice } from './signInSlice'
import { signUpSlice } from './signUpSlice'
import { favoritesSlice } from './favoritesSlice'
import { addNewsSlice } from './addNewsSlice'
import { useParamsSlice } from './useParamsSlice'
import { navBarSlice } from './navBarSlice'
import { noticeSlice } from './noticeSlice'
import { newsPage } from './newsPageSlice'
import { promotionItemPageSlice } from './promotionItemPageSlice'

export const store = configureStore({
   reducer: {
      product: addNewProductSlice.reducer,
      toggle: toggleSlice.reducer,
      newPage: newCardProduct.reducer,
      cart: cardSlice.reducer,
      signIn: signInSlice.reducer,
      signUp: signUpSlice.reducer,
      favorites: favoritesSlice.reducer,
      news: addNewsSlice.reducer,
      newsItem: newsPage.reducer,
      params: useParamsSlice.reducer,
      navBar: navBarSlice.reducer,
      notice: noticeSlice.reducer,
      promotion: addNewPromotionSlice.reducer,
      promotionPageId: promotionItemPageSlice.reducer,
   },
})
