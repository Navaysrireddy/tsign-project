import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import logo from "../../assests/TG-SIGN (2).png";
 
function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
 
  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };
 
  return (
    <div className="w-full h-auto shadow-md my-2">
      <header className="h-20 flex items-center justify-between px-5 font-sans relative">
        {/* Logo */}
        <a href="/">
          <img
            src={logo}
            alt="Logo"
            className="h-12 max-w-[150px] object-contain md:h-10 md:max-w-[120px]"
          />
        </a>
 
        {/* Hamburger menu (visible on mobile) */}
        <div
          className="hidden max-md:flex flex-col cursor-pointer absolute right-5 top-6"
          onClick={toggleMenu}
        >
          <div className="w-6 h-[3px] bg-[#004aad] my-1 transition-all"></div>
          <div className="w-6 h-[3px] bg-[#004aad] my-1 transition-all"></div>
          <div className="w-6 h-[3px] bg-[#004aad] my-1 transition-all"></div>
        </div>
 
        {/* Navigation Links */}
        <nav
          className={`flex gap-6 max-md:flex-col max-md:w-full max-md:bg-white max-md:shadow-md max-md:absolute max-md:top-20 max-md:left-0 max-md:z-[999] max-md:py-3 ${
            menuOpen ? "flex" : "max-md:hidden"
          }`}
        >
          <div className="px-2 py-1 rounded-md transition hover:[&>a]:text-[#F04D3E] text-center max-md:py-3 max-md:w-full">
            <NavLink
              to="/"
              className="no-underline text-[#004aad] font-bold text-lg transition-colors"
            >
              Home
            </NavLink>
          </div>
          <div className="px-2 py-1 rounded-md transition hover:[&>a]:text-[#F04D3E] text-center max-md:py-3 max-md:w-full">
            <NavLink
              to="/about"
              className="no-underline text-[#004aad] font-bold text-lg transition-colors"
            >
              About
            </NavLink>
          </div>
          <div className="px-2 py-1 rounded-md transition hover:[&>a]:text-[#F04D3E] text-center max-md:py-3 max-md:w-full">
            <NavLink
              to="/contact"
              className="no-underline text-[#004aad] font-bold text-lg transition-colors"
            >
              Contact
            </NavLink>
          </div>
          <div className="px-2 py-1 rounded-md transition hover:[&>a]:text-[#F04D3E] text-center max-md:py-3 max-md:w-full">
            <NavLink
              to="/services"
              className="no-underline text-[#004aad] font-bold text-lg transition-colors"
            >
              Services
            </NavLink>
          </div>
          <div className="px-2 py-1 rounded-md transition hover:[&>a]:text-[#F04D3E] text-center max-md:py-3 max-md:w-full">
            <NavLink
              to="/login"
              className="no-underline text-[#004aad] font-bold text-lg transition-colors"
            >
              Login/Enroll
            </NavLink>
          </div>
        </nav>
      </header>
    </div>
  );
}
 
export default Header;
 
 