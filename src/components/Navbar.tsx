import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { Button } from './ui/Button';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed w-full bg-white/90 backdrop-blur-sm z-50 border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <div className="flex items-center">
            <span className="text-2xl font-bold text-primary">AAA Digital</span>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            <a href="#services" className="text-gray-700 hover:text-primary transition">Services</a>
            <a href="#work" className="text-gray-700 hover:text-primary transition">Work</a>
            <a href="#about" className="text-gray-700 hover:text-primary transition">About</a>
            <a href="#insights" className="text-gray-700 hover:text-primary transition">Insights</a>
            <Button variant="primary">Contact Us</Button>
          </div>

          <button onClick={() => setIsOpen(!isOpen)} className="md:hidden text-gray-700">
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden border-t border-gray-200">
          <div className="px-2 pt-2 pb-3 space-y-1 bg-white">
            <a href="#services" className="block px-3 py-2 text-gray-700 hover:text-primary">Services</a>
            <a href="#work" className="block px-3 py-2 text-gray-700 hover:text-primary">Work</a>
            <a href="#about" className="block px-3 py-2 text-gray-700 hover:text-primary">About</a>
            <a href="#insights" className="block px-3 py-2 text-gray-700 hover:text-primary">Insights</a>
            <div className="px-3 py-2">
              <Button variant="primary" className="w-full">Contact Us</Button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}