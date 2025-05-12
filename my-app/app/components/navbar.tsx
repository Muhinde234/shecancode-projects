"use client";

import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="bg-green-600 p-4">
      <div className="container mx-auto flex space-x-6">
        <Link href="/" className="text-white hover:text-blue-200">
          Home
        </Link>
        {[1, 2, 3].map((userId) => (
          <Link
            key={userId}
            href={`/users/${userId}`}
            className="text-white hover:text-blue-200"
          >
            User {userId}
          </Link>
        ))}
      </div>
    </nav>
  );
};

export default Navbar;