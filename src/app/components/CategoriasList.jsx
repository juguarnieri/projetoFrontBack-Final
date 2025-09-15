"use client";
import { useState } from "react";

export default function CategoriasList({ categorias = [] }) {
  const [hoveredCard, setHoveredCard] = useState(null);

  const categoriasArray = Array.isArray(categorias) ? categorias : [];
  
  console.log('🔍 CategoriasList recebeu:', categorias);
  console.log('🔍 É array?:', Array.isArray(categorias));
  console.log('🔍 Array processado:', categoriasArray);

  const handleCardClick = (categoria) => {
    console.log('Categoria selecionada:', categoria);
  };

  const cores = [
    { bg: 'bg-gradient-to-br from-blue-50 to-blue-100', border: 'border-blue-200', text: 'text-blue-700', hover: 'hover:border-blue-400' },
    { bg: 'bg-gradient-to-br from-green-50 to-green-100', border: 'border-green-200', text: 'text-green-700', hover: 'hover:border-green-400' },
    { bg: 'bg-gradient-to-br from-purple-50 to-purple-100', border: 'border-purple-200', text: 'text-purple-700', hover: 'hover:border-purple-400' },
    { bg: 'bg-gradient-to-br from-pink-50 to-pink-100', border: 'border-pink-200', text: 'text-pink-700', hover: 'hover:border-pink-400' },
    { bg: 'bg-gradient-to-br from-orange-50 to-orange-100', border: 'border-orange-200', text: 'text-orange-700', hover: 'hover:border-orange-400' },
    { bg: 'bg-gradient-to-br from-teal-50 to-teal-100', border: 'border-teal-200', text: 'text-teal-700', hover: 'hover:border-teal-400' },
    { bg: 'bg-gradient-to-br from-indigo-50 to-indigo-100', border: 'border-indigo-200', text: 'text-indigo-700', hover: 'hover:border-indigo-400' },
    { bg: 'bg-gradient-to-br from-red-50 to-red-100', border: 'border-red-200', text: 'text-red-700', hover: 'hover:border-red-400' },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
        {categoriasArray.length === 0 ? (
          <div className="col-span-full text-center py-12">
            <div className="text-6xl mb-4">📚</div>
            <p className="text-gray-500 text-xl">Nenhuma categoria encontrada.</p>
          </div>
        ) : (
          categoriasArray.map((categoria, index) => {
            const cor = cores[index % cores.length];
            return (
              <div
                key={categoria.id || index}
                className={`${cor.bg} ${cor.border} ${cor.hover} rounded-2xl border p-6 cursor-pointer transform transition-all duration-300 hover:scale-105 hover:shadow-xl hover:-translate-y-1 max-w-sm mx-auto w-full`}
                onClick={() => handleCardClick(categoria)}
                onMouseEnter={() => setHoveredCard(categoria.id || index)}
                onMouseLeave={() => setHoveredCard(null)}
              >
                <div className="text-center mb-6">
                  <div className="text-5xl mb-4 transform transition-transform duration-300 hover:scale-110">
                    {categoria.icone || categoria.icon || '📚'}
                  </div>
                  <h3 className={`text-xl font-bold ${cor.text} mb-3 leading-tight`}>
                    {categoria.titulo || categoria.title || categoria.name || 'Categoria'}
                  </h3>
                </div>
                
                <p className="text-gray-600 text-sm leading-relaxed mb-6 line-clamp-3">
                  {categoria.descricao || categoria.description || 'Descrição da categoria'}
                </p>
                
                <div className="flex justify-between items-center pt-4 border-t border-gray-200 border-opacity-50">
                  <span className={`text-sm font-semibold ${cor.text}`}>
                    {categoria.artigos || categoria.articles_count || categoria.count || 0} artigos
                  </span>
                  <span className={`text-xs px-3 py-2 rounded-full ${cor.text} bg-white bg-opacity-70 transition-all duration-300 font-medium ${
                    hoveredCard === (categoria.id || index) ? 'bg-opacity-100 shadow-md transform scale-105' : ''
                  }`}>
                    Ver mais →
                  </span>
                </div>
              </div>
            );
          })
        )}
      </div>
    </div>
  );
}