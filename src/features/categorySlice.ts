import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { Category } from '@/types/Category';

export interface CategoryState {
    categories: Category[]
}

const initialState: CategoryState = {
    categories: [],
}

export const fetchCategories = createAsyncThunk(
  'category/fetchCategories',
  async () => {
    
    const response = await fetch('https://express-shina.ru/vacancy/catalog')
    const json = response.json()
    return json
  }
)

export const categorySlice = createSlice({
  name: 'category',
  initialState,
  reducers: { },
  extraReducers: (builder) => {
    builder.addCase(fetchCategories.fulfilled, (state, action) => {
      state.categories.push(action.payload);
    });
  },
})

export default categorySlice.reducer