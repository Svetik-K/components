import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { RootState } from 'app/store';
import { FormCardContent } from 'utils/types';

interface FormPageState {
  value: FormCardContent[] | [];
}

const initialState: FormPageState = {
  value: [],
};

export const formPageSlice = createSlice({
  name: 'formPage',
  initialState,
  reducers: {
    addFormCards: (state, action: PayloadAction<FormCardContent>) => {
      state.value = [...state.value, action.payload];
    },
  },
});

export const selectFormCards = (state: RootState) => state.formPage.value;

export const { addFormCards } = formPageSlice.actions;

export default formPageSlice.reducer;
