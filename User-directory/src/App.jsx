import  React from 'react'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import Home from './components/features/pages/home'
import About from './components/features/pages/about'

import Navbar from './components/links/navbar'
import UserProfile from './components/features/pages/userProfile'
function App() {
  

  return (
    <div className='className="flex justify-center items-center min-h-screen bg-gradient-to-b from-purple-300 to-pink-900"'>
    <Navbar/>
  <Routes>

   <Route  path="/"  element={<Home/>}/>
   <Route  path="/about" element={<About/>} />

   <Route  path="/user/:id" element={<UserProfile/>}/>
   
  </Routes>
  
 
    </div>
  )
}

export default App
