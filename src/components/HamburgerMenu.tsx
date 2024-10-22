import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { Button } from "@/components/ui/button";

const HamburgerMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <div className="md:hidden relative">
      <Button variant="ghost" size="icon" onClick={toggleMenu} aria-label="Toggle menu">
        {isOpen ? <X /> : <Menu />}
      </Button>
      {isOpen && (
        <div className="absolute top-full right-0 w-48 bg-gray-800 shadow-lg rounded-lg mt-2">
          <nav className="flex flex-col py-2">
            <Link 
              to="/" 
              className="px-4 py-2 text-white hover:bg-gray-700 transition-colors" 
              onClick={toggleMenu}
            >
              Hjem
            </Link>
            <Link 
              to="/about" 
              className="px-4 py-2 text-white hover:bg-gray-700 transition-colors" 
              onClick={toggleMenu}
            >
              Om Oss
            </Link>
            <Link 
              to="/locations" 
              className="px-4 py-2 text-white hover:bg-gray-700 transition-colors" 
              onClick={toggleMenu}
            >
              Lokasjoner
            </Link>
            <Link 
              to="/schedule" 
              className="px-4 py-2 text-white hover:bg-gray-700 transition-colors" 
              onClick={toggleMenu}
            >
              Timeplan
            </Link>
            <Link 
              to="/membership" 
              className="px-4 py-2 text-white hover:bg-gray-700 transition-colors" 
              onClick={toggleMenu}
            >
              Medlemskap
            </Link>
          </nav>
        </div>
      )}
    </div>
  );
};

export default HamburgerMenu;