import { createContext, useContext, useReducer, ReactNode } from 'react';
import type { User } from '../types/user';

type AppState = {
  users: User[];
  addedUsers: User[];
  theme: 'light' | 'dark';
};

type AppAction =
  | { type: 'SET_USERS'; payload: User[] }
  | { type: 'ADD_USER'; payload: User }
  | { type: 'TOGGLE_THEME' };

const AppContext = createContext<{
  state: AppState;
  dispatch: React.Dispatch<AppAction>;
  toggleTheme: () => void;
}>({
  state: {
    users: [],
    addedUsers: [],
    theme: 'light'
  },
  dispatch: () => null,
  

  toggleTheme: () => {}
});

export const AppProvider = ({ 
  children, 
  theme: initialTheme,
  toggleTheme 
}: { 
  children: ReactNode;
  theme: 'light' | 'dark';
  toggleTheme: () => void;
}) => {
  const [state, dispatch] = useReducer(reducer, {
    users: [],
    addedUsers: [],
    theme: initialTheme
  });
  

  return (
    <AppContext.Provider value={{ state, dispatch, toggleTheme }}>
      {children}
    </AppContext.Provider>
  );
};

const reducer = (state: AppState, action: AppAction): AppState => {
  switch (action.type) {
    case 'SET_USERS':
      return { ...state, users: action.payload };
    case 'ADD_USER':
      return { ...state, addedUsers: [...state.addedUsers, action.payload] };
    case 'TOGGLE_THEME':
      return { ...state, theme: state.theme === 'light' ? 'dark' : 'light' };
    default:
      return state;
  }
};

export const useAppContext = () => useContext(AppContext);
