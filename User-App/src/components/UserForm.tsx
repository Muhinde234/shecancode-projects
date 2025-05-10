import { NewUser, UserRole } from '../types/user';
import { useUserForm } from '../hooks/useUserForm';

const initialFormData: NewUser = {
  name: '',
  username: '',
  email: '',
  age: 18,
  role: UserRole.Viewer
};

export const UserForm = ({ onSubmit }: { onSubmit: (user: NewUser) => void }) => {
  const { formData, errors, handleChange, validate } = useUserForm(initialFormData);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validate()) {
      onSubmit(formData);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label className="block text-gray-700 dark:text-gray-300 mb-1">Name:</label>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          className={`w-full p-2 border rounded ${errors.name ? 'border-red-500' : 'border-gray-300'}`}
        />
        {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
      </div>
      
      <div>
        <label className="block text-gray-700 dark:text-gray-300 mb-1">Email:</label>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          className={`w-full p-2 border rounded ${errors.email ? 'border-red-500' : 'border-gray-300'}`}
        />
        {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
      </div>
      
      <div>
        <label className="block text-gray-700 dark:text-gray-300 mb-1">Age:</label>
        <input
          type="number"
          name="age"
          value={formData.age}
          onChange={handleChange}
          min="18"
          className={`w-full p-2 border rounded ${errors.age ? 'border-red-500' : 'border-gray-300'}`}
        />
        {errors.age && <p className="text-red-500 text-sm mt-1">{errors.age}</p>}
      </div>
      
      <div>
        <label className="block text-gray-700 dark:text-gray-300 mb-1">Role:</label>
        <select 
          name="role" 
          value={formData.role} 
          onChange={handleChange}
          className="w-full p-2 border border-gray-300 rounded"
        >
          {Object.values(UserRole).map(role => (
            <option key={role} value={role}>
              {role}
            </option>
          ))}
        </select>
      </div>
      
      <button 
        type="submit" 
        className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded transition-colors"
      >
        Add User
      </button>
    </form>
  );
};