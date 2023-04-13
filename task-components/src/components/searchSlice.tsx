import { createSlice } from '@reduxjs/toolkit';

export const searchSlice = createSlice({
  name: 'search',
  initialState: {
    value: '',
  },
  reducers: {
    addSearch: (state, action) => {
      state.value = action.payload;
    },
    deleteSearch: (state) => {
      state.value = '';
    },
  },
});

export const selectSearch = (state: { search: { value: string } }) => state.search.value;

export const { addSearch, deleteSearch } = searchSlice.actions;

export default searchSlice.reducer;
