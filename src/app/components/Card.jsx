"use client";
import React from "react";
import Image from "next/image";

export default function Card({ titulo, descricao, imagem }) {
  return (
    <div className="bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden border border-gray-100 w-full max-w-xs mx-auto min-h-[420px] sm:min-h-[460px]">
      {imagem && (
        <div className="relative h-32 xs:h-36 sm:h-40 md:h-44 lg:h-48 w-full overflow-hidden">
          <Image 
            src={imagem} 
            alt={titulo || "Imagem do card"} 
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className="object-cover object-center hover:scale-105 transition-transform duration-300"
          />
        </div>
      )}
      <div className="p-3 sm:p-4 md:p-5 lg:p-6 flex flex-col h-full">
        <h3 className="text-sm sm:text-base md:text-lg lg:text-xl font-bold text-orange-600 mb-2 sm:mb-3 leading-tight">
          {titulo}
        </h3>
        <p className="text-xs sm:text-sm md:text-base text-gray-600 leading-relaxed flex-1">
          {descricao}
        </p>
      </div>
    </div>
  );
}
