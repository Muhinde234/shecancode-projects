import { useState } from 'react';
import { NewUser } from '../types/user';


export const useUserForm = (initialState: NewUser) => {
  const [formData, setFormData] = useState<NewUser>(initialState);
  const [errors, setErrors] = useState<Partial<NewUser>>({});

  const validate = (): boolean => {
    const newErrors: Partial<NewUser> = {};
    
    if (!formData.name.trim()) newErrors.name = 'Name is required';
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Invalid email format';
    }
    if (formData.age && formData.age < 18) {
       newErrors.age = 'Must be at least 18 years old';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: name === 'age' ? parseInt(value) || 0 : value
    }));
  };

  return { formData, errors, handleChange, validate };
};