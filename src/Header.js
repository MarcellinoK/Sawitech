import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa';

const Header = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  return (
    <header
      className="fixed top-0 left-0 w-full p-4 flex justify-between items-center z-50"
      style={{
        background: 'linear-gradient(90deg, #696969, #1A1A1D)',
        boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)',
      }}
    >
      <div className="flex items-center">
        {/* Logo and Title */}
        <div className="flex items-center">
          <img src={process.env.PUBLIC_URL + '/logo.png'} alt="SAWITECH Logo" className="h-10" />
          <div className="flex flex-col ml-2">
            <span className="text-white font-bold text-xl md:text-2xl" style={{ fontFamily: 'sans-serif' }}>
              SAWITECH
            </span>
            {/* Specialist Text */}
            <span
              className="text-gray-300 text-sm md:text-base"
              style={{ fontFamily: 'sans-serif', marginTop: '-4px' }}
            >
              Specialist Supplier Of Palm Oil Mill Spares
            </span>
          </div>
        </div>
      </div>

      {/* Hamburger menu for mobile */}
      <div className="md:hidden">
        <button onClick={toggleMenu} className="text-white text-3xl">
          {isMenuOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* Navigation Links for Desktop */}
      <nav className="hidden md:flex flex-grow justify-center space-x-6 items-center">
        <Link to="/" className="relative text-white font-bold group cursor-pointer" style={{ fontFamily: 'sans-serif' }}>
          HOME
        </Link>
        <span className="text-gray-600">|</span>
        <Link to="/about" className="relative text-white font-bold group cursor-pointer" style={{ fontFamily: 'sans-serif' }}>
          ABOUT US
        </Link>
        <span className="text-gray-600">|</span>
        <Link to="/projects" className="relative text-white font-bold group cursor-pointer" style={{ fontFamily: 'sans-serif' }}>
          PROJECT
        </Link>
        <span className="text-gray-600">|</span>
        <Link to="/product" className="relative text-white font-bold group cursor-pointer" style={{ fontFamily: 'sans-serif' }}>
          OUR PRODUCT
        </Link>
        <span className="text-gray-600">|</span>
        <Link to="/contact" className="relative text-white font-bold group cursor-pointer" style={{ fontFamily: 'sans-serif' }}>
          CONTACT
        </Link>
      </nav>

      {/* Dropdown Menu for Mobile */}
      {isMenuOpen && (
        <div className="absolute top-16 left-0 w-full bg-gray-800 text-white p-4 flex flex-col items-start md:hidden">
          <Link to="/" className="py-2 text-white font-bold" onClick={() => setMenuOpen(false)}>
            HOME
          </Link>
          <Link to="/about" className="py-2 text-white font-bold" onClick={() => setMenuOpen(false)}>
            ABOUT US
          </Link>
          <Link to="/projects" className="py-2 text-white font-bold" onClick={() => setMenuOpen(false)}>
            PROJECT
          </Link>
          <Link to="/product" className="py-2 text-white font-bold" onClick={() => setMenuOpen(false)}>
            OUR PRODUCT
          </Link>
          <Link to="/contact" className="py-2 text-white font-bold" onClick={() => setMenuOpen(false)}>
            CONTACT
          </Link>
        </div>
      )}
    </header>
  );
};

export default Header;