import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { Button } from "@/components/ui/button";

const HamburgerMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <div className="md:hidden">
      <Button variant="ghost" size="icon" onClick={toggleMenu} aria-label="Toggle menu">
        {isOpen ? <X /> : <Menu />}
      </Button>
      {isOpen && (
        <div className="absolute top-16 right-0 w-full bg-white shadow-md">
          <nav className="flex flex-col p-4">
            <Link to="/" className="py-2" onClick={toggleMenu}>Hjem</Link>
            <Link to="/about" className="py-2" onClick={toggleMenu}>Om Oss</Link>
            <Link to="/locations" className="py-2" onClick={toggleMenu}>Lokasjoner</Link>
            <Link to="/schedule" className="py-2" onClick={toggleMenu}>Timeplan</Link>
            <Link to="/membership" className="py-2" onClick={toggleMenu}>Medlemskap</Link>
          </nav>
        </div>
      )}
    </div>
  );
};

export default HamburgerMenu;