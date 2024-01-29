import { configureStore } from '@reduxjs/toolkit'
import { toggleSlice } from './toggleSlice'
import { optionSlice } from './optionSlice'

export const store = configureStore({
   reducer: {
      toggle: toggleSlice.reducer,
      option: optionSlice.reducer,
   },
})
