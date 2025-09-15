"use client";
import React from "react";
import Image from "next/image";

export default function Card({ titulo, descricao, imagem }) {
  return (
    <div className="bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden border border-gray-100 w-full sm:w-56 md:w-64 lg:w-56 flex-shrink-0">
      {imagem && (
        <div className="relative h-48 w-full">
          <Image 
            src={imagem} 
            alt={titulo} 
            fill
            className="object-cover"
          />
        </div>
      )}
      <div className="p-4 sm:p-6">
        <h3 className="text-lg sm:text-xl font-bold text-orange-500 mb-2 sm:mb-3">{titulo}</h3>
        <p className="text-sm sm:text-base text-gray-600 leading-relaxed">{descricao}</p>
      </div>
    </div>
  );
}
