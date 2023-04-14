import { configureStore } from '@reduxjs/toolkit';
import searchReducer from '../slices/searchSlice';
import mainPageReducer from '../slices/mainPageSlice';
import formPageReducer from '../slices/formPageSlice';
import { cardsApi } from 'slices/ApiSlice';
import { setupListeners } from '@reduxjs/toolkit/dist/query';

const store = configureStore({
  reducer: {
    search: searchReducer,
    mainPage: mainPageReducer,
    formPage: formPageReducer,
    [cardsApi.reducerPath]: cardsApi.reducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(cardsApi.middleware),
});

setupListeners(store.dispatch);

export default store;

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
