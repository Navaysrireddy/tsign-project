// import React, { useState } from "react";
// import { NavLink } from "react-router-dom";
// import logo from "../../assests/TG-SIGN (2).png";
 
// function Header() {
//   const [menuOpen, setMenuOpen] = useState(false);
 
//   const toggleMenu = () => {
//     setMenuOpen(!menuOpen);
//   };
 
//   return (
//     <div className="w-full h-auto shadow-md my-2">
//       <header className="h-20 flex items-center justify-between px-5 font-sans relative">
//         {/* Logo */}
//         <img
//   src={logo}
//   alt="Logo"
//   className="w-[120px] h-[60px] object-contain md:w-[200px] md:h-[100px]"
// />

 
//         {/* Hamburger menu (visible on mobile) */}
//         <div
//           className="hidden max-md:flex flex-col cursor-pointer absolute right-5 top-6"
//           onClick={toggleMenu}
//         >
//           <div className="w-6 h-[3px] bg-[#004aad] my-1 transition-all"></div>
//           <div className="w-6 h-[3px] bg-[#004aad] my-1 transition-all"></div>
//           <div className="w-6 h-[3px] bg-[#004aad] my-1 transition-all"></div>
//         </div>
 
//         {/* Navigation Links */}
//         <nav
//           className={`flex gap-6 max-md:flex-col max-md:w-full max-md:bg-white max-md:shadow-md max-md:absolute max-md:top-20 max-md:left-0 max-md:z-[999] max-md:py-3 ${
//             menuOpen ? "flex" : "max-md:hidden"
//           }`}
//         >
//           <div className="px-2 py-1 rounded-md transition hover:[&>a]:text-[#F04D3E] text-center max-md:py-3 max-md:w-full">
//             <NavLink
//               to="/"
//               className="no-underline text-[#004aad] font-bold text-lg transition-colors"
//             >
//               Home
//             </NavLink>
//           </div>
//           <div className="px-2 py-1 rounded-md transition hover:[&>a]:text-[#F04D3E] text-center max-md:py-3 max-md:w-full">
//             <NavLink
//               to="/about"
//               className="no-underline text-[#004aad] font-bold text-lg transition-colors"
//             >
//               About
//             </NavLink>
//           </div>
//             <div className="px-2 py-1 rounded-md transition hover:[&>a]:text-[#F04D3E] text-center max-md:py-3 max-md:w-full">
//             <NavLink
//               to="/services"
//               className="no-underline text-[#004aad] font-bold text-lg transition-colors"
//             >
//               Services
//             </NavLink>
//           </div>
//           <div className="px-2 py-1 rounded-md transition hover:[&>a]:text-[#F04D3E] text-center max-md:py-3 max-md:w-full">
//             <NavLink
//               to="/contact"
//               className="no-underline text-[#004aad] font-bold text-lg transition-colors"
//             >
//               Contact
//             </NavLink>
//           </div>
        
//           <div className="px-2 py-1 rounded-md transition hover:[&>a]:text-[#F04D3E] text-center max-md:py-3 max-md:w-full">
//             <NavLink
//               to="/login"
//               className="no-underline text-[#004aad] font-bold text-lg transition-colors"
//             >
//               Login/Enroll
//             </NavLink>
//           </div>
//         </nav>
//       </header>
//     </div>
//   );
// }
 
// export default Header;
 
 

