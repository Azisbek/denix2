import { createSlice } from '@reduxjs/toolkit'

export const navBarSlice = createSlice({
   name: 'navBar',
   initialState: {
      navBar: {},
   },
   reducers: {
      setNavBar(state, action) {
         state.navBar = action.payload
      },
   },
})

export const { setNavBar } = navBarSlice.actions
