import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const linkClass = (path) => {
    return location.pathname === path 
      ? 'font-bold text-primary text-xs lg:text-sm hover:scale-110 duration-200' 
      : 'font-bold text-light text-xs lg:text-sm hover:text-primary transition ease-in-out delay-150 hover:scale-110 duration-200';
  };

  return (
    <div className='bg-bg/50 backdrop-blur py-1 fixed w-full z-50'>
      <div className='flex justify-between items-center px-4 lg:px-8'>
        <div className='text-light font-bold text-lg'>
          <Link to="/">M Iqbal F</Link>
        </div>
        <div className='hidden md:flex gap-5'>
          <Link to="/" className={linkClass("/")}>Home</Link>
          <Link to="/project" className={linkClass("/project")}>Project</Link>
        </div>
        <div className='md:hidden'>
          <button onClick={toggleMenu} className='text-light'>
            ☰
          </button>
        </div>
      </div>
      {isMenuOpen && (
        <div className='md:hidden flex flex-col items-center gap-2 py-2'>
          <Link to="/" className={linkClass("/")}>Home</Link>
          <Link to="/project" className={linkClass("/project")}>Project</Link>
        </div>
      )}
    </div>
  );
}

export default Navbar;
