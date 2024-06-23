
import { useSelector } from 'react-redux';
import Habit from './Habit.jsx';

const HabitList = () => {
  const habits = useSelector((state) => state.habits.habits);

  return (
    <div className="p-4">
      <h2 className="text-xl mb-4">Current Habits</h2>
      {habits.map(habit => (
        <Habit key={habit.id} habit={habit} />
      ))}
    </div>
  );
};

export default HabitList;
