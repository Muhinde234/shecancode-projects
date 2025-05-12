import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AppProvider } from './context/appcontext';
import { Home } from './pages/home';
import { UserDetails } from './pages/userdetails';
import { AddUser } from './pages/adduser';
import { useEffect, useState } from 'react';

const ThemeWrapper = ({ children }: { children: React.ReactNode }) => {
  const [theme, setTheme] = useState<'light' | 'dark'>('light');

  useEffect(() => {
    // Check for saved theme preference or use system preference
    const savedTheme = localStorage.getItem('theme') as 'light' | 'dark' | null;
    const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    
    const initialTheme = savedTheme || (systemPrefersDark ? 'dark' : 'light');
    setTheme(initialTheme);
    document.documentElement.classList.toggle('dark', initialTheme === 'dark');
  }, []);

  useEffect(() => {
    document.documentElement.classList.toggle('dark', theme === 'dark');
    localStorage.setItem('theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prev => (prev === 'light' ? 'dark' : 'light'));
  };

  return (
    <AppProvider theme={theme} toggleTheme={toggleTheme}>
      <div className={`min-h-screen transition-colors duration-300 ${theme === 'dark' ? 'dark:bg-gray-900' : 'bg-purple-50'}`}>
        {children}
      </div>
    </AppProvider>
  );
};

export const App = () => {
  return (
    <Router>
      <ThemeWrapper>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/users/:id" element={<UserDetails />} />
          <Route path="/add-user" element={<AddUser />} />
        </Routes>
      </ThemeWrapper>
    </Router>
  );
};