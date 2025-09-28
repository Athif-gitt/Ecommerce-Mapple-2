import React, { useState } from "react";
import { Link } from "react-router-dom";

function Nav() {
  const [loggedIn, setLoggedIn] = useState(false)

  
  return (
    <div>
      <nav className="flex justify-between items-center bg-white px-6 py-4 shadow-md">
        <h1 className="text-2xl font-bold text-gray-800">Mapple </h1>
        <ul className="flex space-x-6 text-gray-700 font-medium">
          <li className="hover:text-blue-600 cursor-pointer">
            <Link to="/"> Home </Link>
          </li>
          <li className="hover:text-blue-600 cursor-pointer">
            <Link to={"/products"}>Products</Link>
          </li>
          <li className="hover:text-blue-600 cursor-pointer">
            <Link to="/cart">
              Cart <i className="fa-regular fa-brackets-round h-10 w-10"></i>
            </Link>
          </li>
          <li className="hover:text-blue-600 cursor-pointer">
            <Link to="/login">Login</Link>
          </li>
          {/* <li className="hover:text-blue-600 cursor-pointer">Register</li> */}
        </ul>
      </nav>
    </div>
  );
}

export default Nav;
