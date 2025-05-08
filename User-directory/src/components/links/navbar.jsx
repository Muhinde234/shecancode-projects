import React from "react";
import { Link } from "react-router-dom";

export default function Navbar(){

  return(
  <div>

    <nav className="text-2xl space-x-5">
      
    <Link to="/">Home|</Link>
    <Link to="/user/1">User1|</Link>
    <Link to="/user/2">User2|</Link>
    <Link to="/user/3">User3</Link>
    </nav>
    
    
 
  </div>

  )

}

