// components/FirebaseTest.tsx
'use client';
import { auth } from '../lib/firebase';

export default function FirebaseTest() {
  const checkAuth = async () => {
    try {
      console.log('Firebase auth object:', auth);
      console.log('Current user:', auth.currentUser);
    } catch (error) {
      console.error('Firebase connection error:', error);
    }
  };

  return (
    <button 
      onClick={checkAuth}
      className="bg-blue-500 text-white px-4 py-2 rounded"
    >
      Test Firebase Connection
    </button>
  );
}