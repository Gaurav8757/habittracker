import { useSelector, useDispatch } from 'react-redux';
import { deleteHabit, updateHabitStatus } from '../../redux/habitSlice.js';
import { ReactTyped } from "react-typed";

// Function to get the last seven days
const getLastSevenDays = () => {
  const days = [];
  for (let i = 6; i >= 0; i--) {
    const date = new Date();
    date.setDate(date.getDate() - i);
    const day = date.getDate().toString().padStart(2, '0');
    const month = (date.getMonth() + 1).toString().padStart(2, '0');
    const year = date.getFullYear();
    days.push({
      date: `${day}/${month}/${year}`,
      day: date.toLocaleString('default', { weekday: 'short' })
    });
  }
  return days;
};

const HabitList = () => {
  const habits = useSelector((state) => state.habits);
  const dispatch = useDispatch();
  const days = getLastSevenDays();

  // Handle habit delete
  const handleDelete = (habitId) => {
    dispatch(deleteHabit(habitId));
  };

  // Handle status change for a habit on a specific day
  const handleStatusChange = (habitId, dayIndex) => {
    const habit = habits.find(h => h.id === habitId);
    if (habit) {
      const updatedStatuses = [...habit.statuses];
      const currentStatus = updatedStatuses[dayIndex];
      const nextStatus = currentStatus === 'Done' ? 'Not done' : currentStatus === 'Not done' ? 'None' : 'Done';
      updatedStatuses[dayIndex] = nextStatus;
      dispatch(updateHabitStatus({ id: habit.id, statuses: updatedStatuses }));
    }
  };

  // Render message if no habits are present
  if (habits.length === 0) {
    return (
      <div className='container mx-auto mt-2 text-white'>
        <div className='flex justify-center h-96'>
          <ReactTyped strings={["Revolutionize your daily routine with the Habit Tracker App.."]} className='content-center text-center text-2xl font-semibold text-white' typeSpeed={50} backSpeed={20} loop />
        </div>
      </div>
    );
  }

  return (
    <div className="container mx-auto mt-2 text-white">
      <h1 className='text-center text-2xl font-semibold capitalize'>All your Habits</h1>
      <ul className="mt-4">
        {habits.map((habit) => (
          <li key={habit.id} className="mb-4 p-1 mx-2 flex flex-col border rounded xl:mx-auto lg:mx-auto md:mx-auto sm:mx-auto xl:w-2/3 lg:w-2/3 pb-4 justify-center">
            {/* Delete button */}
            <div className='flex justify-end mb-4 py-0'>
              <button
                onClick={() => handleDelete(habit.id)}
                className="bg-red-100 hover:bg-red-500 text-white mt-0 xl:mt-0 lg:mt-0 md:mt-0 sm:mt-0 rounded-full">
                <img src="/close.png" alt="delete" height={5} width={25} className="bg-red-100 hover:bg-red-500 bg-transparent rounded-full" />
              </button>
            </div>
            {/* Habit name and description */}
            <div className="flex justify-between flex-wrap mb-10">
              <h2 className={`text-lg mx-2 uppercase ${habit.statuses[6] === 'Done' ? 'line-through text-gray-500' : habit.statuses[6] === 'Not done' ? 'line-through text-red-500' : ''}`}>Habit Name: <span className={`capitalize font-semibold text-amber-200 ${habit.statuses[6] === 'Done' ? 'line-through text-gray-500' : habit.statuses[6] === 'Not done' ? 'line-through text-red-500' : ''}`}>{habit.name}</span></h2>
              <label htmlFor="desc"></label>
              <h2 id='desc' className={`text-lg  mx-2 uppercase ${habit.statuses[6] === 'Done' ? 'line-through text-gray-500' : habit.statuses[6] === 'Not done' ? 'line-through text-red-500' : ''}`}>Description: <span className={`capitalize font-semibold text-amber-100 ${habit.statuses[6] === 'Done' ? 'line-through text-gray-500' : habit.statuses[6] === 'Not done' ? 'line-through text-red-500' : ''}`}>{habit.description}</span></h2>
            </div>

            {/* Status buttons */}
            <div className="flex justify-evenly my-auto flex-wrap">
              {days.map((day, index) => (
                <div key={index} className="flex flex-col items-center">
                  <span className="text-sm">{day.day}</span>
                  <span className="text-xs">{day.date}</span>
                  {/* Status buttons change their appearance based on the current status (Done, Not done, or None) */}
                  <div
                    onClick={() => handleStatusChange(habit.id, index)}
                    className={`cursor-pointer text-sm px-1 py-0.5 mt-2 border font-semibold rounded ${habit.statuses[index] === 'Done' ? 'bg-green-500 text-black ' : habit.statuses[index] === 'Not done' ? 'bg-red-500' : 'bg-gray-500'}`} >
                    {habit.statuses[index]}
                  </div>
                </div>
              ))}
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default HabitList;
