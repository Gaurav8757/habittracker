
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header.jsx';
import HabitList from './components/habit/HabitList.jsx';
import HabitDetail from './components/habit/HabitDetails.jsx';
import AddHabit from './components/habit/Habit.jsx';

const App = () => {
  return (
    <Router>
      <Header />
      <div className="fluid-container mt-0 p-4 bg-blue-300">
        <Routes>
          <Route exact path="/" component={HabitList} />
          <Route path="/add-habit" component={AddHabit} />
          <Route path="/habit/:id" component={HabitDetail} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
