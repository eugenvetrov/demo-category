import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { ICategory } from '@/types/ICategory';
import { RootState } from '@/stores/rootStore';

export interface CategoryState {
    categories: ICategory[]
}

const initialState: CategoryState = {
    categories: []
}

export const fetchCategories = createAsyncThunk(
  'category/fetchCategories',
  async () => {
    const response = await fetch('https://express-shina.ru/vacancy/catalog')
    const json = await response.json()
    return json
  }
)

export const categorySlice = createSlice({
  name: 'category',
  initialState,
  reducers: { },
  extraReducers: (builder) => {
    builder.addCase(fetchCategories.fulfilled, (state, action) => {
      state.categories = action.payload.categories;
    });
  },
})

export default categorySlice.reducer

export const selectCategories = (state: RootState) =>
  state.categories