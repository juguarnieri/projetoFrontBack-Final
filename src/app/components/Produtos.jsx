"use client";
import { useState, useEffect } from "react";
import axios from "axios";
import Image from "next/image";

export default function Produtos({ onDetalhes, searchTerm }) {
  const [produtos, setProdutos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Dados fallback caso o backend não funcione
  const produtosFallback = [
    {
      id: 1,
      title: "Ração Premium",
      description: "Ração de alta qualidade para cães adultos",
      price: 89.90,
      image: "https://images.unsplash.com/photo-1589924691995-400dc9ecc119?w=400&h=300&fit=crop",
      category: "Alimentação"
    },
    {
      id: 2,
      title: "Brinquedo Interativo",
      description: "Brinquedo que estimula a mente do seu pet",
      price: 29.90,
      image: "https://images.unsplash.com/photo-1601758228041-f3b2795255f1?w=400&h=300&fit=crop",
      category: "Brinquedos"
    },
    {
      id: 3,
      title: "Coleira Resistente",
      description: "Coleira durável e confortável",
      price: 45.90,
      image: "https://images.unsplash.com/photo-1583337130417-3346a1be7dee?w=400&h=300&fit=crop",
      category: "Acessórios"
    },
    {
      id: 4,
      title: "Shampoo Especial",
      description: "Shampoo hipoalergênico para cães sensíveis",
      price: 24.90,
      image: "https://images.unsplash.com/photo-1576201836106-db1758fd1c97?w=400&h=300&fit=crop",
      category: "Higiene"
    }
  ];

  useEffect(() => {
    const fetchProdutos = async () => {
      try {
        setLoading(true);
        const response = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/produtos`);
        
        if (response.data && response.data.data) {
          setProdutos(response.data.data);
        } else {
          setProdutos(response.data);
        }
        setError(null);
      } catch (err) {
        console.warn("Erro ao carregar produtos do backend, usando dados fallback:", err);
        setError("Conectando com dados locais - verifique se o backend está rodando");
        setProdutos(produtosFallback);
      } finally {
        setLoading(false);
      }
    };

    fetchProdutos();
  }, []);

  // Filtrar produtos baseado no termo de busca
  const produtosFiltrados = produtos.filter(produto =>
    produto.title?.toLowerCase().includes(searchTerm.toLowerCase()) ||
    produto.description?.toLowerCase().includes(searchTerm.toLowerCase()) ||
    produto.category?.toLowerCase().includes(searchTerm.toLowerCase())
  );

  if (loading) {
    return (
      <div className="flex justify-center items-center py-16">
        <div className="text-center">
          <div className="animate-spin rounded-full h-16 w-16 border-b-4 border-teal-400 mx-auto mb-6"></div>
          <p className="text-gray-600 text-lg">Carregando produtos do backend...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8">
      {error && (
        <div className="mb-6 p-4 bg-yellow-100 border border-yellow-300 text-yellow-800 rounded-lg max-w-md mx-auto text-center">
          ⚠️ {error}
        </div>
      )}
      
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold text-gray-800 mb-4">
          Nossos Produtos
        </h2>
        <p className="text-lg text-gray-600">
          {searchTerm ? `Resultados para: "${searchTerm}"` : "Produtos selecionados especialmente para seu pet"}
        </p>
      </div>

      {produtosFiltrados.length === 0 && searchTerm ? (
        <div className="text-center py-8">
          <p className="text-gray-500 text-lg">Nenhum produto encontrado para "{searchTerm}"</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {produtosFiltrados.map((produto) => (
            <div
              key={produto.id}
              className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow cursor-pointer"
              onClick={() => onDetalhes(produto)}
            >
              <div className="relative h-48">
                <Image
                  src={produto.image || produto.imagem || "/images/default-product.jpg"}
                  alt={produto.title || produto.nome}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                />
                {produto.category && (
                  <span className="absolute top-2 left-2 bg-teal-400 text-white px-2 py-1 text-xs rounded">
                    {produto.category}
                  </span>
                )}
              </div>
              
              <div className="p-4">
                <h3 className="font-bold text-lg text-gray-800 mb-2">
                  {produto.title || produto.nome}
                </h3>
                <p className="text-gray-600 text-sm mb-3 line-clamp-2">
                  {produto.description || produto.descricao}
                </p>
                
                <div className="flex justify-between items-center">
                  {produto.price && (
                    <span className="text-orange-500 font-bold text-lg">
                      R$ {produto.price.toFixed(2)}
                    </span>
                  )}
                  <button className="bg-teal-400 text-white px-4 py-2 rounded hover:bg-teal-500 transition-colors">
                    Ver Detalhes
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
