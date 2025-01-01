import React from 'react';
import { Facebook, Instagram, Linkedin } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-2xl font-bold mb-4">AAA Digital</h3>
            <p className="text-gray-400">
              Transforming businesses through innovative digital solutions.
            </p>
            <div className="flex space-x-4 mt-6">
              <a href="https://www.facebook.com/profile.php?id=61566395171281" className="text-gray-400 hover:text-primary transition">
                <Facebook size={24} />
              </a>
              {/* <a href="#" className="text-gray-400 hover:text-primary transition">
                <Twitter size={24} />
              </a> */}
              <a href="https://www.instagram.com/aaadigitalltd/" className="text-gray-400 hover:text-primary transition">
                <Instagram size={24} />
              </a>
              <a href="https://www.linkedin.com/company/aaa-digital-marketing/posts/?feedView=all" className="text-gray-400 hover:text-primary transition">
                <Linkedin size={24} />
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Services</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/services/web-development" className="text-gray-400 hover:text-primary transition">
                  Web Development
                </Link>
              </li>
              <li>
                <Link to="/services/mobile-apps" className="text-gray-400 hover:text-primary transition">
                  Mobile Apps
                </Link>
              </li>
              <li>
                <Link to="/services/digital-marketing" className="text-gray-400 hover:text-primary transition">
                  Digital Marketing
                </Link>
              </li>
              <li>
                <Link to="/services/ecommerce" className="text-gray-400 hover:text-primary transition">
                  E-Commerce
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Company</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/about" className="text-gray-400 hover:text-primary transition">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/blog" className="text-gray-400 hover:text-primary transition">
                  Blog
                </Link>
              </li>
              <li>
                <Link to="/careers" className="text-gray-400 hover:text-primary transition">
                  Careers
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-400 hover:text-primary transition">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact</h4>
            <p className="text-gray-400">contact@aaadigital.com</p>
            <p className="text-gray-400">+1 (555) 123-4567</p>
            <p className="text-gray-400 mt-4">
              123 Tech Avenue<br />
              San Francisco, CA 94105<br />
              United States
            </p>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-gray-800">
          <div className="text-center text-gray-400">
            <p>&copy; {new Date().getFullYear()} AAA Digital. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
}