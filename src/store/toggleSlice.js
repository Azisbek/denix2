import { createSlice } from '@reduxjs/toolkit'

export const toggleSlice = createSlice({
   name: 'toggle',
   initialState: {
      productsToggle: false,
      burgerToggle: false,
      serviceToggle: false,
      companyToggle: false,
      personalToggle: false,
      sideBar: false,
      mainHeaderToggle: false,
   },
   reducers: {
      burgerClickHandler(state) {
         state.burgerToggle = !state.burgerToggle
         state.personalToggle = false
      },
      toggleClickHandler(state) {
         state.productsToggle = !state.productsToggle
         state.serviceToggle = false
         state.companyToggle = false
         state.personalToggle = false
      },
      toggleServiceHandler(state) {
         state.serviceToggle = !state.serviceToggle
         state.productsToggle = false
         state.companyToggle = false
         state.personalToggle = false
      },
      toggleCompanyHandler(state) {
         state.companyToggle = !state.companyToggle
         state.productsToggle = false
         state.serviceToggle = false
         state.personalToggle = false
      },
      togglePersonalHandler(state) {
         state.companyToggle = false
         state.productsToggle = false
         state.serviceToggle = false
         state.personalToggle = !state.personalToggle
         state.burgerToggle = false
      },
      setSideBar(state, action) {
         state.sideBar = action.payload
      },
      toggleMainProduct(state) {
         state.burgerToggle = false
         state.companyToggle = false
         state.personalToggle = false
         state.productsToggle = false
         state.serviceToggle = false
         state.mainHeaderToggle = !state.mainHeaderToggle
      },
   },
})
export const {
   burgerClickHandler,
   toggleClickHandler,
   toggleServiceHandler,
   toggleCompanyHandler,
   togglePersonalHandler,
   setSideBar,
   toggleMainProduct,
} = toggleSlice.actions
