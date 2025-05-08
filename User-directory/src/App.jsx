import React from "react";
import "./App.css";
import {  Route, Routes } from "react-router-dom";
import UserProfile from "./components/features/pages/userProfile";
import Navbar from "./components/links/navbar";
import Home from "./components/features/pages/home"

function App() {
  return (
    <div className="flex flex-col justify-center items-center gap-3  min-h-screen bg-green-400 text-white">
     <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/user/:id" element={<UserProfile />} />
      </Routes>
    </div>
    
 
  );
}

export default App;
