import { createSlice } from '@reduxjs/toolkit'

export const toggleSlice = createSlice({
   name: 'toggle',
   initialState: {
      productsToggleMobile: false,
      burger: false,
      service: false,
   },
   reducers: {
      burgerClickHandler(state) {
         state.burger = !state.burger
         state.productsToggle = false
      },
      toggleClickHandler(state) {
         state.productsToggleMobile = !state.productsToggleMobile
         state.service = false
      },
      toggleServiceHandler(state) {
         state.service = !state.service
         state.productsToggleMobile = false
      },
   },
})
export const { burgerClickHandler, toggleClickHandler, toggleServiceHandler } =
   toggleSlice.actions
