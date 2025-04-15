"use client"
import React from 'react';
import { Menu } from 'lucide-react'; // Assuming you have this installed

const Navbar = ({ language }) => {
  return (
    <>
      <nav className="desktop-nav flex items-center justify-between text-black bg-white p-3 my-2 text-sm shadow-sm border-b">
        {/* Left Side Navigation */}
        <div className="flex items-center gap-6">
          <button className="flex items-center gap-2 font-medium">
            <Menu size={18} /> All category
          </button>
          <a href="#" className="hover:text-blue-600">Hot offers</a>
          <a href="#" className="hover:text-blue-600">Gift boxes</a>
          <a href="#" className="hover:text-blue-600">Projects</a>
          <a href="#" className="hover:text-blue-600">Menu item</a>
          <button className="flex items-center gap-1 hover:text-blue-600">
            Help ▼
          </button>
        </div>

        {/* Right Side Navigation */}
        <div className="flex items-center gap-6">
          <button className="flex items-center gap-1 hover:text-blue-600">
            {language} ▼ English
          </button>
          <button className="flex items-center gap-2 hover:text-blue-600">
            <span className="w-5 h-3 bg-black rounded-sm"></span> Ship to ▼
          </button>
        </div>
      </nav>

      <style jsx>{`
        .desktop-nav {
          display: flex;
        }

        @media (max-width: 768px) {
          .desktop-nav {
            display: none;
          }

          /* Styles for your mobile menu would go here */
          /* .mobile-menu-button {
            display: block;
          } */
        }
      `}</style>
    </>
  );
};

export default Navbar;