import { configureStore } from '@reduxjs/toolkit';
import { carApi } from './carApi';
import carReducer from './carSlice';

export const store = configureStore({
  reducer: {
    [carApi.reducerPath]: carApi.reducer,
    car: carReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(carApi.middleware),
});
