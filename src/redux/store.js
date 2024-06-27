import { configureStore } from '@reduxjs/toolkit';
import habitsReducer from './habitSlice.js';

// Configure and create the Redux store
const store = configureStore({
  reducer: {
    habits: habitsReducer,
  },
});

export default store;
