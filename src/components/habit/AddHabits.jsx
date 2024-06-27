/* eslint-disable react/prop-types */
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addHabit } from '../../redux/habitSlice.js';

const AddHabits = ({ onClose }) => {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addHabit({ id: Date.now(), name, description, statuses: Array(7).fill('None') }));
    handleClose();// Close popup after adding the habit
  };

  const handleClose = ()=>{
    onClose();
  }


  return (
    <div className="fixed top-0 right-0 left-0 bottom-0 inset-0 z-50 overflow-y-auto backdrop-blur-sm  rouded-b overflow-x-hidden bg-[white]/10 bg-opacity-50">

      <div className=" max-w-xl max-h-xl mx-auto my-72 relative rounded-t  rouded-b shadow">
        {/*  Modal header */}
        <div className="flex items-center justify-between p-1 text-white bg-gradient-to-r from-cyan-900 to-blue-600 rounded-t">
          <h3 className="text-xl font-semibold  bg-transparent capitalize p-1">Habits</h3>
          <button onClick={onClose} type="button" className="bg-transparent hover:bg-red-700 text-slate-100  rounded text-sm w-8 h-8 ms-auto inline-flex justify-center items-center  ">
            <img src="/close.png" height={5} width={25} alt="close" className="hover:bg-red-300  bg-transparent rounded-full" />
          </button>
        </div>

        {/* Modal content */}
        <div className="relative rounded-b max-h-auto rouded-b  bg-[black]/40 ">

          <div className='flex flex-col bg-[gray]/20'>
            <input value={name} onChange={(e) => setName(e.target.value)} placeholder="Habit Name" className=" placeholder-slate-800 border w-auto px-2 focus:outline-none m-4 py-1 bg-white rounded" required />
            <input value={description} onChange={(e) => setDescription(e.target.value)} placeholder="Description" className="placeholder-slate-800  p-2 focus:outline-none border  px-2 m-4 py-1 bg-white rounded" />
          </div>

          <div className='flex flex-col items-center bg-[gray]/20'>
            <button type="submit" onClick={handleSubmit} className={`m-4 p-2 uppercase focus:outline-none w-20 text-white  bg-green-600 hover:bg-green-800 focus:ring-0 focus:ring-green-300 font-medium rounded text-sm px-4 py-2 ${name === "" ? "cursor-not-allowed" : "cursor-pointer"}`} disabled={name === ""}>
              Add
            </button>
          </div>
        </div>
      </div>
    </div>

  );
};

export default AddHabits;
