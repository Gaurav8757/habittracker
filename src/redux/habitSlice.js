import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  habits: [],
};


const habitSlice = createSlice({
  name: 'habits',
  initialState,
  reducers: {
    addHabit: (state, action) => {
      state.habits.push({ id: Date.now(), name: action.payload, status: Array(7).fill('none') });
    },
    updateHabitStatus: (state, action) => {
      const { id, day, status } = action.payload;
      const habit = state.habits.find(habit => habit.id === id);
      if (habit) {
        habit.status[day] = status;
      }
    },
  },
});

export const { addHabit, updateHabitStatus } = habitSlice.actions;
export default habitSlice.reducer;
