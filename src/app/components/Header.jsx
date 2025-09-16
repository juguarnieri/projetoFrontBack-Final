"use client";
import React, { useState } from "react";
import Link from "next/link";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <header className="bg-teal-400 shadow-lg relative z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">

          <div className="flex items-center space-x-2 md:space-x-3">
            <span className="text-2xl md:text-3xl">🦴</span>
            <h2 className="text-white text-sm sm:text-base md:text-xl font-bold">
              <span className="hidden sm:inline">DogCare - Cuidados Caninos </span>
              <span className="sm:hidden">DogCare</span>
            </h2>
          </div>

          {/* Menu Desktop */}
          <nav className="hidden md:flex space-x-6 lg:space-x-8">
            <Link href="/" className="text-white hover:text-orange-200 transition-colors duration-200 font-medium">
              Home
            </Link>
            <Link href="/listagem" className="text-white hover:text-orange-200 transition-colors duration-200 font-medium">
              Listagem
            </Link>
            <Link href="/sobre-mim" className="text-white hover:text-orange-200 transition-colors duration-200 font-medium">
              Sobre Mim
            </Link>
            <Link href="/quiz" className="text-white hover:text-orange-200 transition-colors duration-200 font-medium">
              Quiz
            </Link>
          </nav>

          {/* Botão Menu Hambúrguer - Mobile */}
          <button
            onClick={toggleMenu}
            className="md:hidden text-white hover:text-orange-200 transition-colors duration-200 p-2"
            aria-label="Menu"
          >
            <div className="w-6 h-6 flex flex-col justify-center space-y-1">
              <span className={`block h-0.5 w-full bg-current transform transition-transform duration-200 ${isMenuOpen ? 'rotate-45 translate-y-1.5' : ''}`}></span>
              <span className={`block h-0.5 w-full bg-current transition-opacity duration-200 ${isMenuOpen ? 'opacity-0' : ''}`}></span>
              <span className={`block h-0.5 w-full bg-current transform transition-transform duration-200 ${isMenuOpen ? '-rotate-45 -translate-y-1.5' : ''}`}></span>
            </div>
          </button>
        </div>

        {/* Menu Mobile - Dropdown */}
        <div className={`md:hidden transition-all duration-300 ease-in-out ${isMenuOpen ? 'max-h-64 opacity-100' : 'max-h-0 opacity-0'} overflow-hidden`}>
          <nav className="pb-4 pt-2 space-y-3">
            <Link 
              href="/" 
              className="block text-white hover:text-orange-200 transition-colors duration-200 font-medium py-2 px-4 rounded hover:bg-teal-500"
              onClick={closeMenu}
            >
              🏠 Home
            </Link>
            <Link 
              href="/listagem" 
              className="block text-white hover:text-orange-200 transition-colors duration-200 font-medium py-2 px-4 rounded hover:bg-teal-500"
              onClick={closeMenu}
            >
              📚 Listagem
            </Link>
            <Link 
              href="/sobre-mim" 
              className="block text-white hover:text-orange-200 transition-colors duration-200 font-medium py-2 px-4 rounded hover:bg-teal-500"
              onClick={closeMenu}
            >
              👩‍💻 Sobre Mim
            </Link>
            <Link 
              href="/quiz" 
              className="block text-white hover:text-orange-200 transition-colors duration-200 font-medium py-2 px-4 rounded hover:bg-teal-500"
              onClick={closeMenu}
            >
              🎯 Quiz
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
}
