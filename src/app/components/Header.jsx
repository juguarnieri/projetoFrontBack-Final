import React from "react";
import Link from "next/link";

export default function Header() {
  return (
    <header className="bg-teal-400 shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center space-x-3">
            <span className="text-3xl">🦴</span>
            <h2 className="text-white text-xl font-bold">
              DogCare - Guia de Cuidados Caninos
            </h2>
          </div>
          <nav className="hidden md:flex space-x-8">
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
        </div>
      </div>
    </header>
  );
}
