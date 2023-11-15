import { configureStore } from '@reduxjs/toolkit'
import categoryReducer from '@/features/categorySlice';

export const rootStore = configureStore({
  reducer: categoryReducer,
})

export type RootState = ReturnType<typeof rootStore.getState>
export type AppDispatch = typeof rootStore.dispatch