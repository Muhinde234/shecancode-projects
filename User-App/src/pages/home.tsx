import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { UserCard } from '../components/usercard';
import { useAppContext } from '../context/appcontext';
import type { User } from '../types/user';
import {  MoonIcon, Sun } from 'lucide-react';

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
        setError('can not fetch users');
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
      <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
    </div>
  );

  if (error) return (
    <div className="p-4 bg-red-100 text-red-700 rounded">
      Error: {error}
    </div>
  );

  return (
    <div className="container mx-auto p-4">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold text-gray-800 dark:text-white">User Directory</h1>
        <div className="flex space-x-4">
          <input
            type="text"
            placeholder="Search users..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="p-2 border border-gray-300 rounded
            placeholder:text-lg text-blue-500"
          />
          <Link 
            to="/add-user" 
            className="bg-purple-500 hover:bg-purple-600 text-white py-2 px-4 rounded transition-colors"
          >
            Add New User
          </Link>
          <button 
            onClick={() => dispatch({ type: 'TOGGLE_THEME' })}
            className="bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-white py-2 px-4 rounded transition-colors"
          >
            {state.theme === 'light' ?<Sun/> : <MoonIcon/>}
          </button>
        </div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {filteredUsers.map(user => (
          <UserCard key={user.id} user={user} />
        ))}
      </div>
    </div>
  );
};