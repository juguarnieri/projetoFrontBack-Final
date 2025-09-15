import React from "react";
import Image from "next/image";

export default function Banner({ titulo, subtitulo, imagem, children }) {
  return (
    <section className="relative h-64 sm:h-80 md:h-96 lg:h-[500px] flex items-center justify-center overflow-hidden bg-gradient-to-r from-teal-400 to-teal-600">
      {imagem && (
        <div className="absolute inset-0 z-0">
          <Image 
            src={imagem} 
            alt={titulo || "Banner"} 
            fill
            className="object-cover w-full h-full"
            priority
            sizes="100vw"
            onError={(e) => {
              e.target.style.display = 'none';
            }}
          />
          <div className="absolute inset-0 bg-black bg-opacity-40"></div>
        </div>
      )}
      
      <div className="relative z-10 text-center text-white px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
        {titulo && (
          <h1 className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 drop-shadow-lg">
            {titulo}
          </h1>
        )}
        {subtitulo && (
          <p className="text-sm sm:text-lg md:text-xl lg:text-2xl leading-relaxed opacity-90 drop-shadow-md">
            {subtitulo}
          </p>
        )}
        {children && (
          <div className="mt-6 md:mt-8">
            {children}
          </div>
        )}
      </div>
    </section>
  );
}
