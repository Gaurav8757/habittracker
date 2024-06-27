import { useState } from "react";
import { Link } from "react-router-dom";
import AddHabits from "./habit/AddHabits.jsx";
const Header = () => {
  const [showUpdatePopup, setShowUpdatePopup] = useState(false);

  // Handle update click to open the popup
  const handleUpdateClick = () => {
    setShowUpdatePopup(true);
  };

  // Close popup
  const handleClosePopup = () => {
    setShowUpdatePopup(false);
  };

  return (
    <>
      <header className="p-4 bg-gradient-to-r from-cyan-950 to-blue-900 text-white flex justify-between items-center">
        <Link to="/" className="text-2xl bg-transparent font-serif">Habit Tracker App</Link>
        <button onClick={handleUpdateClick} className="relative inline-flex items-center justify-center p-0.5  overflow-hidden text-sm font-medium text-gray-100 rounded group bg-gradient-to-br from-cyan-500 to-blue-500 group-hover:from-cyan-500 group-hover:to-blue-500 hover:text-white  focus:ring-0 focus:outline-none focus:ring-cyan-200">
          <span className= "font-serif uppercase relative px-5 py-2.5 transition-all ease-in duration-75 bg-gray-900  rounded-md group-hover:bg-opacity-0">
            New Habit
          </span>
        </button>
      </header>
      {showUpdatePopup && (
          <AddHabits onClose =  {handleClosePopup}/>
      )}
      
    </>
  );
};

export default Header;
