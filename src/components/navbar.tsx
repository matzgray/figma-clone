"use client"
// components/Navbar.tsx
import { useState } from "react";
import { FiSearch, FiShoppingCart, FiUser } from "react-icons/fi";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";



const Navbar = () => {
  const [showTopBar, setShowTopBar] = useState(true);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleHideTopBar = () => {
    setShowTopBar(false);
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <>
      {/* Top Bar */}
      {showTopBar && (
        <div className="bg-black text-white text-center p-2 flex justify-between items-center">
          <p className="flex-grow text-center">Welcome! Sign up now for exclusive deals.</p>
          <button 
            onClick={handleHideTopBar}
            className="text-white px-4 py-1 hover:text-gray-400 hidden sm:block"
          >
            ✕
          </button>
          <button className="ml-auto bg-gold-500 text-black px-4 py-1 rounded hover:bg-gold-600">
            Sign Up Now
          </button>
        </div>
      )}

      {/* Main Navbar */}
      <nav className="bg-white shadow-md px-4 py-2 flex items-center justify-between">
        {/* Left Side - Hamburger & Logo */}
        <div className="flex items-center">
          <button
            onClick={toggleMobileMenu}
            className="lg:hidden text-black text-2xl mr-4"
          >
            {isMobileMenuOpen ? <AiOutlineClose /> : <AiOutlineMenu />}
          </button>
          <div className="text-black font-extrabold text-4xl pl-10">SHOP.CO</div>
        </div>

        {/* Center - Links & Search */}
        <div
          className={`absolute lg:static top-16 left-0 bg-white w-full lg:w-auto lg:flex lg:items-center lg:space-x-6 transform transition-transform ${isMobileMenuOpen ? "translate-x-0" : "-translate-x-full"
            } lg:translate-x-0`}
        >
          {/* Dropdown */}
          <div className="relative group px-4 py-2 lg:py-0">
            <button className="text-black font-semibold ">Shop </button>
            <div className="absolute left-0 mt-2 w-48 bg-white border border-gray-200 rounded shadow-md hidden group-hover:block">
              <a href="#" className="block px-4 py-2 hover:bg-gray-100">
                Mens Wear
              </a>
              <a href="#" className="block px-4 py-2 hover:bg-gray-100">
                Womens Wear
              </a>
              <a href="#" className="block px-4 py-2 hover:bg-gray-100">
                Accessories
              </a>
            </div>
          </div>



          {/* Other Links */}
          <div className="flex flex-col lg:flex-row lg:space-x-4 px-4 lg:px-0">
            <a href="#" className="hover:text-gray-600">Sale</a>
            <a href="#" className="hover:text-gray-600">New Arrivals</a>
            <a href="#" className="hover:text-gray-600">Brands</a>
          </div>
        </div>
        {/* Search Box */}
        <div className="hidden lg:flex items-center border border-gray-300 rounded-full w-[40%] h-[45px] overflow-hidden mx-6 bg-gray-200">

          <button className="px-3 bg-gray-200 text-2xl font-bold">
            <FiSearch className="text-gray-500" />
          </button>

          <input
            type="text"
            placeholder="Search for products"
            className="px-4 py-1 focus:outline-none w-full bg-gray-200"
          />

        </div>


        {/* Right Side - Cart & Login */}
        <div className="flex items-center space-x-4">
          <button className="flex items-center text-black hover:text-gray-600">
            <FiShoppingCart className="text-xl" />
          </button>
          <button className="flex items-center text-black hover:text-gray-600">
            <FiUser className="text-xl" />
          </button>

        </div>
      </nav>
    </>
  );
};

export default Navbar;