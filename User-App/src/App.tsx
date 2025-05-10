import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AppProvider } from './context/appcontext';
import { Home } from './pages/home';
import { UserDetails } from './pages/userdetails';
import { AddUser } from './pages/adduser';

export const App = () => {
  return (
    <Router>
      <AppProvider>
        <div className="min-h-screen bg-gray-100 dark:bg-gray-900 transition-colors duration-300">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/users/:id" element={<UserDetails />} />
            <Route path="/add-user" element={<AddUser />} />
          </Routes>
        </div>
      </AppProvider>
    </Router>
  );
};