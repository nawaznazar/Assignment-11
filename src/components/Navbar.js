import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar">
      <NavLink to="/" className={({ isActive }) => isActive ? "active" : ""}>Home</NavLink>
      <NavLink to="/about" className={({ isActive }) => isActive ? "active" : ""}>About</NavLink>
      <NavLink to="/user/1" className={({ isActive }) => isActive ? "active" : ""}>User</NavLink>
    </nav>
  );
};

export default Navbar;