import { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { useAppContext } from '../context/appcontext';
import type { User } from '../types/user';

export const UserDetails = () => {
  const { id } = useParams<{ id: string }>();
  const { state } = useAppContext();
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchUser = async () => {
      try {
       
        const addedUser = state.addedUsers.find(u => u.id === Number(id));
        if (addedUser) {
          setUser(addedUser);
          return;
        }

        const response = await fetch(
          `https://jsonplaceholder.typicode.com/users/${id}`
        );
        if (!response.ok) throw new Error('User not found');
        const data: User = await response.json();
        setUser(data);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Unknown error');
      } finally {
        setLoading(false);
      }
    };

    fetchUser();
  }, [id, state.addedUsers]);

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

  if (!user) return (
    <div className="p-4 bg-yellow-100 text-yellow-700 rounded">
      No user found
    </div>
  );

  return (
    <div className="container mx-auto p-4">
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 max-w-2xl mx-auto">
        <div className="flex justify-between items-start mb-6">
          <h1 className="text-2xl font-bold text-gray-800 dark:text-white">{user.name}</h1>
          <Link 
            to="/" 
            className="bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 text-gray-800 dark:text-white py-1 px-3 rounded transition-colors"
          >
            Back
          </Link>
        </div>
        
        <div className="space-y-4">
          <div>
            <h2 className="text-lg font-semibold text-gray-700 dark:text-gray-300">Basic Information</h2>
            <p className="text-gray-600 dark:text-gray-400">Username: {user.username}</p>
            <p className="text-gray-600 dark:text-gray-400">Email: {user.email}</p>
            {user.phone && <p className="text-gray-600 dark:text-gray-400">Phone: {user.phone}</p>}
            {user.website && <p className="text-gray-600 dark:text-gray-400">Website: {user.website}</p>}
          </div>
          
          {user.address && (
            <div>
              <h2 className="text-lg font-semibold text-gray-700 dark:text-gray-300">Address</h2>
              <p className="text-gray-600 dark:text-gray-400">
                {user.address.street}, {user.address.suite}
              </p>
              <p className="text-gray-600 dark:text-gray-400">
                {user.address.city}, {user.address.zipcode}
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};