import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { Button } from "./ui/Button";
import { useState } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed w-full bg-white/90 backdrop-blur-sm z-50 border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <div className="flex items-center">
            <Link to="/">

            <span className="text-5xl font-bold cursor-pointer text-primary">
            <img
                src="src/assets/aaatech.png"
                
                className="mt-2 h-24 w-[300px] object-cover"
              />
            </span>
            </Link>
          </div>

          <div className="hidden md:flex items-center space-x-8">
            <Link
              to="/services"
              className="text-gray-700 hover:text-primary transition"
            >
              Services
            </Link>
            <Link
              to="/work"
              className="text-gray-700 hover:text-primary transition"
            >
              Work
            </Link>
            <Link
              to="/about"
              className="text-gray-700 hover:text-primary transition"
            >
              About
            </Link>
            <Link
              to="/blog"
              className="text-gray-700 hover:text-primary transition"
            >
              Blogs
            </Link>
            <Link to="/contact">
              <Button variant="primary">Contact Us</Button>
            </Link>
          </div>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-gray-700"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden border-t border-gray-200">
          <div className="px-2 pt-2 pb-3 space-y-1 bg-white">
            <Link
              to="/services"
              className="block px-3 py-2 text-gray-700 hover:text-primary"
            >
              Services
            </Link>
            <Link
              to="/work"
              className="block px-3 py-2 text-gray-700 hover:text-primary"
            >
              Work
            </Link>
            <Link
              to="/about"
              className="block px-3 py-2 text-gray-700 hover:text-primary"
            >
              About
            </Link>
            <Link
              to="/insights"
              className="block px-3 py-2 text-gray-700 hover:text-primary"
            >
              Insights
            </Link>
            <div className="px-3 py-2">
              <Link to="/contact">
                <Button variant="primary" className="w-full">
                  Contact Us
                </Button>
              </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
