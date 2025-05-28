import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { Menu, X,FileText } from 'lucide-react';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white text-gray-800 shadow-md fixed w-full z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          {/* Logo */}
          <div className="flex items-center">
            <Link to="/" className="flex items-center space-x-2">
              <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-primaryBlue text-white">
                <FileText className="w-6 h-6" />
              </div>
              <span className="text-xl font-bold text-gray-900">DocManager</span>
            </Link>
          </div>
          <div className="hidden md:flex items-center space-x-4">
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive ? 'text-secondaryBlue px-3 py-2 rounded-md' : 'hover:text-secondaryBlue px-3 py-2 rounded-md'
              }
            >
              Home
            </NavLink>
            <NavLink
              to="/about"
              className={({ isActive }) =>
                isActive ? 'text-secondaryBlue px-3 py-2 rounded-md' : 'hover:text-secondaryBlue px-3 py-2 rounded-md'
              }
            >
              About Us
            </NavLink>
            <NavLink
              to="/solutions"
              className={({ isActive }) =>
                isActive ? 'text-secondaryBlue px-3 py-2 rounded-md' : 'hover:text-secondaryBlue px-3 py-2 rounded-md'
              }
            >
              Solutions
            </NavLink>
            <NavLink
              to="/contact"
              className={({ isActive }) =>
                isActive ? 'text-secondaryBlue px-3 py-2 rounded-md' : 'hover:text-secondaryBlue px-3 py-2 rounded-md'
              }
            >
              Contact
            </NavLink>
            <Link
              to="/register"
              className="bg-primaryBlue text-white px-4 py-2 rounded-md hover:bg-secondaryBlue transition"
            >
              Register Now
            </Link>
          </div>
          <div className="md:hidden flex items-center">
            <button onClick={() => setIsOpen(!isOpen)} className="focus:outline-none">
              {isOpen ? (
                <X className="w-6 h-6 text-primaryBlue" />
              ) : (
                <Menu className="w-6 h-6 text-primaryBlue" />
              )}
            </button>
          </div>
        </div>
      </div>
      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive ? 'block text-secondaryBlue px-3 py-2 rounded-md' : 'block hover:text-secondaryBlue px-3 py-2 rounded-md'
              }
            >
              Home
            </NavLink>
            <NavLink
              to="/about"
              className={({ isActive }) =>
                isActive ? 'block text-secondaryBlue px-3 py-2 rounded-md' : 'block hover:text-secondaryBlue px-3 py-2 rounded-md'
              }
            >
              About Us
            </NavLink>
            <NavLink
              to="/solutions"
              className={({ isActive }) =>
                isActive ? 'block text-secondaryBlue px-3 py-2 rounded-md' : 'block hover:text-secondaryBlue px-3 py-2 rounded-md'
              }
            >
              Solutions
            </NavLink>
            <NavLink
              to="/contact"
              className={({ isActive }) =>
                isActive ? 'block text-secondaryBlue px-3 py-2 rounded-md' : 'block hover:text-secondaryBlue px-3 py-2 rounded-md'
              }
            >
              Contact
            </NavLink>
            <Link
              to="/register"
              className="block bg-primaryBlue text-white px-3 py-2 rounded-md hover:bg-secondaryBlue transition"
            >
              Register Now
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}

export default Navbar;