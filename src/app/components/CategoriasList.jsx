"use client";
import { useState } from "react";

export default function CategoriasList({ categorias = [], onDetalhes, searchTerm = "" }) {
  const [hoveredCard, setHoveredCard] = useState(null);

  const categoriasArray = Array.isArray(categorias) ? categorias : [];
  
  const categoriasFiltradas = categoriasArray.filter(categoria => {
    if (!searchTerm) return true;
    
    const titulo = categoria.titulo || categoria.title || categoria.name || '';
    const descricao = categoria.descricao || categoria.description || '';
    
    return titulo.toLowerCase().includes(searchTerm.toLowerCase()) ||
           descricao.toLowerCase().includes(searchTerm.toLowerCase());
  });
  
  const handleCardClick = (categoria) => {
    if (onDetalhes) {
      onDetalhes(categoria);
    }
  };

  const cores = [
    { bg: 'bg-white', border: 'border-orange-200', text: 'text-orange-600', hover: 'hover:border-orange-400 hover:shadow-orange-100', button: 'bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700' },
    { bg: 'bg-white', border: 'border-teal-200', text: 'text-teal-600', hover: 'hover:border-teal-400 hover:shadow-teal-100', button: 'bg-gradient-to-r from-teal-500 to-teal-600 hover:from-teal-600 hover:to-teal-700' },
    { bg: 'bg-white', border: 'border-orange-300', text: 'text-orange-700', hover: 'hover:border-orange-500 hover:shadow-orange-200', button: 'bg-gradient-to-r from-orange-600 to-orange-700 hover:from-orange-700 hover:to-orange-800' },
    { bg: 'bg-white', border: 'border-teal-300', text: 'text-teal-700', hover: 'hover:border-teal-500 hover:shadow-teal-200', button: 'bg-gradient-to-r from-teal-600 to-teal-700 hover:from-teal-700 hover:to-teal-800' },
    { bg: 'bg-white', border: 'border-orange-400', text: 'text-orange-800', hover: 'hover:border-orange-600 hover:shadow-orange-300', button: 'bg-gradient-to-r from-orange-700 to-orange-800 hover:from-orange-800 hover:to-orange-900' },
    { bg: 'bg-white', border: 'border-teal-400', text: 'text-teal-800', hover: 'hover:border-teal-600 hover:shadow-teal-300', button: 'bg-gradient-to-r from-teal-700 to-teal-800 hover:from-teal-800 hover:to-teal-900' },
    { bg: 'bg-white', border: 'border-orange-500', text: 'text-orange-900', hover: 'hover:border-orange-700 hover:shadow-orange-400', button: 'bg-gradient-to-r from-orange-800 to-orange-900 hover:from-orange-900 hover:to-red-600' },
    { bg: 'bg-white', border: 'border-teal-500', text: 'text-teal-900', hover: 'hover:border-teal-700 hover:shadow-teal-400', button: 'bg-gradient-to-r from-teal-800 to-teal-900 hover:from-teal-900 hover:to-cyan-600' },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {categoriasFiltradas.length === 0 ? (
        <div className="text-center py-8 sm:py-12 px-4">
          <div className="text-4xl sm:text-6xl mb-3 sm:mb-4">📚</div>
          <p className="text-gray-500 text-base sm:text-xl px-2">
            {searchTerm ? `Nenhuma categoria encontrada para "${searchTerm}".` : "Nenhuma categoria encontrada."}
          </p>
        </div>
      ) : (
        <div>
          <div className="grid grid-cols-1 min-[760px]:grid-cols-2 md:grid-cols-3 gap-3 sm:gap-4 lg:gap-6 justify-items-center mb-4 sm:mb-6 lg:mb-8 px-2 sm:px-0">
            {categoriasFiltradas.slice(0, 3).map((categoria, index) => {
              const cor = cores[index % cores.length];
              return (
                <div
                  key={categoria.id || index}
                  className={`${cor.bg} ${cor.border} ${cor.hover} rounded-lg sm:rounded-xl lg:rounded-2xl border-2 p-3 sm:p-4 lg:p-6 cursor-pointer transform transition-all duration-300 hover:scale-105 hover:shadow-xl hover:-translate-y-1 w-full max-w-xs sm:max-w-sm min-h-[280px] sm:min-h-[320px] lg:min-h-[380px] flex flex-col`}
                  onClick={() => handleCardClick(categoria)}
                  onMouseEnter={() => setHoveredCard(categoria.id || index)}
                  onMouseLeave={() => setHoveredCard(null)}
                >
                  <div className="flex justify-center mb-2 sm:mb-3 lg:mb-6 flex-shrink-0">
                    <div className="relative w-20 h-20 sm:w-28 sm:h-28 md:w-32 md:h-32 lg:w-40 lg:h-40 overflow-hidden rounded-lg sm:rounded-xl shadow-lg border-2 border-gray-200 bg-white">
                      <img
                        src={`${process.env.NEXT_PUBLIC_API_URL}/uploads/${categoria.image_url}`}
                        alt={categoria.name || categoria.titulo || categoria.title || 'Categoria'}
                        className="w-full h-full object-cover object-center hover:scale-110 transition-transform duration-300"
                        onError={(e) => {
                          e.target.src = '/images/banner.png';
                        }}
                      />
                    </div>
                  </div>
                  <div className="flex flex-col flex-1 text-center">
                    <h3 className={`text-sm sm:text-lg lg:text-xl font-bold ${cor.text} mb-2 sm:mb-3 leading-tight line-clamp-2 flex-shrink-0 px-1`}>
                      {categoria.titulo || categoria.title || categoria.name || 'Categoria'}
                    </h3>
                    <p className="text-gray-600 text-xs sm:text-sm lg:text-base leading-relaxed mb-2 sm:mb-4 lg:mb-6 line-clamp-3 flex-1 px-1">
                      {categoria.descricao || categoria.description || 'Descrição da categoria'}
                    </p>
                    <div className="flex justify-center items-center mt-auto">
                      <button className={`text-xs sm:text-sm lg:text-base px-3 sm:px-4 lg:px-8 py-2 sm:py-2.5 lg:py-4 rounded-full text-white ${cor.button} transition-all duration-300 font-semibold cursor-pointer shadow-lg hover:shadow-xl ${
                        hoveredCard === (categoria.id || index) ? 'transform scale-105' : ''
                      }`}>
                        Ver mais →
                      </button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
          
          <div className="grid grid-cols-1 min-[760px]:grid-cols-2 md:grid-cols-3 gap-3 sm:gap-4 lg:gap-6 justify-items-center px-2 sm:px-0">
            {categoriasFiltradas.slice(3, 6).map((categoria, index) => {
              const cor = cores[(index + 3) % cores.length];
              return (
                <div
                  key={categoria.id || (index + 3)}
                  className={`${cor.bg} ${cor.border} ${cor.hover} rounded-lg sm:rounded-xl lg:rounded-2xl border-2 p-3 sm:p-4 lg:p-6 cursor-pointer transform transition-all duration-300 hover:scale-105 hover:shadow-xl hover:-translate-y-1 w-full max-w-xs sm:max-w-sm min-h-[280px] sm:min-h-[320px] lg:min-h-[380px] flex flex-col`}
                  onClick={() => handleCardClick(categoria)}
                  onMouseEnter={() => setHoveredCard(categoria.id || (index + 3))}
                  onMouseLeave={() => setHoveredCard(null)}
                >
                  <div className="flex justify-center mb-2 sm:mb-3 lg:mb-6 flex-shrink-0">
                    <div className="relative w-20 h-20 sm:w-28 sm:h-28 md:w-32 md:h-32 lg:w-40 lg:h-40 overflow-hidden rounded-lg sm:rounded-xl shadow-lg border-2 border-gray-200 bg-white">
                      <img
                        src={`${process.env.NEXT_PUBLIC_API_URL}/uploads/${categoria.image_url}`}
                        alt={categoria.name || categoria.titulo || categoria.title || 'Categoria'}
                        className="w-full h-full object-cover object-center hover:scale-110 transition-transform duration-300"
                        onError={(e) => {
                          e.target.src = '/images/banner.png';
                        }}
                      />
                    </div>
                  </div>
                  <div className="flex flex-col flex-1 text-center">
                    <h3 className={`text-sm sm:text-lg lg:text-xl font-bold ${cor.text} mb-2 sm:mb-3 leading-tight line-clamp-2 flex-shrink-0 px-1`}>
                      {categoria.titulo || categoria.title || categoria.name || 'Categoria'}
                    </h3>
                    <p className="text-gray-600 text-xs sm:text-sm lg:text-base leading-relaxed mb-2 sm:mb-4 lg:mb-6 line-clamp-3 flex-1 px-1">
                      {categoria.descricao || categoria.description || 'Descrição da categoria'}
                    </p>
                    <div className="flex justify-center items-center mt-auto">
                      <button className={`text-xs sm:text-sm lg:text-base px-3 sm:px-4 lg:px-8 py-2 sm:py-2.5 lg:py-4 rounded-full text-white ${cor.button} transition-all duration-300 font-semibold cursor-pointer shadow-lg hover:shadow-xl ${
                        hoveredCard === (categoria.id || (index + 3)) ? 'transform scale-105' : ''
                      }`}>
                        Ver mais →
                      </button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
}