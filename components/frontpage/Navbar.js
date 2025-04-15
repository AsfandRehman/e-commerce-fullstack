'use client';

import { useState, useEffect } from 'react';
import { assets } from '@/images/assets';
import { User, Home, List, Heart, ShoppingBag, Globe, Headphones, Building, MessageCircle, ShoppingCart, Menu } from "lucide-react";
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useAppContext } from '@/context/AppContext';

export default function Navbar() {
  const {getTotalCartItems} = useAppContext()
  const [category, setCategory] = useState('All category');
  const [isClient, setIsClient] = useState(false);
  const [query, setQuery] = useState('');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const router = useRouter();

  const handleSearch = (e) => {
    e.preventDefault();
    if (query.trim() !== '') {
      router.push(`/searchproduct?q=${encodeURIComponent(query)}`);
    }
  };

  useEffect(() => {
    setIsClient(true);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isMobileMenuOpen ? 'hidden' : 'auto';
  }, [isMobileMenuOpen]);

  return (
    <nav className="fixed top-0 left-0 w-full mb-30 z-50 shadow bg-white text-black">
    {/* Desktop View */}
    <div className="hidden md:flex items-center justify-between p-4">
      {/* Logo */}
      <Link href='/'>
        <div className="flex items-center gap-2 text-xl font-bold text-blue-600">
          <div className="p-2 bg-blue-500 rounded-lg">
            <Image alt='logo' src={assets.logo} sizes='20'/>
          </div>
          Brand
        </div>
      </Link>
  
      {/* Search Bar */}
      <form 
        onSubmit={handleSearch} 
        className="flex flex-grow mx-4 max-w-xl border-blue-700 border-2 rounded-lg overflow-hidden flex-row"
      >
        <input 
          type="text" 
          placeholder="Search"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="flex-grow px-4 py-2 border-none outline-none" 
        />
        <select className="px-4 py-2 border-l outline-none bg-white">
          <option value="">All category</option>
          <option value="/gridview">Grid View</option>
          <option value="/listview">List View</option>
        </select>
        <button 
          type="submit"
          className="bg-blue-600 cursor-pointer text-white px-6 py-2"
        >
          Search
        </button>
      </form>
  
      {/* User Options */}
      <div className="flex items-center gap-6 text-gray-600">
        <Link href='/dashboard'>
          <div className="flex flex-col cursor-pointer items-center">
            <User size={20} />
            <span className="text-xs">Profile</span>
          </div>
        </Link>
        <div className="flex flex-col items-center">
          <MessageCircle size={20} />
          <span className="text-xs">Message</span>
        </div>
        <Link href='/product'>
          <div className="flex cursor-pointer flex-col items-center">
            <Heart size={20} />
            <span className="text-xs">Orders</span>
          </div>
        </Link>
        <Link href='/cart'>
          <div className="relative flex flex-col cursor-pointer items-center">
            <ShoppingCart size={20} />
            <span className="text-xs">My cart</span>
            {isClient && (
              <span className="absolute -top-1 -right-2 bg-red-500 text-white text-[10px] px-1.5 py-[1px] rounded-full">
                {getTotalCartItems()}
              </span>
            )}
          </div>
        </Link>
      </div>
    </div>
  
      {/* Mobile View */}
      <div className="flex md:hidden justify-between items-center p-4">
        <div className="flex items-center gap-2">
          <div className="p-2 bg-blue-500 rounded-lg">
            <Image alt="logo" src={assets.logo} sizes="20" />
          </div>
          <span className="font-bold text-blue-600 text-lg">Brand</span>
        </div>

         {/* Search */}
  <form 
    onSubmit={handleSearch}
    className="flex flex-grow mx-2 border border-blue-700 rounded-lg overflow-hidden"
  >
    <input
      type="text"
      placeholder="Search"
      value={query}
      onChange={(e) => setQuery(e.target.value)}
      className="flex-grow px-2 py-1 text-sm outline-none"
    />
    <button
      type="submit"
      className="bg-blue-600 text-white px-3 text-sm"
    >
      Go
    </button>
  </form>
  
        <button onClick={() => setIsMobileMenuOpen(true)}>
          <Menu size={28} />
        </button>
      </div>

      {/* Sidebar Overlay */}
      {isMobileMenuOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-40 z-40"
          onClick={() => setIsMobileMenuOpen(false)}
        />
      )}

      {/* Sidebar */}
      <div className={`fixed top-0 left-0 h-full w-64 bg-white shadow-lg z-50 transform transition-transform duration-300 ${isMobileMenuOpen ? "translate-x-0" : "-translate-x-full"}`}>
        <div className="flex items-center justify-between p-4 border-b">
          <div className="flex items-center gap-2">
            <User size={24} />
            <span onClick={() => {
              router.push('/login');
              window.scrollTo(0, 0);
              setIsMobileMenuOpen(false);
            }}
             className="text-sm text-gray-600">Log in <span className="text-black font-medium">| Register</span></span>
          </div>
          <button onClick={() => setIsMobileMenuOpen(false)} className="text-gray-600 text-lg">✕</button>
        </div>

        <ul className="space-y-4 text-sm p-4">
          <li  onClick={() => {
              router.push('/');
              window.scrollTo(0, 0);
              setIsMobileMenuOpen(false);
            }} 
            className="flex items-center gap-2"><Home size={18} />Home</li>
          <li onClick={() => {
              router.push('/listview');
              window.scrollTo(0, 0);
              setIsMobileMenuOpen(false);
            }} className="flex items-center gap-2"><List size={18} />Categories</li>
          <li  onClick={() => {
              router.push('/dashboard');
              window.scrollTo(0, 0);
              setIsMobileMenuOpen(false);
            }} className="flex items-center gap-2"><Heart size={18} />My Dashboard</li>
          <li  onClick={() => {
              router.push('/cart');
              window.scrollTo(0, 0);
              setIsMobileMenuOpen(false);
            }} className="flex items-center gap-2"><ShoppingBag size={18} />My orders</li>

          <hr className="my-2" />

          <li className="flex items-center gap-2"><Globe size={18} />English | USD</li>
          <li className="flex items-center gap-2"><Headphones size={18} />Contact us</li>
          <li className="flex items-center gap-2"><Building size={18} />About</li>

          <hr className="my-2" />

          <li>User agreement</li>
          <li>Partnership</li>
          <li>Privacy policy</li>
        </ul>
      </div>
    </nav>
  );
}