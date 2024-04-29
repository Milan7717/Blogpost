import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="z-50 fixed bg-zinc-900 w-full p-4 text-2xl">
      <div className="flex items-center justify-between mx-4">
       <Link to="/home"> <img src="/" alt="Logo" /></Link>
        <p>Blog</p>
      </div>
    </div>
  );
};

export default Navbar;