import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import logo from "../../assests/TG-SIGN (2).png";

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className="w-full bg-white shadow-lg sticky top-0 z-50">
      <header className="container mx-auto h-20 flex items-center justify-between px-5 font-sans relative">
        {/* Logo */}
        <NavLink to="/" className="flex items-center">
          <img
            src={logo}
            alt="Logo"
            className="w-[120px] h-[60px] object-contain md:w-[200px] md:h-[100px] transition-transform hover:scale-105"
          />
        </NavLink>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-1">
          <NavLink
            to="/"
            className={({ isActive }) => 
              `px-4 py-2 rounded-lg font-semibold text-sm transition-all duration-300
              ${isActive 
                ? "bg-[#004aad] text-white shadow-md" 
                : "text-[#004aad] hover:bg-[#004aad]/10 hover:text-[#004aad]"}`
            }
          >
            Home
          </NavLink>
          
          <NavLink
            to="/about"
            className={({ isActive }) => 
              `px-4 py-2 rounded-lg font-semibold text-sm transition-all duration-300
              ${isActive 
                ? "bg-[#004aad] text-white shadow-md" 
                : "text-[#004aad] hover:bg-[#004aad]/10 hover:text-[#004aad]"}`
            }
          >
            About
          </NavLink>
          
          <NavLink
            to="/services"
            className={({ isActive }) => 
              `px-4 py-2 rounded-lg font-semibold text-sm transition-all duration-300
              ${isActive 
                ? "bg-[#004aad] text-white shadow-md" 
                : "text-[#004aad] hover:bg-[#004aad]/10 hover:text-[#004aad]"}`
            }
          >
            Services
          </NavLink>
          
          <NavLink
            to="/contact"
            className={({ isActive }) => 
              `px-4 py-2 rounded-lg font-semibold text-sm transition-all duration-300
              ${isActive 
                ? "bg-[#004aad] text-white shadow-md" 
                : "text-[#004aad] hover:bg-[#004aad]/10 hover:text-[#004aad]"}`
            }
          >
            Contact
          </NavLink>
          
          <NavLink
            to="/login"
           
           // className="ml-4 px-5 py-2 bg-gradient-to-r from-[#004aad] to-[#3a75e0] text-white font-semibold rounded-lg shadow-md hover:shadow-lg transition-all duration-300 hover:from-[#3a75e0] hover:to-[#004aad]"
           className={({ isActive }) => 
              `px-4 py-2 rounded-lg font-semibold text-sm transition-all duration-300
              ${isActive 
                ? "bg-[#004aad] text-white shadow-md" 
                : "text-[#004aad] hover:bg-[#004aad]/10 hover:text-[#004aad]"}`
            }  
          >
            Login/Enroll
          </NavLink>
        </nav>

        {/* Mobile menu button */}
        <div className="md:hidden flex items-center">
          <button
            onClick={toggleMenu}
            className="outline-none focus:outline-none"
            aria-label="Toggle menu"
          >
            <div className="w-8 h-8 flex flex-col justify-center items-center relative">
              <span
                className={`block h-0.5 w-6 bg-[#004aad] transition-all duration-300 ${
                  menuOpen ? "transform rotate-45 translate-y-1.5" : ""
                }`}
              ></span>
              <span
                className={`block h-0.5 w-6 bg-[#004aad] transition-all duration-300 my-1.5 ${
                  menuOpen ? "opacity-0" : "opacity-100"
                }`}
              ></span>
              <span
                className={`block h-0.5 w-6 bg-[#004aad] transition-all duration-300 ${
                  menuOpen ? "transform -rotate-45 -translate-y-1.5" : ""
                }`}
              ></span>
            </div>
          </button>
        </div>

        {/* Mobile Navigation */}
        <div
          className={`md:hidden fixed top-20 left-0 w-full h-full bg-white z-40 transform transition-transform duration-300 ${
            menuOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <nav className="flex flex-col p-5 space-y-4">
            <NavLink
              to="/"
              onClick={() => setMenuOpen(false)}
              className={({ isActive }) => 
                `px-4 py-3 rounded-lg font-semibold transition-all duration-300
                ${isActive 
                  ? "bg-[#004aad] text-white shadow-md" 
                  : "text-[#004aad] hover:bg-[#004aad]/10"}`
              }
            >
              Home
            </NavLink>
            
            <NavLink
              to="/about"
              onClick={() => setMenuOpen(false)}
              className={({ isActive }) => 
                `px-4 py-3 rounded-lg font-semibold transition-all duration-300
                ${isActive 
                  ? "bg-[#004aad] text-white shadow-md" 
                  : "text-[#004aad] hover:bg-[#004aad]/10"}`
              }
            >
              About
            </NavLink>
            
            <NavLink
              to="/services"
              onClick={() => setMenuOpen(false)}
              className={({ isActive }) => 
                `px-4 py-3 rounded-lg font-semibold transition-all duration-300
                ${isActive 
                  ? "bg-[#004aad] text-white shadow-md" 
                  : "text-[#004aad] hover:bg-[#004aad]/10"}`
              }
            >
              Services
            </NavLink>
            
            <NavLink
              to="/contact"
              onClick={() => setMenuOpen(false)}
              className={({ isActive }) => 
                `px-4 py-3 rounded-lg font-semibold transition-all duration-300
                ${isActive 
                  ? "bg-[#004aad] text-white shadow-md" 
                  : "text-[#004aad] hover:bg-[#004aad]/10"}`
              }
            >
              Contact
            </NavLink>
            
            <NavLink
              to="/login"
              onClick={() => setMenuOpen(false)}
              // className="px-4 py-3 bg-gradient-to-r from-[#004aad] to-[#3a75e0] text-white font-semibold rounded-lg text-center shadow-md mt-4"
               className={({ isActive }) => 
                `px-4 py-3 rounded-lg font-semibold transition-all duration-300
                ${isActive 
                  ? "bg-[#004aad] text-white shadow-md" 
                  : "text-[#004aad] hover:bg-[#004aad]/10"}`
              }
            >
              Login/Enroll
            </NavLink>
          </nav>
        </div>
      </header>
    </div>
  );
}

export default Header;