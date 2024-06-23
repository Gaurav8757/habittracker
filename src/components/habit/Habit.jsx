/* eslint-disable react/prop-types */

import { Link } from 'react-router-dom';

const Habit = ({ habit }) => {
  return (
    <div className="p-4 border rounded-md shadow-sm mb-2 ">
      <Link to={`/habit/${habit.id}`} className="text-lg font-bold">{habit.name}</Link>
    </div>
  );
};

export default Habit;
