import { createSlice } from '@reduxjs/toolkit'

export const useParamsSlice = createSlice({
   name: 'params',
   initialState: {
      id: null,
   },
   reducers: {
      setUseParams(state, action) {
         state.id = action.payload
      },
   },
})

export const { setUseParams } = useParamsSlice.actions
