"use client";
import { useState } from "react";

export default function SearchBar({ onSearch }) {
  const [searchValue, setSearchValue] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    onSearch(searchValue);
  };

  const handleChange = (e) => {
    const value = e.target.value;
    setSearchValue(value);
    onSearch(value); // Busca em tempo real
  };

  const handleClear = () => {
    setSearchValue("");
    onSearch("");
  };

  return (
    <div className="container mx-auto px-4 py-6">
      <form onSubmit={handleSubmit} className="max-w-md mx-auto">
        <div className="relative">
          <input
            type="text"
            value={searchValue}
            onChange={handleChange}
            placeholder="Buscar produtos..."
            className="w-full px-4 py-3 pl-10 pr-12 text-gray-700 bg-white border border-gray-300 rounded-lg focus:outline-none focus:border-teal-400 focus:ring-2 focus:ring-teal-100"
          />
          
          {/* Ícone de busca */}
          <div className="absolute inset-y-0 left-0 flex items-center pl-3">
            <svg
              className="w-5 h-5 text-gray-400"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
          </div>
          
          {/* Botão limpar */}
          {searchValue && (
            <button
              type="button"
              onClick={handleClear}
              className="absolute inset-y-0 right-0 flex items-center pr-3"
            >
              <svg
                className="w-5 h-5 text-gray-400 hover:text-gray-600"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          )}
        </div>
      </form>
    </div>
  );
}
