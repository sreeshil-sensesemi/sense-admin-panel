import { configureStore } from '@reduxjs/toolkit'
import { loginSlice } from '../features/WebUser/loginSlice'


export const store = configureStore({
  reducer: {
    userLogin: loginSlice.reducer,
  },
})