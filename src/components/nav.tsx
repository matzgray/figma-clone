"use client"
import React, { useState } from 'react';
import { IoMdSearch } from "react-icons/io";
import { CiShoppingCart } from "react-icons/ci";
import { MdOutlinePerson } from "react-icons/md";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai"; // Hamburger icons
import Link from 'next/link';

const Nav = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className='flex justify-between items-center flex-wrap p-4'>
      {/* Logo Section */}
      <div>
        <h1 className='font-bold text-[24px]'>Bandage</h1>
      </div>

      {/* Left Side Icons and Hamburger */}
      <div className="flex items-center lg:hidden">
        <a className="text-2xl mr-4 hover:text-gray-900">
          <IoMdSearch />
        </a>
        <a className="text-2xl mr-4 hover:text-gray-900">
          <CiShoppingCart />
        </a>
        <button onClick={toggleMenu} className="text-2xl">
          {menuOpen ? <AiOutlineClose /> : <AiOutlineMenu />}
        </button>
      </div>

      {/* Navigation Links */}
      <nav
        className={`${
          menuOpen ? 'flex' : 'hidden'
        } lg:flex flex-col lg:flex-row lg:gap-4 absolute lg:static top-16 left-0 lg:top-0 bg-white lg:bg-transparent w-full lg:w-auto z-10 shadow-lg lg:shadow-none`}
      >
        <Link href="./" className="hover:text-gray-900 py-2 px-4 lg:py-0 text-center">Home</Link>
        <Link href="./shop" className="hover:text-gray-900 py-2 px-4 lg:py-0 text-center">Shop</Link>
        <Link href="./about" className="hover:text-gray-900 py-2 px-4 lg:py-0 text-center">About</Link>
        <Link href="./blog" className="hover:text-gray-900 py-2 px-4 lg:py-0 text-center">Blog</Link>
        <Link href="./contact" className="hover:text-gray-900 py-2 px-4 lg:py-0 text-center">Contact</Link>
        <Link href="./pages" className="hover:text-gray-900 py-2 px-4 lg:py-0 text-center">Pages</Link>
      </nav>

      {/* Action Icons */}
      <div className="hidden lg:flex items-center gap-4 text-blue-500">
        <a className="flex items-center gap-2 text-lg">
          <MdOutlinePerson />
         
        </a>
        <a className="hover:text-gray-900 text-lg"><IoMdSearch /></a>
        <a className="hover:text-gray-900 text-lg"><CiShoppingCart /></a>
        
      </div>
    </div>
  );
};

export default Nav;