import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header.jsx';
import HabitList from './components/habit/HabitList.jsx';

const App = () => {
  return (
    <Router>
      {/* Header component to display the navigation bar */}
      <Header />
      <Routes>
        {/* Route to render the HabitList component at the root path */}
        <Route path="/" element={<HabitList />} />
      </Routes>
    </Router>
  );
};

export default App;

