import { useNavigate } from 'react-router-dom';
import { UserForm } from '../components/UserForm';
import { useAppContext } from '../context/AppContext';

export const AddUser = () => {
  const { dispatch } = useAppContext();
  const navigate = useNavigate();

  const handleSubmit = (userData: NewUser) => {
    const newUser = {
      ...userData,
      id: Math.floor(Math.random() * 10000) // Simple ID generation
    };
    dispatch({ type: 'ADD_USER', payload: newUser });
    navigate('/');
  };

  return (
    <div className="container mx-auto p-4">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold text-gray-800 dark:text-white">Add New User</h1>
        <Link 
          to="/" 
          className="bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 text-gray-800 dark:text-white py-1 px-3 rounded transition-colors"
        >
          Back
        </Link>
      </div>
      
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 max-w-2xl mx-auto">
        <UserForm onSubmit={handleSubmit} />
      </div>
    </div>
  );
};