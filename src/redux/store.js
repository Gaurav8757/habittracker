import { configureStore } from '@reduxjs/toolkit';
import habitsReducer from './habitSlice.js';

const store = configureStore({
  reducer: {
    habits: habitsReducer,
  },
});

export default store;
