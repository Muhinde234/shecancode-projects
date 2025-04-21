import { useState } from 'react'

import './App.css'
import Register from './pages/Register'
import { Route, Routes } from 'react-router-dom'
import Login from './pages/Login'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Routes>
    <Route path="/register"  element={<Register/>}   />
    <Route path="/login"     element={<Login/>}     />
    </Routes>
    
       
    </>
  )
}

export default App
