import { Link } from 'react-router-dom';
import type { User } from '../types/user';

export const UserCard = ({ user }: { user: User }) => {
  return (
    <div className="bg-gradient-to-br from-purple-100 to-purple-200 dark:from-purple-900 dark:to-purple-800 rounded-xl shadow-lg p-6 mb-6 transition-all duration-300 hover:shadow-xl hover:scale-[1.02]">
      <div className="flex items-center space-x-4 mb-4">
        <div className="bg-gradient-to-r from-purple-400 to-purple-600 dark:from-purple-500 dark:to-purple-700 text-white rounded-full w-12 h-12 flex items-center justify-center text-xl font-bold">
          {user.name.charAt(0)}
        </div>
        <div>
          <h3 className="text-xl font-bold text-purple-900 dark:text-purple-100">{user.name}</h3>
          <p className="text-purple-700 dark:text-purple-300 text-sm">@{user.username}</p>
        </div>
      </div>
      <p className="text-purple-800 dark:text-purple-200 mb-4">{user.email}</p>
      <Link 
        to={`/users/${user.id}`} 
        className="inline-block w-full text-center bg-gradient-to-r from-purple-500 to-purple-600 hover:from-purple-600 hover:to-purple-700 text-white py-2 px-4 rounded-lg transition-all duration-300 shadow-md hover:shadow-lg"
      >
        View Profile
      </Link>
    </div>
  );
};