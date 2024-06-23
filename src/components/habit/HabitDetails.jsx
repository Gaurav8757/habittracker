import { useDispatch, useSelector } from 'react-redux';
import { updateHabitStatus } from '../../redux/habitSlice.js';
import { useParams } from 'react-router-dom';

const HabitDetail = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const habit = useSelector((state) => state.habits.habits.find(h => h.id === Number(id)));

  if (!habit) {
    return <div>Habit not found</div>;
  }

  const handleStatusChange = (day, status) => {
    dispatch(updateHabitStatus({ id: Number(id), day, status }));
  };

  return (
    <div className="p-4">
      <h2 className="text-2xl mb-4">{habit.name}</h2>
      <div className="grid grid-cols-7 gap-2">
        {habit.status.map((status, index) => (
          <div key={index} className="flex flex-col items-center">
            <span>Day {index + 1}</span>
            <select
              value={status}
              onChange={(e) => handleStatusChange(index, e.target.value)}
              className="p-2 border rounded-md"
            >
              <option value="none">None</option>
              <option value="done">Done</option>
              <option value="not-done">Not Done</option>
            </select>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HabitDetail;
