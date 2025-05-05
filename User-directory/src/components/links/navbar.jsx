import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <nav className="flex  justify-center items-center  gap-5 pt-28 text-2xl">
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/user/1">User1</Link>
        <Link to="/user/2">User2</Link>
        <Link to="/user/3">User3</Link>
      </nav>
    </div>
  );
};

export default Navbar;
