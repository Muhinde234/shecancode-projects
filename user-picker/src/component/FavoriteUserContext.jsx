import { createContext, useState, useEffect } from 'react';

export const FavoriteUserContext = createContext();

export const FavoriteUserProvider = ({ children }) => {
  const [favoriteUser, setFavoriteUser] = useState(null);

 
  useEffect(() => {
    const storedUser = localStorage.getItem('favoriteUser');
    if (storedUser) {
      setFavoriteUser(JSON.parse(storedUser));
    }
  }, []);

  
  useEffect(() => {
    if (favoriteUser) {
      localStorage.setItem('favoriteUser', JSON.stringify(favoriteUser));
    } else {
      localStorage.removeItem('favoriteUser');
    }
  }, [favoriteUser]);

  return (
    <FavoriteUserContext.Provider value={{ favoriteUser, setFavoriteUser }}>
      {children}
    </FavoriteUserContext.Provider>
  );
};

