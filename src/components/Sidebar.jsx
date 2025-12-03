import React from "react";
import { NavLink } from "react-router-dom";

const Sidebar = () => {
  const linkStyle = ({ isActive }) =>
    "px-3 py-2 rounded-md font-medium transition block text-center " +
    (isActive ? "bg-blue-600 text-white" : "text-white hover:bg-blue-500");
  return (
    <div className="w-48 fixed right-0 top-0 h-full bg-gray-800 flex flex-col items-center gap-x-4 shadow-lg">
      <div>
        <img src="UhaiMongProfilePicture.jpg" alt="Uhai Mong Profile Image" />
        <h1 className="text-2xl font-bold text-center text-white">Uhai Mong</h1>
      </div>
      <NavLink className={linkStyle} to="/">
        Home
      </NavLink>
      <NavLink className={linkStyle} to="/aboutme">
        About Me
      </NavLink>
      <NavLink className={linkStyle} to="/projects">
        Projects
      </NavLink>
      <NavLink className={linkStyle} to="/skills">
        Skills
      </NavLink>
      <NavLink className={linkStyle} to="/services">
        Services
      </NavLink>
      <NavLink className={linkStyle} to="/resume">
        Resume
      </NavLink>
      <NavLink className={linkStyle} to="/contact">
        Contact
      </NavLink>
    </div>
  );
};

export default Sidebar;
