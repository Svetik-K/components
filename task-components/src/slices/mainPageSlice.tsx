import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { RootState } from 'app/store';
import { ApiCardContent } from 'utils/types';

interface MainPageState {
  value: ApiCardContent[] | [];
}

const initialState: MainPageState = {
  value: [],
};

export const mainPageSlice = createSlice({
  name: 'mainPage',
  initialState,
  reducers: {
    addCards: (state, action: PayloadAction<ApiCardContent[]>) => {
      state.value = action.payload;
    },
  },
});

export const selectCards = (state: RootState) => state.mainPage.value;

export const { addCards } = mainPageSlice.actions;

export default mainPageSlice.reducer;
