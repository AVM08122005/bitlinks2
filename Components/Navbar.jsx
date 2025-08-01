"use client";
import React, { useState } from "react";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  const handleCancel = () => {
    if(isOpen){
      toggleMenu();
    }
  }
  

  return (
    <nav className="bg-purple-700 text-white px-6 py-4 flex justify-between items-center">
      {/* Logo */}
      <div className="text-2xl font-bold">
        <Link href="/">BitLinks</Link>
      </div>

      {/* Hamburger Menu - visible on small screens */}
      <div
        className="md:hidden text-white text-2xl cursor-pointer"
        onClick={toggleMenu}
      >
        <FontAwesomeIcon icon={isOpen ? faTimes : faBars} />
      </div>

      {/* Nav Items */}
      <ul
        className={`md:flex md:items-center md:gap-6 gap-4 absolute md:static bg-purple-700 left-0 w-full md:w-auto md:py-0 py-4 px-6 md:px-0 top-16 transition-all duration-300 ease-in-out ${
          isOpen ? "block" : "hidden"
        }`}
      >
        <li className="my-2 md:my-0" onClick={handleCancel}>
          <Link href="/">Home</Link>
        </li>
        <li className="my-2 md:my-0" onClick={handleCancel}>
          <Link href="/about">About</Link>
        </li>
        <li className="my-2 md:my-0" onClick={handleCancel}>
          <Link href="/contact">Contact Us</Link>
        </li>
        <li className="my-2 md:my-0" onClick={handleCancel}>
          <Link target="_blank" href="https://github.com/AVM08122005/bitlinks2">
            <button className="bg-white text-purple-700 px-3 py-1 rounded-md flex items-center">
              <FontAwesomeIcon icon={faGithub} className="mr-2 h-5" />
              Github
            </button>
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
