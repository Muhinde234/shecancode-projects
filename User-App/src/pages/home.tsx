import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { UserCard } from '../components/usercard';
import { useAppContext } from '../context/appcontext';
import type { User } from '../types/user';
import { MoonIcon, Sun } from 'lucide-react';

export const Home = () => {
  const { state, dispatch } = useAppContext();
  const [searchTerm, setSearchTerm] = useState('');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users');
        if (!response.ok) throw new Error('Failed to fetch users');
        const data: User[] = await response.json();
        dispatch({ type: 'SET_USERS', payload: data });
      } catch (err) {
        setError('Cannot fetch users');
      } finally {
        setLoading(false);
      }
    };

    fetchUsers();
  }, [dispatch]);

  const filteredUsers = [...state.users, ...state.addedUsers].filter(user =>
    user.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  if (loading) return (
    <div className="flex justify-center items-center h-screen">
      <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-purple-500"></div>
    </div>
  );

  if (error) return (
    <div className="p-4 bg-red-100 text-red-700 rounded max-w-md mx-auto mt-10">
      Error: {error}
    </div>
  );

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-10 text-center">
        <h1 className="text-4xl font-bold bg-gradient-to-r from-purple-600 to-purple-800 bg-clip-text text-transparent mb-2">
          User Directory
        </h1>
        <p className="text-purple-700 dark:text-purple-300">
          Find and manage all users in one place
        </p>
      </div>

      <div className="flex flex-col md:flex-row justify-between items-center mb-8 gap-4">
        <div className="relative w-full md:w-1/2">
          <input
            type="text"
            placeholder="Search by name..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full p-3 pl-10 rounded-lg border border-purple-200 dark:border-purple-800 bg-white dark:bg-purple-900/30 focus:outline-none focus:ring-2 focus:ring-purple-500 text-purple-900 dark:text-white"
          />
          <svg
            className="absolute left-3 top-3.5 h-5 w-5 text-purple-400"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg>
        </div>

        <div className="flex space-x-4">
          <Link
            to="/add-user"
            className="bg-gradient-to-r from-purple-600 to-purple-800 hover:from-purple-700 hover:to-purple-900 text-white py-3 px-6 rounded-lg transition-all duration-300 shadow-md hover:shadow-lg flex items-center"
          >
            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
            </svg>
            Add New User
          </Link>
          <button
            onClick={() => dispatch({ type: 'TOGGLE_THEME' })}
            className="bg-purple-100 dark:bg-purple-900/50 text-purple-700 dark:text-purple-300 p-3 rounded-lg transition-colors duration-300 shadow hover:shadow-md"
          >
            {state.theme === 'light' ? <MoonIcon /> : <Sun />}
          </button>
        </div>
      </div>

      {filteredUsers.length === 0 ? (
        <div className="text-center py-10">
          <p className="text-purple-800 dark:text-purple-200 text-lg">No users found matching your search.</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredUsers.map(user => (
            <UserCard key={user.id} user={user} />
          ))}
        </div>
      )}
    </div>
  );
};