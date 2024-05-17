import { createSlice } from '@reduxjs/toolkit'

export const noticeSlice = createSlice({
   name: 'notice',
   initialState: {
      notice: null,
   },
   reducers: {
      setNotice(state, action) {
         state.notice = action.payload
      },
   },
})

export const { setNotice } = noticeSlice.actions
