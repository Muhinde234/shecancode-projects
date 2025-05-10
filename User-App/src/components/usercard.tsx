
import { Link } from 'react-router-dom';
import {User}  from '../types/user';

export const UserCard = ({ user }: { user: User }) => {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-4 mb-4 transition-colors duration-300">
      <h3 className="text-lg font-semibold text-gray-800 dark:text-white">{user.name}</h3>
      <p className="text-gray-600 dark:text-gray-300">Email: {user.email}</p>
      <Link 
        to={`/users/${user.id}`} 
        className="mt-2 inline-block bg-blue-500 hover:bg-blue-600 text-white py-1 px-3 rounded transition-colors"
      >
        View Profile
      </Link>
    </div>
  );
};