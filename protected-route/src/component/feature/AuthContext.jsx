import { createContext, useContext, useEffect, useState } from "react"

const AuthContext= createContext();




export default function AuthProvider({children}) {

    const[isAuthenticated ,setIsAuthenticated]=useState(false)
    
    
    const login =()=>{
        setIsAuthenticated(true)
        localStorage.setItem('isAuthenticated', 'true')
    }
    const logout =()=>{
        setIsAuthenticated(false)
        localStorage.removeItem('isAuthenticated');
    }
 

  return (
    <AuthContext.Provider value={{isAuthenticated,login,logout}}>
    {children}
    </AuthContext.Provider>
  )
}

export const useAuth=()=>useContext(AuthContext)