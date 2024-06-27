import { createSlice } from '@reduxjs/toolkit';

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

const saveState = (state) => {
  try {
    const serializedState = JSON.stringify(state);
    localStorage.setItem('habits', serializedState);
  } catch {
    // Ignore write errors.
  }
};

const habitsSlice = createSlice({
  name: 'habits',
  initialState: loadState(),
  reducers: {
    addHabit: (state, action) => {
      const newState = [...state, action.payload];
      saveState(newState);
      return newState;
    },
    updateHabitStatus: (state, action) => {
      const { id, statuses } = action.payload;
      const habit = state.find(habit => habit.id === id);
      if (habit) {
        habit.statuses = statuses;
        saveState(state);
      }
    },
    deleteHabit: (state, action) => {
      const newState = state.filter(habit => habit.id !== action.payload);
      saveState(newState);
      return newState;
    }
  },
});

export const { addHabit, updateHabitStatus, deleteHabit } = habitsSlice.actions;
export default habitsSlice.reducer;
