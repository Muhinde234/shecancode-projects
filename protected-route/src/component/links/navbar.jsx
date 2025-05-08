import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <div className="container max-w-4xl mx-auto flex justify-center items-center">
      <nav className=" flex gap-24 mt-10 text-lg text-pink-400 font-bold ">
         <Link to="/">Home</Link>
         <Link to="/dashboard">Dashboard</Link>
         <Link to="/login">Login</Link>
      </nav>
    </div>
  );
}
