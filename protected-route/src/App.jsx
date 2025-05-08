import React from 'react'
import './App.css'
import { Navigate, Route, Routes } from 'react-router-dom'
import Home from './component/pages/home'
import Navbar from './component/links/navbar'
import Login from './component/pages/login'
import Dashboard from './component/pages/dashboard'
import AuthProvider, { useAuth } from './component/feature/authcontext'


function ProtectedRoute({ children }) {
  const { isAuthenticated } = useAuth(); 
  if (!isAuthenticated) {
    alert('You must be logged in to view this page');
    return <Navigate to="/login" replace />;
  }
  return children;
}

function App() {


  return (
    <AuthProvider>
    <Navbar/>
     <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/login" element={<Login/>} />
      <Route path="/dashboard" element={
          <ProtectedRoute>
          <Dashboard />
        </ProtectedRoute>
      }/>
     </Routes>
    </AuthProvider>
  )
}


export default App
