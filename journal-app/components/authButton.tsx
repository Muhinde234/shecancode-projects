// components/AuthButton.tsx
import { useAuth } from '../lib/auth';
import Image from 'next/image';
import { useState } from 'react';
import { User } from 'firebase/auth';

export default function AuthButton() {
  const { user, loading, signInWithGoogle, signOut } = useAuth();
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  if (loading) {
    return (
      <div className="flex justify-center items-center p-2">
        <div className="w-6 h-6 border-2 border-t-blue-500 border-gray-200 rounded-full animate-spin"></div>
      </div>
    );
  }

  const renderUserInfo = (user: User) => (
    <div className="flex items-center gap-2">
      {user.photoURL ? (
        <Image 
          src={user.photoURL} 
          alt={user.displayName || 'User'} 
          width={32} 
          height={32} 
          className="rounded-full"
        />
      ) : (
        <div className="w-8 h-8 rounded-full bg-blue-500 text-white flex items-center justify-center font-bold">
          {user.displayName?.charAt(0) || user.email?.charAt(0)}
        </div>
      )}
      <div className="text-left">
        <div className="text-sm font-medium line-clamp-1 max-w-[120px]">
          {user.displayName || 'User'}
        </div>
        <div className="text-xs text-gray-500 line-clamp-1 max-w-[120px]">
          {user.email}
        </div>
      </div>
    </div>
  );

  return (
    <div className="relative">
      {user ? (
        <div>
          <button 
            className="flex items-center gap-1 p-1 rounded-full hover:bg-gray-100 transition-colors"
            onClick={() => setIsDropdownOpen(!isDropdownOpen)}
          >
            {renderUserInfo(user)}
            <span className="text-gray-500 text-xs ml-1">
              {isDropdownOpen ? '▲' : '▼'}
            </span>
          </button>
          
          {isDropdownOpen && (
            <div className="absolute right-0 top-full mt-1 w-64 bg-white rounded-lg shadow-lg z-50 overflow-hidden">
              <div className="p-4 border-b border-gray-100">
                {renderUserInfo(user)}
              </div>
              <button 
                onClick={signOut}
                className="w-full p-3 text-left hover:bg-gray-50 transition-colors font-medium"
              >
                Sign Out
              </button>
            </div>
          )}
        </div>
      ) : (
        <button 
          onClick={signInWithGoogle}
          className="flex items-center gap-2 bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-md font-medium transition-colors"
        >
          <svg viewBox="0 0 24 24" width="18" height="18">
            <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="white"/>
            <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="white"/>
            <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="white"/>
            <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="white"/>
          </svg>
          Sign in with Google
        </button>
      )}
    </div>
  );
}