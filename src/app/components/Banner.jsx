import React from "react";

export default function Banner({ titulo, subtitulo, imagem, children }) {
  console.log('Banner recebeu:', { titulo, subtitulo, imagem });
  return (
    <section className="relative min-h-[250px] sm:min-h-[320px] md:min-h-[400px] lg:min-h-[500px] flex items-center justify-center overflow-hidden">
      {imagem ? (
        <div className="absolute inset-0">
          <img
            src={imagem}
            alt="Banner background"
            className="w-full h-full object-cover object-center"
            onError={(e) => {
              console.error('Erro ao carregar imagem do banner:', imagem);
              e.target.style.display = 'none';
            }}
          />
          <div
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{
              backgroundImage: `url('${imagem}')`,
              backgroundSize: 'cover',
              backgroundPosition: 'center center',
              display: 'none'
            }}
          ></div>
        </div>
      ) : (
        <div className="absolute inset-0 bg-gradient-to-r from-orange-400 to-teal-400"></div>
      )}
      
      <div className="relative z-10 text-center text-white px-4 sm:px-6 lg:px-8 w-full max-w-4xl mx-auto">
        <div className="backdrop-blur-md rounded-2xl p-4 sm:p-6 lg:p-8 mx-auto">
          {titulo && (
            <h1 className="text-lg sm:text-xl md:text-2xl lg:text-4xl xl:text-5xl font-bold mb-2 sm:mb-4 text-white drop-shadow-lg">
              {titulo}
            </h1>
          )}
          {subtitulo && (
            <p className="text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl leading-relaxed text-white drop-shadow-lg max-w-3xl mx-auto">
              {subtitulo}
            </p>
          )}
        </div>
        {children && (
          <div className="mt-3 sm:mt-4 md:mt-6">
            {children}
          </div>
        )}
      </div>
    </section>
  );
}
