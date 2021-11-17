import { configureStore } from '@reduxjs/toolkit'
import studentReducer from './components/features/reducers/studentReducer'
export const store = configureStore({
  reducer: {
      students: studentReducer
  },
})