import { useContext } from 'react';
import { FavoriteUserContext } from './FavoriteUserContext';

const UserDisplay = () => {
  const { favoriteUser, setFavoriteUser } = useContext(FavoriteUserContext);

  const handleClear = () => {
    setFavoriteUser(null);
  };

  if (!favoriteUser) {
    return (
      <div className="bg-white rounded-lg shadow p-6 text-center">
        <p className="text-gray-600">No favorite user selected yet.</p>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-lg shadow p-6">
      <h2 className="text-xl font-semibold mb-2 text-gray-800">Your Favorite User</h2>
      <p className="mb-4">
        <span className="text-gray-600">Your favorite user is </span>
        <span className="font-medium text-blue-600">{favoriteUser.name}</span>
        <span className="text-gray-600"> (</span>
        <span className="text-blue-500">{favoriteUser.email}</span>
        <span className="text-gray-600">)</span>
      </p>
      <button 
        onClick={handleClear}
        className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600 transition-colors"
      >
        Clear Favorite
      </button>
    </div>
  );
};

export default UserDisplay;