import React from "react";

export default function Banner({ titulo, subtitulo, imagem, children }) {
  console.log('Banner recebeu imagem:', imagem);
  
  return (
    <section className="relative h-64 sm:h-80 md:h-96 lg:h-[500px] flex items-start justify-center overflow-hidden pt-16">
      {/* Imagem de fundo */}
      {imagem ? (
        <div
          className="absolute inset-0 bg-cover bg-top bg-no-repeat"
          style={{
            backgroundImage: `url('${imagem}')`,
          }}
        >
          {/* Removido overlay escuro */}
        </div>
      ) : (
        /* Fallback: gradiente se não houver imagem */
        <div className="absolute inset-0 bg-gradient-to-r from-teal-400 to-teal-600"></div>
      )}
      
      {/* Conteúdo do banner */}
      <div className="relative z-10 text-center text-teal-900 px-4 sm:px-6 lg:px-8 max-w-3xl mx-auto">
        <div className="backdrop-blur-sm rounded-2xl p-6">
          {titulo && (
            <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold mb-3 drop-shadow-2xl">
              {titulo}
            </h1>
          )}
          {subtitulo && (
            <p className="text-sm sm:text-base md:text-lg lg:text-xl leading-relaxed drop-shadow-2xl">
              {subtitulo}
            </p>
          )}
        </div>
        {children && (
          <div className="mt-4 md:mt-6">
            {children}
          </div>
        )}
      </div>
    </section>
  );
}
