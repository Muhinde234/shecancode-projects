"use client";

import { useAuth } from '../lib/auth';
import type { User as CustomUser } from '../types';
import Image from 'next/image';
import { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

export default function AuthButton() {
  const { user, loading, signInWithEmailPassword, signOut } = useAuth();
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  if (loading) {
    return (
      <div className="flex justify-center items-center p-2">
        <div className="w-6 h-6 border-2 border-t-blue-500 border-gray-200 rounded-full animate-spin"></div>
      </div>
    );
  }

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await signInWithEmailPassword(email, password);
      setError('');
    } catch (err: any) {
      setError(err.message || 'Failed to sign in.');
    }
  };

  const renderUserInfo = (user: CustomUser) => (
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

  if (user) {
    return (
      <div className="relative">
        <button
          className="flex items-center gap-1 p-1 rounded-full hover:bg-gray-100 transition-colors"
          onClick={() => setIsDropdownOpen(!isDropdownOpen)}
          aria-expanded={isDropdownOpen}
        >
          {renderUserInfo(user)}
          {isDropdownOpen ? (
            <ChevronUp className="w-4 h-4 text-gray-500 ml-1" />
          ) : (
            <ChevronDown className="w-4 h-4 text-gray-500 ml-1" />
          )}
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
    );
  }

  // Login form
  return (
    <form onSubmit={handleLogin} className="flex flex-col gap-2 max-w-sm p-4 bg-white rounded-lg shadow-md">
      <input
        type="email"
        required
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Email"
        className="p-2 border rounded-md"
      />
      <input
        type="password"
        required
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="Password"
        className="p-2 border rounded-md"
      />
      {error && <div className="text-red-500 text-sm">{error}</div>}
      <button type="submit" className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600">
        Sign In
      </button>
    </form>
  );
}
