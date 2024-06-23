import { configureStore } from '@reduxjs/toolkit';
import habitReducer from './habitSlice.js';

export const store = configureStore({
  reducer: {
    habits: habitReducer,
  },
});
