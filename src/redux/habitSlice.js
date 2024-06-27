import { createSlice } from '@reduxjs/toolkit';

// Function to load the state from localStorage
const loadState = () => {
  try {
    const serializedState = localStorage.getItem('habits');
    if (serializedState === null) {
      return [];
    }
    return JSON.parse(serializedState);
  } catch (err) {
    return [];
  }
};

// Function to save the state to localStorage
const saveState = (state) => {
  try {
    const serializedState = JSON.stringify(state);
    localStorage.setItem('habits', serializedState);
  } catch {
    // Ignore write errors.
  }
};

// Create a slice for habits with initial state and reducers
const habitsSlice = createSlice({
  name: 'habits',
  initialState: loadState(), // Load initial state from localStorage
  reducers: {

    addHabit: (state, action) => {
      const newState = [...state, action.payload];
      saveState(newState);  // Save the updated state to localStorage
      return newState;
    },


    updateHabitStatus: (state, action) => {
      const { id, statuses } = action.payload;
      const habit = state.find(habit => habit.id === id);
      if (habit) {
        habit.statuses = statuses;
        saveState(state); // Save the updated state to localStorage
      }
    },


    deleteHabit: (state, action) => {
      const newState = state.filter(habit => habit.id !== action.payload);
      saveState(newState); // Save the updated state to localStorage
      return newState;
    }
  },
});

// Exported actions and reducer
export const { addHabit, updateHabitStatus, deleteHabit } = habitsSlice.actions;
export default habitsSlice.reducer;
