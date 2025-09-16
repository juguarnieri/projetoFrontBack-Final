"use client";
import { useState } from "react";

export default function CategoriasList({ categorias = [], onDetalhes, searchTerm = "" }) {
  const [hoveredCard, setHoveredCard] = useState(null);

  const categoriasArray = Array.isArray(categorias) ? categorias : [];
  
  // Filtrar categorias por termo de busca
  const categoriasFiltradas = categoriasArray.filter(categoria => {
    if (!searchTerm) return true;
    
    const titulo = categoria.titulo || categoria.title || categoria.name || '';
    const descricao = categoria.descricao || categoria.description || '';
    
    return titulo.toLowerCase().includes(searchTerm.toLowerCase()) ||
           descricao.toLowerCase().includes(searchTerm.toLowerCase());
  });
  
  console.log('🔍 CategoriasList recebeu:', categorias);
  console.log('🔍 É array?:', Array.isArray(categorias));
  console.log('🔍 Array processado:', categoriasArray);
  console.log('🔍 Categorias filtradas:', categoriasFiltradas);

  const handleCardClick = (categoria) => {
    console.log('Categoria selecionada:', categoria);
    if (onDetalhes) {
      onDetalhes(categoria);
    }
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
      {categoriasFiltradas.length === 0 ? (
        <div className="text-center py-12">
          <div className="text-6xl mb-4">📚</div>
          <p className="text-gray-500 text-xl">
            {searchTerm ? `Nenhuma categoria encontrada para "${searchTerm}".` : "Nenhuma categoria encontrada."}
          </p>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3 justify-items-center">
          {categoriasFiltradas.map((categoria, index) => {
            const cor = cores[index % cores.length];
            return (
              <div
                key={categoria.id || index}
                className={`${cor.bg} ${cor.border} ${cor.hover} rounded-2xl border p-4 cursor-pointer transform transition-all duration-300 hover:scale-105 hover:shadow-xl hover:-translate-y-1 max-w-xs w-full`}
                onClick={() => handleCardClick(categoria)}
                onMouseEnter={() => setHoveredCard(categoria.id || index)}
                onMouseLeave={() => setHoveredCard(null)}
              >
                <div className="flex justify-center mb-3">
                  <img
                    src={`${process.env.NEXT_PUBLIC_API_URL}/uploads/${categoria.image_url}`}
                    alt={categoria.name || categoria.titulo || categoria.title || 'Categoria'}
                    className="w-32 h-32 object-cover rounded-xl shadow-lg border border-gray-200 bg-white"
                    style={{ backgroundColor: '#fff' }}
                  />
                </div>
                <h3 className={`text-lg font-bold ${cor.text} mb-2 text-center leading-tight`}>
                  {categoria.titulo || categoria.title || categoria.name || 'Categoria'}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed mb-4 text-center line-clamp-2">
                  {categoria.descricao || categoria.description || 'Descrição da categoria'}
                </p>
                <div className="flex justify-center items-center pt-2">
                  <span className={`text-xs px-4 py-2 rounded-full ${cor.text} bg-white bg-opacity-80 transition-all duration-300 font-medium cursor-pointer ${
                    hoveredCard === (categoria.id || index) ? 'bg-opacity-100 shadow-md transform scale-105' : ''
                  }`}>
                    Ver mais →
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}