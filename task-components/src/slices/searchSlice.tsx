import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import type { RootState } from '../app/store';

interface SearchState {
  value: string;
}

const initialState: SearchState = {
  value: '',
};

export const searchSlice = createSlice({
  name: 'search',
  initialState,
  reducers: {
    addSearch: (state, action: PayloadAction<string>) => {
      state.value = action.payload;
    },
    deleteSearch: (state) => {
      state.value = '';
    },
  },
});

export const selectSearch = (state: RootState) => state.search.value;

export const { addSearch, deleteSearch } = searchSlice.actions;

export default searchSlice.reducer;
